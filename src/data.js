export const profile = {
  name: "Alisha Sultan",
  roles: [
    "Software Engineer",
    "Fintech Backend Developer",
    "Laravel · PHP · MySQL",
    "AI-Augmented Developer",
    "React & Vue Builder",
  ],
  location: "Lahore, Punjab, Pakistan",
  email: "alishasultan0123@gmail.com",
  phone: "+92 326 0952821",
  github: "https://github.com/AlishaSultan",
  linkedin: "https://www.linkedin.com/in/alisha-sultan-0775832ba/",
  resume: "/Alisha-Sultan-CV.pdf",
  summary:
    "Software Engineer with production experience in fintech backend development using Laravel, PHP, and MySQL. Built and maintained core banking features for a live lending platform, with strong fundamentals in REST APIs, query optimization, and cross-functional delivery. Applies prompt engineering and AI tools daily to write cleaner code and ship faster.",
};

export const stats = [
  { num: 2, label: "Years building\nin production" },
  { num: 6, label: "Shipped\nprojects" },
  { num: 3, label: "Collateral modules\nat Manafa" },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Manafa Technologies",
    when: "Aug 2024 — Present",
    place: "Onsite · Lahore, Pakistan",
    points: [
      "Developed a Loan Management System for end-to-end loan workflows, replacing a legacy process and removing the prior funding cap.",
      "Built three collateral modules — Guarantee Agreement, Promissory Note, and Real Estate Mortgage — for document handling in the admin workflow.",
      "Implemented funder management supporting multiple opportunities under a single loan, enabling one-time commodity purchases.",
      "Integrated LLM capabilities and AI-assisted tooling to speed up delivery and debugging; optimized MySQL & MongoDB queries.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "MongoDB", "React", "Vue", "OpenAI API", "n8n"],
  },
  {
    role: "Back End Developer Intern",
    company: "KS Technologies",
    when: "Sep 2023 — Oct 2023",
    place: "Onsite · Lahore, Pakistan",
    points: [
      "Developed and integrated RESTful API endpoints and CRUD modules in Laravel to support new business requirements.",
      "Debugged and optimized backend workflows in PHP for more reliable API request handling.",
      "Implemented frontend UI updates with HTML, CSS, and JavaScript to improve interaction flows.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "REST APIs", "JavaScript"],
  },
  {
    role: "Data Science Trainee",
    company: "Expert System Solution",
    when: "Oct 2022 — Dec 2022",
    place: "Onsite · Lahore, Pakistan",
    points: [
      "Built data visualizations from real-world datasets using Pandas, Matplotlib, and Seaborn.",
      "Gained foundations in machine learning concepts, model evaluation, and data preprocessing.",
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "ML"],
  },
];

export const projects = [
  {
    title: "Synboards — Real-Time Collaborative Kanban",
    date: "Jun 2026",
    desc: "Multi-user Kanban with conflict-free real-time sync using Yjs (CRDT) over y-websocket. Offline support via y-indexeddb + LevelDB, live presence (avatars & cursors), undo/redo, and a full RTL English/Arabic interface.",
    tags: ["React", "Vite", "Yjs / CRDT", "y-websocket", "dnd-kit", "Tailwind"],
    url: "https://github.com/AlishaSultan/sync_board",
    cta: "View on GitHub",
  },
  {
    title: "RAG Question-Answering Pipeline",
    date: "May 2026",
    desc: "End-to-end Retrieval-Augmented Generation: ingestion, chunking, embeddings, vector storage, and semantic retrieval. Top-k similarity search returns grounded answers with source citations to reduce hallucinations.",
    tags: ["Python", "OpenAI API", "Vector DB", "Embeddings"],
    url: "https://github.com/AlishaSultan/RAG-practice-project",
    cta: "View on GitHub",
  },
  {
    title: "Custom Contact Form Package",
    date: "Apr 2024",
    desc: "Published a reusable Laravel Composer package with plug-and-play contact forms, built-in validation, email delivery, and configurable fields — eliminating repetitive setup across projects.",
    tags: ["Laravel", "PHP", "Composer", "SMTP"],
    url: "https://packagist.org/packages/alisha/customcontactform",
    cta: "View on Packagist",
  },
  {
    title: "Social Media Content Uploader",
    date: "Apr 2024",
    desc: "A Laravel tool that uploads and auto-publishes images/videos to YouTube, Facebook, and Instagram via official APIs — multi-platform distribution from a single interface.",
    tags: ["Laravel", "YouTube API", "Facebook Graph", "Instagram API"],
    url: "https://www.linkedin.com/posts/alisha-sultan-0775832ba_laravel-youtubeapi-webdevelopment-activity-7313539063645396993-aU-u/",
    cta: "View demo on LinkedIn",
  },
  {
    title: "Debris Glacier Detection System",
    date: "Apr 2023",
    desc: "Final-year deep learning framework for automated monitoring of debris-covered glaciers from satellite imagery, built with the Space & Science Department.",
    tags: ["Python", "Deep Learning", "CNN", "Remote Sensing"],
    url: null,
    cta: "Final Year Project · FCIT",
  },
];

export const services = {
  // The offer the cold-outreach emails point at. Edit freely - this block is
  // the single source of truth for the "Websites" section.
  eyebrow: "For shops, clinics, salons, gyms and restaurants",
  headline: "A website your customers can actually find",
  pitch:
    "Most small businesses in Pakistan show up on Google Maps with great reviews and nowhere to send people. I build the missing piece: a fast, mobile-first site with your services, prices and a tap-to-WhatsApp button - live in about a week.",
  // Phone used for the WhatsApp / call buttons in this section.
  whatsapp: "+923434900369",
  phoneDisplay: "+92 343 4900369",
  priceNote: "Most projects land between PKR 50,000 and PKR 150,000 depending on page count.",
  packages: [
    {
      name: "Single Page",
      price: "PKR 50,000",
      best: "Replacing no website at all",
      items: [
        "One long scrolling page",
        "Services or menu with prices",
        "Tap-to-call and WhatsApp buttons",
        "Google Maps and opening hours",
        "Live in 5-7 days",
      ],
    },
    {
      name: "Business Site",
      price: "PKR 85,000",
      featured: true,
      best: "Most shops and clinics",
      items: [
        "Up to 5 pages",
        "Photo gallery",
        "Contact form straight to your inbox",
        "Basic SEO and Google Business link",
        "1 year hosting and SSL included",
      ],
    },
    {
      name: "Growth",
      price: "PKR 150,000",
      best: "Booking-led businesses",
      items: [
        "Up to 10 pages",
        "Online booking or enquiry flow",
        "Blog or offers section you can edit",
        "Urdu and English versions",
        "Two rounds of revisions",
      ],
    },
  ],
  steps: [
    ["01", "Free preview", "I build a homepage concept for your business first. No cost, nothing owed."],
    ["02", "You decide", "Like it, we go ahead. Don't, keep the preview and we part friends."],
    ["03", "Live in a week", "50% to start, 50% the day it goes live. You own the domain and files."],
  ],
};

export const skills = [
  { group: "Backend", items: ["PHP", "Laravel", "MySQL", "MongoDB", "REST APIs", "Python"] },
  { group: "Frontend", items: ["React", "Vue.js", "JavaScript", "jQuery", "HTML5", "CSS3"] },
  { group: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Linux", "MySQL Workbench", "n8n"] },
  { group: "AI & Development", items: ["OpenAI API", "Prompt Engineering", "AI-Assisted Coding", "LLM Integration", "GitHub Copilot"] },
];

export const certs = [
  {
    year: "2025",
    text: "Monthly Performer Award — Manafa Technologies",
    url: "https://www.linkedin.com/posts/alisha-sultan-0775832ba_recognition-monthlyperformer-hardworkpaysoff-share-7381372523164278784--XWb",
  },
  {
    year: "2026",
    text: "Generative AI for Software Development — DeepLearning.AI / Coursera",
    url: "https://www.linkedin.com/posts/alisha-sultan-0775832ba_generativeai-softwaredevelopment-ai-share-7441442279791161344-j3zb",
  },
  {
    year: "2024",
    text: "SQL Certified — HackerRank",
    links: [
      { label: "SQL Basic ↗", url: "https://www.hackerrank.com/certificates/iframe/d1a695b092c9" },
      { label: "SQL Intermediate ↗", url: "https://www.hackerrank.com/certificates/iframe/120f1cce2280" },
    ],
  },
];

export const facts = [
  ["Role", "Software Engineer"],
  ["Focus", "Fintech · Backend · AI"],
  ["Location", "Lahore, Punjab, PK"],
  ["Education", "BS Information Technology"],
  ["CGPA", "3.3 / 4.0"],
];
