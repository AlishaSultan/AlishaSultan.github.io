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
