/* ============================================================================
 * BURN THE BOATS — data/verses.js
 * ----------------------------------------------------------------------------
 * 157 verses. Christian Scripture only. Themes: manhood, discipline/self-control,
 * endurance & finishing, courage, work & diligence, integrity, rising early /
 * time, strength through weakness.
 *
 * TRANSLATION — English Standard Version (ESV), used consistently throughout.
 * Every string below was fetched from the publisher-licensed text on Bible
 * Gateway (version=ESV) and machine-checked to be an EXACT substring of the
 * passage returned for its reference. Nothing here was typed from memory.
 * A random sample of 14 entries was additionally re-verified against esv.org,
 * an independent source, on 2026-07-25 — all 14 matched.
 * Entries carrying `p:1` are exact excerpts of a longer verse (a clean clause
 * lifted verbatim); all others are the complete verse.
 *
 * Scripture quotations are from the ESV Bible (The Holy Bible, English Standard
 * Version), copyright (c) 2001 by Crossway, a publishing ministry of Good News
 * Publishers. Used by permission. All rights reserved. (Personal, non-saleable
 * use; 157 verses is well inside Crossway's 500-verse permission limit.)
 *
 * Ordering is deliberate: themes round-robin, so consecutive days never land on
 * the same subject twice.
 *
 * Shape:  { r: reference, t: text, h: theme, p: 1 if excerpt }
 * API:    VERSES              the array
 *         dayFor(dateISO)     stable verse for a date (same date -> same verse)
 *         verseFor(dateISO)   alias of dayFor
 *         verseIndexFor(iso)  its index
 *         rollVerse(p)        the 65/35 coin for a single header view
 * ========================================================================== */
(function (root) {
  'use strict';

  var VERSES = [
{r:"1 Corinthians 16:13",t:"Be watchful, stand firm in the faith, act like men, be strong.",h:"manhood"},
{r:"Proverbs 25:28",t:"A man without self-control is like a city broken into and left without walls.",h:"discipline"},
{r:"2 Timothy 4:7",t:"I have fought the good fight, I have finished the race, I have kept the faith.",h:"endurance"},
{r:"Proverbs 28:1",t:"The wicked flee when no one pursues, but the righteous are bold as a lion.",h:"courage"},
{r:"Colossians 3:23",t:"Whatever you do, work heartily, as for the Lord and not for men,",h:"work"},
{r:"Proverbs 10:9",t:"Whoever walks in integrity walks securely, but he who makes his ways crooked will be found out.",h:"integrity"},
{r:"Psalm 5:3",t:"O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.",h:"time"},
{r:"2 Corinthians 12:9",t:"My grace is sufficient for you, for my power is made perfect in weakness.",h:"strength",p:1},
{r:"Proverbs 20:29",t:"The glory of young men is their strength, but the splendor of old men is their gray hair.",h:"manhood"},
{r:"1 Corinthians 9:26",t:"So I do not run aimlessly; I do not box as one beating the air.",h:"discipline"},
{r:"Proverbs 24:16",t:"for the righteous falls seven times and rises again, but the wicked stumble in times of calamity.",h:"endurance"},
{r:"Joshua 1:9",t:"Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",h:"courage",p:1},
{r:"2 Thessalonians 3:10",t:"If anyone is not willing to work, let him not eat.",h:"work",p:1},
{r:"Proverbs 11:3",t:"The integrity of the upright guides them, but the crookedness of the treacherous destroys them.",h:"integrity"},
{r:"Psalm 143:8",t:"Let me hear in the morning of your steadfast love, for in you I trust. Make me know the way I should go, for to you I lift up my soul.",h:"time"},
{r:"2 Corinthians 12:10",t:"For when I am weak, then I am strong.",h:"strength",p:1},
{r:"1 Kings 2:2",t:"Be strong, and show yourself a man",h:"manhood",p:1},
{r:"1 Corinthians 9:27",t:"But I discipline my body and keep it under control, lest after preaching to others I myself should be disqualified.",h:"discipline"},
{r:"Hebrews 10:36",t:"For you have need of endurance, so that when you have done the will of God you may receive what is promised.",h:"endurance"},
{r:"Deuteronomy 31:6",t:"Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.",h:"courage",p:1},
{r:"Proverbs 10:4",t:"A slack hand causes poverty, but the hand of the diligent makes rich.",h:"work"},
{r:"Luke 16:10",t:"One who is faithful in a very little is also faithful in much, and one who is dishonest in a very little is also dishonest in much.",h:"integrity",p:1},
{r:"Psalm 90:12",t:"So teach us to number our days that we may get a heart of wisdom.",h:"time"},
{r:"Philippians 4:13",t:"I can do all things through him who strengthens me.",h:"strength"},
{r:"1 Corinthians 16:14",t:"Let all that you do be done in love.",h:"manhood"},
{r:"2 Timothy 2:5",t:"An athlete is not crowned unless he competes according to the rules.",h:"discipline"},
{r:"Hebrews 12:3",t:"Consider him who endured from sinners such hostility against himself, so that you may not grow weary or fainthearted.",h:"endurance"},
{r:"Isaiah 41:10",t:"fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you",h:"courage",p:1},
{r:"Ecclesiastes 11:6",t:"In the morning sow your seed, and at evening withhold not your hand",h:"work",p:1},
{r:"Proverbs 20:7",t:"The righteous who walks in his integrity— blessed are his children after him!",h:"integrity"},
{r:"Psalm 39:4",t:"O LORD, make me know my end and what is the measure of my days; let me know how fleeting I am!",h:"time",p:1},
{r:"Isaiah 40:29",t:"He gives power to the faint, and to him who has no might he increases strength.",h:"strength"},
{r:"Judges 6:12",t:"The LORD is with you, O mighty man of valor.",h:"manhood",p:1},
{r:"1 Corinthians 9:25",t:"Every athlete exercises self-control in all things. They do it to receive a perishable wreath, but we an imperishable.",h:"discipline"},
{r:"Hebrews 12:1",t:"let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us",h:"endurance",p:1},
{r:"Psalm 27:1",t:"The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?",h:"courage"},
{r:"Proverbs 12:24",t:"The hand of the diligent will rule, while the slothful will be put to forced labor.",h:"work"},
{r:"Psalm 25:21",t:"May integrity and uprightness preserve me, for I wait for you.",h:"integrity"},
{r:"Ephesians 5:15",t:"Look carefully then how you walk, not as unwise but as wise,",h:"time"},
{r:"Psalm 28:7",t:"The LORD is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him.",h:"strength"},
{r:"2 Samuel 10:12",t:"Be of good courage, and let us be courageous for our people, and for the cities of our God, and may the LORD do what seems good to him.",h:"manhood",p:1},
{r:"Proverbs 16:32",t:"Whoever is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city.",h:"discipline"},
{r:"James 1:12",t:"Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life",h:"endurance",p:1},
{r:"Psalm 27:14",t:"Wait for the LORD; be strong, and let your heart take courage; wait for the LORD!",h:"courage"},
{r:"Proverbs 13:4",t:"The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.",h:"work"},
{r:"Proverbs 28:6",t:"Better is a poor man who walks in his integrity than a rich man who is crooked in his ways.",h:"integrity"},
{r:"Mark 1:35",t:"And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.",h:"time"},
{r:"Psalm 73:26",t:"My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",h:"strength"},
{r:"1 Corinthians 13:11",t:"When I was a child, I spoke like a child, I thought like a child, I reasoned like a child. When I became a man, I gave up childish ways.",h:"manhood"},
{r:"2 Timothy 1:7",t:"for God gave us a spirit not of fear but of power and love and self-control.",h:"discipline"},
{r:"James 1:4",t:"And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",h:"endurance"},
{r:"Psalm 31:24",t:"Be strong, and let your heart take courage, all you who wait for the LORD!",h:"courage"},
{r:"Proverbs 14:23",t:"In all toil there is profit, but mere talk tends only to poverty.",h:"work"},
{r:"Psalm 15:4",t:"who swears to his own hurt and does not change",h:"integrity",p:1},
{r:"Lamentations 3:23",t:"they are new every morning; great is your faithfulness.",h:"time"},
{r:"Psalm 84:7",t:"They go from strength to strength; each one appears before God in Zion.",h:"strength"},
{r:"Titus 2:6",t:"Likewise, urge the younger men to be self-controlled.",h:"manhood"},
{r:"Hebrews 12:11",t:"For the moment all discipline seems painful rather than pleasant, but later it yields the peaceful fruit of righteousness",h:"discipline",p:1},
{r:"Romans 5:3",t:"Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance,",h:"endurance"},
{r:"Joshua 1:6",t:"Be strong and courageous, for you shall cause this people to inherit the land that I swore to their fathers to give them.",h:"courage"},
{r:"Proverbs 16:3",t:"Commit your work to the LORD, and your plans will be established.",h:"work"},
{r:"Matthew 5:37",t:"Let what you say be simply ‘Yes’ or ‘No’; anything more than this comes from evil.",h:"integrity"},
{r:"Psalm 63:1",t:"O God, you are my God; earnestly I seek you; my soul thirsts for you; my flesh faints for you",h:"time",p:1},
{r:"Zechariah 4:6",t:"Not by might, nor by power, but by my Spirit, says the LORD of hosts.",h:"strength",p:1},
{r:"2 Timothy 2:3",t:"Share in suffering as a good soldier of Christ Jesus.",h:"manhood"},
{r:"1 Peter 5:8",t:"Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour.",h:"discipline"},
{r:"Philippians 3:13",t:"But one thing I do: forgetting what lies behind and straining forward to what lies ahead",h:"endurance",p:1},
{r:"1 Chronicles 28:20",t:"Be strong and courageous and do it. Do not be afraid and do not be dismayed",h:"courage",p:1},
{r:"Psalm 90:17",t:"Let the favor of the Lord our God be upon us, and establish the work of our hands upon us; yes, establish the work of our hands!",h:"work"},
{r:"Proverbs 12:22",t:"Lying lips are an abomination to the LORD, but those who act faithfully are his delight.",h:"integrity"},
{r:"James 4:14",t:"What is your life? For you are a mist that appears for a little time and then vanishes.",h:"time",p:1},
{r:"Psalm 18:32",t:"the God who equipped me with strength and made my way blameless.",h:"strength"},
{r:"2 Timothy 2:4",t:"No soldier gets entangled in civilian pursuits, since his aim is to please the one who enlisted him.",h:"manhood"},
{r:"1 Peter 2:11",t:"Beloved, I urge you as sojourners and exiles to abstain from the passions of the flesh, which wage war against your soul.",h:"discipline"},
{r:"Philippians 3:14",t:"I press on toward the goal for the prize of the upward call of God in Christ Jesus.",h:"endurance"},
{r:"Psalm 118:6",t:"The LORD is on my side; I will not fear. What can man do to me?",h:"courage"},
{r:"Proverbs 20:13",t:"Love not sleep, lest you come to poverty; open your eyes, and you will have plenty of bread.",h:"work"},
{r:"Job 27:5",t:"till I die I will not put away my integrity from me",h:"integrity",p:1},
{r:"Ephesians 5:16",t:"making the best use of the time, because the days are evil.",h:"time"},
{r:"Psalm 46:1",t:"God is our refuge and strength, a very present help in trouble.",h:"strength"},
{r:"Proverbs 27:17",t:"Iron sharpens iron, and one man sharpens another.",h:"manhood"},
{r:"Romans 6:12",t:"Let not sin therefore reign in your mortal body, to make you obey its passions.",h:"discipline"},
{r:"1 Corinthians 15:58",t:"be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.",h:"endurance",p:1},
{r:"Romans 8:31",t:"What then shall we say to these things? If God is for us, who can be against us?",h:"courage"},
{r:"Proverbs 21:5",t:"The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.",h:"work"},
{r:"2 Corinthians 8:21",t:"for we aim at what is honorable not only in the Lord's sight but also in the sight of man.",h:"integrity"},
{r:"Proverbs 27:1",t:"Do not boast about tomorrow, for you do not know what a day may bring.",h:"time"},
{r:"Nehemiah 8:10",t:"do not be grieved, for the joy of the LORD is your strength.",h:"strength",p:1},
{r:"Psalm 119:9",t:"How can a young man keep his way pure? By guarding it according to your word.",h:"manhood"},
{r:"Romans 13:14",t:"But put on the Lord Jesus Christ, and make no provision for the flesh, to gratify its desires.",h:"discipline"},
{r:"2 Thessalonians 3:13",t:"As for you, brothers, do not grow weary in doing good.",h:"endurance"},
{r:"2 Chronicles 15:7",t:"But you, take courage! Do not let your hands be weak, for your work shall be rewarded.",h:"courage",p:1},
{r:"Proverbs 22:29",t:"Do you see a man skillful in his work? He will stand before kings; he will not stand before obscure men.",h:"work"},
{r:"Psalm 24:4",t:"He who has clean hands and a pure heart, who does not lift up his soul to what is false and does not swear deceitfully.",h:"integrity"},
{r:"Isaiah 50:4",t:"Morning by morning he awakens; he awakens my ear to hear as those who are taught.",h:"time",p:1},
{r:"Habakkuk 3:19",t:"GOD, the Lord, is my strength; he makes my feet like the deer’s; he makes me tread on my high places.",h:"strength",p:1},
{r:"Micah 6:8",t:"what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?",h:"manhood",p:1},
{r:"1 Corinthians 6:12",t:"“All things are lawful for me,” but I will not be dominated by anything.",h:"discipline",p:1},
{r:"Isaiah 40:31",t:"they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",h:"endurance",p:1},
{r:"Ezra 10:4",t:"Arise, for it is your task, and we are with you; be strong and do it.",h:"courage",p:1},
{r:"Proverbs 27:23",t:"Know well the condition of your flocks, and give attention to your herds,",h:"work"},
{r:"Proverbs 11:1",t:"A false balance is an abomination to the LORD, but a just weight is his delight.",h:"integrity"},
{r:"Psalm 130:6",t:"my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning.",h:"time"},
{r:"Isaiah 40:30",t:"Even youths shall faint and be weary, and young men shall fall exhausted;",h:"strength"},
{r:"1 Timothy 6:11",t:"But as for you, O man of God, flee these things. Pursue righteousness, godliness, faith, love, steadfastness, gentleness.",h:"manhood"},
{r:"1 Corinthians 10:13",t:"God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape",h:"discipline",p:1},
{r:"Luke 9:62",t:"No one who puts his hand to the plow and looks back is fit for the kingdom of God.",h:"endurance",p:1},
{r:"Haggai 2:4",t:"Be strong, all you people of the land, declares the LORD. Work, for I am with you",h:"courage",p:1},
{r:"Proverbs 6:6",t:"Go to the ant, O sluggard; consider her ways, and be wise.",h:"work"},
{r:"1 Corinthians 4:2",t:"Moreover, it is required of stewards that they be found faithful.",h:"integrity"},
{r:"Proverbs 8:17",t:"I love those who love me, and those who seek me diligently find me.",h:"time"},
{r:"Philippians 4:12",t:"I know how to be brought low, and I know how to abound.",h:"strength",p:1},
{r:"1 Timothy 6:12",t:"Fight the good fight of the faith.",h:"manhood",p:1},
{r:"Galatians 5:24",t:"And those who belong to Christ Jesus have crucified the flesh with its passions and desires.",h:"discipline"},
{r:"Revelation 2:10",t:"Be faithful unto death, and I will give you the crown of life.",h:"endurance",p:1},
{r:"Nehemiah 6:3",t:"I am doing a great work and I cannot come down. Why should the work stop while I leave it and come down to you?",h:"courage",p:1},
{r:"Proverbs 6:9",t:"How long will you lie there, O sluggard? When will you arise from your sleep?",h:"work"},
{r:"Romans 12:11",t:"Do not be slothful in zeal, be fervent in spirit, serve the Lord.",h:"integrity"},
{r:"2 Corinthians 4:7",t:"But we have this treasure in jars of clay, to show that the surpassing power belongs to God and not to us.",h:"strength"},
{r:"Psalm 112:1",t:"Praise the LORD! Blessed is the man who fears the LORD, who greatly delights in his commandments!",h:"manhood"},
{r:"1 Thessalonians 5:6",t:"So then let us not sleep, as others do, but let us keep awake and be sober.",h:"discipline"},
{r:"2 Corinthians 4:16",t:"So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day.",h:"endurance"},
{r:"Psalm 138:3",t:"On the day I called, you answered me; my strength of soul you increased.",h:"courage"},
{r:"Ecclesiastes 11:4",t:"He who observes the wind will not sow, and he who regards the clouds will not reap.",h:"work"},
{r:"Proverbs 22:1",t:"A good name is to be chosen rather than great riches, and favor is better than silver or gold.",h:"integrity"},
{r:"Psalm 112:5",t:"It is well with the man who deals generously and lends; who conducts his affairs with justice.",h:"manhood"},
{r:"Proverbs 12:1",t:"Whoever loves discipline loves knowledge, but he who hates reproof is stupid.",h:"discipline"},
{r:"Romans 12:12",t:"Rejoice in hope, be patient in tribulation, be constant in prayer.",h:"endurance"},
{r:"John 16:33",t:"In the world you will have tribulation. But take heart; I have overcome the world.",h:"courage",p:1},
{r:"Proverbs 12:11",t:"Whoever works his land will have plenty of bread, but he who follows worthless pursuits lacks sense.",h:"work"},
{r:"Ephesians 6:10",t:"Finally, be strong in the Lord and in the strength of his might.",h:"manhood"},
{r:"Job 31:1",t:"I have made a covenant with my eyes",h:"discipline",p:1},
{r:"Ecclesiastes 9:10",t:"Whatever your hand finds to do, do it with your might",h:"endurance",p:1},
{r:"Psalm 56:3",t:"When I am afraid, I put my trust in you.",h:"courage"},
{r:"Proverbs 18:9",t:"Whoever is slack in his work is a brother to him who destroys.",h:"work"},
{r:"Joel 3:10",t:"let the weak say, “I am a warrior.”",h:"manhood",p:1},
{r:"Psalm 101:3",t:"I will not set before my eyes anything that is worthless. I hate the work of those who fall away; it shall not cling to me.",h:"discipline"},
{r:"Matthew 24:13",t:"But the one who endures to the end will be saved.",h:"endurance"},
{r:"Romans 8:37",t:"No, in all these things we are more than conquerors through him who loved us.",h:"courage"},
{r:"Proverbs 16:9",t:"The heart of man plans his way, but the LORD establishes his steps.",h:"work"},
{r:"1 Timothy 4:12",t:"Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.",h:"manhood"},
{r:"Matthew 26:41",t:"Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.",h:"discipline",p:1},
{r:"Galatians 6:9",t:"And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",h:"endurance"},
{r:"Proverbs 21:25",t:"The desire of the sluggard kills him, for his hands refuse to labor.",h:"work"},
{r:"2 Corinthians 10:5",t:"take every thought captive to obey Christ",h:"discipline",p:1},
{r:"Proverbs 24:10",t:"If you faint in the day of adversity, your strength is small.",h:"endurance"},
{r:"Genesis 2:15",t:"The LORD God took the man and put him in the garden of Eden to work it and keep it.",h:"work"},
{r:"Proverbs 4:23",t:"Keep your heart with all vigilance, for from it flow the springs of life.",h:"discipline"},
{r:"Psalm 37:24",t:"though he fall, he shall not be cast headlong, for the LORD upholds his hand.",h:"endurance"},
{r:"Nehemiah 4:6",t:"So we built the wall. And all the wall was joined together to half its height, for the people had a mind to work.",h:"work"},
{r:"Proverbs 4:25",t:"Let your eyes look directly forward, and your gaze be straight before you.",h:"discipline"},
{r:"Micah 7:8",t:"when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me",h:"endurance",p:1},
{r:"Proverbs 4:26",t:"Ponder the path of your feet; then all your ways will be sure.",h:"discipline"},
{r:"John 4:34",t:"My food is to do the will of him who sent me and to accomplish his work.",h:"endurance",p:1},
{r:"James 4:7",t:"Submit yourselves therefore to God. Resist the devil, and he will flee from you.",h:"discipline"},
{r:"John 17:4",t:"I glorified you on earth, having accomplished the work that you gave me to do.",h:"endurance"},
{r:"James 1:14",t:"But each person is tempted when he is lured and enticed by his own desire.",h:"discipline"}
  ];

  /* Day 1 of the run. Index walks forward one per calendar day from here, so the
     verse for a date never changes and the list only wraps after 157 days. */
  var ANCHOR = '2026-07-27';

  function dayNumber(iso) {
    var a = ANCHOR.split('-'), b = String(iso || '').split('-');
    if (b.length !== 3) return 0;
    var t0 = Date.UTC(+a[0], +a[1] - 1, +a[2]);
    var t1 = Date.UTC(+b[0], +b[1] - 1, +b[2]);
    return Math.round((t1 - t0) / 86400000);
  }

  function verseIndexFor(iso) {
    var n = dayNumber(iso) % VERSES.length;
    return (n + VERSES.length) % VERSES.length;   /* safe for dates before ANCHOR */
  }

  function verseFor(iso) { return VERSES[verseIndexFor(iso)]; }

  /* The boats line is the identity: it holds roughly 65% of header views and the
     verse takes the other ~35%. This is per VIEW, not per day — on a verse day he
     still sees THE BOATS HAVE BEEN BURNED, it just burns away partway through. */
  function rollVerse(p) { return Math.random() < (p == null ? 0.35 : p); }

  var api = { VERSES: VERSES, dayFor: verseFor, verseFor: verseFor, verseIndexFor: verseIndexFor,
              dayNumber: dayNumber, rollVerse: rollVerse, ANCHOR: ANCHOR,
              TRANSLATION: 'ESV' };

  for (var k in api) if (api.hasOwnProperty(k)) root[k] = api[k];
  root.BTB_VERSES = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
