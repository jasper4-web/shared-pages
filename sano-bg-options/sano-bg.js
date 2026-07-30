/* =====================================================================
   SANO moving background — the sano-beta-landing hero field, ported off three.js.

   Same GLSL as `~/Documents/sano-beta-landing-v2.html` (mosaic-quantised
   expanding ring field with an RGB phase split), rendered by ~2KB of vanilla
   WebGL1 instead of 529KB / 134KB-gzipped of three.js r89. three.js was doing
   nothing here but handing a fullscreen quad to the fragment shader.

   Mount:  <div id="sano-bg" data-mode="dark|light"></div>
           The div keeps a static CSS background, so if WebGL is missing or the
           context is lost, the page degrades to that instead of going black.

   Five guards the original did not have:
     1. prefers-reduced-motion: reduce -> one static frame, no rAF at all.
     2. no WebGL / context lost        -> bail out, leave the CSS fallback up.
     3. devicePixelRatio capped at 1.5 -> a DPR-3 phone does ~4x less fragment
                                          work; the original used the full DPR.
     4. time from elapsed ms           -> the original added a fixed 0.034 per
                                          FRAME, so it ran twice as fast on a
                                          120Hz display as on a 60Hz one.
     5. IntersectionObserver + visibilitychange -> zero work off-screen or in a
                                          background tab (the original only
                                          handled document.hidden).
   ===================================================================== */
(function () {
  var host = document.getElementById('sano-bg');
  if (!host) return;

  var mode = host.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DPR_CAP = 1.5;

  var cv = document.createElement('canvas');
  cv.setAttribute('aria-hidden', 'true');
  var opts = { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'low-power' };
  var gl = cv.getContext('webgl', opts) || cv.getContext('experimental-webgl', opts);
  if (!gl) return;                      // CSS fallback on #sano-bg stays visible

  var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}';

  /* The ring accumulator. The original nested j (channel) inside i (ring) and
     wrote into color[j] — a dynamic vector index. Lifting the channel out into
     a phase argument is arithmetically identical (phase = 0.01 * j) and avoids
     dynamic indexing, which not every GLSL ES 1.0 driver compiles. */
  var FS_HEAD = [
    'precision highp float;',
    'uniform vec2 resolution;',
    'uniform float time;',
    'float random(in float x){return fract(sin(x)*1e4);}',
    'float rings(float t,float ph,vec2 uv){',
    '  float w=0.0006;float s=0.0;',
    '  for(int i=0;i<5;i++){',
    '    s+=w*float(i*i)/abs(fract(t-ph+float(i)*0.01)-length(uv));',
    '  }',
    '  return s;',
    '}',
    'void main(void){',
    '  vec2 uv=(gl_FragCoord.xy*2.0-resolution.xy)/min(resolution.x,resolution.y);',
    '  vec2 fMosaicScal=vec2(2.5,1.2);',
    '  vec2 vScreenSize=vec2(640.0,480.0);',
    '  uv.x=floor(uv.x*vScreenSize.x/fMosaicScal.x)/(vScreenSize.x/fMosaicScal.x);',
    '  uv.y=floor(uv.y*vScreenSize.y/fMosaicScal.y)/(vScreenSize.y/fMosaicScal.y);',
    '  float t=time*0.06+random(uv.x)*0.4;',
    '  vec3 c=pow(vec3(rings(t,0.0,uv),rings(t,0.01,uv),rings(t,0.02,uv)),vec3(1.1));'
  ].join('\n');

  /* dark = the beta landing's own output (channels swapped, so the field reads
     cyan-blue on black). light = the same field used as a tint on Warm Vanilla,
     clamped well below the point where it would fight text contrast — additive
     glow does not exist on a light page, so the ink has to be subtractive. */
  var FS_OUT = mode === 'dark'
    ? '  gl_FragColor=vec4(c[2],c[1],c[0],1.0);\n}'
    : [
        '  float v=clamp((c.r+c.g+c.b)*0.40,0.0,0.30);',
        '  vec3 paper=vec3(0.961,0.941,0.910);',
        '  vec3 blue=vec3(0.0,0.35,0.86);',
        '  gl_FragColor=vec4(mix(paper,blue,v),1.0);',
        '}'
      ].join('\n');

  function compile(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      if (window.console) console.error('sano-bg: ' + gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  var vs = compile(gl.VERTEX_SHADER, VS);
  var fs = compile(gl.FRAGMENT_SHADER, FS_HEAD + '\n' + FS_OUT);
  if (!vs || !fs) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  var uTime = gl.getUniformLocation(prog, 'time');
  var uRes = gl.getUniformLocation(prog, 'resolution');

  cv.style.cssText = 'display:block;width:100%;height:100%';
  host.appendChild(cv);

  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    var w = Math.max(1, Math.round(host.clientWidth * dpr));
    var h = Math.max(1, Math.round(host.clientHeight * dpr));
    if (cv.width === w && cv.height === h) return;
    cv.width = w; cv.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
  }

  function draw(tSec) {
    gl.uniform1f(uTime, 1.0 + tSec * 2.04);   // 0.034/frame x 60fps, made real-time
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  size();
  window.addEventListener('resize', function () { size(); if (!running) draw(last); }, false);

  if (reduce) { draw(6); return; }          // one frame, mid-field, then stop

  var id = null, running = false, last = 0, t0 = null, visible = true;

  function step(now) {
    if (t0 === null) t0 = now - last * 1000;   // resume where it paused
    last = (now - t0) / 1000;
    draw(last);
    id = requestAnimationFrame(step);
  }
  function start() {
    if (running || !visible || document.hidden) return;
    running = true; t0 = null;
    id = requestAnimationFrame(step);
  }
  function stop() {
    if (!running) return;
    running = false;
    if (id) cancelAnimationFrame(id);
    id = null;
  }

  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  cv.addEventListener('webglcontextlost', function (e) { e.preventDefault(); stop(); }, false);

  if (window.IntersectionObserver) {
    new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0 }).observe(host);   // fires on observe, which starts it
  } else {
    start();
  }
})();
