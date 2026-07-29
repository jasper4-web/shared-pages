/* =====================================================================
   SANO Systems — industry blueprints (shared data)
   Used by the homepage picker/journey builder AND industry.html.
   Language follows the D-0051 Positioning Doctrine: we are the
   done-for-you SYSTEMS department. AI is the mechanism, never the noun
   (see VOCABULARY-LOCK.md). No fake testimonials, no revenue promises,
   no geography, no jargon. HVAC / Plumbing / Roofing use the real
   vertical briefs; the rest are honest general versions.
   ===================================================================== */
window.SANO_INDUSTRIES = [
  {
    slug: 'hvac', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The 102-degree Tuesday stops costing you','When four people call in the same hour, all four get answered and booked instead of three hitting voicemail.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Your evenings come back','No more returning calls from the truck at 8pm. The ones that mattered were already booked hours ago.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Renewals stop slipping','Maintenance agreements get chased on schedule instead of whenever someone remembers.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/><polyline points="12 5 9.5 7.5"/><polyline points="12 5 14.5 7.5"/><polyline points="12 19 9.5 16.5"/><polyline points="12 19 14.5 16.5"/></svg>', label: 'HVAC', tag: 'Heating, cooling & air quality',
    headline: 'Nothing about this is generic',
    sub: 'When a compressor dies in the heat, the homeowner calls every shop on the list. The one that answers gets the job. We make sure that\'s you — and you never touch a thing.',
    pains: [
      'When the AC goes out, everyone calls at once — and whoever answers first gets the job.',
      'Customers disappear between seasons, so the relationship goes cold until the next breakdown.',
      'Maintenance agreements are the best money you make, but tracking renewals by hand is chaos.'
    ],
    runs: [
      'Answers every call, text, and web message — day, night, weekend',
      'Books the job straight onto your schedule',
      'Runs your maintenance-agreement renewals and seasonal check-up reminders',
      'Asks every finished job for a review — the same ask, every customer'
    ],
    blueprint: [
      'A trained answering script that knows HVAC questions',
      'Emergency vs. routine call handling, sorted automatically',
      'Seasonal tune-up campaigns (spring cooling, fall heating)',
      'Maintenance-plan renewal reminders',
      'The same review request after every job, sent at the right moment'
    ],
    season: 'Built around your year: tune-up season in spring, the summer rush, and the slow winter months when renewals and check-ins keep the calendar full.',
    truth: 'Evenings and weekends are a big share of the calls a shop gets — and they land when nobody is at a desk.',
    objection: ['“I already use a dispatch system.”', 'Good — keep it. We work in front of it. We catch the first call, the first text, and the first follow-up, then hand you a booked job.'],
    faqs: [
      ['Do I have to learn any of this?', 'No. That is the whole point. We build it, we run it, and we keep improving it. You approve it once and then go back to running your business.'],
      ['Will it handle emergency calls differently?', 'Yes. Your blueprint separates "my AC is out right now" from "I want a quote next month," so urgent jobs get treated as urgent.'],
      ['What if it does not know an answer?', 'It never guesses about your business. It takes the details and passes them to you right away, so the customer still feels taken care of.'],
    ]
  },
  {
    slug: 'plumbing', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The crawl space stops costing you jobs','You cannot answer with both hands under a sink. It answers, and the emergency reaches you with the address already taken.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Invoices go out before you get home (from Scale)','Instead of three unsent invoices sitting in your head at 9pm.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Quiet weeks get worked','Past customers hear from you about water heaters and drains without you writing a thing.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4z"/><path d="M14.7 6.3 18 3l3 3-3.3 3.3"/></svg>', label: 'Plumbing', tag: 'Service, repair & drain work',
    headline: 'Nothing about this is generic',
    sub: 'You are under a house with both hands busy. The phone rings. Someone with an active leak is calling down the list. We answer for you — and book it.',
    pains: [
      'You are physically under a sink or in a crawl space and cannot get to the phone.',
      'Emergency calls are the highest-margin work you do, and they come when no one is at a desk.',
      'Invoices get sent late at night — or forgotten — and getting paid drags on.'
    ],
    runs: [
      'Answers every call and text, even mid-job and after hours',
      'Sorts the emergency from the "sometime next week"',
      'Books the job and sends the reminder so it sticks',
      'Sends the invoice and the pay-by-text link so you stop chasing money (from Scale)'
    ],
    blueprint: [
      'An answering script trained on common plumbing calls',
      'Emergency routing so urgent leaks reach you fast',
      'Automatic follow-up on quotes that have gone quiet',
      'Invoice and pay-by-text sent as soon as the job is done (from Scale)',
      'The same review request after every completed job'
    ],
    season: 'Plumbing emergencies never stop, so the answering side runs year-round — with extra pushes around remodel season and water-heater season.',
    truth: 'A call that goes to voicemail during an active leak is usually not a call that comes back.',
    objection: ['“The big franchises have 24/7 phone staff.”', 'Now so do you — without hiring a single person or paying a night shift.'],
    faqs: [
      ['Can it answer while I am on a job?', 'That is exactly when it works hardest. On Starter it texts back within seconds. From Growth up it picks up the phone live. It does not matter whether you are free or elbow-deep under a sink.'],
      ['Will customers know it is not me?', 'It sounds like a friendly, professional person on your team, and it speaks English and Spanish. Anything it cannot answer comes straight to you.'],
      ['Does it help me get paid faster?', 'Yes — invoicing and pay-by-text come in at the Scale level. It sends the invoice and a secure pay-by-text link right after the job, instead of it waiting until you get home.'],
    ]
  },
  {
    slug: 'roofing', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The storm rush stops overwhelming you','Everyone who calls after hail gets answered, not just the ones who called while you were on the ground.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Estimates stop dying quietly','Every quote gets followed up more than once, on a schedule, without you remembering to.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','The gap between storms gets worked','Inspection and check-in campaigns keep the phone alive when the weather is calm.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9.5 20v-5.5h5V20"/></svg>', label: 'Roofing', tag: 'Repair, replacement & storm work',
    headline: 'Nothing about this is generic',
    sub: 'You are on a roof for eight hours. After a storm the phone does not stop. We answer all of it, follow up on every estimate, and keep you first in line.',
    pains: [
      'You are on a roof all day, so calls about damage go unanswered — and that work is worth a lot.',
      'Storm season is feast or famine: too many calls to handle, then silence.',
      'Estimates sit in someone\'s inbox because nobody had time to follow up twice.'
    ],
    runs: [
      'Answers the storm rush without you hiring temporary help',
      'Follows up on every estimate, more than once, until you get an answer',
      'Keeps past customers warm through the slow months',
      'Asks for a review after every completed job, so your rating reflects your real work'
    ],
    blueprint: [
      'A script trained on storm-damage and inspection calls',
      'Estimate follow-ups that run on their own',
      'Slow-season check-ins so you stay top of mind between storms',
      'Inspection and appointment reminders',
      'The same review request after every completed roof'
    ],
    season: 'Tuned to the roofing year: storm prep in spring, the peak-season rush, hurricane-season repairs, and winter inspection and check-in campaigns.',
    truth: 'A lot of estimates get followed up once, if at all. The follow-up nobody has time for is where the work actually closes.',
    objection: ['“The national brands out-market me.”', 'They have full-time marketing teams. We are yours — for a fraction of one salary.'],
    faqs: [
      ['Can it keep up after a big storm?', 'Yes. From Growth up it answers every caller at once, so nobody sits on hold while you are on a roof. On Starter every missed call gets an instant text back instead.'],
      ['Does it chase my estimates?', 'It follows up automatically on a schedule you approve — the part that usually gets dropped when you are busy.'],
      ['What about the slow months?', 'Your blueprint includes check-in and inspection campaigns to your past customers so the phone still rings between storms.'],
    ]
  },
  {
    slug: 'home-services', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Being on a job stops costing you the next one','Calls get answered and booked while your hands are full.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Quotes stop going quiet','Follow-up runs on its own until you get a yes or a no.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Repeat work comes back around','Seasonal and recurring customers get reminded before they call someone else.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2.5" y="8" width="19" height="12" rx="2"/><path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="2.5" y1="13" x2="21.5" y2="13"/><line x1="10" y1="11.5" x2="14" y2="11.5"/></svg>', label: 'Home Services', tag: 'Electrical, landscaping, cleaning, pest',
    headline: 'What this looks like in your business',
    sub: 'Electrical, landscaping, cleaning, pest control, pools, remodeling. If the work happens at someone\'s home and starts with a phone call, this is built for you.',
    pains: [
      'You are on a job with your hands full while new customers are calling.',
      'Quotes go out and then nobody has time to follow up on them.',
      'Repeat and seasonal work gets forgotten until the customer calls someone else.'
    ],
    runs: [
      'Answers every call, text, and web message around the clock',
      'Books the visit onto your calendar and sends the reminder',
      'Follows up on quotes until you get a yes or a no',
      'Brings past customers back for recurring and seasonal work'
    ],
    blueprint: [
      'An answering script trained on your services and service area',
      'Booking and reminders that cut no-shows',
      'Quote follow-up that runs without you',
      'Recurring-service and seasonal reminders',
      'The same review request after every job'
    ],
    season: 'Shaped around your busy and slow months, so the quiet stretches get campaigns instead of silence.',
    truth: 'A lot of home-service jobs go to whoever responds first — not whoever quotes lowest.',
    objection: ['“I am only a few people.”', 'You do not need more people. You need to stop losing the customers already trying to reach you.'],
    faqs: [
      ['My trade is not listed. Does it still work?', 'Yes. The blueprint is shaped to your services and how you actually work. Any business that books jobs and answers calls fits.'],
      ['Do I have to manage it?', 'No. We build it, run it, and improve it. That is what you are paying for.'],
      ['Will it work with how I already schedule?', 'We fit it around your existing calendar and process instead of forcing you to change how you work.'],
    ]
  },
  {
    slug: 'auto', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Three phones ringing at once stops being a problem','Every service call gets answered, even when you and the crew are heads-down on a car.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','After-hours inquiries stop going cold','The person who found you at 9pm has an appointment by the time you open.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Your bays stay full in the slow weeks','Service-due reminders go to the customers you already sold.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 16.5h14"/><path d="M4 16.5v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2"/><path d="M16.5 16.5v2a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-2"/><path d="M4 16.5v-4l2-5a2 2 0 0 1 1.9-1.3h8.2A2 2 0 0 1 18 7.5l2 5v4z"/><line x1="6.5" y1="13.5" x2="8" y2="13.5"/><line x1="16" y1="13.5" x2="17.5" y2="13.5"/></svg>', label: 'Auto', tag: 'Repair, tire, brake & body',
    headline: 'What this looks like in your business',
    sub: 'Service calls and repair-quote requests get answered the moment they come in. The customer who needs work done right now reaches you, not the shop down the street.',
    pains: [
      'Calls come in while you are already under a hood or on another line.',
      'After-hours inquiries sit until morning, and by then the buyer moved on.',
      'Past customers are your easiest work, but nobody has time to reach out.'
    ],
    runs: [
      'Answers every service call and web inquiry, day or night',
      'Books service and repair appointments on your schedule',
      'Follows up on quotes and inquiries until you get an answer',
      'Answers "is my car ready?" status calls, and brings past customers back with reminders'
    ],
    blueprint: [
      'A script trained on service and sales questions',
      'Service and repair-estimate booking on your real availability',
      'Automatic follow-up on quotes and inquiries',
      'Service-due and maintenance reminders to past customers',
      'The same review request after every visit'
    ],
    season: 'Set up for the way your bays and floor actually run, including the after-hours window when nobody is there to pick up.',
    truth: 'The shop that answers first usually gets the appointment — the rest leave a voicemail nobody returns.',
    objection: ['“We already have a front desk.”', 'Keep them. This covers the calls they cannot get to — nights, weekends, and the times three phones ring at once.'],
    faqs: [
      ['Can it book service and repair jobs?', 'Yes — against your real availability, then it confirms with the customer automatically.'],
      ['Does it work after we close?', 'That is where it earns its keep. Evening and weekend inquiries get answered and booked instead of going cold.'],
      ['Will it fit how our shop runs?', 'We build it around your process. Nothing goes live until you have seen it and approved it.'],
    ]
  },
  {
    slug: 'med-spa', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The front desk stops being a bottleneck','Inquiries get answered and booked while your team is with a client in the room.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Gaps stop appearing overnight','Reminders and easy rescheduling protect the calendar you already filled.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Past clients come back on their own','Rebooking and new-treatment campaigns run without anyone remembering to send them.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3c1.6 3.4 3 4.8 6.4 6.4C15 11 13.6 12.4 12 15.8 10.4 12.4 9 11 5.6 9.4 9 7.8 10.4 6.4 12 3z"/><path d="M18 15.5c.7 1.5 1.3 2.1 2.8 2.8-1.5.7-2.1 1.3-2.8 2.8-.7-1.5-1.3-2.1-2.8-2.8 1.5-.7 2.1-1.3 2.8-2.8z"/></svg>', label: 'Med Spa & Aesthetics', tag: 'Med spas, salons & wellness',
    headline: 'What this looks like in your business',
    sub: 'A warm, on-brand front desk that never closes — booking consultations, protecting your calendar, and bringing clients back, without adding staff.',
    pains: [
      'A lot of booking requests arrive after the front desk has gone home.',
      'No-shows and last-minute cancellations leave expensive gaps in the day.',
      'Past clients drift away because nobody has time to reach out.'
    ],
    runs: [
      'Answers and books every inquiry, day or night, in your tone',
      'Sends reminders and confirmations that protect the calendar',
      'Makes rescheduling easy so a gap gets refilled',
      'Brings past clients back for repeat treatments'
    ],
    blueprint: [
      'A warm, on-brand script for consultations and treatments',
      'Booking that works with however you already take deposits',
      'Reminders and confirmations that cut no-shows',
      'Rebooking and new-treatment campaigns to past clients',
      'The same review request after every visit'
    ],
    season: 'Built around your treatment menu and the times clients actually reach out — which is usually evenings and weekends.',
    truth: 'An empty chair cannot be resold later. Reminders and easy rescheduling are what keep the day full.',
    objection: ['“Our brand voice matters.”', 'Agreed. We tune the wording with you, and nothing speaks to a client until you have signed off on how it sounds.'],
    faqs: [
      ['Will it answer medical questions?', 'No — never. Dosing, candidacy, whether a treatment is right for someone, contraindications, results: every one of those is handed to your clinical team or supervising provider. The assistant books, reminds and answers logistics, and stays completely out of anything clinical.'],
      ['Can a new client book straight into a treatment?', 'No. New clients are booked into a consultation first, not an injectable or treatment chair — the assistant knows the difference and protects your calendar.'],
      ['Can it sound like our brand?', 'Yes. We write and tune the voice with you so it sounds like your front desk, in English and Spanish.'],
      ['Will it reduce no-shows?', 'It sends reminders and confirmations and makes rescheduling simple, which is what protects the calendar.'],
      ['How is client information handled?', 'The assistant collects the name, contact details and the treatment they are asking about. Where that counts as protected health information, it is handled that way: kept only for getting the appointment booked, and never passed anywhere it should not go. The assistant does not ask for medical history, and anything sensitive is routed to your team. And for the medical side of a med spa, we sign a HIPAA business associate agreement during setup — before the assistant takes a single call.'],
    ]
  },
  {
    slug: 'dental', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','New-patient calls stop going to voicemail','They get answered and booked while the front desk is with someone at the counter.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Recall stops slipping','Overdue patients get contacted on schedule instead of whenever there is a quiet moment.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Cancellations stop leaving holes','The waitlist gets worked automatically to refill the slot.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 4.5c2-1.3 4.3-1.4 5.7-.2 1.6 1.4 1.8 4 1.1 7-.6 2.6-.9 4.6-1.4 6.7-.3 1.4-.9 2.1-1.7 2.1-1.1 0-1.5-1.1-1.8-2.7-.3-1.5-.5-2.9-1.9-2.9s-1.6 1.4-1.9 2.9c-.3 1.6-.7 2.7-1.8 2.7-.8 0-1.4-.7-1.7-2.1-.5-2.1-.8-4.1-1.4-6.7-.7-3-.5-5.6 1.1-7 1.4-1.2 3.7-1.1 5.7.2z"/></svg>', label: 'Dental & Health', tag: 'Dental, chiro, vet & clinics',
    headline: 'What this looks like in your business',
    sub: 'New-patient calls answered and booked the moment they come in, recall handled automatically, and a schedule that stays full — without adding front-desk hours.',
    pains: [
      'New-patient calls come in while the front desk is with someone in the office.',
      'Recall and overdue-visit outreach never gets done consistently.',
      'Cancellations leave holes in the schedule that nobody has time to refill.'
    ],
    runs: [
      'Answers new-patient calls and books them in',
      'Runs recall and overdue-visit reminders on schedule',
      'Confirms appointments and makes rescheduling easy',
      'Asks every patient for a review after their visit — the same ask, every time'
    ],
    blueprint: [
      'A professional script for new-patient and scheduling calls',
      'Recall and hygiene reminders',
      'Appointment confirmations and reminders',
      'Waitlist outreach to refill cancellations',
      'The same review request after every appointment'
    ],
    season: 'Set up around your recall cycles and the hours patients actually call, including evenings when the office is closed.',
    truth: 'Recall is the most predictable work a practice has, and it is usually the first thing that slips when the front desk gets busy.',
    objection: ['“We have front-desk staff.”', 'This is not a replacement. It covers the overflow, the after-hours calls, and the recall work that keeps getting pushed to tomorrow.'],
    faqs: [
      ['What about an after-hours call from someone in pain?', 'It follows the rules you approve: it can text you or your on-call line right away, give only the emergency guidance you have pre-approved, and it never offers clinical advice. You decide what counts as urgent and what happens next — it just makes sure the call is not missed.'],
      ['How does it handle insurance questions?', 'It answers in-network yes or no from the plan list you give us, and books the visit. Anything past that — a coverage estimate, a claim or billing question — it captures with the plan details and hands straight to your front desk, so your team gives the accurate answer instead of the patient hearing a wrong one. It never guesses at coverage or quotes a price it is not sure of.'],
      ['Does it book into our practice software?', 'It books into the calendar we set up and keeps it in sync. For practices on Dentrix, Eaglesoft or Open Dental it hands your team the booking to drop in rather than writing into your chart directly, so nothing double-books a chair. We confirm exactly how it connects with you before launch.'],
      ['Does it replace our front desk?', 'No. It covers what they cannot get to — calls while they are busy, after-hours inquiries, and recall outreach.'],
      ['Can it handle recall?', 'Yes. Recall and overdue-visit reminders run on a schedule you approve.'],
      ['How do you handle patient privacy and HIPAA?', 'The assistant takes the name, contact details and the reason for the call. In a dental practice that reason is protected health information, so it is treated as such: it is not used for anything else, and it does not go anywhere it should not. The assistant does not ask for clinical history, and anything sensitive is routed to your team rather than handled automatically. We sign a HIPAA business associate agreement before anything touches patient information — no agreement, no launch.'],
    ]
  },
  {
    slug: 'retail', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Questions get answered while you are on the floor','Hours, stock and services, without you stopping what you are doing.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','First-time customers stop disappearing','They hear from you again, instead of never.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Quiet weeks get a reason to visit','Promotions and win-backs go out to the people who already bought once.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>', label: 'Retail & Local Shops', tag: 'Shops, studios & storefronts',
    headline: 'What this looks like in your business',
    sub: 'Answer every question, take every booking, and stay in touch with the customers you already have — while you are busy running the floor.',
    pains: [
      'Questions come in by phone and text while you are helping someone in person.',
      'Customers buy once and are never heard from again.',
      'Reviews only happen by luck, so your rating does not reflect your service.'
    ],
    runs: [
      'Answers questions about hours, stock and services by phone and text',
      'Takes bookings and appointments where you offer them',
      'Runs promotions and reminders to past customers',
      'The same review ask after every purchase or visit'
    ],
    blueprint: [
      'A script trained on your hours, services, and common questions',
      'One place for calls and texts',
      'Promotion and win-back campaigns to past customers',
      'Booking and reminders where you take appointments',
      'The same review request after a purchase or visit'
    ],
    season: 'Built around your busy periods and the promotions you want to run, so the quiet weeks are not left to chance.',
    truth: 'A lot of local shops never hear from a customer again after the first visit. It is rarely the service. Nobody followed up.',
    objection: ['“I am small — is this overkill?”', 'Start with the front desk that never sleeps and add from there. The point is to stop losing people you already earned.'],
    faqs: [
      ['I do not take appointments. Is this still useful?', 'Yes. Answering questions instantly and staying in touch with past customers matters whether or not you book time slots.'],
      ['Can it answer messages from social too?', 'Phone and text are what we run today, and they land in one place. Social messaging is not part of the service yet — we would rather say so than sell you something we have not built.'],
      ['Do I have to run any of it?', 'No. We build it and run it. You approve how it sounds and then get on with your day.'],
    ]
  }
];

/* =====================================================================
   THE DEPARTMENT BOARD — the full catalogue of what SANO runs.
   Every entry here must trace to a real line on pricing.html; nothing is
   invented to fill the grid, and `tier` is the level it FIRST becomes
   available (the plans are cumulative, so a Scale client also has every
   starter/growth card). `d` is the default line; an industry can override
   any card with a trade-specific line via its own `caps` map.
   ===================================================================== */
window.SANO_TIERS = [
  /* setup + min are read straight off pricing.html — they are NOT uniform across
     levels, and a page that claims they are is quotable against us. */
  { key: 'starter', label: 'Starter', price: '$397/mo',   setup: '$997',    live: '14 days', min: 'Three-month minimum', usage: 'about $60\u2013200/mo in usage at cost' },
  { key: 'growth',  label: 'Growth',  price: '$999/mo',   setup: '$2,497',  live: '30 days', min: 'Three-month minimum', usage: 'about $60\u2013200/mo in usage at cost', rec: true },
  { key: 'scale',   label: 'Scale',   price: '$1,995/mo', setup: '$4,997',  live: '45 days', min: 'Three-month minimum', usage: 'and no separate usage bill — it is bundled into this plan' },
  /* `full` = the name pricing.html and terms.html use. The tab keeps the short label
     because four tabs share one hairline down to 320px, but every SENTENCE uses the full
     name — a buyer was being shown "Total" here and "Total Transformation" on the price
     page, with nothing connecting them. Levels without a `full` fall back to `label`. */
  { key: 'total',   label: 'Total',   full: 'Total Transformation', price: '$4,997/mo', setup: '$14,997', live: '60&ndash;75 days', min: 'Six-month minimum',   usage: 'and no separate usage bill — it is bundled into this plan' }
];

window.SANO_CAPABILITIES = [
  { key:'textback', short:'Missed calls', tier:'starter', name:'Missed calls texted back',
    d:'A call you can’t pick up gets a text back within seconds — in English or Spanish — and the conversation carries on without you.',
    more:'It fires on a missed call, a text, or a web message — inside a few seconds, before they have finished dialling the next company. If the conversation needs you, the whole thing lands on your phone as a text with their name, number and what they wanted.' },
  { key:'booking', short:'Booking', tier:'starter', name:'Booking &amp; reminders',
    d:'People book into the times you actually work, and everyone gets reminded before the day arrives.',
    more:'It only ever offers times you are actually free, with travel and buffer built in. It books into the calendar we set up and keep in sync with the one you use — and where your own software will not accept an outside booking, your team gets the booking to drop in instead, so nothing is ever double-booked. We confirm exactly how it connects with you before launch. Reminders go out before the day so people turn up.' },
  { key:'reviews', short:'Reviews', tier:'starter', name:'Reviews asked for',
    d:'After every finished job the customer gets a short, well-timed text asking for a Google review. You never chase one again.',
    more:'The ask goes out at the moment people are happiest — right after the work is finished, not a week later. You never send one by hand, and you never have to ask a customer for a favour again.' },
  { key:'google', short:'Google listing', tier:'starter', name:'Your Google listing kept sharp',
    d:'Hours, services and photos stay current on the page most people actually judge you by.',
    more:'Hours, services, photos and holiday closures stay right on the page most people judge you by before they ever call. We keep it current; you do not log in.' },
  { key:'report', short:'Monthly report', tier:'starter', name:'A monthly report, in plain English',
    d:'What came in, what got booked, what we changed — told to you in words, not a dashboard you have to learn.',
    more:'Once a month, in plain English: what came in, what got booked, what got followed up, what we changed and why. Not a dashboard you have to learn — a page you can read in two minutes.' },

  { key:'voice', short:'Voice answering', tier:'growth', name:'A real voice answering',
    d:'Your phone gets picked up out loud, day or night, by an assistant that says it’s an assistant. 500 talk-minutes a month, more at Scale.',
    more:'A real voice picks up, says it is an assistant so nobody is misled, answers what it knows, and books what it can. Anything it should not handle stops and comes straight to you as a text, so nobody gets a wrong answer about your business.' },
  { key:'sitechat', short:'Website chat', tier:'growth', name:'An assistant on your website',
    d:'The people comparing you to two other companies get their questions answered on the spot instead of leaving.',
    more:'Most people compare two or three companies before they call anyone. This answers them while they are still on your page, then books them, instead of letting them click back to the search results.' },
  { key:'followup', short:'Quote follow-up', tier:'growth', name:'Quotes chased until you get an answer',
    d:'Every quote and lead is followed up on a schedule until it’s a yes or a no — the part that always gets dropped.',
    more:'Quotes go quiet — that is normal, and it is where most of the money leaks out. This follows up on a schedule you approve until you get a yes or a no, so nothing dies from silence.' },
  { key:'campaigns', short:'Campaigns', tier:'growth', name:'Campaigns to your own list',
    d:'Email and text campaigns that bring back customers you already earned, instead of paying to find new ones.',
    more:'Email and text to the customers you have already earned — seasonal reminders, come-backs, anything you want said. Cheaper than finding new people, and it runs without you writing a word.' },
  { key:'bilingual', short:'Spanish voice', tier:'growth', name:'Answered out loud in Spanish',
    d:'Live bilingual voice, so a Spanish-speaking caller gets a real conversation — not a language you had to hire for.',
    more:'A Spanish-speaking caller gets a real conversation out loud, not a menu and not a callback. By text from Starter; live voice from Growth. You do not have to hire for it.' },

  { key:'landing', short:'Landing pages', tier:'scale', name:'Landing pages built &amp; maintained',
    d:'Pages built for the work you want more of, kept current by us — not a site you have to nag someone to update.',
    more:'Pages built around the specific work you want more of, and kept current by us. No web guy to chase, no plugin to update, no site that slowly goes stale.' },
  { key:'ads', short:'Ads managed', tier:'scale', name:'Your ads planned &amp; managed',
    d:'We plan and run the ads; the media budget stays yours and is paid straight to Google or Meta.',
    more:'We plan the campaigns, write them, and manage them month to month. The media budget is paid straight to Google or Meta and stays yours — we are not marking it up.' },
  { key:'payments', short:'Pay by text', tier:'scale', name:'Invoices &amp; pay-by-text',
    d:'The invoice goes out and gets paid from a phone, so money stops sitting in your truck for a week.',
    more:'The invoice goes out the moment the job is done and gets paid from a phone. Money stops sitting in your truck or your head for a week.' },
  { key:'strategy', short:'Strategy call', tier:'scale', name:'A monthly strategy call',
    d:'A standing call to look at what’s working, what isn’t, and what we should change next month.',
    more:'A standing call every month with a person who has been watching your numbers — what worked, what did not, and what we are changing next. Not a support ticket.' },

  { key:'app', short:'Your name on it', tier:'total', name:'The app in your name and logo',
    d:'The app you already get from Growth up, rebadged as yours — on your phone and your customers’ phones.',
    more:'You can see everything from Growth onward; what this level adds is the badge. The same screens carry your name and your logo instead of ours, and your customers can hold it too. There is a real platform cost behind that, which is why it sits here.' },
  { key:'manager', short:'Dedicated manager', tier:'total', name:'A dedicated manager',
    d:'One person who knows your business by name, weekly calls, and a four-hour response target in writing.',
    more:'It is written into your agreement, not offered as a courtesy \u2014 so there is a named person accountable for your setup rather than a queue. You stop explaining your business from scratch every time you need something changed.' }
];

/* Trade-specific lines for the cards where the wording actually earns its keep.
   Anything not overridden falls back to the catalogue's default `d`. */
window.SANO_CAPS_BY_INDUSTRY = {
  'hvac': {
    textback: 'The 102-degree Tuesday when four people call in the same hour — all four get a text back in seconds, instead of three hitting voicemail.',
    voice: 'The compressor dies at 9pm. Your phone gets picked up out loud and the job is on tomorrow’s schedule before you’ve read the message.',
    booking: 'Tune-ups and service calls drop into the slots you actually run, with drive time built in.',
    followup: 'The system-replacement quote gets chased on a schedule until you get a yes or a no.',
    campaigns: 'Spring cooling and fall heating check-ups go out to your whole list without you writing a word.',
    reviews: 'Every finished install asks for the Google review — at the moment the house is finally cool.',
  },
  'plumbing': {
    textback: 'Both hands are under a sink. The active leak calling down the list gets answered anyway.',
    voice: 'The 2am burst pipe gets a real conversation, gets the address taken, and reaches you as an emergency — not a voicemail.',
    booking: 'Service calls land on your schedule sorted by what’s actually urgent, with drive time built in.',
    followup: 'The water-heater quote that went quiet gets followed up until it’s a yes or a no.',
    campaigns: 'Quiet weeks get worked — past customers hear about drains and water heaters without you writing a thing.',
    reviews: 'The review gets asked for right after the leak stops, which is when people actually feel like writing one.',
  },
  'roofing': {
    textback: 'The morning after the storm, when every roof in the county is calling — nobody drops to voicemail.',
    voice: 'Hail hit last night and they’re calling down the list. Yours gets picked up out loud and the inspection gets set.',
    booking: 'Inspections and estimates land on your schedule around the crews you already have out.',
    followup: 'The estimate sitting in someone’s inbox gets chased until they decide — insurance timelines and all.',
    campaigns: 'After a storm season, past customers hear from you about inspections without you writing a thing.',
    reviews: 'The review gets asked for once the roof is finished and the yard is clean — not a month later.',
  },
  'home-services': {
    textback: 'You’re on a ladder or behind a mower. The call still gets answered, in English or Spanish.',
    voice: 'The after-hours call about a dead breaker or a wasp nest gets a real conversation instead of a beep.',
    booking: 'Jobs drop into the routes and days you actually work, with travel time built in.',
    followup: 'The estimate that went quiet gets chased on a schedule until you get an answer.',
    campaigns: 'Seasonal work — the quarterly service, the spring clean-up — goes out to your list on its own.',
    reviews: 'Every finished visit asks for the Google review, while the work still looks new.',
  },
  'auto': {
    textback: 'You’re under a car with both hands busy. The call gets a text back in seconds and the conversation keeps going.',
    voice: 'The tow-in call at closing time gets picked up out loud, with the vehicle and the problem already written down.',
    booking: 'Jobs land in the bays you actually have open, with the vehicle and the work noted.',
    followup: 'The estimate they’re still thinking about gets followed up until they decide.',
    campaigns: 'Oil-change and inspection reminders go back out to the cars you’ve already worked on.',
    reviews: 'The review gets asked for when they pick the car up and it’s running right.',
  },
  'med-spa': {
    textback: 'The consultation enquiry that came in at 10pm gets a warm, on-brand reply before she books somewhere else.',
    voice: 'Calls about treatments and pricing get a real, on-brand conversation instead of a voicemail she won’t leave.',
    booking: 'Appointments book into your real availability, and work with however you already take deposits.',
    followup: 'The consultation that hasn’t booked yet gets followed up warmly, not chased.',
    campaigns: 'Rebooking and new-treatment offers go out to past clients on a schedule you approve.',
    reviews: 'The review gets asked for after the visit, at the point the result is showing.',
  },
  'dental': {
    textback: 'The new-patient enquiry after hours gets answered and booked, instead of going to the practice down the road.',
    voice: 'Calls get a real conversation that never asks for clinical history and routes anything sensitive to your team.',
    booking: 'Appointments book into your real chair time, with the reminders that cut no-shows.',
    followup: 'Treatment plans that weren’t scheduled get a gentle follow-up until the patient decides.',
    campaigns: 'Recall and hygiene reminders go out on schedule, so the chair doesn’t sit empty.',
    reviews: 'The review gets asked for after the appointment, at the moment they’re happiest.',
  },
  'retail': {
    textback: '“Are you open?” “Do you have it in stock?” — answered in seconds, while they’re still deciding where to drive.',
    voice: 'The call about hours, stock or a class gets picked up out loud, even when the shop floor is busy.',
    booking: 'Classes, fittings and appointments get booked into the calendar we keep in sync with yours.',
    followup: 'The enquiry that didn’t turn into a visit gets one more touch before it goes cold.',
    campaigns: 'New arrivals and events go out to the customers who already know you.',
    reviews: 'The review gets asked for after the visit, while the bag is still in their hand.',
  },
};

/* Per-trade content for the in-page app demo. Customer names are shared across
   trades on purpose; everything that would look absurd on the wrong trade is
   written per trade. All of it is sample data and the app says so. */
window.SANO_APP_PEOPLE = [['JW','James Watts'],['AD','Amy Donham'],['MR','Marcus Reyes'],['DC','Danny Cole'],['RT','Ray Tucker'],['BH','Bo Hendricks'],['TG','Tanya Guillory']];
window.SANO_APP = {
  'hvac': {
    biz: 'Ridgeline Heating &amp; Air',
    ini: 'RH',
    place: 'shop',
    asset: 'equipment',
    cfnote: 'System, filter size and service history',
    subs: ['3-ton split · installed 2019','Heat pump · maintenance plan','Rooftop units ×2 · commercial','Furnace · 2016','16-SEER condenser','Strip mall · 4 units','Mini-split · 2 zones'],
    miss: ['AC quit last night — house is 84 already','We can be out today. 11:30 or late afternoon?','11:30. It is the upstairs unit','Booked ✓ Today 11:30 AM. What is the address? You will get a text when the tech is on the way.'],
    q: ['Do you charge for a diagnostic, and do you cover the north side?','Yes to both — there is a flat diagnostic fee and it comes off the repair if you go ahead.','What is your soonest?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8 works','Done ✓ Thursday 8:00 AM. You will get a text when the tech is on the way.'],
    ev: [['James Watts — No cooling','9:00 AM · 3-ton split'],['Ray Tucker — AC not cooling','11:30 AM · diagnostic'],['Bo Hendricks — Rooftop PM','2:15 PM · commercial ×2']],
    rev: [['AD','Amy Donham','Came out the same evening the AC died. House was cool by bedtime.'],['JW','James Watts','Told me what failed and what it cost before touching anything.']],
    rec: [['System','3-ton split · installed 2019'],['Filter size','20×25×1'],['Last service','Capacitor replaced · 3 weeks ago'],['Plan','Maintenance — renews in 5 months'],['Next due','Fall heating check'],['Preference','Early mornings']],
  },
  'plumbing': {
    biz: 'Copperline Plumbing',
    ini: 'CP',
    place: 'shop',
    asset: 'property',
    cfnote: 'Fixtures, water heater and service history',
    subs: ['50-gal gas water heater','Slab leak repair · Aug','Tankless · annual flush','Main line · cast iron','Softener + RO','Duplex ×2 · rental','Well pump · 2021'],
    miss: ['Water heater is leaking all over the garage floor','Shut the valve on top if you can reach it. This is an emergency, so it goes to the on-call plumber now — not into tomorrow’s queue.','Valve is off. How soon can someone get here?','Booked ✓ Today 11:30 AM. The plumber has been alerted and you will get a text before he arrives.'],
    q: ['Do you do tankless installs, and roughly what does one run?','We do. Install depends on the gas line and venting, so we give you an upfront number after a look — no charge for the quote.','How soon could someone look?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8 is good','Done ✓ Thursday 8:00 AM. You will get a text when the plumber is on the way.'],
    ev: [['James Watts — Water heater','9:00 AM · 50-gal gas'],['Ray Tucker — Leak, garage','11:30 AM · emergency'],['Bo Hendricks — Drain clear','2:15 PM · duplex ×2']],
    rev: [['AD','Amy Donham','Called at 7am with a burst line. Someone was here before 9.'],['JW','James Watts','Quoted it before starting and the number did not move.']],
    rec: [['Water heater','50-gal gas · installed 2018'],['Shutoff','Garage, left of the door'],['Last service','Kitchen line cleared · 3 weeks ago'],['Known issue','Slow master bath drain'],['Next due','Water-heater flush'],['Preference','Text before arriving']],
  },
  'roofing': {
    biz: 'Summit Line Roofing',
    ini: 'SL',
    place: 'operation',
    asset: 'roof',
    cfnote: 'Roof size, material and claim history',
    subs: ['2,400 sq ft · architectural','Hail claim · filed Aug','Metal standing seam','Flat TPO · commercial','1,800 sq ft · 3-tab','Storm damage · inspected','Tile · partial replace'],
    miss: ['Roof started leaking after last night’s hail','We can get an inspector out today. 11:30 or late afternoon?','11:30 works — there is a stain on the ceiling','Booked ✓ Today 11:30 AM. Put a bucket under it and photograph the stain if you can.'],
    q: ['Do you handle the insurance claim, or is that on me?','We meet the adjuster with you and document everything — you do not run the claim alone.','How fast can someone look at it?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8','Done ✓ Thursday 8:00 AM. You will get a text when the inspector is on the way.'],
    ev: [['James Watts — Storm inspection','9:00 AM · 2,400 sq ft'],['Ray Tucker — Leak, hail','11:30 AM · emergency'],['Bo Hendricks — Flat roof PM','2:15 PM · commercial']],
    rev: [['AD','Amy Donham','Crew was out the morning after the storm. Tarped it same day.'],['JW','James Watts','Sat with the adjuster and made sure nothing got missed.']],
    rec: [['Roof','2,400 sq ft · architectural shingle'],['Age','11 years'],['Last visit','Storm inspection · 3 weeks ago'],['Claim','Hail — adjuster met last week'],['Next due','Gutter check before winter'],['Preference','Call, do not text']],
  },
  'home-services': {
    biz: 'Bright Field Home Services',
    ini: 'BF',
    place: 'operation',
    asset: 'property',
    cfnote: 'Property notes, gate codes and service history',
    subs: ['Quarterly pest · exterior','Weekly mow · corner lot','Panel upgrade quoted','Deep clean · biweekly','Irrigation · 6 zones','Rental ×2 · turnover','Tree trim · seasonal'],
    miss: ['Wasp nest right over the back door — kids can’t go out','We can get someone out today. 11:30 or late afternoon?','11:30 please','Booked ✓ Today 11:30 AM. Keep everyone clear of that door until then.'],
    q: ['Do you cover the north side, and is the quote free?','Yes to both — someone comes out, looks, and gives you an upfront number before any work.','What is your soonest?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8 works','Done ✓ Thursday 8:00 AM. You will get a text when the tech is on the way.'],
    ev: [['James Watts — Quarterly service','9:00 AM · exterior + interior'],['Ray Tucker — Wasp nest','11:30 AM · urgent'],['Bo Hendricks — Rental turnover','2:15 PM · 2 units']],
    rev: [['AD','Amy Donham','Same crew every time and they always text before they show up.'],['JW','James Watts','Booked it by text in about a minute. No phone tag.']],
    rec: [['Property','Corner lot · back gate code 4471'],['Service','Quarterly exterior + interior on request'],['Last visit','Quarterly service · 3 weeks ago'],['Pets','Two dogs — call before entering'],['Next due','Fall quarterly'],['Preference','Text before arriving']],
  },
  'auto': {
    biz: 'Cross Town Auto',
    ini: 'CT',
    place: 'shop',
    asset: 'vehicle',
    cfnote: 'Vehicle, plate and service history',
    subs: ['2019 Silverado 1500','2020 Honda CR-V','2016 F-250 diesel','2014 Ram 1500','2018 Ford F-150','Fleet ×4 · vans','2017 Nissan Rogue'],
    miss: ['Brakes are grinding bad, I don’t trust it','Do not drive it far. Today at 11:30, or late afternoon?','11:30 works','Booked ✓ Today 11:30 AM. Bring it in slow — we will look at the rotors too.'],
    q: ['Do you do diagnostics, and what does it cost just to look at a check-engine light?','We do — there is a flat diagnostic fee and it comes off the repair if you go ahead.','What is your soonest?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8 works','Done ✓ Thursday 8:00 AM. You will get a text when it is on the lift.'],
    ev: [['James Watts — Brakes','9:00 AM · Silverado 1500'],['Ray Tucker — Brakes grinding','11:30 AM · F-150'],['Bo Hendricks — Fleet service','2:15 PM · 4 vans']],
    rev: [['AD','Amy Donham','Battery died in my driveway and they came right out. Fast and fair.'],['JW','James Watts','Showed me the old rotors instead of just telling me.']],
    rec: [['Vehicle','2019 Chevy Silverado 1500'],['Plate','KLM-4471'],['Last service','Brakes &amp; rotors · 3 weeks ago'],['Mileage','88,400 at last visit'],['Next due','Oil change'],['Preference','Early mornings']],
  },
  'med-spa': {
    biz: 'Lumen Aesthetics',
    ini: 'LA',
    place: 'studio',
    asset: 'treatment plan',
    cfnote: 'Treatment history, preferences and consent notes',
    subs: ['Consultation · injectables','Laser · package 3 of 6','Facial · monthly member','Consult booked · Thu','Body contouring · 2 of 4','Membership · lapsed','Filler · 6-month review'],
    miss: ['Hi — do you have any consultation openings this week?','We do. Today at 11:30, or Thursday morning?','11:30 please','Booked ✓ Today 11:30 AM for your consultation. You will get a text before it.'],
    q: ['How much is a first consultation, and is there any downtime?','The consultation is complimentary, and your provider walks you through downtime for whatever you are considering before you commit to anything.','What is your soonest?','Thursday 10:30 AM or 2:00 PM are open — want me to hold one?','Thursday 10:30','Done ✓ Thursday 10:30 AM. You will get a reminder the day before.'],
    ev: [['Amy Donham — Laser, session 3','9:00 AM · package'],['Ray Tucker — Consultation','11:30 AM · injectables'],['Tanya Guillory — Facial','2:15 PM · member']],
    rev: [['AD','Amy Donham','Booked a consult at 10pm on my phone and had a slot by morning.'],['JW','James Watts','Never felt sold to. They explained everything first.']],
    rec: [['Interest','Injectables — first consultation'],['History','Two facials · last one 3 weeks ago'],['Membership','Monthly — active'],['Notes','Prefers afternoons, no downtime before events'],['Next due','6-month review'],['Preference','Text, not calls']],
  },
  'dental': {
    biz: 'Northgate Dental',
    ini: 'ND',
    place: 'practice',
    asset: 'visit history',
    cfnote: 'Appointment history, recall dates and preferences',
    subs: ['New patient · exam booked','6-month recall · due','Crown · seat appointment','Hygiene · overdue','Whitening consult','Family ×4 · recall','Night guard · follow-up'],
    miss: ['Do you take new patients? I need a cleaning','We do. Today at 11:30, or Thursday morning?','11:30 works','Booked ✓ Today 11:30 AM. We will text the new-patient form so you are not filling it out in the waiting room.'],
    q: ['Do you take my insurance, and how much is a new-patient visit?','You are in-network on that plan. A new-patient visit depends on what your plan covers, so I am passing your details to the front desk for an exact number — they will confirm before you come in.','What is your soonest?','Thursday 8:00 AM or 10:30 AM are open — want me to hold one?','Thursday 8','Done ✓ Thursday 8:00 AM. Your form will arrive by text tonight.'],
    ev: [['Amy Donham — Crown seat','9:00 AM · follow-up'],['Ray Tucker — New patient exam','11:30 AM · cleaning'],['Bo Hendricks — Family recall','2:15 PM · 4 patients']],
    rev: [['AD','Amy Donham','Booked online after hours and had the forms done before I arrived.'],['JW','James Watts','It put me straight through to the front desk and I had my exact portion before the appointment, not after.']],
    rec: [['Status','Active patient — hygiene booked'],['Recall','Due in 6 months'],['Last visit','Cleaning &amp; exam · 3 weeks ago'],['Notes','Prefers morning, anxious about drilling'],['Next due','Hygiene recall'],['Preference','Text reminders only']],
  },
  'retail': {
    biz: 'Maple &amp; Co.',
    ini: 'MC',
    place: 'shop',
    asset: 'order history',
    cfnote: 'Purchase history, sizes and preferences',
    subs: ['Class booked · Saturday','Special order · in transit','Member · monthly','Fitting booked · Thu','Repair drop-off','Gift registry','Waitlist · restock'],
    miss: ['Are you open today? And do you have it in stock?','We are open until 6. It is in — want us to hold one?','Yes please, I can come by after 4','Held ✓ Under your name until close tomorrow. We will text if anything changes.'],
    q: ['Do you run classes, and do I need to book ahead?','We do, and yes — they fill up. There are two spots left on Saturday.','Can I take one?','Saturday 10:00 AM or 2:00 PM — want me to hold one?','10 works','Done ✓ Saturday 10:00 AM. You will get a reminder the day before.'],
    ev: [['Amy Donham — Fitting','9:00 AM · in store'],['Saturday class — 8 booked','11:30 AM · 2 spots left'],['Bo Hendricks — Special order','2:15 PM · pickup']],
    rev: [['AD','Amy Donham','Asked about stock at 9pm and had an answer before I went to bed.'],['JW','James Watts','They held it for me without me having to call twice.']],
    rec: [['Status','Member — monthly'],['Last purchase','3 weeks ago'],['Special order','In transit — arrives Fri'],['Notes','Waitlisted for the restock'],['Next due','Class on Saturday'],['Preference','Text when it arrives']],
  },
};
