/* ============================================================
   AVRS AUTOMOTIVE — knowledge base for the SANO assistant.
   Client-specific. Pairs with the generic engine in sano-bot.js.

   EVERY factual claim here must match PITCH-KIT.md and README.md.
   If the offer changes, this file changes in the same commit.
   Locked facts: $1 first 3 months -> $249/mo - cancel anytime,
   no contract - setup waived in trade for 3 phone videos -
   seven tools, ONE package - his (936) number is untouched -
   2-3 weeks (say 3.5) - A2P carrier registration is the long pole.
   ============================================================ */
window.SANO_BOT_CONFIG = {
  title: 'SANO Assistant',
  subtitle: 'answers about your deal',
  avatar: 'S',
  launchLabel: 'Ask about the deal',
  revealAfter: '.stage',   /* stay hidden until past the hero demo */
  placeholder: 'Ask me anything about it…',
  greeting: "Hey Anthony — ask me anything about this: the price, what you'd have to do, how your phone works, what happens if you don't like it. I'll give you straight answers. Anything I can't answer, Jasper will.",

  escalate: { chip: '💬 Text Jasper', href: 'sms:+18323962496' },

  clarify: "Want to make sure I answer the right thing — which one do you mean?",

  fallbacks: [
    "That one I'd rather not guess at — text Jasper at <b>(832) 396-2496</b> and he'll answer it straight. Meanwhile, here's what I do know:",
    "Honestly, not sure on that one, and I'd rather say so than make something up. Jasper's at <b>(832) 396-2496</b>. I can cover these though:",
    "That's outside what I've got. Text Jasper — <b>(832) 396-2496</b> — he'll give it to you straight. Or try one of these:"
  ],

  /* what a mechanic types -> KB vocabulary */
  synonyms: {
    cost: 'price', costs: 'price', pricing: 'price', charge: 'price', expensive: 'price',
    cheap: 'price', afford: 'price', money: 'price', fee: 'price', bill: 'price', damage: 'price',
    quit: 'cancel', stop: 'cancel', leave: 'cancel', out: 'cancel', refund: 'cancel',
    cell: 'phone', mobile: 'phone', line: 'phone', number: 'phone',
    txt: 'text', texting: 'text', message: 'text', sms: 'text',
    appointment: 'booking', schedule: 'booking', calendar: 'booking', book: 'booking',
    google: 'review', stars: 'review', rating: 'review', reviews: 'review',
    customer: 'client', customers: 'client', people: 'client',
    setup: 'install', install: 'setup', onboard: 'setup',
    safe: 'security', private: 'security', secure: 'security', hacked: 'security',
    robot: 'automated', automatic: 'automated', bot: 'automated', ai: 'automated',
    helper: 'staff', employee: 'staff', wife: 'staff', partner: 'staff', tech: 'staff',
    truck: 'van', vehicle: 'van',
    work: 'working', works: 'working'
  },

  ambient: 'customer client customers text texts phone number app month monthly ' +
           'business job jobs service services system people thing week day time',

  starters: ['price', 'whatido', 'timeline', 'cancel'],
  popular: ['price', 'whatido', 'tools', 'phone_number', 'cancel', 'timeline', 'proof'],

  kb: [
    /* ---------------- THE DEAL ---------------- */
    {
      id: 'price', chip: "What's it cost?", q: 'how much is it price cost monthly',
      phrases: ['how much', 'what does it cost', 'what is the price', 'how much is it',
                 'the deal', 'run me', 'the damage', 'a subscription'],
      keys: 'price dollar 249 total pay paying payment cheap expensive worth deal rate subscription damage',
      a: "<b>$1 total for your first 3 months.</b> Not a dollar a month — a dollar, once, card on file so it's a real account and not a favor.<br><br>After that it's <b>$249/month, cancel anytime, no contract.</b> That's the real price and I'm telling you now so there's no surprise at month four.<br><br>Setup fee is <b>waived permanently</b> — normally that's the big up-front line, and you're not paying it.",
      next: ['catch', 'month4', 'videos', 'cancel']
    },
    {
      id: 'catch', chip: "What's the catch?", q: 'why is it a dollar what is the catch too good',
      phrases: ['the catch', 'why so cheap', 'why is it $1', 'why a dollar', 'too good to be true',
                 'only a dollar', 'just a dollar', 'why is it 1'],
      keys: 'catch why dollar cheap free scam trick founding first gimmick',
      a: "You're <b>client #1</b>. Jasper's building SANO and needs to prove it on a real shop and learn from a real owner — that's worth more to him than three months of your money.<br><br>The actual catch, stated plainly: <b>three short phone videos</b> about how it's going (day one, 30 days, 90 days), and he'll ask you a lot of questions along the way. That's it. No lock-in, no hidden fee.",
      next: ['videos', 'firstclient', 'month4']
    },
    {
      id: 'month4', chip: 'What happens at month 4?', q: 'after 3 months what happens then price go up',
      phrases: ['month 4', 'after three months', 'after the 3 months', 'then what'],
      keys: 'after month4 fourth later renew renewal continue goes up increase raise future',
      a: "It becomes <b>$249/month</b> — the number you already know, said out loud from day one specifically so month four isn't a surprise.<br><br>Nothing auto-traps you: it's month to month, cancel anytime with a text. And as a founding client, <b>your price stays put</b> as new tools get added — you don't get re-priced later for saying yes early.",
      next: ['cancel', 'roadmap', 'price']
    },
    {
      id: 'videos', chip: 'What are the 3 videos?', q: 'testimonial videos what do I have to record',
      phrases: ['the videos', 'three videos', 'testimonial'],
      keys: 'video videos testimonial record filming camera phone say trade',
      a: "Three short videos, shot on your phone — <b>day one, 30 days, 90 days</b>. Literally you talking for a minute: what it's doing, what you like, what's annoying.<br><br>That's what replaces the setup fee. No script, no crew, no acting — and if something's not working, say that on camera too. Honest is more useful to him than flattering.",
      next: ['catch', 'price']
    },
    {
      id: 'cancel', chip: "What if I don't like it?", q: 'cancel quit contract locked in refund get out',
      phrases: ["don't like", 'want out', 'back out', 'change my mind', 'sign anything',
                 'sign a contract', 'locked in', 'lock me in'],
      keys: 'cancel quit contract commitment locked trap refund stuck escape terminate obligation sign agreement',
      a: "<b>Cancel anytime with one text.</b> No contract, no notice period, no cancellation fee — and you're out a grand total of <b>one dollar</b>.<br><br>Your number, your Google page, your truck, your customers: all exactly as they were. Nothing is held hostage. Worst case you got three months of free help and you walk.",
      next: ['mydata', 'phone_number', 'month4']
    },
    {
      id: 'paynow', chip: 'Do I pay anything today?', q: 'pay now upfront deposit down payment card',
      phrases: ['pay today', 'pay anything', 'up front', 'down payment', 'deposit',
                 'card on file', 'pay now'],
      keys: 'today upfront deposit card credit charge initial',
      a: "<b>One dollar</b>, on a card on file. No deposit, no down payment, no setup fee.<br><br>The dollar isn't about money — it makes you a real customer instead of a favor, and it proves the payment side works before month four rolls around.",
      next: ['price', 'catch']
    },

    /* ---------------- WHAT HE DOES ---------------- */
    {
      id: 'whatido', chip: 'What do I have to do?', q: 'what do I have to do my part work effort',
      phrases: ['what do i have to do', 'what do i need to do', 'my part', 'how much work', 'my time', 'of my time', 'bunch of setup', 'a lot of setup',
                 'what do you need', 'need from me', 'required of me', 'on my end'],
      keys: 'do effort work involved part responsibility hard time commitment lift',
      a: "Almost nothing, and that's the point.<br><br><b>One form, about 10 minutes.</b> Your real hours, your services and rough prices, and the questions you're sick of answering. Only you know those.<br><br>Jasper builds everything else. You don't set anything up, you don't learn software. Bookings and updates just start arriving as <b>texts on your phone</b>, same as any other text.",
      next: ['form', 'learn', 'timeline']
    },
    {
      id: 'form', chip: "What's on the form?", q: 'questionnaire form what questions 10 minutes',
      phrases: ['the form', 'questionnaire', 'what questions'],
      keys: 'form questionnaire fill paperwork questions intake sheet',
      a: "Short and specific — the stuff nobody but you knows:<br><br>• Your <b>real</b> hours (not the three different sets on your website)<br>• Services + rough price ranges<br>• Your service area and how far you'll drive<br>• The <b>5–8 questions you answer over and over</b><br>• How much travel time you need between jobs<br><br>Ten minutes, once. Everything else gets built off it.",
      next: ['whatido', 'timeline', 'autoanswers']
    },
    {
      id: 'learn', chip: 'Do I have to learn software?', q: 'learn software computer complicated tech not good with computers',
      phrases: ['learn software', 'good with computers', 'not techy', 'complicated', 'figure it out'],
      keys: 'learn software computer complicated technical training teach hard confusing app understand',
      a: "No. That's deliberate.<br><br><b>Your phone is the interface.</b> A job books — you get a text. A customer asks something — it's handled, and you can see it if you want. You never have to remember to log into anything for it to work.<br><br>The app is there when you want to look something up (a customer's history, your week). But the system runs whether you open it or not.",
      next: ['app', 'whatido', 'support']
    },
    {
      id: 'timeline', chip: 'How long does it take?', q: 'how long until live setup time weeks',
      phrases: ['how long', 'how fast', 'when will it', 'how soon', 'up and running'],
      keys: 'long fast weeks days live launch ready start soon quick timeline duration',
      a: "<b>2–3 weeks</b> realistically, with a little back-and-forth to get your details right.<br><br>Straight answer: you're the first client, so plan on <b>3½ weeks</b>. Jasper would rather take the extra week and hand you something that works than rush it and patch it in front of you.",
      next: ['delay', 'whatido', 'golive']
    },
    {
      id: 'delay', chip: 'What could delay it?', q: 'what could go wrong delay slow hold up',
      phrases: ['what could delay', 'hold it up', 'go wrong', 'take longer',
                 'slow it down', 'slow this down', 'push it back'],
      keys: 'delay slow late longer wait problem holdup carrier registration approval a2p',
      a: "One real thing, and it's not in our hands: <b>carrier registration</b>.<br><br>Before any business can send automatic texts, the phone carriers have to approve the number. That takes a week or two and nobody can speed it up. Everything else gets built while that's pending.<br><br>That's the honest reason for saying 3½ weeks instead of 2 — better you hear it now than get an excuse later.",
      next: ['timeline', 'ein']
    },
    {
      id: 'ein', chip: 'Do I need an EIN?', q: 'ein llc registered business tax id legal',
      phrases: ['do i need an ein', 'business registered', 'tax id', 'llc'],
      keys: 'ein llc registered legal tax id entity sole proprietor business paperwork irs',
      a: "It helps, and it's not a blocker.<br><br>An EIN is <b>free and takes about 10 minutes</b> on the IRS site. Texting registration works without one (as a sole proprietor), but the carriers give you <b>lower daily text limits</b>. With an EIN you get proper headroom.<br><br>If you don't have one, Jasper will walk you through it — it's a form, not a lawyer.",
      next: ['delay', 'timeline']
    },

    /* ---------------- THE PACKAGE ---------------- */
    {
      id: 'tools', chip: 'What do I actually get?', q: 'what is included what do I get package tools everything',
      phrases: ['what do i get', 'what is included', 'comes with', 'the package',
                 'am i getting', 'actually getting', 'actually get', 'all seven'],
      keys: 'get included include package tools everything comes features list all seven',
      a: "<b>All seven, one package — there's nothing to choose.</b><br><br>1. <b>Missed-call text-back</b><br>2. <b>Auto-answers</b> for your repeat questions<br>3. <b>Real-availability booking</b><br>4. <b>Review engine</b><br>5. <b>Customer log</b> — vehicles, plates, history<br>6. <b>Your number, untouched</b><br>7. <b>The app + a plain-English monthly rundown</b><br><br>Ask me about any one of them and I'll go deeper.",
      next: ['missedcall', 'autoanswers', 'booking', 'reviews'], weight: 1
    },
    {
      id: 'missedcall', chip: 'Missed-call text-back', q: 'missed call text back when I cant answer phone rings',
      phrases: ['missed call', 'miss a call', "can't answer", 'text back'],
      keys: 'missed call text back answer ring busy under car voicemail callback',
      a: "You're under a truck and a call comes in. You can't grab it.<br><br><b>Seconds later they get a text from AVRS</b> — sorry we missed you, what do you need? Most people text back right there instead of calling the next shop. The conversation keeps going without you touching it, and you pick it up when your hands are clean.<br><br>This is usually the one that pays for the whole thing.",
      next: ['autoanswers', 'aftercall', 'tools']
    },
    {
      id: 'autoanswers', chip: 'Auto-answers', q: 'auto answers questions faq repeat questions',
      phrases: ['auto answer', 'same questions', 'answer questions', 'faq'],
      keys: 'auto answers question repeat common faq reply respond same twenty',
      a: "The questions you answer twenty times a week — <b>\"do you come to Willis?\", \"what's a brake job run?\", \"can you do it at my work?\"</b> — get answered instantly, in your words.<br><br>You give us your 5–8 most common ones and how you'd answer them. It doesn't invent anything: if it's a question you didn't cover, it says a real person will follow up and flags it for you.",
      next: ['robot', 'missedcall', 'tools']
    },
    {
      id: 'booking', chip: 'Booking', q: 'booking calendar schedule appointments availability',
      phrases: ['book a job', 'booking', 'my schedule', 'calendar', 'appointments'],
      keys: 'booking calendar schedule appointment availability slot time travel buffer double',
      a: "People book <b>straight into the times you actually work</b>, with travel time built in between jobs so you're not booked in Conroe and Katy back to back.<br><br>You get a text when one lands. No phone tag, no \"let me check my week and call you back.\" You set the rules once — days, hours, how far apart — and it never books outside them.",
      next: ['doublebook', 'vacation', 'tools']
    },
    {
      id: 'reviews', chip: 'Review engine', q: 'reviews google stars asking customers rating',
      phrases: ['google reviews', 'get reviews', 'review engine', 'more reviews'],
      keys: 'review google star stars rating reputation ask asking feedback reviews',
      a: "After every finished job the customer gets a short text asking for a Google review, with the link right there. <b>You never have to ask anyone again.</b><br><br>You're at <b>5.0 with 12 reviews</b> — the rating is great, the count is what's holding you back against shops with 80. This is the single highest-leverage thing on the list for you, because it compounds every month without any effort from you.",
      next: ['badreview', 'proof', 'tools']
    },
    {
      id: 'badreview', chip: 'What about a bad review?', q: 'bad review negative unhappy customer angry',
      phrases: ['bad review', 'negative review', 'unhappy customer', 'one star', '1 star', 'leaves a 1'],
      keys: 'bad negative angry unhappy complaint one star mad upset',
      a: "Honest answer: nothing can stop someone from leaving a bad review, and anybody who tells you otherwise is selling something.<br><br>What this does is <b>make the math work in your favor</b> — when every happy customer is getting asked, the occasional bad one gets buried instead of sitting there as 1 of 12. Right now a single one-star would drop you from 5.0 to 4.7. At 80 reviews it barely moves you.",
      next: ['reviews', 'proof']
    },
    {
      id: 'customerlog', chip: 'Customer log', q: 'customer records crm history vehicle plate notes',
      phrases: ['customer log', 'keep track', 'customer records', 'service history',
                 'vehicles and plates', 'their vehicle', 'what i did'],
      keys: 'log record crm history vehicle plate notes track database file remember past',
      a: "Every customer, their <b>vehicle, plate, and every job you've done for them</b> — two taps.<br><br>\"What did I do on the Watts truck last spring?\" — there it is, with the date and the amount. No notebook in the door pocket, nothing living in your head. When a repeat customer calls, you already know their car before they finish the sentence.",
      next: ['mydata', 'security', 'tools']
    },
    {
      id: 'app', chip: 'The app', q: 'app phone application download iphone android',
      phrases: ['the app', 'download the app', 'on my phone', 'app included', 'app come with'],
      keys: 'app application download iphone android phone install screen',
      a: "Yours from <b>day one</b>, free with the package — it's the app you just tapped through on this page.<br><br>Everything in one place: messages, your calendar, customers, reviews, and a plain-English monthly rundown. Works on iPhone and Android.<br><br>One honest note: at this price it's the standard app, not one with AVRS's name and icon on the App Store — that carries a real platform cost and isn't worth it for you right now. <b>Every feature is identical.</b>",
      next: ['brandedapp', 'learn', 'tools']
    },
    {
      id: 'brandedapp', chip: 'Can it have my name on it?', q: 'branded app my logo my name app store custom',
      phrases: ['my name on it', 'my logo', 'branded', 'app store', 'my own app'],
      keys: 'branded brand logo icon custom appstore label',
      a: "Eventually, yes — but it'd be a bad use of your money today.<br><br>Putting AVRS's name and icon on the app itself carries a <b>few hundred a month in platform cost</b>, plus an Apple business account. It buys <b>branding, not a single extra feature</b> — everything works identically either way.<br><br>If AVRS grows to where your own app in the App Store matters, that's a good conversation to have then.",
      next: ['app', 'roadmap']
    },
    {
      id: 'report', chip: 'The monthly rundown', q: 'monthly report numbers results how do I know',
      phrases: ['monthly report', 'the numbers', 'monthly rundown'],
      keys: 'report numbers summary rundown stats recap breakdown',
      a: "Once a month, in plain English — no dashboard homework:<br><br>• Jobs booked without a phone call<br>• Questions answered without you<br>• Reviews earned<br>• Calls caught that you'd have missed<br>• Roughly how many hours that gave you back<br><br>If those numbers ever stop justifying $249, you'll see it before Jasper does — and you can cancel with a text.",
      next: ['proof', 'month4']
    },

    /* ---------------- PHONE / NUMBER ---------------- */
    {
      id: 'phone_number', chip: 'Do I change my number?', q: 'change my number phone number 936 truck website',
      phrases: ['change my number', 'new number', 'my number', 'keep my number'],
      keys: 'phone van website google listing keep same route forward 936 444 3031',
      a: "<b>No. Your number doesn't change.</b><br><br>(936) 444-3031 stays on your truck, your website, and your Google page. Nothing about how customers reach you changes — no re-lettering, no updating listings, no telling regulars a new number.<br><br>The system runs <b>behind</b> it.",
      next: ['textfrom', 'callsnormal', 'cancel']
    },
    {
      id: 'textfrom', chip: 'What number do texts come from?', q: 'what number will the automatic texts be sent from sender identity',
      phrases: ['what number do the texts', 'different number', 'texts come from',
                 'whose number', 'what number will', 'shop name', 'my name on the text', 'say avrs', 'identify'],
      keys: 'sender sending identifies recognize unknown strange unfamiliar',
      a: "Straight with you: the automatic texts go out from a <b>new number we set up</b>, not your (936) line — that's what keeps your existing line completely untouched and risk-free.<br><br>So every single automated text <b>identifies itself as AVRS Automotive</b> in the first line. Customers see the shop name, not a mystery number. In practice people reply to it the same way they'd reply to you.",
      next: ['phone_number', 'callsnormal', 'robot']
    },
    {
      id: 'callsnormal', chip: 'Can I still answer calls normally?', q: 'answer calls normally still use my phone',
      phrases: ['answer calls', 'answer my own', 'still answer', 'my own phone', 'still call me', 'still call',
                 'use my phone', 'call me directly', 'still ring', 'pick up'],
      keys: 'answer call ring normally directly usual regular same still',
      a: "Yes — <b>nothing changes about your calls.</b> Your phone rings like it always has, you answer like you always have.<br><br>The system only steps in when you <b>don't</b> answer. If you pick up, it stays out of the way entirely.",
      next: ['missedcall', 'phone_number']
    },
    {
      id: 'newphone', chip: 'Do I need a new phone?', q: 'new phone hardware equipment buy anything',
      phrases: ['new phone', 'buy a phone', 'new equipment', 'hardware'],
      keys: 'hardware equipment buy device purchase computer',
      a: "No. Your phone, your plan, your number — all stay exactly as they are.<br><br>There's <b>nothing to buy and nothing to install</b> beyond a free app you can ignore if you want to.",
      next: ['app', 'phone_number']
    },

    /* ---------------- OPERATIONS / EDGE CASES ---------------- */
    {
      id: 'afterhours', chip: 'What about nights and weekends?', q: 'night 2am after hours weekend late closed',
      phrases: ['2am', '3am', '11pm', 'after hours', 'at night', 'weekend', 'weekends',
                 'when im closed', 'middle of the night', 'while im asleep', 'midnight', 'at 11'],
      keys: 'night nights late midnight weekend sunday saturday hours closed sleeping asleep evening overnight',
      a: "That's when it earns its keep. Someone texting at <b>11pm with a dead battery</b> gets an instant reply, gets their question answered, and can <b>book the first slot you actually have</b> — while you're asleep.<br><br>You wake up to a booked job instead of a voicemail they left for you and three other shops. You can set quiet hours so <b>you</b> aren't pinged overnight, while the system still works.",
      next: ['booking', 'quiet', 'missedcall']
    },
    {
      id: 'quiet', chip: 'Can I turn it off?', q: 'turn off pause disable stop automations control',
      phrases: ['turn it off', 'shut it off', 'pause it', 'turn off the texts'],
      keys: 'off pause disable stop control override quiet mute silence toggle manual',
      a: "Yes — <b>you're always in control.</b> Any piece can be paused: quiet hours, a specific automation, or the whole thing.<br><br>And you can always jump into any conversation and take over by hand. The automation stops the moment you start typing — it never talks over you.",
      next: ['textcustomer', 'vacation', 'robot']
    },
    {
      id: 'vacation', chip: "What if I'm on vacation?", q: 'vacation time off sick away not working closed',
      phrases: ['on vacation', 'time off', 'out of town', 'week off', 'taking off', 'if im sick', 'days off'],
      keys: 'vacation off away holiday sick break trip closed unavailable',
      a: "Block the dates and <b>nothing books into them</b> — the calendar simply won't offer those days.<br><br>Missed-call text-back keeps running with the message you choose (\"we're back Monday the 8th\"), so people still get answered instead of hitting silence. You come back to a queue of warm customers instead of a dead week.",
      next: ['booking', 'quiet']
    },
    {
      id: 'doublebook', chip: 'What if two people book the same slot?', q: 'double booked two people same time conflict overlap',
      phrases: ['double book', 'same time', 'two people book', 'overlap', 'two jobs', 'at once', 'same slot'],
      keys: 'double conflict overlap same slot twice collision two',
      a: "Can't happen. The moment a slot is taken it <b>disappears for everyone else</b> — it's one live calendar, not a form that emails you.<br><br>Travel buffer is part of that too: if a job in Conroe runs until 2, it won't hand out a 2:15 in Katy.",
      next: ['booking', 'vacation']
    },
    {
      id: 'textcustomer', chip: 'Can I text customers myself?', q: 'can i message someone myself manually on my own',
      phrases: ['text them myself', 'text a customer', 'message someone', 'reach out'],
      keys: 'myself manual manually send own initiate write personally',
      a: "Yes — from the app or right from your phone. Every thread is a normal conversation you can jump into any time.<br><br>Handy for \"running 20 minutes late\" or \"your part came in\" — and it all lands in that customer's history automatically, so next year you can see exactly what was said.",
      next: ['customerlog', 'quiet']
    },
    {
      id: 'staff', chip: 'Can someone else use it?', q: 'wife helper employee second person access team',
      phrases: ['my wife', 'someone else', 'an employee', 'a helper', 'my son'],
      keys: 'staff employee wife helper team second person access another user login',
      a: "Yes. You can add another person with their own login — useful if someone helps with the phone or scheduling.<br><br>And if you ever hire a tech, it scales without a rebuild: more people, same system, and everyone sees the same customer history instead of it living in one person's head.",
      next: ['grow', 'security']
    },
    {
      id: 'grow', chip: 'What if I grow?', q: 'grow bigger hire second truck expand more jobs',
      phrases: ['if i grow', 'second truck', 'hire someone', 'get bigger', 'expand'],
      keys: 'grow bigger expand hire second truck scale more volume busy capacity',
      a: "It scales with you and the price doesn't jump. A second truck means a second calendar and a second set of hands in the same system — not a new setup.<br><br>Worth saying plainly: if you're <b>already maxed on jobs</b>, the win here isn't more leads — it's getting your evenings back and nothing slipping. That's what Jasper is actually selling you.",
      next: ['staff', 'proof']
    },
    {
      id: 'spanish', chip: 'What about Spanish speakers?', q: 'spanish speaking customers language bilingual',
      phrases: ['spanish', 'in spanish', 'bilingual', 'language'],
      keys: 'spanish language bilingual english translate espanol',
      a: "Can be set up in Spanish — auto-answers and review requests both. SANO is being built Spanish-first for the Houston market, so this is squarely in Jasper's wheelhouse.<br><br>Tell him roughly what share of your customers prefer Spanish and he'll build both.",
      next: ['autoanswers', 'whatido']
    },
    {
      id: 'fleet', chip: 'Fleet and commercial accounts?', q: 'fleet commercial business accounts multiple vehicles',
      phrases: ['fleet', 'commercial account', 'business customers', 'company vehicles'],
      keys: 'fleet commercial company corporate accounts',
      a: "They work well here, actually. A fleet contact can hold <b>multiple vehicles</b>, each with its own plate and service history — so \"the white Transit\" and \"the box truck\" are separate records under one company.<br><br>Repeat-service reminders (roadmap item) are especially strong for fleets, since that's recurring maintenance you'd otherwise have to chase.",
      next: ['customerlog', 'roadmap']
    },
    {
      id: 'robot', chip: 'Will it sound like a robot?', q: 'robot sound automated fake impersonal annoy',
      phrases: ['sound like a robot', 'sound fake', 'like a robot', 'impersonal'],
      keys: 'robot automated fake impersonal weird annoying spam pushy tone voice sound',
      a: "It sounds like <b>you</b>, because the words are yours — you supply the answers on the form and Jasper writes them in your voice, not corporate-speak.<br><br>It's short, plain texts: \"Sorry we missed you — this is AVRS. What's going on with it?\" That's it. And it never argues, never pushes; anything it isn't sure about goes to a human.",
      next: ['autoanswers', 'spam', 'quiet']
    },
    {
      id: 'spam', chip: 'Will it annoy my regulars?', q: 'will it annoy pester bother my regulars too frequent',
      phrases: ['annoy', 'spam', 'too many texts', 'bother my customers', 'pester', 'bug my'],
      keys: 'annoy spam bother pester many frequency blast marketing bombard',
      a: "It's not a marketing blaster. Every text is <b>triggered by something real</b>: they called and you missed it, they asked a question, they booked, or you just finished their job.<br><br>Nobody gets random promos. A typical customer gets maybe two texts around a job — the same ones you'd have sent if you had a free hand. Anyone can reply STOP and they're out.",
      next: ['robot', 'reviews', 'quiet']
    },

    /* ---------------- DATA / TRUST ---------------- */
    {
      id: 'security', chip: 'Is my data safe?', q: 'data safe secure private hacked who sees customer info',
      phrases: ['is my data safe', 'who sees', 'data secure', 'is it private', 'get hacked'],
      keys: 'security safe secure private hacked breach protected encrypted sees access confidential',
      a: "Your customer list is <b>yours</b>. It lives in your own account on the platform — an established system used by a lot of businesses, not something homemade.<br><br>Nobody's selling or sharing your list, and it isn't pooled with other shops. Jasper has admin access to build and fix things for you, and that's it.",
      next: ['mydata', 'customerlog']
    },
    {
      id: 'mydata', chip: 'Do I keep my data if I leave?', q: 'keep my data if I leave export customers own',
      phrases: ['if i leave', 'keep my data', 'my customer list', 'export', 'my contacts', 'keep my contacts'],
      keys: 'keep own leave export download take list data ownership mine',
      a: "Yes. <b>You own your customer list</b> — if you ever cancel, you get it exported, plates and service history included.<br><br>Nothing is held hostage to make leaving painful. That's on purpose: if the only reason you'd stay is that leaving is hard, it isn't worth $249.",
      next: ['cancel', 'security']
    },
    {
      id: 'firstclient', chip: 'Have you done this before?', q: 'have you done this before experience first client trust',
      phrases: ['done this before', 'done this for', 'your first', 'any experience',
                 'other clients', 'other shops', 'who else', 'anyone else', 'anyone using'],
      keys: 'experience before first done other clients references proof track record trust new',
      a: "Straight up: <b>you're the first.</b> That's exactly why you're getting three months for a dollar instead of paying setup like everyone after you.<br><br>The tech isn't experimental — it runs on a platform thousands of shops already use. What's new is Jasper building it around <b>your</b> business. And you're the one guy who can fire him for free. If he can't make it work for you, he's got no business selling it to anyone else.",
      next: ['catch', 'proof', 'support']
    },
    {
      id: 'whosano', chip: 'What is SANO?', q: 'what is sano who are you company jasper',
      phrases: ['what is sano', 'who are you', 'who is jasper', 'your company'],
      keys: 'sano company who jasper business about behind real legit',
      a: "SANO is Jasper's company — a Texas LLC out of Houston. The idea is simple: give small local businesses the <b>office systems the big chains have</b>, without the office staff.<br><br>He's starting with AVRS because he'd rather prove it on one real shop he knows than chase fifty strangers. You can text him directly at <b>(832) 396-2496</b> — he's the whole company right now, which is the good and the bad of it.",
      next: ['firstclient', 'support']
    },

    /* ---------------- PROOF ---------------- */
    {
      id: 'proof', chip: 'How do I know it works?', q: 'how do I know its working proof results guarantee',
      phrases: ['how do i know', 'is it working', 'is this working', 'proof', 'guarantee', 'measure',
                 'what results', 'worth it', 'worth the money'],
      keys: 'proof results guarantee evidence measure track prove roi baseline',
      a: "Two ways, both concrete.<br><br><b>Before you start:</b> Jasper writes down today's numbers — jobs a month, roughly how many calls you miss, and your Google count (5.0 · 12 today). No baseline, no honest answer later.<br><br><b>Every month after:</b> a plain-English rundown of jobs booked without a call, questions handled, reviews earned, hours saved.<br><br>And the real proof is that you can leave any month for free. It has to keep earning it.",
      next: ['report', 'samplenumbers', 'cancel']
    },
    {
      id: 'samplenumbers', chip: 'Are the app numbers real?', q: 'numbers real fake sample example demo made up',
      phrases: ['numbers real', 'numbers in the app', 'sample numbers', 'made up',
                 'real data', 'fake', 'those numbers'],
      keys: 'real fake sample example demo made up fictional actual pretend',
      a: "<b>No — and they're labeled that way on purpose.</b> The app on this page is a working example with sample customers so you can feel how it moves.<br><br>Your real one starts <b>empty</b> and fills up with your actual customers, your actual jobs. Nobody's going to show you fake numbers and call them yours.",
      next: ['app', 'proof']
    },
    {
      id: 'expect', chip: 'What results should I expect?', q: 'what results expect realistic how much more',
      phrases: ['what results', 'what should i expect', 'how much more', 'realistic'],
      keys: 'results expect realistic typical average outcome improvement gain lift',
      a: "Honest version, no invented numbers: the two things that move first are <b>reviews</b> and <b>caught calls</b>.<br><br>Reviews are the most predictable — asking every customer instead of never asking reliably grows the count, and going from 12 toward 50+ changes who calls you at all.<br><br>Caught calls depend on how many you're actually missing, which is why that gets measured on day one. Anyone quoting you a percentage before knowing your baseline is guessing.",
      next: ['proof', 'reviews', 'grow']
    },

    /* ---------------- SCOPE ---------------- */
    {
      id: 'payments', chip: 'Can it take payments?', q: 'payments invoices get paid card charge customers',
      phrases: ['take payments', 'invoice', 'get paid', 'charge customers', 'accept cards', 'pay through'],
      keys: 'payment invoice paid card charge billing money collect deposit checkout',
      a: "Not in what you're getting on day one — <b>it's on the roadmap</b>, and founding clients get it first at no extra cost.<br><br>Rather than half-build it now, Jasper would rather nail the seven tools you're getting. When invoices-and-pay-by-text lands, it just shows up in your account.",
      next: ['roadmap', 'tools']
    },
    {
      id: 'website', chip: 'Do I get a website?', q: 'website new site web page build me a site',
      phrases: ['a website', 'my website', 'build a site', 'new site'],
      keys: 'website site web page online design build seo',
      a: "Not part of this package — this is the <b>office side</b>: answering, booking, reviews, records.<br><br>Your existing site keeps working exactly as it does; the booking link can be added to it whenever you want. If a site becomes the bottleneck later, that's a separate conversation and Jasper will tell you straight if you need one.",
      next: ['tools', 'leads']
    },
    {
      id: 'leads', chip: 'Do you get me more customers?', q: 'more customers leads advertising marketing google ads',
      phrases: ['more customers', 'get me leads', 'advertising', 'marketing', 'google ads', 'running ads', 'ads for me'],
      keys: 'leads customers advertising marketing ads promotion new business generate traffic',
      a: "Not directly, and Jasper won't pretend otherwise. <b>This isn't an ad service.</b><br><br>What it does is make sure you stop <b>losing</b> the customers already trying to reach you — the missed calls, the people who gave up waiting, the ones who never got asked for a review. For a solo mechanic that's usually the bigger leak.<br><br>Growing your review count from 12 does bring new customers over time, just indirectly — more reviews, more calls.",
      next: ['reviews', 'expect', 'missedcall']
    },
    {
      id: 'roadmap', chip: "What's coming later?", q: 'roadmap future new features coming soon updates',
      phrases: ['coming later', 'roadmap', 'new features', 'in the future', 'what else', 'adding', 'add next'],
      keys: 'roadmap future coming later new features updates upgrade next soon',
      a: "Three things in the works, and <b>founding clients get them first, at your locked price:</b><br><br>• <b>AI phone answering</b> — it talks when you can't, not just texts<br>• <b>Invoices &amp; payments</b> — get paid by text<br>• <b>Repeat-customer nudges</b> — oil-change reminders and the like<br><br>No upgrade fees. Keeping up with this stuff is SANO's job, not yours.",
      next: ['payments', 'month4']
    },

    /* ---------------- SERVICE ---------------- */
    {
      id: 'support', chip: 'Who do I call if it breaks?', q: 'support help breaks problem who do I call fix',
      phrases: ['if it breaks', 'who do i call', 'support', 'need help', 'something goes wrong'],
      keys: 'support help break broken fix problem issue call contact respond service',
      a: "<b>You text Jasper.</b> (832) 396-2496 — same number you're texting now. Not a ticket system, not a call center in another country.<br><br>You're client #1, so you get an attention level nobody later is going to get. If something's broken, say so and it gets fixed.",
      next: ['changes', 'firstclient']
    },
    {
      id: 'changes', chip: 'What if I want changes?', q: 'changes adjust tweak different hours prices update',
      phrases: ['want changes', 'change something', 'adjust it', 'tweak'],
      keys: 'change adjust tweak modify update different edit revise alter',
      a: "Just say so — <b>included, not billed hourly.</b> Hours change, prices change, you think of a better way to answer a question. Text it over and it gets changed.<br><br>Expect the first couple of weeks after go-live to involve some of this. That's normal and it's how it ends up sounding like you instead of like a template.",
      next: ['support', 'golive']
    },
    {
      id: 'golive', chip: 'What happens when I say yes?', q: 'what happens next say yes start process steps',
      phrases: ['if i say yes', 'what happens next', 'how do we start', 'next steps'],
      keys: 'yes start begin next steps process first day kickoff go',
      a: "Day one, in order:<br><br>1. Jasper sets up your account and charges the <b>$1</b><br>2. You get the <b>10-minute form</b><br>3. Carrier registration starts (the long pole — begins immediately)<br>4. He writes down your <b>baseline numbers</b> so results are provable later<br>5. Video #1 — a minute on your phone<br><br>Then he builds for 2–3 weeks, tests it with you, and you go live.",
      next: ['whatido', 'timeline', 'delay']
    },
    {
      id: 'contact', chip: 'How do I reach Jasper?', q: 'contact reach text call jasper phone number',
      phrases: ['reach you', 'text you', 'call you', 'get ahold', 'your number', 'your phone number'],
      keys: 'reach talk speak hold jasper directly',
      a: "<b>Text him: (832) 396-2496.</b> Straight to his phone.<br><br>Say what you think either way — if it's a no, that's genuinely fine and he'd rather hear it than wonder.",
      next: ['golive', 'price']
    }
  ]
};
