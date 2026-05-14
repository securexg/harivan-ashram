/**
 * Harivan Ashram — single source of truth for site copy and links.
 * Update copy here so every section stays in sync.
 */

export const site = {
  name: "Harivan Ashram",
  tagline: "A Space Amidst Nature",
  blessing: "Blessed by Pujya Gurudev Sri Sri Ravi Shankar ji",
  org: "The Art of Living",
  url: "https://harivanashram.org",
  description:
    "AOL Harivan Ashram, Tricity (North India) — an 11-acre nature-oriented spiritual retreat under The Art of Living, near New Chandigarh. Yoga, meditation, satsang, YLTP, and rural happiness programs.",
};

export const contact = {
  phone: "0188 129 7833 / +91 91155 30951",
  phoneIntl: "+919115530951",
  whatsapp: "919115530951",
  whatsappMessage:
    "Hi I visited harivanashram.org and I'd like to know more about Harivan Ashram and upcoming programs.",
  email: "artoflivingharivanashram@gmail.com",
  addressShort: "Bardar - 140108, Near Mata Mansa Devi Mandir",
  addressFull:
    "The Art of Living - Harivan Ashram, Bardar -140108, Near Mata Mansa Devi Mandir",
  /** Used in the embedded Google Maps iframe. */
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
    image: "/images/activities/navratri/photo-30.webp",
    slug: "navratri",
  },
  {
    title: "Somnath Ji Jyotirlinga Darshan",
    date: "21 February 2026",
    desc: "Thousands of villagers and our Art of Living family came together for an unforgettable Shobha Yatra and darshan event at Harivan.",
    image: "/images/activities/shobha-yatra/photo-15.webp",
    slug: "shobha-yatra",
  },
  {
    title: "Volunteer Sunday",
    date: "19 April 2026",
    desc: "Long Sudarshan Kriya, a warm breakfast and a volunteer meet — building Harivan with all of us together.",
    image: "/images/activities/shobha-yatra/photo-10.webp",
    slug: "volunteer-sunday",
  },
  {
    title: "Daily & Weekly Satsang",
    date: "Ongoing",
    desc: "Evening satsangs by Swamiji at the ashram, weekly satsangs across nearby villages, and a Sunday follow-up since 15 March 2026.",
    image: "/images/activities/navratri/photo-04.webp",
    slug: "satsang",
  },
];
/** Back-compat alias — older imports still call it `activities`. */
export const activities = events;

export const support = {
  eyebrow: "Nirman Seva",
  title: "Let us build this divine space together!",
  intro:
    "We are lovingly expanding Harivan Ashram near New Chandigarh to create a beautiful sanctuary for Art of Living courses, Meditation, Yoga, Satsang, and Seva 🧘‍♀️✨\n\nWe warmly invite you to become a part of this sacred Nirman Seva and help us build a true “Lighthouse of Peace & Tranquility” 🌸",
  initiatives: [
    {
      title: "🏛️ Shanti Mantap",
      desc: "Support the construction of our main Meditation & Satsang Hall."
    },
    {
      title: "🛌 Atithi Nivas",
      desc: "Sponsor cottage tents and essential accessories for seekers and volunteers."
    },
    {
      title: "🥗 Annapurna Kitchen",
      desc: "Contribute towards a modern Satvic kitchen and dining facility."
    },
    {
      title: "🌳 Prakriti Seva",
      desc: "Help create green gardens, solar power systems, tree plantations, and peaceful zen walking trails."
    }
  ],
  closing: "Every brick you sponsor can help someone discover peace, joy, and inner transformation.",
  donationLink: "https://vdst.in/e/77128",
  whatsappGroup: "https://chat.whatsapp.com/JjEQwFpXgC8EbBhYIntS2c?mode=gi_t",
  sewaContacts: "0188 129 7833 / +91 91 1571 9933 / +91 91155 30951"
};

export const team = {
  // Public-facing site keeps team off the page; data retained for footer credit if needed later.
};

export const swamiji = {
  eyebrow: "Resident Teacher",
  title: "Brahmachari Nripen Das ji",
  body: [
    "Originally from Assam, he began his journey in 2011 as a full-time volunteer at the Bengaluru Ashram, serving across multiple departments. From 2015–2021, he contributed as an Ayurvedic practitioner in Panchakarma and Naturopathy.",
    "He has completed his Brahmachari training, serving people and society with joy and dedication. Embodying simplicity, sincerity, and committed seva, he manages AOL Tricity - Harivan Ashram with Gurudev's blessings."
  ],
  contact: "+91 91 1571 9933"
};
