/* Answer set for the on-page assistant. Content is client-specific;
   the engine that reads it is generic. */
window.SANO_BOT_CONFIG = {
  title: 'SANO Assistant',
  subtitle: 'answers about your deal',
  avatar: 'S',
  launchLabel: 'Ask about the deal',
  revealAfter: '.stage',
  hideAfter: '.cta',
  placeholder: 'Ask me anything…',
  greeting: "Hey Carolyn ✨ ask me anything about this — what it costs, what you'd actually have to do, whether a robot's talking to your girls, what happens with Mariana's booking. Straight answers. Anything I can't answer, Jasper will.",

  escalate: { chip: '💬 Text Jasper', href: 'sms:+18323962496' },
  clarify: "Want to make sure I answer the right thing — which one do you mean?",

  fallbacks: [
    "That one I'd rather not guess at — text Jasper at <b>(832) 396-2496</b> and he'll answer it straight. Here's what I do know though:",
    "Honestly not sure on that one, and I'd rather say so than make something up. Jasper's at <b>(832) 396-2496</b>. I can cover these:",
    "That's outside what I've got — text Jasper, <b>(832) 396-2496</b>. Or try one of these:"
  ],

  synonyms: {
    cost:'price', costs:'price', pricing:'price', charge:'price', expensive:'price', cheap:'price',
    afford:'price', money:'price', fee:'price',
    quit:'cancel', stop:'cancel', leave:'cancel', refund:'cancel',
    cell:'phone', mobile:'phone', line:'phone',
    txt:'text', texting:'text', sms:'text', dm:'dms', dms:'dms', instagram:'dms', ig:'dms',
    appointment:'booking', schedule:'booking', calendar:'booking', book:'booking', acuity:'booking',
    google:'reviews', stars:'reviews', rating:'reviews', review:'reviews',
    client:'clients', customer:'clients', customers:'clients', girl:'girls', employee:'girls',
    employees:'girls', staff:'girls', worker:'girls', hire:'hiring', hiring:'hiring',
    training:'training', course:'training', teach:'training',
    stock:'inventory', supplies:'inventory', adhesive:'inventory', trays:'inventory',
    robot:'automated', bot:'automated', ai:'automated', chatbot:'automated',
    rebook:'fills', refill:'fills', fill:'fills', recall:'fills',
    partner:'mariana', 'co-owner':'mariana', insurance:'insurance'
  },

  ambient: 'client clients girls text texts phone number app month monthly business ' +
           'appointment appointments booking lashes lash set full studio people time week day thing',

  starters: ['whatisit', 'capacity', 'automated', 'day90'],
  popular: ['whatisit', 'capacity', 'day90', 'automated', 'nextstep', 'price', 'mariana'],

  kb: [
    {
      id:'whatisit', chip:'So what is it, exactly?', q:'what is it what am i getting explain is it an app software',
      phrases:['what is it','what is this','what exactly is','what am i getting','is it an app','is it software','how does it work'],
      keys:'what explain describe thing product service app tool understand',
      a:"It's a front desk. <b>It just isn't a person sitting in your lobby.</b><br><br><b>1. A number that answers.</b> Calls picked up by a warm voice; texts and DMs answered in seconds — mid-set, closed, or asleep.<br><b>2. Messages that send themselves.</b> Reminders, aftercare, \"you're due for a fill\", the Christmas deal — in your words, approved by you once.<br><b>3. An app you never have to run.</b> Everything in one place. Open it or don't.<br><b>4. Jasper actually running it</b> — building it round how you work, watching it, fixing what breaks.<br><br>Nothing to install, log into, or learn ✨",
      next:['dayday','automated','whatido']
    },
    {
      id:'dayday', chip:'What changes about my day?', q:'my day day to day what changes daily routine',
      phrases:['my actual day','day to day','my day','what changes for me','a typical day'],
      keys:'day daily routine morning evening life hours changes',
      a:"You wake up and last night's DMs are already answered — and one of them booked herself.<br><br>The phone rings mid-set and it gets picked up and booked <b>without you breaking your set.</b> You eat lunch.<br><br>And at 9pm you're not lying there remembering you meant to text Sofia about her fill — <b>Sofia got texted Tuesday and she's in Thursday.</b><br><br>You still answer whatever you feel like answering. It only steps in when you can't 🤍",
      next:['fills','automated','whatido']
    },
    {
      id:'automated', chip:'Is a robot talking to my girls?', q:'robot ai bot talking to my clients automated impersonal fake',
      phrases:['is a robot','a robot talking','is it a bot','is this ai','talking to my clients','sound like a robot','sound fake','replace me'],
      keys:'automated robotic impersonal fake pretend human real voice tone genuine cold',
      a:"Not the way you're picturing. <b>It's a front desk, not a fake you.</b><br><br>It never pretends to be you — and it never announces itself as somebody else either. If something needs you, it just says <i>\"let me have a proper look at that and come straight back to you\"</i> and hands it to you. <b>Your girls never get told they're talking to a service.</b><br><br><b>Every word is yours.</b> Jasper writes it in your voice from your answers, you read it once and change anything that sounds off, and <b>nothing sends until you've said yes.</b> If it hasn't been taught something it doesn't make it up — it hands it to you.<br><br>And anything about someone's <b>eyes, a reaction, or her lashes not feeling right</b> goes straight to your phone, flagged. Never answered automatically.",
      next:['approve','dayday','whatido']
    },
    {
      id:'approve', chip:'Do I get to approve the messages?', q:'approve messages wording see what it says before sending control',
      phrases:['approve the messages','see what it says','change the wording','my words','do i get to see'],
      keys:'approve approval wording edit change review control draft',
      a:"Yes — properly, not as a formality. <b>Nothing goes out that you haven't read.</b><br><br>Jasper writes everything in your voice from the answers you give him. You go through it once, rewrite anything that doesn't sound like you, and only then does it go live.<br><br>Want something changed later? You text him. You never log into anything to do it.",
      next:['automated','whatido']
    },
    {
      id:'price', chip:"What's it cost?", q:'how much is it price cost monthly',
      phrases:['how much is it','what does it cost','what is the price','how much'],
      keys:'price dollar 999 total pay payment worth deal rate',
      a:"<b>$1 a month for your first six months</b> — six dollars total, on a card so it's a real account and not a favour.<br><br>After that it's <b>$999/month</b>, cancel anytime, no contract. Telling you now so month seven isn't a surprise.<br><br>And the <b>$2,497 setup fee is waived entirely.</b> Altogether that's <b>$8,485 you don't pay.</b>",
      next:['catch','month7','videos','cancel']
    },
    {
      id:'catch', chip:"What's the catch?", q:'why is it a dollar what is the catch too good to be true',
      phrases:['the catch','why so cheap','why is it $1','why a dollar','too good to be true'],
      keys:'catch why dollar cheap free scam trick founding hidden',
      a:"You'd be one of the <b>first two</b>. Jasper needs to prove this on a real business and learn from a real owner — that's worth more to him than six months of fees.<br><br>The actual catch: <b>three short phone videos</b> about how it's going (day one, 30 days, 90 days), and he'll ask you a lot of questions along the way. That's it.",
      next:['videos','firstclient','month7']
    },
    {
      id:'month7', chip:'What happens after six months?', q:'after six months month 7 price go up then what',
      phrases:['month 7','month seven','after six months','after the six months','then what'],
      keys:'after month7 later renew continue increase raise 999',
      a:"It becomes <b>$999/month</b> — the number you already know from day one.<br><br>No secret discounted rate that carries on. <b>The six months at a dollar IS the deal.</b> After that you pay what everyone pays, because by then it should have earned it. Month to month, cancel with a text.",
      next:['cancel','worth','price']
    },
    {
      id:'worth', chip:'Is $999 worth it for us?', q:'worth it value expensive justify small studio',
      phrases:['worth it','worth the money','justify','we are small','only two of us'],
      keys:'worth value justify small afford expensive pays',
      a:"Do it in your own numbers — there's a calculator on the page.<br><br>But the honest answer is that the front desk isn't where the money is. <b>The money is the hire it lets you make.</b> One more girl doing three clients a day, four days a week, at around $95 is roughly <b>$4,900 a month</b>. Against $999.<br><br>The front desk paying for itself in recovered clients is the <i>floor</i>, not the return. And if the maths doesn't work for you, say so straight — Jasper would rather hear it now than have you find out in month seven.",
      next:['fills','month7','cancel']
    },
    {
      id:'videos', chip:'What are the 3 videos?', q:'testimonial videos record on camera',
      phrases:['the videos','three videos','testimonial','on camera'],
      keys:'video videos testimonial record filming camera trade',
      a:"Three short videos on your phone — <b>day one, 30 days, 90 days</b>. Literally you talking for a minute about what it's doing, what you like, what's annoying.<br><br>That's what replaces the setup fee. No script, no crew. And if something isn't working, say that on camera too — honest is more useful than flattering.",
      next:['catch','price']
    },
    {
      id:'cancel', chip:"What if I don't like it?", q:'cancel quit contract locked in get out refund',
      phrases:["don't like it",'want out','back out','change my mind','sign a contract','locked in'],
      keys:'cancel quit contract commitment locked trap refund stuck obligation',
      a:"<b>Cancel anytime with one text.</b> No contract, no notice period, no fee — and you're out a few dollars.<br><br>Your number, your Google, your clients, your records: exactly as they were. Nothing's held hostage. Worst case you got six months of the whole thing for six bucks.",
      next:['month7','phone_number','firstclient']
    },
    {
      id:'whatido', chip:'What do I have to do?', q:'what do I have to do my part work effort my end',
      phrases:['what do i have to do','what do i need to do','my part','how much work','on my end','need from me'],
      keys:'do effort work involved part responsibility commitment lift',
      a:"Almost nothing, and that's the point.<br><br><b>One form, about ten minutes</b> — your services, your prices, your hours, and the questions you're sick of answering. Only you know those.<br><br>Then you read what Jasper wrote and tell him what doesn't sound like you. He builds the rest. Bookings and updates just start arriving as texts.",
      next:['approve','learn','timeline']
    },
    {
      id:'learn', chip:'Do I have to learn new software?', q:'learn software complicated another app manage maintain',
      phrases:['learn new software','learn a system','not good with computers','another app','have to manage'],
      keys:'learn software training complicated technical manage maintain login dashboard',
      a:"No. <b>If you never opened the app once, everything would still work.</b><br><br>You get it free from day one — it's the one at the top of this page — but it's there for when you feel like looking, not something you have to run. No updates, no settings, nothing to maintain. That part's permanently Jasper's, and it's most of what you're paying for.",
      next:['whatido','timeline']
    },
    {
      id:'timeline', chip:'How long until it works?', q:'how long timeline when live ready setup time',
      phrases:['how long','when will it be','how soon','up and running','until it works'],
      keys:'timeline long soon days weeks live launch ready start build',
      a:"<b>Week one:</b> the five fixes — your reviews, your prices, the Google thing, the legal pages, and the dead \"Coming soon\" button.<br><b>About 30 days:</b> the inbox and the timeline.<br><b>By 60:</b> the hiring and training side.<br><br>One bit genuinely isn't in Jasper's hands — <b>the phone carriers have to approve your number</b> before it can send automatic texts, and that takes a week or two on its own. Everything else gets built while that's pending.",
      next:['whatido','firstclient']
    },
    {
      id:'bookinglink', chip:'Which button is broken?', q:'booking link broken 404 dead not working book button coming soon jewellery',
      phrases:['booking link','link is dead','broken link','404','book button','not working','coming soon button'],
      keys:'broken dead 404 link book button error coming soon jewellery jewelry',
      a:"<b>Your lash booking works fine</b> — worth saying that first, because it's the one that matters.<br><br>The broken one is the <b>\"Coming soon\" permanent jewellery button</b> on your booking page. It points at an old address that's been switched off, so it 404s. You're advertising a service nobody can actually book.<br><br>Your old <b>peachy-chic.co</b> domain is dead too — anyone with an old link or bookmark gets a security warning instead of your site.<br><br>Both are quick fixes, and they're in week one.",
      next:['reviews','mariana','whatisit']
    },
    {
      id:'reviews', chip:'What about my 49 reviews?', q:'reviews google stars 49 peachy chic old name lost',
      phrases:['my reviews','49 reviews','google reviews','old name','peachy chic'],
      keys:'reviews google stars rating reputation lost transfer move old',
      a:"They're all still under <b>Peachy Chic Cosmetics at the Katy address</b> — 4.8 stars, 49 of them, a lot with your name in them.<br><br>Here's the bit that matters: <b>reviews move with a listing when you rename it. They can never be moved into a brand-new one.</b> So if a fresh Google listing gets made for Peach &amp; Tefi, those 49 are gone permanently. Done the right way, they come with you.<br><br>That's why it's week one and not later. First question Jasper needs: <b>do you still have access to the old listing?</b>",
      next:['bookinglink','google','timeline']
    },
    {
      id:'insurance', chip:'Can you help with the insurance?', q:'insurance liability cover policy',
      phrases:['the insurance','with insurance','liability','my policy'],
      keys:'insurance liability policy cover broker premium',
      a:"Straight answer: <b>no, and Jasper isn't going to pretend otherwise.</b> He doesn't sell insurance and he'd be no good at advising you on it.<br><br>What he <b>can</b> do is stop it being a thing you're forgetting — <b>your renewal goes on the calendar</b> so a policy never quietly lapses, the policy gets stored with everything else, and if you want your girls carrying their own, proof of it goes in their onboarding pack.<br><br>He's happy to point you at people. Just not going to charge you for it.",
      next:['hiring','training']
    },
    {
      id:'hiring', chip:'How does the hiring part work?', q:'hiring girls applicants applications tryout interview',
      phrases:['the hiring','hire someone','applicants','applications','tryout','interview'],
      keys:'hiring hire applicant application recruit tryout interview candidate',
      a:"Right now the girls who want to work for you land in the <b>same inbox as your clients</b>, and there's nowhere on your site for them to go. So:<br><br>✿ A <b>careers page and an application form</b> — they stop arriving in your DMs<br>✿ Every applicant in <b>one list</b>: Applied → Screened → Tryout → Hired<br>✿ <b>Everyone gets an answer automatically</b> at every stage. You never write \"thanks for applying\" again<br>✿ 🪪 <b>Her TDLR licence checked before she gets near a chair</b> — she can't reach Tryout until it's verified. Your facility licence is on the line, not just hers<br>✿ A <b>tryout that books itself</b> into your calendar, prep already sent<br>✿ A <b>scorecard</b> you fill in once, so you compare girls side by side instead of from memory",
      next:['training','insurance','whatisit']
    },
    {
      id:'training', chip:'Tell me about the training portal', q:'training portal modules teach new girls onboarding paperwork',
      phrases:['training portal','the training','train my girls','new girl','onboarding','the paperwork'],
      keys:'training portal module lesson quiz teach onboard paperwork contract sign document',
      a:"<b>First — employees or contractors? Your call, and it changes what gets built.</b> Own staff means a proper training system with sign-offs. Contractors with their own book means something lighter — reference material and an onboarding pack, not mandatory modules.<br><br>Either way you build it <b>once</b>, then every girl after her goes through the same thing:<br><br>✿ Upload your way of doing things — videos, technique, standards, retention<br>✿ <b>Quizzes with a pass mark</b>, so nobody touches a client until they've actually got it<br>✿ You can <b>see who's finished what</b> without chasing anyone<br>✿ Contractor agreement, handbook, policies — <b>sent, signed on their phone, filed</b><br>✿ A day one / day three / week one sequence that walks her through it for you<br><br><b>Straight on the limits:</b> this is the paperwork and the process, <b>not HR and not legal advice</b> — no I-9s, no state new-hire filing, no payroll. Training content is yours; Jasper builds the thing it lives in.<br><br>🔴 <b>And one thing you should hear early:</b> if you bring girls on as <b>1099 contractors</b> but the system makes them pass your quiz and work to your standards, that's controlling <i>how</i> they work — which is what gets a studio reclassified and hit with back taxes. So you decide <b>W-2 or contractor up front</b> and he builds to match. <b>How you classify and pay them is for an employment attorney or a payroll service, not for him.</b>",
      next:['hiring','whatido','insurance']
    },
    {
      id:'fills', chip:'How does the fill reminder work?', q:'fills refills due back rebooking coming back reminder two three weeks',
      phrases:['fill reminder','due for a fill','coming back','rebooking','the fills'],
      keys:'fill fills refill rebook return due overdue lapsed again repeat',
      a:"Lashes come off on a schedule — <b>every two to three weeks, like clockwork.</b> So the day someone's in your chair, we already know roughly when she'll need you again.<br><br>When that week comes, <b>she hears from you</b> — warm, in your words, no pressure. And if six weeks go by and she hasn't been in, she gets a <i>\"we miss you\"</i>.<br><br>Right now the only thing keeping track of that is you remembering. <b>This is the part that pays for the whole thing</b> — it doesn't need a single new client to be worth it.",
      next:['worth','dms','timeline']
    },
    {
      id:'dms', chip:'Does it handle my Instagram DMs?', q:'instagram dms social messages inbox one place',
      phrases:['instagram dms','my dms','instagram messages','one inbox','all in one place'],
      keys:'instagram dm dms social messenger facebook inbox one place unified',
      a:"Yes — and it's the bit that surprises people most.<br><br>Instagram, Facebook, texts, email, web chat, missed calls — <b>all one conversation per person</b>, with her whole history sitting there. Someone DMs you at 11pm, texts you in the morning, then calls: it's <b>one thread</b>, and she never has to re-explain who she is.<br><br>You open one app instead of five 🤍",
      next:['automated','fills','whatisit']
    },
    {
      id:'mariana', chip:'Does Mariana need to be involved?', q:'mariana partner co-owner booking calendar switch acuity',
      phrases:['does mariana','my partner','the other owner','switch my booking','change booking','my calendar'],
      keys:'mariana partner owner booking calendar acuity switch move together',
      a:"<b>However you two actually work — tell Jasper and he builds to it.</b><br><br>You wrote \"bottlenecks for me personally\" and \"girls who want to work for <i>me</i>\", so he's built this as <b>yours</b>. If that's right, none of it touches her.<br><br>The one place it might: <b>if you share a booking calendar.</b> For the chat to book someone straight in, that calendar needs to come across — and if it's shared, that's a three-way conversation rather than something sprung on her. <b>If you each run your own book, this is just yours.</b>",
      next:['bookinglink','whatisit']
    },
    {
      id:'inventory', chip:'What about inventory?', q:'inventory stock adhesive trays supplies running out',
      phrases:['the inventory','my stock','running out','supplies','adhesive'],
      keys:'inventory stock supplies adhesive trays tweezers order reorder low',
      a:"Simple version, and it works:<br><br>✿ Trays, adhesive, tweezers, jewellery — <b>one list</b>, not in your head<br>✿ Set the number once and <b>you get a text when you're getting low</b><br>✿ Reorder links saved, so it's one tap to the supplier you already use<br><br>Not glamorous. But <i>\"some bullshit happened and I didn't pay attention\"</i> stops costing you a client.",
      next:['training','whatisit']
    },
    {
      id:'prices_page', chip:'Why does my site need prices?', q:'prices on my website publish pricing show prices',
      phrases:['put my prices','prices on my site','publish prices','show my prices'],
      keys:'price prices published website page show list menu',
      a:"Right now there isn't a single price anywhere on ptstudios.co — the only dollar figure on the whole site is the $25 after-hours fee.<br><br>Every lash studio near you publishes theirs. So <b>every conversation you have starts with \"how much?\"</b> — and you answer it, by hand, forever.<br><br>Putting them up (and teaching the chat to answer it) takes a big bite out of the message pile on its own.",
      next:['dms','bookinglink']
    },
    {
      id:'google', chip:'Can you help me show up on Google?', q:'google seo show up search found near me listing',
      phrases:['show up on google','get found','google listing','near me','seo'],
      keys:'google seo search local found listing profile maps rank',
      a:"Partly, and here's the honest split.<br><br><b>What's real:</b> your listing kept current — hours, services, photos — plus review requests going out automatically, which is genuinely one of the things Google pays attention to. And there's a fix needed: your site's code still tells Google you're <b>\"The Suite Spot\" in Katy</b>, which has been quietly working against you.<br><br><b>What's not:</b> Jasper isn't going to promise you page-one rankings. Anyone who does is guessing.",
      next:['reviews','prices_page']
    },
    {
      id:'spanish', chip:'Does it speak Spanish?', q:'spanish bilingual espanol language',
      phrases:['speak spanish','in spanish','bilingual','espanol'],
      keys:'spanish bilingual language english translate',
      a:"Yes — out loud on the phone, and in messages. Properly, not a translated script.<br><br>This is Houston. When that's easier for someone, she gets answered in Spanish with the same warmth and the same answers.",
      next:['dms','automated']
    },
    {
      id:'phone_number', chip:'Do I have to change my number?', q:'change my phone number new number keep my number',
      phrases:['change my number','new number','keep my number'],
      keys:'number line phone change keep same route forward',
      a:"No. It stays exactly where it is — your Instagram, your Google, your signs, your business cards.<br><br>It gets routed behind the scenes, and every automatic text says who it's from, so nobody's ever confused.",
      next:['cancel','automated']
    },
    {
      id:'firstclient', chip:'Have you done this before?', q:'have you done this before experience first client proof',
      phrases:['done this before','your first','am i the experiment','other clients','who else'],
      keys:'experience before first proof credibility trust experiment reference',
      a:"Straight up: you'd be one of Jasper's first. <b>That's exactly why it's a dollar</b> instead of $2,497 up front like everyone after you.<br><br>He'll need a lot of back-and-forth from you to get it right — and that's the good part. You end up with something built around how <i>you</i> work instead of something generic.<br><br>And you're one of the only people who can fire him for free.",
      next:['catch','cancel','timeline']
    },
    {
      id:'capacity', chip:"What if I'm already booked solid?", q:'booked solid full capacity no room busy already turning people away',
      phrases:['booked solid','already full','no room','turning people away','at capacity','fully booked'],
      keys:'capacity full booked room busy slots availability space',
      a:"Then the answer is what you already said it was — <b>hire.</b> And you're in a better spot than most, because <b>you've already got girls who want to work for you.</b> That's the hard part and it's solved.<br><br>What's stopping you isn't willingness, it's <b>order of operations.</b> A new girl doesn't take work off you, she <i>adds</i> it — her schedule, her paperwork, her training, her clients' messages, all landing on the person who's already the front desk for two.<br><br>So the admin has to run itself first. <b>Then there's room to bring someone in — and the second girl costs you almost nothing.</b>",
      next:['day90','hiring','raiseprices']
    },
    {
      id:'raiseprices', chip:'Should I raise my prices?', q:'raise prices price increase charge more pricing too cheap',
      phrases:['raise my prices','price increase','charge more','put my prices up','am i too cheap'],
      keys:'price raise increase charge higher cheap underpriced pricing',
      a:"Probably, yes — but treat it as <b>free money on the side, not the plan.</b><br><br>You're at around <b>$115</b> for a classic set with a 4.8 and girls you can't fit in. That's a demand signal, and putting your prices up costs you nothing and needs no paperwork.<br><br><b>But you don't grow by charging more for the same two pairs of hands.</b> It lifts the ceiling a bit; it doesn't move it. <b>Hiring moves it</b> — and you've already got the girls waiting, which is the part most studios never get.",
      next:['capacity','day90','hiring']
    },
    {
      id:'classification', chip:'Employee or contractor?', q:'employee contractor 1099 w2 classification payroll taxes',
      phrases:['1099','w-2','w2','employee or contractor','independent contractor','classification','payroll taxes'],
      keys:'employee contractor 1099 w2 classify payroll tax irs misclassification',
      a:"You decide that up front and Jasper builds to match — <b>and it genuinely matters.</b><br><br>If you take girls on as <b>1099 contractors</b> but the system makes them pass your quiz and work to your standards, that's you controlling <i>how</i> the work gets done. That's exactly the test that gets a studio reclassified and landed with back taxes.<br><br>So: <b>W-2 or contractor, decided before anything's built.</b> And the actual classifying and paying is a question for <b>an employment attorney or a payroll service</b> — not for Jasper. He'd rather flag it now than build you a problem.",
      next:['training','hiring','licence']
    },
    {
      id:'licence', chip:'Do you check licences?', q:'licence license tdlr certified qualified verify state board',
      phrases:['licence','license','tdlr','state board','certified','verify her licence'],
      keys:'licence license tdlr certification verify state board legal qualified',
      a:"Yes — and it's built into the pipeline, not an afterthought.<br><br><b>An applicant can't move to Tryout until her TDLR licence is verified.</b> Lash extensions are a licensed trade in Texas, and a studio running a chair with an unlicensed tech is risking <b>its own facility licence</b>, not just hers.<br><br>One field, and it's the sort of thing that's very easy to skip when you're busy and very expensive to have skipped.",
      next:['hiring','classification']
    },
    {
      id:'noshows', chip:'Can you help with no-shows?', q:'no shows deposits cancellations empty slot waitlist',
      phrases:['no shows','no-shows','deposits','cancellations','empty slot','someone cancels'],
      keys:'noshow deposit cancel late waitlist slot empty fill refill missed',
      a:"Yes, and this is the most expensive hole in your week right now.<br><br>A two-hour set that no-shows at 11am <b>can't be refilled at 10</b>. So: a <b>deposit and a cancellation policy</b> if you want one, reminders before the day, and a <b>cancellation list</b> — a slot opens, the girls waiting get texted, it fills itself.<br><br>Plus rescheduling she can do herself, without three texts back and forth with you.",
      next:['fills','whatisit']
    },
    {
      id:'dataownership', chip:'Whose clients are they?', q:'my data my clients own list export leave take my clients hostage',
      phrases:['whose clients','my data','my list','own my clients','if i leave','export'],
      keys:'data own ownership list clients export leave hostage keep mine',
      a:"<b>Yours. Always.</b><br><br>Your clients, their numbers, their history, your Google listing, your phone number — all of it in your name. <b>If you ever leave, Jasper exports the lot and hands it to you.</b> Nothing gets held hostage.<br><br>And that'll be in writing, not just a promise on a page.",
      next:['cancel','frequency']
    },
    {
      id:'frequency', chip:"Won't my girls get spammed?", q:'too many messages spam annoying bombard clients marketing',
      phrases:['too many messages','spam','annoying','bombard','feel spammed','marketing at them'],
      keys:'spam frequency many messages annoying bombard often cap limit',
      a:"No — and there's an actual rule, not just good intentions.<br><br>Reminders and confirmations don't count; nobody minds those, they're about an appointment she booked. But the <b>personal</b> ones — birthdays, \"haven't seen you in a minute\", review requests, seasonal offers — are <b>capped at one a month per girl.</b><br><br>The whole reason they drive across Houston for you instead of a chain is that <b>it doesn't feel like a system</b>. Four automated messages in a fortnight is the fastest way to wreck that. And if you want it quieter still, you text Jasper.",
      next:['automated','dataownership']
    },
    {
      id:'day90', chip:'What happens after someone\'s hired?', q:'after hired day 90 first hire timeline what next second girl',
      phrases:['after hired','after they are hired','first hire','day 90','second girl','what happens next'],
      keys:'hired after next trained cleared schedule second third scale',
      a:"Here's the actual shape of it:<br><br><b>Day 1</b> — careers page live, applications stop landing in your DMs.<br><b>Week 2</b> — everyone in one list, licences checked, all of them already answered.<br><b>Week 3</b> — tryouts booked and scored, so you compare girls side by side.<br><b>Week 5</b> — she's working through your training, paperwork signed on her phone.<br><b>Day 90</b> — <b>she's cleared and taking her own clients.</b><br><br>And the bit that matters: <b>the second girl costs you almost nothing.</b> It's already built — you just send her the link. That's the difference between hiring once and being <i>able</i> to hire.",
      next:['hiring','training','classification']
    },
    {
      id:'nextstep', chip:"What happens if I'm interested?", q:'next step what happens now questionnaire form sign up start',
      phrases:['next step','what happens next','if i want it','how do i start','what do i do now','the questionnaire'],
      keys:'next step start begin questionnaire form process sign onboard',
      a:"Nothing dramatic. <b>You don't have to say yes to anything yet.</b><br><br>If it sounds like what you need, just say so and Jasper sends you <b>a short questionnaire</b> — about ten minutes. Your services, your prices, your real hours, how you'd want to bring girls on, and the questions you're sick of answering.<br><br>That's so he builds this around <b>how you actually work</b> instead of guessing. It's the only bit nobody can do for you.<br><br>Then he shows you what he's built <b>before</b> anything is live.",
      next:['whatido','approve','price']
    },
    {
      id:'samples', chip:'Are the names in the app real?', q:'real fake sample made up names in the preview',
      phrases:['names real','is that real','made up','sample data','fake'],
      keys:'real fake sample example demo made mock placeholder',
      a:"All made up — so you can see how it feels and how it reads.<br><br><b>Yours starts empty</b> and fills up with your actual girls, in your actual words ✨",
      next:['automated','whatido']
    }
  ]
};
