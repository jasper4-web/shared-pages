/* =====================================================================
   SANO Systems — industry blueprints (shared data)
   Used by the homepage picker/journey builder AND industry.html.
   Language follows the D-0051 Positioning Doctrine: we are the
   done-for-you AI department. No fake testimonials, no revenue promises,
   no geography, no jargon. HVAC / Plumbing / Roofing use the real
   vertical briefs; the rest are honest general versions.
   ===================================================================== */
window.SANO_INDUSTRIES = [
  {
    slug: 'hvac', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The 102-degree Tuesday stops costing you','When four people call in the same hour, all four get answered and booked instead of three hitting voicemail.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Your evenings come back','No more returning calls from the truck at 8pm. The ones that mattered were already booked hours ago.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Renewals stop slipping','Maintenance agreements get chased on schedule instead of whenever someone remembers.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/><polyline points="12 5 9.5 7.5"/><polyline points="12 5 14.5 7.5"/><polyline points="12 19 9.5 16.5"/><polyline points="12 19 14.5 16.5"/></svg>', label: 'HVAC', tag: 'Heating, cooling & air quality',
    headline: 'Your AI department, already built for HVAC',
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
    objection: ['"I already use a dispatch system."', 'Good — keep it. We work in front of it. We catch the first call, the first text, and the first follow-up, then hand you a booked job.'],
    faqs: [
      ['Do I have to learn any of this?', 'No. That is the whole point. We build it, we run it, and we keep improving it. You approve it once and then go back to running your business.'],
      ['Will it handle emergency calls differently?', 'Yes. Your blueprint separates "my AC is out right now" from "I want a quote next month," so urgent jobs get treated as urgent.'],
      ['What if it does not know an answer?', 'It never guesses about your business. It takes the details and passes them to you right away, so the customer still feels taken care of.'],
    ]
  },
  {
    slug: 'plumbing', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The crawl space stops costing you jobs','You cannot answer with both hands under a sink. It answers, and the emergency reaches you with the address already taken.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Invoices go out before you get home (from Scale)','Instead of three unsent invoices sitting in your head at 9pm.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Quiet weeks get worked','Past customers hear from you about water heaters and drains without you writing a thing.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4z"/><path d="M14.7 6.3 18 3l3 3-3.3 3.3"/></svg>', label: 'Plumbing', tag: 'Service, repair & drain work',
    headline: 'Your AI department, already built for plumbing',
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
    objection: ['"The big franchises have 24/7 phone staff."', 'Now so do you — without hiring a single person or paying a night shift.'],
    faqs: [
      ['Can it answer while I am on a job?', 'That is exactly when it works hardest. On Starter it texts back within seconds. From Growth up it picks up the phone live. It does not matter whether you are free or elbow-deep under a sink.'],
      ['Will customers know it is not me?', 'It sounds like a friendly, professional person on your team, and it speaks English and Spanish. Anything it cannot answer comes straight to you.'],
      ['Does it help me get paid faster?', 'Yes — invoicing and pay-by-text come in at the Scale level. It sends the invoice and a secure pay-by-text link right after the job, instead of it waiting until you get home.'],
    ]
  },
  {
    slug: 'roofing', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The storm rush stops overwhelming you','Everyone who calls after hail gets answered, not just the ones who called while you were on the ground.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Estimates stop dying quietly','Every quote gets followed up more than once, on a schedule, without you remembering to.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','The gap between storms gets worked','Inspection and check-in campaigns keep the phone alive when the weather is calm.']], built: true, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9.5 20v-5.5h5V20"/></svg>', label: 'Roofing', tag: 'Repair, replacement & storm work',
    headline: 'Your AI department, already built for roofing',
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
    objection: ['"The national brands out-market me."', 'They have full-time marketing teams. We are yours — for a fraction of one salary.'],
    faqs: [
      ['Can it keep up after a big storm?', 'Yes. From Growth up it answers every caller at once, so nobody sits on hold while you are on a roof. On Starter every missed call gets an instant text back instead.'],
      ['Does it chase my estimates?', 'It follows up automatically on a schedule you approve — the part that usually gets dropped when you are busy.'],
      ['What about the slow months?', 'Your blueprint includes check-in and inspection campaigns to your past customers so the phone still rings between storms.'],
    ]
  },
  {
    slug: 'home-services', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Being on a job stops costing you the next one','Calls get answered and booked while your hands are full.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Quotes stop going quiet','Follow-up runs on its own until you get a yes or a no.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Repeat work comes back around','Seasonal and recurring customers get reminded before they call someone else.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2.5" y="8" width="19" height="12" rx="2"/><path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="2.5" y1="13" x2="21.5" y2="13"/><line x1="10" y1="11.5" x2="14" y2="11.5"/></svg>', label: 'Home Services', tag: 'Electrical, landscaping, cleaning, pest',
    headline: 'Your AI department, shaped for home services',
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
    objection: ['"I am only a few people."', 'You do not need more people. You need to stop losing the customers already trying to reach you.'],
    faqs: [
      ['My trade is not listed. Does it still work?', 'Yes. The blueprint is shaped to your services and how you actually work. Any business that books jobs and answers calls fits.'],
      ['Do I have to manage it?', 'No. We build it, run it, and improve it. That is what you are paying for.'],
      ['Will it work with how I already schedule?', 'We fit it around your existing calendar and process instead of forcing you to change how you work.'],
    ]
  },
  {
    slug: 'auto', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Three phones ringing at once stops being a problem','Every service call gets answered, even when you and the crew are heads-down on a car.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','After-hours inquiries stop going cold','The person who found you at 9pm has an appointment by the time you open.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Your bays stay full in the slow weeks','Service-due reminders go to the customers you already sold.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 16.5h14"/><path d="M4 16.5v2a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-2"/><path d="M16.5 16.5v2a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-2"/><path d="M4 16.5v-4l2-5a2 2 0 0 1 1.9-1.3h8.2A2 2 0 0 1 18 7.5l2 5v4z"/><line x1="6.5" y1="13.5" x2="8" y2="13.5"/><line x1="16" y1="13.5" x2="17.5" y2="13.5"/></svg>', label: 'Auto', tag: 'Repair, tire, brake & body',
    headline: 'Your AI department, shaped for auto',
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
    objection: ['"We already have a front desk."', 'Keep them. This covers the calls they cannot get to — nights, weekends, and the times three phones ring at once.'],
    faqs: [
      ['Can it book service and repair jobs?', 'Yes — against your real availability, then it confirms with the customer automatically.'],
      ['Does it work after we close?', 'That is where it earns its keep. Evening and weekend inquiries get answered and booked instead of going cold.'],
      ['Will it fit how our shop runs?', 'We build it around your process. Nothing goes live until you have seen it and approved it.'],
    ]
  },
  {
    slug: 'med-spa', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','The front desk stops being a bottleneck','Inquiries get answered and booked while your team is with a client in the room.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Gaps stop appearing overnight','Reminders and easy rescheduling protect the calendar you already filled.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Past clients come back on their own','Rebooking and new-treatment campaigns run without anyone remembering to send them.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3c1.6 3.4 3 4.8 6.4 6.4C15 11 13.6 12.4 12 15.8 10.4 12.4 9 11 5.6 9.4 9 7.8 10.4 6.4 12 3z"/><path d="M18 15.5c.7 1.5 1.3 2.1 2.8 2.8-1.5.7-2.1 1.3-2.8 2.8-.7-1.5-1.3-2.1-2.8-2.8 1.5-.7 2.1-1.3 2.8-2.8z"/></svg>', label: 'Med Spa & Aesthetics', tag: 'Med spas, salons & wellness',
    headline: 'Your AI department, shaped for aesthetics & wellness',
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
    objection: ['"Our brand voice matters."', 'Agreed. We tune the wording with you, and nothing speaks to a client until you have signed off on how it sounds.'],
    faqs: [
      ['Will it answer medical questions?', 'No — never. Dosing, candidacy, whether a treatment is right for someone, contraindications, results: every one of those is handed to your clinical team or supervising provider. The assistant books, reminds and answers logistics, and stays completely out of anything clinical.'],
      ['Can a new client book straight into a treatment?', 'No. New clients are booked into a consultation first, not an injectable or treatment chair — the assistant knows the difference and protects your calendar.'],
      ['Can it sound like our brand?', 'Yes. We write and tune the voice with you so it sounds like your front desk, in English and Spanish.'],
      ['Will it reduce no-shows?', 'It sends reminders and confirmations and makes rescheduling simple, which is what protects the calendar.'],
      ['How is client information handled?', 'The assistant collects the name, contact details and the treatment they are asking about. Where that counts as protected health information, it is handled that way. It is not used for anything else. It does not go anywhere it should not. It does not ask for medical history, and anything sensitive is routed to your team. And for a medical med spa, that business associate agreement is signed during setup — before the assistant takes a single call.'],
    ]
  },
  {
    slug: 'dental', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','New-patient calls stop going to voicemail','They get answered and booked while the front desk is with someone at the counter.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','Recall stops slipping','Overdue patients get contacted on schedule instead of whenever there is a quiet moment.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Cancellations stop leaving holes','The waitlist gets worked automatically to refill the slot.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 4.5c2-1.3 4.3-1.4 5.7-.2 1.6 1.4 1.8 4 1.1 7-.6 2.6-.9 4.6-1.4 6.7-.3 1.4-.9 2.1-1.7 2.1-1.1 0-1.5-1.1-1.8-2.7-.3-1.5-.5-2.9-1.9-2.9s-1.6 1.4-1.9 2.9c-.3 1.6-.7 2.7-1.8 2.7-.8 0-1.4-.7-1.7-2.1-.5-2.1-.8-4.1-1.4-6.7-.7-3-.5-5.6 1.1-7 1.4-1.2 3.7-1.1 5.7.2z"/></svg>', label: 'Dental & Health', tag: 'Dental, chiro, vet & clinics',
    headline: 'Your AI department, shaped for practices',
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
    objection: ['"We have front-desk staff."', 'This is not a replacement. It covers the overflow, the after-hours calls, and the recall work that keeps getting pushed to tomorrow.'],
    faqs: [
      ['What about an after-hours call from someone in pain?', 'It follows the rules you approve: it can text you or your on-call line right away, give only the emergency guidance you have pre-approved, and it never offers clinical advice. You decide what counts as urgent and what happens next — it just makes sure the call is not missed.'],
      ['How does it handle insurance questions?', 'It answers in-network yes or no from the plan list you give us, and books the visit. Anything past that — a coverage estimate, a claim or billing question — it captures with the plan details and hands straight to your front desk, so your team gives the accurate answer instead of the patient hearing a wrong one. It never guesses at coverage or quotes a price it is not sure of.'],
      ['Does it book into our practice software?', 'It books into the calendar we set up and keeps it in sync. For practices on Dentrix, Eaglesoft or Open Dental it hands your team the booking to drop in rather than writing into your chart directly, so nothing double-books a chair. We confirm exactly how it connects with you before launch.'],
      ['Does it replace our front desk?', 'No. It covers what they cannot get to — calls while they are busy, after-hours inquiries, and recall outreach.'],
      ['Can it handle recall?', 'Yes. Recall and overdue-visit reminders run on a schedule you approve.'],
['How do you handle patient privacy and HIPAA?', 'Straight answer: the assistant collects the name, contact details and the reason for the call. For a practice, that reason counts as protected health information. So it is handled that way. It is not used for anything else, and it does not go anywhere it should not. The assistant does not ask for clinical history, and anything sensitive is routed to your team rather than handled automatically. As a dental practice, that reason is protected health information, so we sign a HIPAA business associate agreement before anything touches patient information — no agreement, no launch.'],
    ]
  },
  {
    slug: 'retail', week: [['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>','Questions get answered while you are on the floor','Hours, stock and services, without you stopping what you are doing.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>','First-time customers stop disappearing','They hear from you again, instead of never.'],['<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="4.5" width="18" height="16" rx="2"/><line x1="3" y1="9.5" x2="21" y2="9.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><polyline points="9 14 11 16 15.5 12"/></svg>','Quiet weeks get a reason to visit','Promotions and win-backs go out to the people who already bought once.']], built: false, em: '<svg class="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>', label: 'Retail & Local Shops', tag: 'Shops, studios & storefronts',
    headline: 'Your AI department, shaped for local shops',
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
    objection: ['"I am small — is this overkill?"', 'Start with the front desk that never sleeps and add from there. The point is to stop losing people you already earned.'],
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
  { key: 'starter', label: 'Starter', price: '$397/mo' },
  { key: 'growth',  label: 'Growth',  price: '$999/mo', rec: true },
  { key: 'scale',   label: 'Scale',   price: '$1,995/mo' },
  { key: 'total',   label: 'Total',   price: '$4,997/mo' }
];

window.SANO_CAPABILITIES = [
  { key:'textback', tier:'starter', name:'Missed calls texted back',
    d:'A call you can’t pick up gets a text back within seconds — in English or Spanish — and the conversation carries on without you.' },
  { key:'booking', tier:'starter', name:'Booking &amp; reminders',
    d:'People book into the times you actually work, and everyone gets reminded before the day arrives.' },
  { key:'reviews', tier:'starter', name:'Reviews asked for',
    d:'After every finished job the customer gets a short, well-timed text asking for a Google review. You never chase one again.' },
  { key:'google', tier:'starter', name:'Your Google listing kept sharp',
    d:'Hours, services and photos stay current on the page most people actually judge you by.' },
  { key:'report', tier:'starter', name:'A monthly report, in plain English',
    d:'What came in, what got booked, what we changed — told to you in words, not a dashboard you have to learn.' },

  { key:'voice', tier:'growth', name:'A real voice answering',
    d:'Your phone gets picked up out loud, day or night, by an assistant that says it’s an assistant. 500 talk-minutes a month, more at Scale.' },
  { key:'sitechat', tier:'growth', name:'An assistant on your website',
    d:'The people comparing you to two other companies get their questions answered on the spot instead of leaving.' },
  { key:'followup', tier:'growth', name:'Quotes chased until you get an answer',
    d:'Every quote and lead is followed up on a schedule until it’s a yes or a no — the part that always gets dropped.' },
  { key:'campaigns', tier:'growth', name:'Campaigns to your own list',
    d:'Email and text campaigns that bring back customers you already earned, instead of paying to find new ones.' },
  { key:'bilingual', tier:'growth', name:'Answered out loud in Spanish',
    d:'Live bilingual voice, so a Spanish-speaking caller gets a real conversation — not a language you had to hire for.' },

  { key:'landing', tier:'scale', name:'Landing pages built &amp; maintained',
    d:'Pages built for the work you want more of, kept current by us — not a site you have to nag someone to update.' },
  { key:'ads', tier:'scale', name:'Your ads planned &amp; managed',
    d:'We plan and run the ads; the media budget stays yours and is paid straight to Google or Meta.' },
  { key:'payments', tier:'scale', name:'Invoices &amp; pay-by-text',
    d:'The invoice goes out and gets paid from a phone, so money stops sitting in your truck for a week.' },
  { key:'strategy', tier:'scale', name:'A monthly strategy call',
    d:'A standing call to look at what’s working, what isn’t, and what we should change next month.' },

  { key:'app', tier:'total', name:'Your own branded app',
    d:'Your customers, jobs and numbers in an app with your name on it — on your phone and theirs.' },
  { key:'manager', tier:'total', name:'A dedicated manager',
    d:'One person who knows your business by name, weekly calls, and a four-hour response target in writing.' }
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
    booking: 'Classes, fittings and appointments book straight into your real calendar.',
    followup: 'The enquiry that didn’t turn into a visit gets one more touch before it goes cold.',
    campaigns: 'New arrivals and events go out to the customers who already know you.',
    reviews: 'The review gets asked for after the visit, while the bag is still in their hand.',
  },
};
