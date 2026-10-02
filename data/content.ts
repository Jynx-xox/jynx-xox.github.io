// ------------------------------------------------------------------
// Site content lives here. Edit this file to update the site.
// Anything marked [PLACEHOLDER] must be replaced with real info.
// ------------------------------------------------------------------

export const site = {
  name: "Kendeo Gosti",
  shortName: "Ken",
  role: "Math–Computer Science @ UC San Diego",
  location: "San Diego / Union City, CA",
  email: "kengosti@gmail.com",
  github: "https://github.com/Jynx-xox",
  linkedin: "https://www.linkedin.com/in/your-handle", // [PLACEHOLDER] add your LinkedIn URL
  resumeUrl: "/resume.pdf", // drop your resume PDF into /public
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  role: string;
  tech: string[];
  github?: string;
  live?: string;
  overview: string;
  problem: string;
  built: string;
  decisions: string;
  challenges: string;
  learned: string;
};

// Add a new project by copying one object; no component changes needed.
// The bracketed long-form fields below benefit from a few sentences each —
// send me more detail on any project and I'll expand them.
export const projects: Project[] = [
  {
    slug: "order-management",
    title: "Small Business Order Management Platform",
    year: "2025",
    description:
      "A dashboard for a family catering business to manage orders, payments, and pickup dates across 30+ customers.",
    role: "Solo developer",
    tech: ["Python", "Flask", "SQLite"],
    // [PLACEHOLDER repo URL] — point at the real repo if public
    github: "https://github.com/Jynx-xox",
    overview:
      "An internal web dashboard built for a family catering business to replace scattered spreadsheets for tracking customer orders.",
    problem:
      "Order, payment, and pickup information for 30+ customers lived in spreadsheets, which made it easy to miss orders, miscalculate totals, or lose track of payment status.",
    built:
      "Built the full application: customer search, order filtering, automated totals, duplicate detection, and CSV/Excel export for records.",
    decisions:
      "Chose Flask with SQLite for a lightweight, self-hosted tool that runs without external services. [Add more — schema design, why server-rendered, etc.]",
    challenges:
      "[What was hardest — e.g. modeling order status, handling edge cases in duplicate customer names.]",
    learned:
      "[What you took away — e.g. designing software around a real non-technical user's daily workflow.]",
  },
  {
    slug: "computer-vision-automation",
    title: "Real-Time Computer Vision Automation",
    year: "2025",
    description:
      "A real-time vision system that detects on-screen events and triggers automated inputs with low latency.",
    role: "Solo developer",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/Jynx-xox", // [PLACEHOLDER repo URL]
    overview:
      "A real-time computer vision system that watches for specific visual events and responds with automated keyboard input.",
    problem:
      "[What this was for and why manual reaction wasn't good enough — a sentence or two of real context goes here.]",
    built:
      "Built the detection pipeline with OpenCV image detection and region-based tracking, plus a configurable hotkey/macros layer for low-latency responses.",
    decisions:
      "Used region-based tracking instead of full-frame analysis to improve detection accuracy and timing. [Add more — frame rate targets, matching strategies, etc.]",
    challenges:
      "[e.g. tuning detection thresholds, reducing false positives, hitting low-latency targets.]",
    learned:
      "[e.g. tradeoffs between detection accuracy and speed in real-time systems.]",
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    year: "2024",
    description:
      "A web-based check-in system with user management, duplicate prevention, and date filtering.",
    role: "Solo developer",
    tech: ["Python", "Flask", "Excel"],
    github: "https://github.com/Jynx-xox", // [PLACEHOLDER repo URL]
    overview:
      "A web-based attendance system for managing and recording participant check-ins.",
    problem:
      "[Who used this and what manual process it replaced.]",
    built:
      "Implemented user management, duplicate-entry prevention, date filtering, and attendance tracking, with separate admin and general-user functionality backed by persistent database storage.",
    decisions:
      "[Why Flask, how the admin/user split was handled, how duplicates are detected.]",
    challenges:
      "[What was tricky — e.g. defining duplicates, keeping the general-user flow fast enough for check-in lines.]",
    learned:
      "[What you took away — e.g. designing roles and permissions for a real workflow.]",
  },
  {
    slug: "wardrobe-tracker",
    title: "Wardrobe & Outfit Tracker",
    year: "2025",
    description:
      "An interactive wardrobe app for organizing clothes, planning outfits, and tracking what you wore.",
    role: "Solo developer",
    tech: ["React", "JavaScript"],
    github: "https://github.com/Jynx-xox", // [PLACEHOLDER repo URL]
    overview:
      "An interactive wardrobe application for organizing clothing and tracking daily outfits.",
    problem:
      "Hard to keep track of what you own and what you've already worn. [A sentence of personal motivation works well here.]",
    built:
      "Built inventory management, photo uploads, outfit selection, and calendar-based outfit history, with a customizable interface of clothing categories and outfit “equipment” slots.",
    decisions:
      "[Component structure, state management approach, how photo storage is handled.]",
    challenges:
      "[What was hard — e.g. modeling outfits out of items, calendar history queries.]",
    learned:
      "[What you took away — e.g. managing richer client-side state in React.]",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description?: string;
  coursework?: string;
};

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Present",
    title: "B.S. Math–Computer Science",
    org: "University of California, San Diego — Class of 2030",
    coursework:
      "Multivariable Calculus, Differential Equations, Linear Algebra, Statistics",
  },
  {
    period: "2025 — Present",
    title: "Software Developer",
    org: "Freelance",
    description:
      "Build Python and automation tools for individuals and community members — custom keyboard macros, Flask-based utilities, and workflow automations for 10+ users based on their specific needs.",
  },
  {
    period: "2023 — Present",
    title: "Technology & Operations Assistant",
    org: "Family Catering Business",
    description:
      "Developed internal tools for order tracking, scheduling, and customer records across 30+ customers. Automated repetitive spreadsheet and administrative workflows with Python and Excel.",
  },
  {
    period: "2025 — Present",
    title: "Team Member",
    org: "Hollister, Abercrombie & Fitch",
    description:
      "Customer-facing retail role — product guidance, organized sales floor, and efficient, friendly service with the team.",
  },
  {
    period: "2024 — 2026",
    title: "Student Mentor",
    org: "James Logan Mentoring Program",
    description:
      "Mentored high school students in math and computer science, volunteering 200+ hours through consistent weekly meetings.",
  },
  {
    period: "2023 — 2024",
    title: "Varsity Member",
    org: "Speech & Debate (Forensics)",
    description:
      "Competed across the Bay Area in public speaking and performance events.",
  },
  {
    period: "2022 — 2026",
    title: "High School Diploma",
    org: "James Logan High School — Union City, CA",
    description: "Graduated with a 4.0 GPA.",
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "Tailwind CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Flask", "OpenCV", "NumPy", "Pandas", "PyTorch"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "VS Code", "SQLite", "Excel"],
  },
  {
    label: "AI",
    items: [
      "Generative AI",
      "Prompt Engineering",
      "AI-Assisted Development",
      "Machine Learning",
      "LLM APIs",
    ],
  },
];

export const interests = {
  cs: [
    "Software Engineering",
    "Computer Vision",
    "Automation",
    "Problem Solving",
  ],
  outside: ["Public speaking", "Mentoring"], // [PLACEHOLDER] add hobbies if you'd like
};
