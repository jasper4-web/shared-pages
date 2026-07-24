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
    slug: 'hvac', em: '❄️', label: 'HVAC', tag: 'Heating, cooling & air quality',
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
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most in a heat wave, when you are messaging a lot of people at once. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'plumbing', em: '🔧', label: 'Plumbing', tag: 'Service, repair & drain work',
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
      'Sends the invoice and the pay-by-text link so you stop chasing money'
    ],
    blueprint: [
      'An answering script trained on common plumbing calls',
      'Emergency routing so urgent leaks reach you fast',
      'Automatic follow-up on quotes that have gone quiet',
      'Invoice and pay-by-text sent as soon as the job is done',
      'The same review request after every completed job'
    ],
    season: 'Plumbing emergencies never stop, so the answering side runs year-round — with extra pushes around remodel season and water-heater season.',
    truth: 'A call that goes to voicemail during an active leak is usually not a call that comes back.',
    objection: ['"The big franchises have 24/7 phone staff."', 'Now so do you — without hiring a single person or paying a night shift.'],
    faqs: [
      ['Can it answer while I am on a job?', 'That is exactly when it works hardest. It picks up on the first ring whether you are free or elbow-deep under a sink.'],
      ['Will customers know it is not me?', 'It sounds like a friendly, professional person on your team, and it speaks English and Spanish. Anything it cannot answer comes straight to you.'],
      ['Does it help me get paid faster?', 'Yes. It can send the invoice and a secure pay-by-text link right after the job, instead of it waiting until you get home.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are texting after hours. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'roofing', em: '🏠', label: 'Roofing', tag: 'Repair, replacement & storm work',
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
    truth: 'Most estimates are followed up once, if at all. The follow-up nobody has time for is where the work actually closes.',
    objection: ['"The national brands out-market me."', 'They have full-time marketing teams. We are yours — for a fraction of one salary.'],
    faqs: [
      ['Can it keep up after a big storm?', 'Yes. It answers every caller at once, so nobody sits on hold and no one gets a voicemail while you are on a roof.'],
      ['Does it chase my estimates?', 'It follows up automatically on a schedule you approve — the part that usually gets dropped when you are busy.'],
      ['What about the slow months?', 'Your blueprint includes check-in and inspection campaigns to your past customers so the phone still rings between storms.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most after a storm, when you are contacting a whole neighbourhood. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'home-services', em: '🧰', label: 'Home Services', tag: 'Electrical, landscaping, cleaning, pest',
    headline: 'Your AI department, already built for home services',
    sub: 'Electrical, landscaping, cleaning, pest control, pools, remodeling — if the work happens at someone\'s home and starts with a phone call, this is built for you.',
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
    truth: 'Most home-service jobs go to whoever responds first — not whoever quotes lowest.',
    objection: ['"I am only a few people."', 'You do not need more people. You need to stop losing the customers already trying to reach you.'],
    faqs: [
      ['My trade is not listed. Does it still work?', 'Yes. The blueprint is shaped to your services and how you actually work. Any business that books jobs and answers calls fits.'],
      ['Do I have to manage it?', 'No. We build it, run it, and improve it. That is what you are paying for.'],
      ['Will it work with how I already schedule?', 'We fit it around your existing calendar and process instead of forcing you to change how you work.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are running a seasonal campaign. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'auto', em: '🚗', label: 'Auto', tag: 'Dealers, repair, body & tire',
    headline: 'Your AI department, already built for auto',
    sub: 'Service calls, quote requests, and test-drive inquiries answered the moment they come in — so the buyer who is ready right now talks to you and not the next lot.',
    pains: [
      'Calls come in while every advisor is already with a customer.',
      'After-hours inquiries sit until morning, and by then the buyer moved on.',
      'Past customers are your easiest work, but nobody has time to reach out.'
    ],
    runs: [
      'Answers every service call and web inquiry, day or night',
      'Books service appointments and test drives on your schedule',
      'Follows up on quotes and inquiries until you get an answer',
      'Brings past customers back with service reminders'
    ],
    blueprint: [
      'A script trained on service and sales questions',
      'Service and test-drive booking on your real availability',
      'Automatic follow-up on quotes and inquiries',
      'Service-due and maintenance reminders to past customers',
      'The same review request after every visit'
    ],
    season: 'Set up for the way your bays and floor actually run, including the after-hours window when nobody is there to pick up.',
    truth: 'The shop that answers first usually gets the appointment — the rest leave a voicemail nobody returns.',
    objection: ['"We already have a front desk."', 'Keep them. This covers the calls they cannot get to — nights, weekends, and the times three phones ring at once.'],
    faqs: [
      ['Can it book service and test drives?', 'Yes — against your real availability, then it confirms with the customer automatically.'],
      ['Does it work after we close?', 'That is where it earns its keep. Evening and weekend inquiries get answered and booked instead of going cold.'],
      ['Will it fit how our shop runs?', 'We build it around your process. Nothing goes live until you have seen it and approved it.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are messaging a service list. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'med-spa', em: '💆', label: 'Med Spa & Aesthetics', tag: 'Med spas, salons & wellness',
    headline: 'Your AI department, already built for aesthetics & wellness',
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
      'Booking with deposits where you want them',
      'Reminders and confirmations that cut no-shows',
      'Rebooking and new-treatment campaigns to past clients',
      'The same review request after every visit'
    ],
    season: 'Built around your treatment menu and the times clients actually reach out — which is usually evenings and weekends.',
    truth: 'An empty chair cannot be resold later. Reminders and easy rescheduling are what keep the day full.',
    objection: ['"Our brand voice matters."', 'Agreed. We tune the wording with you, and nothing speaks to a client until you have signed off on how it sounds.'],
    faqs: [
      ['Can it sound like our brand?', 'Yes. We write and tune the voice with you so it sounds like your front desk, in English and Spanish.'],
      ['Will it reduce no-shows?', 'It sends reminders and confirmations and makes rescheduling simple, which is what protects the calendar.'],
      ['How is client information handled?', 'The assistant collects the name, contact details and the treatment they are asking about. Where that counts as protected health information it is handled that way — not used for anything else, not sent anywhere it should not go. It does not ask for medical history, and anything sensitive is routed to your team. If your practice needs a signed business associate agreement, we will tell you before you pay us whether we can sign one for the setup you want.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are promoting a treatment. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'dental', em: '🦷', label: 'Dental & Health', tag: 'Dental, chiro, vet & clinics',
    headline: 'Your AI department, already built for practices',
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
      ['Does it replace our front desk?', 'No. It covers what they cannot get to — calls while they are busy, after-hours inquiries, and recall outreach.'],
      ['Can it handle recall?', 'Yes. Recall and overdue-visit reminders run on a schedule you approve.'],
['How do you handle patient privacy and HIPAA?', 'Straight answer: the assistant collects the name, contact details and the reason for the call. For a practice that reason counts as protected health information, so it is handled that way — it is not used for anything else and it is not sent anywhere it should not go. The assistant does not ask for clinical history, and anything sensitive is routed to your team rather than handled automatically. Where you need a signed business associate agreement, we will tell you before you pay us whether we can sign one for the setup you want.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are running recall. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  },
  {
    slug: 'retail', em: '🛍️', label: 'Retail & Local Shops', tag: 'Shops, studios & storefronts',
    headline: 'Your AI department, already built for local shops',
    sub: 'Answer every question, take every booking, and stay in touch with the customers you already have — while you are busy running the floor.',
    pains: [
      'Questions come in by phone, text, and social while you are helping someone in person.',
      'Customers buy once and are never heard from again.',
      'Reviews only happen by luck, so your rating does not reflect your service.'
    ],
    runs: [
      'Answers questions about hours, stock, and services across every channel',
      'Takes bookings and appointments where you offer them',
      'Runs promotions and reminders to past customers',
      'The same review ask after every purchase or visit'
    ],
    blueprint: [
      'A script trained on your hours, services, and common questions',
      'One place for calls, texts, and messages',
      'Promotion and win-back campaigns to past customers',
      'Booking and reminders where you take appointments',
      'The same review request after a purchase or visit'
    ],
    season: 'Built around your busy periods and the promotions you want to run, so the quiet weeks are not left to chance.',
    truth: 'Most local shops never hear from a customer again after the first visit — not because of the service, but because nobody followed up.',
    objection: ['"I am small — is this overkill?"', 'Start with the front desk that never sleeps and add from there. The point is to stop losing people you already earned.'],
    faqs: [
      ['I do not take appointments. Is this still useful?', 'Yes. Answering questions instantly and staying in touch with past customers matters whether or not you book time slots.'],
      ['Can it answer messages from social too?', 'Yes — calls, texts, and messages land in one place and get answered the same way.'],
      ['Do I have to run any of it?', 'No. We build it and run it. You approve how it sounds and then get on with your day.'],
      ['Is the texting compliant? I don\'t want trouble.', 'Yes — and it matters most when you are sending a promotion. Here is how we handle it, rather than a blanket promise. Marketing texts only go to people who have given written permission. Every one has a clear way to stop, and we honor it immediately. We register your number for business texting properly instead of blasting from an unregistered line. We are not your lawyers, and we will decline a campaign we think puts you at risk.']
    ]
  }
];
