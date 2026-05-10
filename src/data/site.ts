/**
 * Harivan Ashram — single source of truth for site copy and links.
 * Update copy here so every section stays in sync.
 */

export const site = {
  name: "Harivan Ashram",
  tagline: "A Space Amidst Nature",
  blessing: "Blessed by Pujya Gurudev Sri Sri Ravi Shankar ji",
  org: "The Art of Living",
  url: "https://harivan.sphost.online",
  description:
    "AOL Harivan Ashram, Tricity (North India) — an 11-acre nature-oriented spiritual retreat under The Art of Living, near New Chandigarh. Yoga, meditation, satsang, YLTP, and rural happiness programs.",
};

export const contact = {
  phone: "+91 95699 19990",
  phoneIntl: "+919569919990",
  whatsapp: "919569919990",
  whatsappMessage:
    "Hari Om. I'd like to know more about Harivan Ashram and upcoming programs.",
  email: "artoflivingharivanashram@gmail.com",
  addressShort: "Bardar, near New Chandigarh – 140108",
  addressFull:
    "The Art of Living, Harivan Ashram, Haripur, Bardar, Purkhali, Rupnagar (Near New Chandigarh) – 140108",
  /** Used in the embedded Google Maps iframe — z=15 is street/locality level. */
  mapsQuery: "Harivan+Ashram+Bardar+Rupnagar+Punjab",
};

export const links = {
  artOfLiving: "https://www.artofliving.org/in-en",
  gurudev: "https://www.gurudev.artofliving.org/",
  yltp:
    "https://www.artofliving.org/in-en/youth-leadership-training-program-yltp",
  instagram: "https://www.instagram.com/harivanashram/",
};

export const yltp = {
  title: "Youth Leadership Training Program",
  subtitle: "7-day residential program for ages 18–35",
  date: "23 – 29 May 2026",
  duration: "7 Days · Residential",
  age: "18 – 35 years",
  donation: "₹1,000 contribution",
  facilitators:
    "Conducted by Vinay Sukhija ji & Harveen Sukhija ji",
  copy:
    "A transformative residential journey of breath, meditation, leadership and seva — held in the calm of Harivan's 11-acre forest setting.",
};

export const about = {
  eyebrow: "About Harivan Ashram",
  title: "Eleven acres of forest, breath, and silence near Chandigarh.",
  body: [
    "Harivan Ashram is the Art of Living's Tricity centre in North India — set on eleven acres of vibrant land surrounded by lush forest in Bardar village, near New Chandigarh.",
    "It is a sanctuary for stillness, sadhana and seva. Our intent is gentle and clear: nourish body, mind and spirit, and let inner transformation become societal transformation.",
  ],
  pillars: [
    {
      title: "Amidst Nature",
      desc: "Eleven acres of forest, fresh air and quiet — the natural classroom for meditation and breath.",
    },
    {
      title: "Art of Living",
      desc: "A wing of Gurudev Sri Sri Ravi Shankar ji's global movement — open to all, rooted in service.",
    },
    {
      title: "Volunteers & Seva",
      desc: "A growing community of volunteers serving the surrounding villages with wisdom, time and skills.",
    },
  ],
};

export const gurudev = {
  eyebrow: "Our Inspiration",
  title: "Gurudev Sri Sri Ravi Shankar",
  body:
    "A spiritual teacher, humanitarian and ambassador of peace, Gurudev Sri Sri Ravi Shankar ji has touched the lives of over 800 million people across 180 countries. His vision of a violence-free, stress-free society inspires every breath we take at Harivan.",
  /** Additional paragraphs — paraphrased from public material on gurudev.artofliving.org. */
  bodyMore: [
    "Through The Art of Living, Gurudev has revived ancient breath-based practices such as Sudarshan Kriya, making meditation and inner calm accessible to people of every faith, age and background.",
    "His humanitarian work spans conflict resolution, trauma relief, education for tribal children, prisoner rehabilitation, environmental care and inter-faith dialogue — always rooted in the message that inner peace is the basis of outer peace.",
    "The Art of Living is a global, open organisation — not bound to any sect or community. All are welcome at Harivan to learn, breathe and serve.",
  ],
  quote:
    "The world is a mixture of joy and sorrow. Celebrate when you have joy, and when you have sorrow, have the faith that this will also pass.",
  attribution: "— Gurudev Sri Sri Ravi Shankar ji",
  aolBlurb:
    "The Art of Living, founded in 1981, is one of the world's largest volunteer-based humanitarian and educational NGOs — present across 180 countries with programs in breath, meditation, leadership and rural development.",
};

/** Event Gallery cards (was: Recent gatherings).  Photos chosen so nothing
 * repeats across hero / about / gurudev / gallery / footer. */
export const events = [
  {
    title: "Navratri Celebration",
    date: "28 – 30 September 2025",
    desc: "Three days of sacred homas by Vedic Pandits, joined by hundreds of villagers and volunteers. A devotion-filled atmosphere.",
    image: "/images/activities/navratri/photo-01.webp",
    slug: "navratri",
  },
  {
    title: "Somnath Ji Jyotirlinga Darshan",
    date: "21 February 2026",
    desc: "Thousands of villagers and our Art of Living family came together for an unforgettable Shobha Yatra and darshan event at Harivan.",
    image: "/images/activities/shobha-yatra/photo-05.webp",
    slug: "shobha-yatra",
  },
  {
    title: "First Rural Happiness Program",
    date: "Concluded 9 March 2026",
    desc: "A 6-day program bringing breath, meditation and joy to neighbouring villages — the first of many to come.",
    image: "/images/activities/navratri/photo-03.webp",
    slug: "rural-happiness",
  },
  {
    title: "Volunteer Sunday",
    date: "19 April 2026",
    desc: "Long Sudarshan Kriya, a warm breakfast and a volunteer meet — building Harivan with all of us together.",
    image: "/images/activities/navratri/photo-13.webp",
    slug: "volunteer-sunday",
  },
  {
    title: "Daily & Weekly Satsang",
    date: "Ongoing",
    desc: "Evening satsangs by Swamiji at the ashram, weekly satsangs across nearby villages, and a Sunday follow-up since 15 March 2026.",
    image: "/images/activities/navratri/photo-20.webp",
    slug: "satsang",
  },
];
/** Back-compat alias — older imports still call it `activities`. */
export const activities = events;

export const support = {
  eyebrow: "Support the Ashram",
  title: "Run by volunteers, sustained by you.",
  body:
    "Harivan runs on seva and thoughtful contributions from our community. Bank account and UPI details will be published here when finalised — for now, please reach out by phone or WhatsApp and our volunteers will guide you.",
};

export const team = {
  // Public-facing site keeps team off the page; data retained for footer credit if needed later.
};
