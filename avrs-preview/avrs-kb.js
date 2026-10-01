/* ============================================================
   AVRS Automotive: the answers behind the assistant on this page.
   ============================================================ */
window.SANO_BOT_CONFIG = {
  title: 'SANO Assistant',
  subtitle: 'answers about your deal',
  avatar: 'S',
  launchLabel: 'Ask about the deal',
  revealAfter: '.stage',   /* stay hidden until past the hero demo */
  hideAfter: '#answers',   /* and step aside once the answers and the call to action are on screen */
  placeholder: 'Ask me anything about it…',
  greeting: "Hey Anthony, ask me anything about this: the price, how the scheduling works, what you'd have to do, how to say yes, what happens if you don't like it. Straight answers. Anything I can't answer, Jasper will.",

  escalate: { chip: '💬 Text Jasper', href: 'sms:+18323962496' },

  clarify: "Want to make sure I answer the right thing. Which one do you mean?",

  fallbacks: [
    "That one I'd rather not guess at. Text Jasper at <b>(832) 396-2496</b> and he'll answer it straight. Meanwhile, here's what I do know:",
    "Honestly, not sure on that one, and I'd rather say so than make something up. Jasper's at <b>(832) 396-2496</b>. I can cover these though:",
    "That's outside what I've got. Text Jasper at <b>(832) 396-2496</b>; he'll give it to you straight. Or try one of these:"
  ],

  /* what a mechanic types -> the vocabulary these answers use */
  synonyms: {
    cost: 'price', costs: 'price', pricing: 'price', charge: 'price', expensive: 'price',
    cheap: 'price', afford: 'price', money: 'price', fee: 'price', bill: 'price', damage: 'price',
    quit: 'cancel', stop: 'cancel', leave: 'cancel', refund: 'cancel',
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
    contract: 'sign', signature: 'sign', agreement: 'sign',
    picture: 'photo', pic: 'photo', pics: 'photo', photos: 'photo',
    work: 'working', works: 'working'
  },

  ambient: 'customer client customers text texts phone number app month monthly ' +
           'business job jobs service services system people thing week day time',

  starters: ['price', 'booking', 'start', 'sayyes'],
  popular: ['price', 'booking', 'dayday', 'start', 'tools', 'cancel', 'timeline'],

  kb: [
    /* ---------------- THE DEAL ---------------- */
    {
      id: 'price', chip: "What's it cost?", q: 'how much is it price cost monthly',
      phrases: ['how much', 'what does it cost', 'what is the price', 'how much is it',
                 'the deal', 'run me', 'the damage', 'a subscription', 'setup fee', 'set up fee', 'setup cost', 'setup charge',
                 'the total', 'total for', 'in total', 'all in'],
      keys: 'price dollar 397 997 total pay paying payment cheap expensive worth deal rate subscription damage',
      a: "<b>$1 a month for your first three months</b>, billed to your card once your account is set up, so it's a real account and not a favor. Your three months start the day you text Jasper that you're in.<br><br>After that it's <b>$397 a month, plus usage billed on its own line: about $460–600 a month all in, after your three months. SANO's price list puts usage at about $60–200 a month on this package. It's covered during your three $1 months, and we'll show you your real number before month four.</b> Month to month.<br><br><b>No setup fee</b>: it's normally $997. That's $2,185 you don't pay (three months at $397 plus the $997 setup, minus your $3).",
      next: ['usage', 'catch', 'month4', 'sayyes']
    },
    {
      id: 'usage', chip: 'Is there anything on top?', q: 'usage extra charges on top hidden fees what else do i pay',
      phrases: ['usage', 'on top', 'extra charge', 'extra charges', 'hidden fee', 'hidden fees',
                 'anything else to pay', 'what else do i pay', 'per text', 'overage', 'usage cost', 'cost of usage', 'what is usage', 'usage fee', 'what does usage'],
      keys: 'usage extra hidden fees charges additional overage metered',
      a: "During your three $1 months, usage is <b>covered</b>: you don't pay for it.<br><br>After that it's billed on <b>its own line</b>, next to the $397: the texts, emails, call minutes and AI it actually uses. SANO's price list puts it at about $60–200 a month on this package: about $460–600 a month all in, after your three months. We'll show you your real number before month four, so it's not a guess.",
      next: ['price', 'month4', 'cancel']
    },
    {
      id: 'catch', chip: "What's the catch?", q: 'why is it a dollar what is the catch too good',
      phrases: ['the catch', 'why so cheap', 'why is it $1', 'why a dollar', 'too good to be true',
                 'only a dollar', 'just a dollar', 'why is it 1', 'in it for you', 'in it for jasper',
                 'what do you get out of', 'why are you doing this'],
      keys: 'catch why dollar cheap free scam trick founding first gimmick',
      a: "You're <b>client #1</b>. Jasper's building SANO and needs to prove it on a real shop and learn from a real owner. That's worth more to him than three months of fees.<br><br>The catch, stated plainly: <b>three short phone videos</b> about how it's going, and he'll ask you a lot of questions along the way. No hidden fee.",
      next: ['videos', 'novideos', 'firstclient']
    },
    {
      id: 'month4', chip: 'What happens after the three months?', q: 'after three months what happens then price go up month 4',
      phrases: ['month 4', 'month four', 'after three months', 'after the three months', 'after the 3 months', 'after 3 months', 'then what'],
      keys: 'after month4 fourth later renew renewal continue goes up increase raise future 397',
      a: "After your three months it becomes <b>$397 a month</b>, the regular price of the base package, <b>plus usage billed on its own line: about $460–600 a month all in, after your three months.</b> SANO's price list puts usage at about $60–200 a month on this package. It's covered during your three $1 months, and we'll show you your real number before month four.<br><br>No discounted rate that quietly carries on: <b>the three months at a dollar are the founding deal.</b> It's month to month from there, and thirty days' notice ends it.",
      next: ['cancel', 'usage', 'price']
    },
    {
      id: 'videos', chip: 'What are the 3 videos?', q: 'testimonial videos what do I have to record',
      phrases: ['what are the videos', 'what videos', 'three videos', '3 videos', 'the three videos',
                 'testimonial', 'what kind of videos', 'about the videos', 'the videos about'],
      keys: 'video videos testimonial record filming trade',
      a: "Three short videos, shot on your phone, spread across your three months. Just you talking: what it's doing, what you like, what's annoying.<br><br>They're part of the deal, in place of the setup fee. No script, no crew. Anything to sign? Not to start. Your text saying you're in is the yes. If something isn't working, say that on camera too. Honest is more useful to Jasper than flattering.",
      next: ['novideos', 'catch', 'sign']
    },
    {
      id: 'novideos', chip: "What if I don't want to do the videos?", q: 'do not want to do them camera shy skip',
      phrases: ['not want to do the videos', 'not want to do videos', 'not do the videos', 'not doing the videos',
                 'skip the videos', 'no videos', 'without the videos', 'without videos', 'on camera',
                 'camera shy', 'being filmed', 'not want to film'],
      keys: 'video videos skip camera shy refuse avoid filmed',
      a: "Straight answer: <b>the videos are part of the deal.</b> They're what stands in for the $997 setup fee.<br><br>They're easy, though: you on your phone, short, saying what it's doing for you, good or bad. No script. Anything to sign? Not to start. Your text saying you're in is the yes. If being on camera is a dealbreaker, tell Jasper <b>before</b> you say yes, and he'll tell you straight where that leaves the deal.",
      next: ['videos', 'catch', 'contact']
    },
    {
      id: 'cancel', chip: "What if I don't like it?", q: 'cancel quit locked in refund get out',
      phrases: ["don't like", 'want out', 'back out', 'change my mind', 'locked in', 'lock me in',
                 'get out of it', "doesn't work for me", 'does not work out', 'try it before', 'try it first',
                 'before i commit', 'test drive'],
      keys: 'cancel quit commitment locked trap refund stuck escape terminate obligation',
      a: "After your three months it's <b>month to month</b>: thirty days' notice and you're out. No cancellation fee.<br><br>Your numbers, your Google listing and your customer list stay yours either way; they aren't held hostage. And if it isn't working inside the three months, tell Jasper. He'd rather hear it than keep a client it isn't working for.",
      next: ['mydata', 'month4', 'sign']
    },
    {
      id: 'paynow', chip: 'Do I pay anything today?', q: 'pay now upfront deposit down payment card',
      phrases: ['pay today', 'pay anything', 'up front', 'down payment', 'deposit',
                 'card on file', 'pay now'],
      keys: 'today upfront deposit card credit charge initial',
      a: "<b>One dollar a month</b> for your three months, billed to your card once your account is set up. No deposit, no down payment, and no setup fee.<br><br>The dollar isn't about money. It makes you a real customer instead of a favor, and it proves the payment side works long before the regular price starts.",
      next: ['price', 'clock', 'catch']
    },
    {
      id: 'clock', chip: 'When do my three months start?', q: 'when do my three months start clock begin first month',
      phrases: ['three months start', '3 months start', 'months start', 'month start', 'clock start',
                 'the clock', 'start date', 'start counting', 'first month start', 'when does my first month',
                 'texting is not working', 'before texting', 'charged if', 'charged before', 'pay before', 'paying before'],
      keys: 'clock begin begins counting date',
      a: "<b>The day you text Jasper that you're in.</b><br><br>Booking turns on after the build and the tests, and the texting pieces switch on when the carriers approve AVRS. That timing is the carriers' call; Jasper will tell you what he's seeing.",
      next: ['timeline', 'golive', 'sayyes']
    },
    {
      id: 'sign', chip: 'Do I have to sign anything?', q: 'sign contract signature agreement paperwork',
      phrases: ['sign anything', 'sign a contract', 'a contract', 'signature', 'sign something',
                 'have to sign', 'an agreement', 'paperwork to sign'],
      keys: 'sign signature contract agreement paperwork legal',
      a: "<b>Not to start.</b> Your text saying you're in is the yes.<br><br>The deal is the one on this page: $1 a month for three months, no setup fee, three short videos, then $397 a month plus usage billed on its own line (about $460–600 a month all in, after your three months), month to month, with thirty days' notice.",
      next: ['sayyes', 'price', 'cancel']
    },
    {
      id: 'sayyes', chip: 'How do I say yes?', q: 'how do i say yes accept sign up i am in',
      phrases: ['say yes', 'how do i accept', 'accept the deal', 'take the deal', "i'm in",
                 'sign up', 'sign me up', 'lock it in', "let's do it", 'lets do it', "i'm ready",
                 'ready to go', 'count me in', 'how do i agree', 'my yes', 'the yes'],
      keys: 'yes accept agree signup ready',
      a: "<b>Text Jasper “I'm in” at (832) 396-2496.</b> The button on this page fills in the deal in one line. Anything to sign? Not to start. Your text saying you're in is the yes.<br><br>After your text comes “Getting you set up”, the paperwork part of the questionnaire, and then the build. Your three months start the day you text Jasper that you're in.",
      next: ['start', 'golive', 'clock']
    },
    {
      id: 'start', chip: 'What do I have to do to start?', q: 'what do i have to do to start get started begin',
      phrases: ['do to start', 'need to start', 'to get started', 'get started', 'how do i start',
                 'how do we start', 'start things up', 'ready to start', 'get this going',
                 'get things going', 'kick this off', 'kick it off'],
      keys: 'begin started kickoff onboarding',
      a: "In this order:<br><br>1. <b>Fill in “Your schedule”</b>, the first part of the questionnaire (the “Tell me how your day runs” button on this page): your hours, your jobs and how long they take, your towns and your longest drive. Fill it in with your tech for his part, or talk it through with Jasper.<br>2. <b>Text Jasper “I'm in.”</b><br><br>After your yes comes “Getting you set up”, the paperwork part. Then Jasper builds it, and your steps are small ones: ten test bookings with you and your tech, installing the app, and one call-forwarding setting on your phone. Booking turns on with your approvals at first.",
      next: ['form', 'golive', 'sayyes']
    },

    /* ---------------- WHAT HE DOES ---------------- */
    {
      id: 'whatido', chip: 'What do I have to do?', q: 'what do I have to do my part work effort',
      phrases: ['what do i have to do', 'what do i need to do', 'my part', 'how much work', 'my time', 'of my time', 'bunch of setup', 'a lot of setup',
                 'my tech have to', 'my tech need to', 'does my tech', 'my tech do',
                 'what do you need', 'need from me', 'required of me', 'on my end'],
      keys: 'do effort work involved part responsibility hard time commitment lift',
      a: "Not much, but it's real.<br><br><b>“Your schedule”</b> comes with this page: your real hours, your jobs and how long they take, your towns and your longest drive. Fill it in with your tech for his part, or talk it through with Jasper. Then, after you text that you're in, <b>“Getting you set up”</b>: the paperwork part.<br><br>After that your steps are small ones: ten test bookings with you and your tech, installing the app, and one call-forwarding setting on your phone. Then <b>confirm booking requests from your phone</b> during the short trust period, and <b>put any job you take by phone on the calendar</b>, so online booking won't offer that time. Jasper builds the rest, and you don't learn software.",
      next: ['start', 'form', 'learn']
    },
    {
      id: 'form', chip: "What's on the questionnaire?", q: 'questionnaire form questions fill in what do you ask two parts',
      phrases: ['the form', 'questionnaire', 'what questions', 'fill out', 'sit down', 'the meeting', 'kickoff call', 'schedule form', 'your schedule', 'how your day runs', 'the schedule part', 'where is the questionnaire'],
      keys: 'form questionnaire fill paperwork questions intake sheet meeting',
      a: "It comes in two parts.<br><br>• <b>“Your schedule”</b> comes with this page (the “Tell me how your day runs” button), and it's mostly your schedule: your real hours, your jobs and how long they take, your towns and your longest drive. It also asks whether your customers want Spanish, and roughly how many calls a week go to voicemail today. You can fill it in with your tech for his part, or talk it through with Jasper.<br>• <b>“Getting you set up”</b> comes after you text that you're in. That's the paperwork side.<br><br>The build starts from both.",
      next: ['start', 'whatido', 'autoanswers']
    },
    {
      id: 'learn', chip: 'Do I have to learn software?', q: 'learn software computer complicated not good with computers',
      phrases: ['learn software', 'good with computers', 'not techy', 'complicated', 'figure it out'],
      keys: 'learn software computer complicated technical training teach hard confusing understand',
      a: "No. That's deliberate.<br><br><b>Your phone is where it happens.</b> A booking request comes in: you get a notification and an email, and you confirm it from your phone. The app is there when you want to look something up, like a customer's car or tomorrow's jobs.<br><br>During the trust period the confirm tap is the one regular thing you do. Once you trust it, and our tests show the checks hold, simple jobs close to home can book themselves.",
      next: ['app', 'whatido', 'support']
    },

    /* ---------------- TIMING ---------------- */
    {
      id: 'timeline', chip: 'How long does it take?', q: 'how long until live ready',
      phrases: ['how long until', 'how long will it take', 'how long does it take to set', 'how long to set',
                 'how long before', 'how fast', 'how soon', 'up and running', 'be running', 'be live',
                 'when will it be ready', 'when will it work', 'when will texting', 'when will the texting',
                 'when does texting', 'when does the texting', 'texting start', 'texting work', 'texting switch on', 'texting turn on'],
      keys: 'long fast days live launch ready soon quick timeline duration',
      a: "In order, with no dates on purpose: “Your schedule”, then your “I'm in”, then “Getting you set up”, then Jasper builds it and runs ten test bookings with you and your tech, then <b>booking turns on</b>, with confirmations and reminders by email.<br><br>The texting pieces wait on a privacy page and terms going up on your website and the carriers approving AVRS. The timing of that approval is the carriers' call; Jasper will tell you what he's seeing.",
      next: ['delay', 'golive', 'clock']
    },
    {
      id: 'delay', chip: 'What could delay it?', q: 'what could go wrong delay slow hold up',
      phrases: ['what could delay', 'hold it up', 'go wrong', 'take longer',
                 'slow it down', 'slow this down', 'push it back'],
      keys: 'delay slow late longer wait problem holdup carrier registration approval',
      a: "The pace is mostly set by the <b>carriers' approval for texting</b> and the <b>tests we run before anything goes live</b>.<br><br>Before any business can send automatic texts, the phone carriers have to approve it: AVRS, under its own legal name and tax ID, with a privacy page and terms up on your website first. How long that takes is the carriers' call; Jasper will tell you what he's seeing.<br><br>Booking doesn't wait on texting, and each piece goes live after it passes its tests.",
      next: ['timeline', 'ein', 'website']
    },
    {
      id: 'ein', chip: 'Do I need an EIN?', q: 'ein llc registered business tax id legal',
      phrases: ['do i need an ein', 'business registered', 'tax id', 'llc'],
      keys: 'ein llc registered legal tax id entity sole proprietor business irs',
      a: "What matters is the <b>exact legal name on the IRS letter</b> AVRS got with its tax ID: the carriers match the texting approval to it letter for letter, and a mismatch can add to the wait.<br><br>If you can't find the letter, or AVRS never got a tax ID, Jasper will walk you through it. It's a free form, not a lawyer.",
      next: ['delay', 'timeline']
    },

    /* ---------------- SCHEDULING ---------------- */
    {
      id: 'drive', chip: 'How does it know the drive?', q: 'how does it know the drive time between jobs minutes',
      phrases: ['how does it know', 'longest drive', 'drive time', 'drive between', 'minutes to drive', 'minutes between', 'job then', 'room for the drive', 'how far apart', 'need 45 minutes'],
      keys: 'drive driving minutes longest room spaced between apart',
      a: "It doesn't measure each drive. Each window leaves room for the drive. We size that room from the longest drive between your home towns, which you give us on the schedule page. If that's 45 minutes, the windows are spaced for 45 minutes. A town farther than that calls or texts you instead.<br><br>So if Willis and Magnolia are both home towns for you, that drive fits by design: the room is sized for your longest home-town drive. If one of them is farther out, that customer calls or texts you and you put the job on your days.",
      next: ['booking', 'fartowns', 'traffic']
    },
    {
      id: 'booking', chip: 'How do the time blocks work?', q: 'booking calendar schedule appointments availability time blocks travel',
      phrases: ['book a job', 'booking', 'my schedule', 'calendar', 'appointments', 'time block', 'time blocks',
                 'travel time', 'how long each job', 'diagnostic', 'other repairs', 'not sure how long', 'scheduling'],
      keys: 'booking calendar schedule appointment availability slot time travel buffer block blocks diag diagnostic brakes hour hours drive gap unknown vary windows',
      a: "You already answered the hard part. <b>Diag is an hour, front or rear brakes an hour and a half, full brakes three hours</b>: that's your menu, and a customer only sees start times the job fits in.<br><br>The stuff that varies <b>books as a diag first</b>; you quote it, and the repair gets its own time after. Diesels and anything 3/4-ton or bigger go through you first, so you can size them.<br><br><b>Room for the drive:</b> Each window leaves room for the drive. We size that room from the longest drive between your home towns, which you give us on the schedule page. If that's 45 minutes, the windows are spaced for 45 minutes. A town farther than that calls or texts you instead. For far towns, the booking form tells them to call or text you, and you put them on your days. We'd suggest telling customers an arrival window rather than an exact minute; that's your call. One window a day stays off the online calendar for no-starts and fleet.<br><br>At first every booking is a request you confirm from your phone. Once you trust it, and our tests show the checks hold, simple jobs close to home can book themselves.",
      next: ['trust', 'window', 'doublebook']
    },
    {
      id: 'bookinglink', chip: 'Where do customers book?', q: 'where do customers book booking link page find it',
      phrases: ['booking link', 'booking page', 'where do customers book', 'how do customers book', 'find the booking',
                 'link to book', 'where do they book', 'how do people book'],
      keys: 'link page find where',
      a: "From a <b>booking link</b>. At first it goes out the ways you already talk to people: you text it to customers, and once texting is approved the missed-call text carries it.<br><br>Putting it on your website and your Google listing comes later, on purpose, so your site and listing stay as they are while it's new.",
      next: ['booking', 'trust', 'googlelisting']
    },
    {
      id: 'trust', chip: 'Do I have to approve every booking?', q: 'approve every booking confirm requests trust period book themselves',
      phrases: ['approve every', 'approve each', 'confirm every', 'confirm each', 'trust period', 'book themselves',
                 'books itself', 'book itself', 'auto book', 'automatically book', 'my approval', 'approve them',
                 'confirm them', 'confirm in the app', 'approve in the app', 'confirm it',
                 'confirm booking', 'confirm bookings', 'approve booking', 'approve bookings',
                 'i can not do', 'books a job i', 'books something', 'wrong job', 'turn it down', 'decline',
                 'someone books', 'get notified', 'notified', 'notification', 'confirm fast', 'too busy to confirm',
                 'can not confirm', 'slammed'],
      keys: 'approve approval confirm confirmation trust request requests themselves',
      a: "Only at first. For a <b>short trust period</b>, every online booking comes in as a request: you get a notification and an email with the name, the car, the job and where it's parked, and you confirm it from your phone. If you're slammed, it waits; the customer already has an email saying it came in.<br><br>Once you trust it, and our tests show the checks hold, <b>simple jobs close to home can book themselves</b>. You only handle the odd ones: diesels, big trucks, anything you can't size. For far towns and no-starts, the booking form tells them to call or text you, so those still come straight to you.",
      next: ['booking', 'whogoes', 'dayday']
    },
    {
      id: 'window', chip: 'What are the windows?', q: 'arrival window exact time held window off the online calendar',
      phrases: ['arrival window', 'the windows', 'a window', 'exact time', 'exact times', 'what time do they see',
                 'held window', 'window off', 'off the online calendar', 'kept off'],
      keys: 'window windows arrival exact held reserved spare',
      a: "Your day is split into a few <b>windows</b>, spaced so the drive between jobs fits in the gap. We'd suggest telling customers an <b>arrival window</b> rather than an exact minute; whether you'd rather promise the exact start time instead is your call on “Your schedule”.<br><br><b>One window a day stays off the online calendar</b>: that's your room for no-starts, fleet work and whatever ran long. You book into it yourself when you need it.",
      next: ['booking', 'runlong', 'nostart']
    },
    {
      id: 'fartowns', chip: 'How do far towns work?', q: 'far towns far away distance which days',
      phrases: ['far town', 'far towns', 'far away', 'too far', 'out of the way', 'long drive',
                 'jobs in houston', 'houston jobs', 'in katy', 'college station', 'my days',
                 'what towns', 'which towns', 'towns can book', 'my towns', 'service area', 'what areas', 'which areas', 'my area',
                 'katy', 'tomball', 'cypress', 'magnolia', 'kingwood', 'huntsville', 'in houston', 'to houston'],
      keys: 'far towns town distance houston katy tomball cypress magnolia kingwood area areas zone zones',
      a: "You draw the line on the schedule page: your home towns, and the longest drive between them. A town farther than that calls or texts you instead.<br><br>For far towns, <b>the booking form tells them to call or text you</b>, and you put them on your days.",
      next: ['booking', 'window', 'traffic']
    },
    {
      id: 'traffic', chip: 'Does it route around traffic?', q: 'traffic routing closest tech gps maps',
      phrases: ['live traffic', 'around traffic', 'in traffic', 'traffic jam', 'bad traffic', 'the traffic',
                 'routing', 'route around', 'best route', 'closest tech', 'nearest tech', 'rush hour', 'google maps', 'gps'],
      keys: 'traffic routing route gps maps closest nearest rush',
      a: "No. There's <b>no live-traffic routing</b>, and it won't pick the closest tech for you. Each window's room is sized from your longest drive between home towns, which you give us on the schedule page.<br><br>If a drive runs long, the window you keep off the online calendar gives you room.",
      next: ['window', 'fartowns', 'runlong']
    },
    {
      id: 'runlong', chip: 'What if a job runs long?', q: 'job runs long running late behind takes longer',
      phrases: ['runs long', 'run long', 'running late', 'running behind', 'run late', 'takes longer than',
                 'goes over', 'seized bolt', 'behind schedule'],
      keys: 'late behind long over overrun seized',
      a: "It'll still happen. A seized bolt is a seized bolt.<br><br>What helps: a job booked at its real length <b>takes the next start with it</b>, so nobody gets booked into its second or third hour, and the window you keep off the online calendar gives you room. When one runs over on the day, the next customer still needs a heads-up; the questionnaire asks who lets the next customer know, and once texting is approved it's a quick text.",
      next: ['window', 'rain', 'textcustomer']
    },
    {
      id: 'rain', chip: 'What about rain days?', q: 'rain storm rainy day move customers',
      phrases: ['rain day', 'rain days', 'rainy', 'rained out', 'rain out', 'when it rains', 'storm', 'too wet'],
      keys: 'rain rainy storm wet',
      a: "Those stay <b>yours to call</b>, same as now. What's different: the day's bookings are on one screen with each customer's number and car, so moving them is quicker.<br><br>SANO sets up the organizing; moving customers on a rain day stays with you.",
      next: ['runlong', 'vacation', 'dayday']
    },
    {
      id: 'whogoes', chip: 'Who decides who goes?', q: 'who goes which tech pick choose assign mechanic comes out',
      phrases: ['customer pick', 'customers pick', 'pick who', 'choose who', 'pick a tech', 'pick the tech', 'pick their tech', 'choose a tech', 'choose the tech', 'who goes', 'who comes out', 'which tech', 'pick a mechanic', 'ask for a tech', 'request a tech'],
      keys: 'pick choose assign tech techs technician mechanic goes comes send dispatch',
      a: "Customers pick the job and a window, not the tech. Who takes each job is your call: the questionnaire asks who decides, you when you confirm or whoever's free.",
      next: ['booking', 'staff', 'trust']
    },
    {
      id: 'diesel', chip: 'What about diesels and big trucks?', q: 'diesel heavy duty 3/4 ton one ton size',
      phrases: ['diesel', 'diesels', '3/4 ton', 'three quarter ton', 'one ton', '1 ton', 'big truck', 'big trucks', 'heavy duty', 'f-250', 'f-350'],
      keys: 'diesel diesels ton heavy duty duramax powerstroke cummins sized size',
      a: "For diesels and anything 3/4-ton or bigger, <b>the booking form tells them to call or text you</b>. They go through you first, so you can size them, because the job length depends on the truck.<br><br>You size it, quote it, book it yourself at the length you set, and add it to the same calendar, so online booking won't offer that time to anyone else.",
      next: ['booking', 'whogoes', 'fleet']
    },
    {
      id: 'doublebook', chip: 'What if two people book the same slot?', q: 'double booked two people same time conflict overlap',
      phrases: ['double book', 'same time', 'two people book', 'overlap', 'two jobs', 'at once', 'same slot'],
      keys: 'double conflict overlap same slot twice collision two',
      a: "When you book a job yourself, you add it to the same calendar the online booking reads, <b>so online booking won't offer that time</b>. It only offers start times the job fits in, and a long job takes the next start with it.<br><br>During the trust period every booking is also a request you confirm, so bookings don't land on your day without your yes.",
      next: ['booking', 'window']
    },

    /* ---------------- THE REST OF THE PACKAGE ---------------- */
    {
      id: 'tools', chip: 'What do I actually get?', q: 'what is included what do I get package everything',
      phrases: ['what do i get', 'what is included', 'comes with', 'the package',
                 'am i getting', 'actually getting', 'actually get', "what's included"],
      keys: 'get included include package tools everything comes features list',
      a: "One package, one price. Starting with the one you asked about:<br><br>1. <b>Scheduling that knows your time blocks</b>: your jobs at your lengths, the day in windows with the drive in the gaps, approvals at first<br>2. <b>Reminders</b> that send themselves<br>3. <b>A text back when you miss a call</b><br>4. <b>Common questions answered by text</b>, from answers we draft and you fix<br>5. <b>One review ask after each job</b><br>6. <b>Customers on file</b>, with the car and VIN<br><br>Plus the app. Your Google listing tidy-up comes later, only if you want it. Booking and email work first; the texting pieces join when the carriers approve AVRS.",
      next: ['booking', 'missedcall', 'reviews', 'googlelisting'], weight: 1
    },
    {
      id: 'reminders', chip: 'How do reminders work?', q: 'reminder reminders confirmation email forget appointment',
      phrases: ['reminder', 'reminders', 'remind them', 'remind customers', 'no shows', 'no-shows',
                 'confirmation email', 'forget their appointment'],
      keys: 'reminder reminders remind confirmation noshow forget email',
      a: "Customers get a <b>confirmation</b> when their booking's set and a <b>reminder the day before</b>. You don't send either one.<br><br>They go <b>by email from the start</b>, and by text too once the carriers approve AVRS. If your customers want Spanish, those texts can go out in Spanish too.",
      next: ['booking', 'reviews', 'spam']
    },
    {
      id: 'missedcall', chip: 'Missed-call text-back', q: 'missed call text back when I cant answer phone rings',
      phrases: ['missed call', 'miss a call', "can't answer", 'text back'],
      keys: 'missed call text back answer ring busy under car voicemail callback',
      a: "You're under a truck and a call comes in. You can't grab it.<br><br>The caller <b>gets a text that starts “AVRS Automotive:”</b>, so they know they reached you and not a voicemail box, and they can say what they need. You pick it up when your hands are clean.<br><br>It waits on the carriers approving AVRS for texting, and on a test that your phone passes the caller's number along when it forwards. Until then your calls work exactly like today.",
      next: ['autoanswers', 'callsnormal', 'textfrom']
    },
    {
      id: 'autoanswers', chip: 'Answers by text', q: 'auto answers questions faq repeat questions',
      phrases: ['auto answer', 'same questions', 'answer questions', 'faq', 'common questions', 'random questions'],
      keys: 'auto answers question repeat common faq reply respond same',
      a: "Questions texted to the AVRS number, like <b>“do you come to Willis?”</b> or <b>“can you do it while I'm at work?”</b>, get answered right away once the carriers approve AVRS. Texts to your own cell don't reach it.<br><br>We'll draft the answers from your site and your trade, and you fix them. It works from those answers: a question it wasn't taught goes to you instead of a guess. It only switches on after it passes a round of test questions, including ones it has to hand to you.",
      next: ['robot', 'missedcall', 'form']
    },
    {
      id: 'reviews', chip: 'Review asks', q: 'reviews google stars asking customers rating',
      phrases: ['google reviews', 'get reviews', 'review engine', 'more reviews', 'how many reviews', 'review count',
                 'number of reviews', 'my reviews', 'review ask', 'ask for reviews'],
      keys: 'review google star stars rating reputation ask asking feedback reviews',
      a: "After each finished job the customer gets <b>one</b> short note asking for a Google review, with the link, signed AVRS Automotive: by email from the start, by text once the carriers approve AVRS. One ask, no nagging, and cancelled jobs don't get one.<br><br>You're at <b>5.0 with 44 reviews</b> today, and the work already speaks for itself. This just makes sure happy customers get asked while the job is fresh. Google's own advice is that more reviews and good ratings help your local ranking.",
      next: ['badreview', 'googlelisting', 'tools']
    },
    {
      id: 'badreview', chip: 'What about a bad review?', q: 'bad review negative unhappy customer angry',
      phrases: ['bad review', 'negative review', 'unhappy customer', 'one star', '1 star', 'leaves a 1'],
      keys: 'bad negative angry unhappy complaint one star mad upset',
      a: "Honest answer: you can't stop someone from leaving a bad review, and anybody who tells you otherwise is selling something.<br><br>What this does is <b>make the math work for you</b>: when every happy customer gets asked, the occasional bad one gets buried. At 44 reviews today, a single one-star would take you from 5.0 to 4.9. Every new five-star makes the next bad one matter less.",
      next: ['reviews', 'proof']
    },
    {
      id: 'customerlog', chip: 'Customer records', q: 'customer records history vehicle car notes',
      phrases: ['customer log', 'keep track', 'customer records', 'service history', 'their vehicle',
                 'what i did', 'their car', 'on file'],
      keys: 'log record records history vehicle car notes track database file remember past',
      a: "Customers on file: <b>name, number, the car, its VIN, where it's parked, and the jobs booked for them</b>, a couple of taps away on your phone.<br><br>It fills in from the booking itself, so it isn't living in your head or a notebook in the door pocket.",
      next: ['vin', 'mydata', 'security']
    },
    {
      id: 'vin', chip: 'Why ask for the VIN?', q: 'vin door sticker photo upload trim parts',
      phrases: ['the vin', 'a vin', 'vin number', 'their vin', 'door sticker', 'send a photo', 'send a picture',
                 'upload a photo', 'upload a picture', 'upload'],
      keys: 'vin trim parts sticker photo upload identification',
      a: "So the parts match the trim before you roll. The booking form asks for the car and its <b>VIN, typed in</b>, and it lands on the customer's record.<br><br>If a customer wants to show you something, they can always text you a picture the way they do now.",
      next: ['customerlog', 'booking']
    },
    {
      id: 'googlelisting', chip: 'What happens to my Google listing?', q: 'google listing business profile hours tidy',
      phrases: ['google listing', 'google page', 'google profile', 'business profile', 'my listing',
                 'google business', 'my hours on google', 'google login', 'login for google', 'google password',
                 'access to google', 'access to my google'],
      keys: 'listing profile maps hours tidy tidied',
      a: "It comes <b>later, only if you want it</b>: your hours, towns and services on Google made to match how you actually work.<br><br>Later on purpose: some edits make Google re-check a listing, and 44 reviews are worth protecting. In this build, the only Google thing we ask you for is your review link.",
      next: ['reviews', 'tools', 'golive']
    },
    {
      id: 'app', chip: 'The app', q: 'app phone application download iphone android',
      phrases: ['the app', 'download the app', 'on my phone', 'app included', 'app come with',
                 'get an app', 'my own app', 'an app', 'which app', 'what app', 'what is the app', 'app store'],
      keys: 'app application download iphone android install screen',
      a: "The one you tapped through is <b>a sketch of what you'll see</b>. The real app is <b>a standard business app from your phone's app store</b>, laid out differently. We set it up and log you in, and it's included: your calendar, booking requests, customers and review asks.<br><br>During the trust period the regular thing you do is confirm booking requests from your phone. Your name isn't on the app's icon, but every text and email we send says AVRS Automotive.<br><br><b>You don't maintain it.</b> The one habit: jobs you book yourself go on the calendar.",
      next: ['brandedapp', 'learn', 'maintenance']
    },
    {
      id: 'brandedapp', chip: 'Can it have my name on it?', q: 'branded app my logo my name app store custom',
      phrases: ['my name on it', 'my name on', 'my logo', 'branded', 'app store', 'name on the app', 'my brand'],
      keys: 'branded brand logo icon custom appstore label',
      a: "Not on the app <i>you</i> use. That one's a standard app, and that's how the platform works.<br><br>What matters more: <b>every text and email we send says AVRS Automotive</b>: booking confirmations, reminders, review asks. Your name is on the parts your customers touch.",
      next: ['app', 'maintenance', 'dayday']
    },
    {
      id: 'dayday', chip: 'What does it look like day to day?', q: 'day to day daily experience what changes for me how will it look',
      phrases: ['day to day', 'daily', 'what changes for me', 'what will i see', 'look like for me',
                 'how will this look', 'my experience'],
      keys: 'daily routine experience change look see feel normal everyday',
      a: "Mostly, <b>your phone buzzing with things that already happened.</b> A booking comes in and you get a notification and an email with the name, the car, the job and where it's parked. At first you confirm each one from your phone; once you trust it, and our tests show the checks hold, simple jobs close to home can book themselves and you only handle the odd ones.<br><br>You answer your own calls like you do now. The app is for looking things up when you feel like it: tomorrow's jobs, a customer's car, your review asks. Every text and email we send says AVRS Automotive.<br><br><b>You don't maintain it.</b> The one habit: jobs you book yourself go on the calendar.",
      next: ['app', 'trust', 'whatido']
    },
    {
      id: 'report', chip: 'Will I get a monthly report?', q: 'monthly report numbers results summary',
      phrases: ['monthly report', 'the numbers', 'monthly rundown', 'a report'],
      keys: 'report numbers summary rundown stats recap breakdown',
      a: "Yes. A short rundown at the end of each month, written by a person, not a dashboard: bookings, reviews and missed calls, compared against where you started. It comes by text or email.<br><br>And after your three months it's month to month, so it has to keep earning its place.",
      next: ['proof', 'month4']
    },

    /* ---------------- PHONE / NUMBER ---------------- */
    {
      id: 'phone_number', chip: 'Do I change my number?', q: 'change my number phone number website',
      phrases: ['change my number', 'new number', 'my number', 'keep my number', 'call forwarding', 'call-forwarding', 'forward my calls', 'forwarding setting', 'set up forwarding', 'new phone number', 'a new phone number', 'get a new number', 'get a number', 'texting number', 'phone number'],
      keys: 'phone van website keep same',
      a: "<b>The automatic texts come from a new AVRS texting number we set up. Your own numbers stay yours, and calls you miss forward to it.</b><br><br>You answer your own calls like you do now. The forwarding is one setting on your phone, and it gets tested before any customer relies on it.",
      next: ['textfrom', 'callsnormal', 'missedcall']
    },
    {
      id: 'textfrom', chip: 'What number do texts come from?', q: 'what number will the automatic texts be sent from sender identity',
      phrases: ['what number do the texts', 'different number', 'texts come from',
                 'whose number', 'what number will', 'shop name', 'my name on the text', 'say avrs', 'identify',
                 'text is from', 'know it is me', "know it's me", 'know the text', 'who the text is from', "know it's from"],
      keys: 'sender sending identifies recognize unknown strange unfamiliar',
      a: "The automatic texts come from a new AVRS texting number we set up. Your own numbers stay yours, and calls you miss forward to it.<br><br>Every automatic text <b>starts with “AVRS Automotive:”</b>, so customers see the shop name first, not a mystery number.",
      next: ['phone_number', 'callsnormal', 'robot']
    },
    {
      id: 'callsnormal', chip: 'Can I still answer calls normally?', q: 'answer calls normally still use my phone',
      phrases: ['answer calls', 'answer my own', 'still answer', 'my own phone', 'still call me', 'still call',
                 'use my phone', 'call me directly', 'still ring', 'pick up'],
      keys: 'answer call ring normally directly usual regular same still',
      a: "Yes. Your phone rings like it always has, and you answer like you always have.<br><br>When you don't pick up, the call forwards to the AVRS line and the voicemail lives in the app. If you pick up, it stays out of the way.",
      next: ['missedcall', 'phone_number']
    },
    {
      id: 'answercalls', chip: 'Does it answer calls?', q: 'does it answer calls voice receptionist talk to callers',
      phrases: ['does it answer calls', 'does it answer the phone', 'does it answer', 'will it answer calls', 'it answer calls', 'answer the phone for me', 'ai receptionist', 'talk to callers', 'answering service', 'voice answering'],
      keys: 'voice receptionist answering live callers talk',
      a: "No. Live voice answering starts at Growth. At your level, a call you miss gets a text back once texting is approved.",
      next: ['missedcall', 'callsnormal', 'phone_number']
    },
    {
      id: 'newphone', chip: 'Do I need a new phone?', q: 'new phone hardware equipment buy anything',
      phrases: ['new phone', 'buy a phone', 'new equipment', 'hardware'],
      keys: 'hardware equipment buy device purchase computer',
      a: "No. Your phone, your plan and your numbers stay as they are.<br><br>You <b>don't buy any equipment.</b>",
      next: ['app', 'phone_number']
    },

    /* ---------------- OPERATIONS / EDGE CASES ---------------- */
    {
      id: 'afterhours', chip: 'What about nights and weekends?', q: 'night 2am after hours weekend late closed',
      phrases: ['2am', '3am', '11pm', 'after hours', 'at night', 'weekend', 'weekends',
                 'when im closed', 'middle of the night', 'while im asleep', 'midnight'],
      keys: 'night nights midnight weekend sunday saturday closed sleeping asleep evening overnight',
      a: "Someone who wants brakes next week can send a booking request at any hour, and you deal with it in the morning. Someone who texts the AVRS number at 9pm gets answered right then, once texting is approved.<br><br>A no-start is different: <b>the booking form tells them to call or text you</b>, same as now, and one window a day stays off the online calendar so there's room for it.",
      next: ['nostart', 'booking', 'quiet']
    },
    {
      id: 'nostart', chip: 'What about a no-start at night?', q: 'car will not start dead battery no start stranded night',
      phrases: ["won't start", "wont start", "will not start", "doesn't start", "didn't start", "can't start", "car won't", "car wont", "no start", "dead battery", "won't crank", "won't turn over", "stranded", "broke down", "broken down"],
      keys: 'start starting crank battery dead stranded stuck tow breakdown',
      a: "For a no-start, <b>the booking form tells them to call or text you</b>: its “does it start and drive?” question catches it. That lane stays yours: a stranded customer calls or texts you, same as now, and <b>one window a day stays off the online calendar</b> so there's room to go get them.<br><br>At 11pm, if you don't pick up, the missed-call text lets them know they reached AVRS (once texting is approved and your phone's forwarding passes its test), and it's waiting for you when you look. Whether anyone goes out that night is your call.",
      next: ['afterhours', 'window', 'missedcall']
    },
    {
      id: 'quiet', chip: 'Can I pause it?', q: 'turn off pause disable stop automations control',
      phrases: ['turn it off', 'shut it off', 'pause it', 'turn off the texts'],
      keys: 'off pause disable control override quiet mute silence toggle manual',
      a: "Yes. <b>You're in control.</b> Any piece can be paused or switched off: text Jasper and it's done.<br><br>And you can answer a customer yourself any time. It's your business; the system keeps it organized.",
      next: ['textcustomer', 'vacation', 'robot']
    },
    {
      id: 'vacation', chip: "What if I'm on vacation?", q: 'vacation time off sick away not working closed',
      phrases: ['on vacation', 'time off', 'out of town', 'week off', 'taking off', 'if im sick', 'days off'],
      keys: 'vacation off away holiday sick break trip unavailable',
      a: "Text Jasper the dates and <b>online booking won't offer them</b>.<br><br>Once texting is approved, the missed-call text can say when you're back, so people still get an answer instead of silence.",
      next: ['booking', 'quiet']
    },
    {
      id: 'textcustomer', chip: 'Can I text customers myself?', q: 'can i message a customer myself manually on my own',
      phrases: ['text them myself', 'text a customer', 'message someone', 'reach out'],
      keys: 'myself manual manually send own initiate write personally',
      a: "Yes, once the carriers approve AVRS: right from your phone, through the same number the automatic texts use. Every thread is a normal conversation you can jump into any time.<br><br>Handy for “running about 45 behind” or “your part came in”, and it lands in that customer's history.",
      next: ['customerlog', 'quiet']
    },
    {
      id: 'staff', chip: 'Can someone else use it?', q: 'wife helper employee second person access team',
      phrases: ['my wife', 'someone else', 'an employee', 'a helper', 'my son'],
      keys: 'staff employee wife helper team second person access another user login',
      a: "Yes. Your tech can have his own login, and so can anyone who helps with the phone or scheduling.",
      next: ['whogoes', 'grow', 'security']
    },
    {
      id: 'grow', chip: 'What if I grow?', q: 'grow bigger hire expand more jobs',
      phrases: ['if i grow', 'second truck', 'hire someone', 'get bigger', 'expand'],
      keys: 'grow bigger expand hire second scale more volume busy capacity',
      a: "It grows with you. Another van means another row on the same calendar, not a new setup.<br><br>Worth saying plainly: if you're <b>already maxed on jobs</b>, the win here isn't more leads. It's being organized, on time, and not holding the whole schedule in your head.",
      next: ['staff', 'proof']
    },
    {
      id: 'spanish', chip: 'What about Spanish speakers?', q: 'spanish speaking customers language bilingual',
      phrases: ['spanish', 'in spanish', 'bilingual', 'language', 'do you do spanish', 'spanish texts'],
      keys: 'spanish language bilingual english translate espanol',
      a: "Yes. SANO's price list includes <b>English and Spanish by text</b> on this package. Once texting is approved, the confirmation, reminder and missed-call texts can go out in Spanish too.<br><br>The schedule questionnaire asks whether your customers want Spanish.",
      next: ['autoanswers', 'form']
    },
    {
      id: 'fleet', chip: 'Fleet and commercial accounts?', q: 'fleet commercial business accounts company several vehicles',
      phrases: ['fleet', 'commercial account', 'business customers', 'company vehicles'],
      keys: 'fleet commercial company corporate accounts',
      a: "Fleet stays by phone, the way you run it now. Those are relationships, and a booking page isn't built for a yard full of trucks.<br><br>What helps: the window that stays off the online calendar every day is there for exactly this, and when you book a fleet job yourself, you add it to the same calendar, so online booking won't offer that time.",
      next: ['window', 'customerlog']
    },
    {
      id: 'robot', chip: 'Will it sound like a robot?', q: 'robot sound automated fake impersonal annoy',
      phrases: ['sound like a robot', 'sound fake', 'like a robot', 'impersonal', 'is it ai', 'an ai', 'is it a bot',
                 'artificial intelligence', 'a real person'],
      keys: 'robot automated fake impersonal weird annoying pushy tone voice sound',
      a: "It sounds like <b>you</b>: we draft the answers from your site and your trade, you fix them, and Jasper keeps them in your voice, not corporate-speak.<br><br>The reminders, the missed-call text and the review ask are set messages, written once. For common questions it works from the answers you fixed, and anything it wasn't taught goes to you instead of a guess. Short, plain texts, like “AVRS Automotive: Sorry we missed you. What's going on with it?”",
      next: ['autoanswers', 'spam', 'quiet']
    },
    {
      id: 'spam', chip: 'Will it annoy my regulars?', q: 'will it annoy pester bother my regulars too frequent',
      phrases: ['annoy', 'spam', 'too many texts', 'bother my customers', 'pester', 'bug my'],
      keys: 'annoy spam bother pester many frequency blast marketing bombard',
      a: "It's not a marketing blaster. Each message is <b>triggered by something real</b>: they booked, their job is tomorrow, you just finished their job, or they called and you missed it.<br><br>There are no random promos. A typical customer gets a confirmation, a reminder and one review ask around a job. Anyone can reply STOP and they're out.",
      next: ['robot', 'reviews', 'quiet']
    },

    /* ---------------- DATA / TRUST ---------------- */
    {
      id: 'security', chip: 'Is my data safe?', q: 'data safe secure private hacked who sees customer info',
      phrases: ['is my data safe', 'who sees', 'data secure', 'is it private', 'get hacked'],
      keys: 'security safe secure private hacked breach protected encrypted sees access confidential',
      a: "Your customer list is <b>yours</b>. It lives in your own account on an established platform a lot of businesses use, not something homemade.<br><br>Your list isn't sold, shared or pooled with other shops. Jasper has admin access to build and fix things for you, and that's it.",
      next: ['mydata', 'customerlog']
    },
    {
      id: 'mydata', chip: 'Do I keep my data if I leave?', q: 'keep my data if I leave export customers own',
      phrases: ['if i leave', 'keep my data', 'my customer list', 'export', 'my contacts', 'keep my contacts'],
      keys: 'keep own leave export download take list data ownership mine',
      a: "Yes. <b>You own your customer list.</b> If you ever leave, you get it exported, cars and VINs included.<br><br>Leaving isn't made painful on purpose: if the only reason you'd stay is that leaving is hard, it isn't worth paying for.",
      next: ['cancel', 'security']
    },
    {
      id: 'firstclient', chip: 'Have you done this before?', q: 'have you done this before experience first client trust',
      phrases: ['done this before', 'done this for', 'your first', 'any experience',
                 'other clients', 'other shops', 'who else', 'anyone else', 'anyone using'],
      keys: 'experience before first done other clients references proof track record trust new',
      a: "Straight up: <b>you're the first.</b> That's exactly why you're getting three months at a dollar and no setup fee, instead of the $997 setup and the regular monthly plus usage like everyone after you.<br><br>The platform isn't experimental; a lot of businesses already run on it. What's new is Jasper building it around <b>your</b> business. If he can't make it work for you, he's got no business selling it to anyone else.",
      next: ['catch', 'proof', 'support']
    },
    {
      id: 'whosano', chip: 'What is SANO?', q: 'what is sano who are you company jasper',
      phrases: ['what is sano', 'who are you', 'who is jasper', 'your company'],
      keys: 'sano company who jasper about behind real legit',
      a: "SANO is Jasper's company, a Texas LLC out of Houston. The idea is simple: give small local businesses the <b>office systems the big chains have</b>, without the office staff.<br><br>He's starting with AVRS because he'd rather prove it on one real shop he knows than chase fifty strangers. You can text him directly at <b>(832) 396-2496</b>. He's the whole company right now, which is the good and the bad of it.",
      next: ['firstclient', 'support']
    },

    /* ---------------- PROOF ---------------- */
    {
      id: 'proof', chip: 'How do I know it works?', q: 'how do I know its working proof results guarantee',
      phrases: ['how do i know it', 'how do i know if it', 'is it working', 'is this working', 'proof', 'guarantee', 'measure',
                 'what results', 'worth it', 'worth the money'],
      keys: 'proof results guarantee evidence measure track prove baseline',
      a: "Two ways, both concrete.<br><br><b>Before it starts:</b> “Your schedule” asks roughly how many calls a week go to voicemail today, and your Google count is 5.0 · 44. That's the starting point.<br><br><b>Every month after:</b> a short rundown of bookings, reviews and missed calls, compared against it.<br><br>And after your three months it's month to month. It has to keep earning it.",
      next: ['report', 'samplenumbers', 'cancel']
    },
    {
      id: 'samplenumbers', chip: 'Are the app numbers real?', q: 'numbers real fake sample example demo made up',
      phrases: ['numbers real', 'numbers in the app', 'sample numbers', 'made up',
                 'real data', 'fake', 'those numbers'],
      keys: 'real fake sample example demo made fictional actual pretend',
      a: "<b>No, and they're labeled that way on purpose.</b> The sketch on this page uses sample customers so you can feel how it moves.<br><br>Your real one starts <b>empty</b> and fills up with your actual customers and jobs.",
      next: ['app', 'proof']
    },
    {
      id: 'expect', chip: 'What results should I expect?', q: 'what results expect realistic how much more',
      phrases: ['what results', 'what should i expect', 'how much more', 'realistic'],
      keys: 'results expect realistic typical average outcome improvement gain lift',
      a: "Honest version, no invented numbers. The first thing you'll notice is the schedule: jobs at their real lengths, room for the drive, reminders going out without you.<br><br>Reviews follow, because each finished job gets one ask. Caught calls depend on how many you're missing today, which is why “Your schedule” asks. Anyone quoting you a percentage before knowing your starting point is guessing.",
      next: ['proof', 'reviews', 'grow']
    },

    /* ---------------- SCOPE ---------------- */
    {
      id: 'payments', chip: 'Can it take payments?', q: 'payments invoices get paid card charge customers',
      phrases: ['take payments', 'invoice', 'get paid', 'charge customers', 'accept cards', 'pay through'],
      keys: 'payment invoice paid card charge billing money collect checkout',
      a: "Not in this package, so the honest answer is <b>no, not on day one</b>. You'd keep collecting the way you do now.<br><br>Jasper would rather nail what you're actually getting than half-build something extra. If getting paid is a real headache for you, tell him. That's exactly the kind of thing he wants to hear from his first client: <b>(832) 396-2496</b>.",
      next: ['roadmap', 'tools']
    },
    {
      id: 'website', chip: 'Do I get a website?', q: 'website new site web page build me a site',
      phrases: ['a website', 'my website', 'build a site', 'new site'],
      keys: 'website site web page online design build seo',
      a: "Not part of this package. This is the <b>office side</b>: scheduling, reminders, answers, reviews, records.<br><br>Your site keeps working as it does. The one thing that touches it: a privacy page and terms go up on it for the texting approval (we write them). Putting the booking link on your site and your Google listing comes later.",
      next: ['tools', 'delay']
    },
    {
      id: 'leads', chip: 'Do you get me more customers?', q: 'more customers leads advertising marketing google ads',
      phrases: ['more customers', 'get me leads', 'advertising', 'marketing', 'google ads', 'running ads', 'ads for me'],
      keys: 'leads customers advertising marketing ads promotion new business generate',
      a: "Not directly, and Jasper won't pretend otherwise. <b>This isn't an ad service.</b><br><br>What it does is keep your day organized and stop you <b>losing</b> the customers already trying to reach you: the missed calls, the people who gave up waiting, the ones who never got asked for a review.<br><br>Growing your review count does bring new customers over time, just indirectly: more reviews, more calls.",
      next: ['reviews', 'expect', 'missedcall']
    },
    {
      id: 'roadmap', chip: "What's coming later?", q: 'roadmap future new features coming soon updates',
      phrases: ['coming later', 'roadmap', 'new features', 'in the future', 'what else', 'adding', 'add next'],
      keys: 'roadmap future coming later new features updates upgrade next soon',
      a: "Keeping it current is SANO's job, not yours, and that's part of what the monthly is for.<br><br>Jasper would rather not read you a list of things that don't exist yet. Ask him what's actually close and he'll tell you straight: <b>(832) 396-2496</b>.",
      next: ['payments', 'month4']
    },

    /* ---------------- SERVICE ---------------- */
    {
      id: 'maintenance', chip: 'Do I have to maintain it?', q: 'update maintain manage upkeep run it myself software updates',
      phrases: ['have to update', 'do i update', 'maintain', 'maintenance', 'upkeep',
                 'keep it running', 'manage it', 'run it myself', 'updates'],
      keys: 'update updates maintain maintenance upkeep manage admin settings configure',
      a: "<b>No.</b> That's the point of paying someone instead of buying software.<br><br>No updates to install and no settings to configure. If something needs changing, like your hours, your menu or a new question you're sick of answering, <b>you text Jasper and he changes it.</b><br><br><b>You don't maintain it.</b> The one habit: jobs you book yourself go on the calendar. During the trust period you also confirm booking requests from your phone.",
      next: ['app', 'support', 'dayday']
    },
    {
      id: 'support', chip: 'Who do I call if it breaks?', q: 'support help breaks problem who do I call',
      phrases: ['if it breaks', 'who do i call', 'support', 'need help', 'something goes wrong'],
      keys: 'support help break broken problem issue call contact respond service',
      a: "<b>You text Jasper.</b> (832) 396-2496, the same number you'd text now. Not a ticket system, not a call center.<br><br>You're client #1, and you'll get his full attention. If something's broken, say so and it gets fixed.",
      next: ['changes', 'firstclient']
    },
    {
      id: 'changes', chip: 'What if I want changes?', q: 'changes adjust tweak different hours prices update',
      phrases: ['want changes', 'change something', 'adjust it', 'tweak'],
      keys: 'change adjust tweak modify different edit revise alter',
      a: "Just say so. Hours change, job lengths change, you think of a better way to answer a question. Text it over and it gets changed.<br><br>Expect some of this early on. That's normal, and it's how it ends up sounding like you instead of like a template.",
      next: ['support', 'golive']
    },
    {
      id: 'testing', chip: 'What are the ten test bookings?', q: 'ten fake test bookings testing before customers',
      phrases: ['fake bookings', 'fake booking', 'test bookings', 'test booking', 'ten bookings', 'ten fake', '10 fake', 'testing it'],
      keys: 'test testing tested fake trial practice dry run',
      a: "Before any real customer sees it, we run <b>ten test bookings</b> with you and your tech, the tricky kinds: a far-town zip that has to get stopped, a diag, three jobs in one day, a diesel, a Saturday, a rain day.<br><br>If anything books wrong, it gets fixed then, so your first real customer isn't the test.",
      next: ['golive', 'start', 'booking']
    },
    {
      id: 'golive', chip: 'What happens after I say yes?', q: 'what happens next after yes steps process order',
      phrases: ['if i say yes', 'what happens next', 'next steps', 'after i say yes', 'after yes', 'once i say yes', 'what happens after i say yes'],
      keys: 'next steps process order first after',
      a: "In order, with no dates on purpose:<br><br>1. <b>“Your schedule”</b>, the “Tell me how your day runs” button on this page. Fill it in with your tech for his part, or talk it through with Jasper.<br>2. You text Jasper <b>“I'm in.”</b> Your three months start the day you text Jasper that you're in.<br>3. <b>“Getting you set up”</b>, the paperwork part of the questionnaire.<br>4. Jasper builds it, you install the app, and you and your tech run <b>ten test bookings</b> before any customer sees it.<br>5. <b>Booking turns on</b>, with your approvals at first, and email confirmations and reminders.<br>6. A privacy page and terms go up on your website (we write both) and the carriers approve AVRS. That timing is the carriers' call.<br>7. <b>The texting pieces switch on</b>; the missed-call text once one call-forwarding setting on your phone passes its test.",
      next: ['start', 'timeline', 'delay']
    },
    {
      id: 'contact', chip: 'How do I reach Jasper?', q: 'contact reach text call jasper phone number',
      phrases: ['reach you', 'text you', 'call you', 'get ahold', 'your number', 'your phone number'],
      keys: 'reach talk speak hold jasper directly',
      a: "<b>Text him: (832) 396-2496.</b> Straight to his phone.<br><br>Say what you think either way. If it's a no, that's genuinely fine, and he'd rather hear it than wonder.",
      next: ['sayyes', 'price']
    }
  ]
};
