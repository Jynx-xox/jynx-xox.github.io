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
  linkedin: "https://www.linkedin.com/in/ken-gosti-77ba01342/",
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
// Projects marked private have no public repo, so no links are shown.
export const projects: Project[] = [
  {
    slug: "wardrobe-tracker",
    title: "Wardrobe & Outfit Tracker",
    year: "2025",
    description:
      "An interactive wardrobe app for organizing clothes, planning outfits, and tracking what you wore.",
    role: "Solo developer",
    tech: ["React", "JavaScript"],
    live: "https://wardrobe-nine-snowy.vercel.app/",
    overview:
      "An interactive wardrobe application for organizing clothing and tracking daily outfits.",
    problem:
      "I built this to stay connected with friends after starting college and living farther apart. It gives us a shared, lightweight way to see each other's daily fits and keep a small part of our day-to-day lives connected.",
    built:
      "Built a social wardrobe experience with accounts and logins, clothing-item profiles, daily fits, a calendar, friend feeds, following and followers, posts, and likes. Friends can scroll through each other's outfits and clothing collections in one place.",
    decisions:
      "Focused on making the app visual and social rather than text-heavy. The main flows — posting a fit, browsing friends' outfits, and adding clothing — are designed to feel quick and natural on the same timeline.",
    challenges:
      "The biggest challenge was connecting personal wardrobe data with social features without making the experience feel complicated. The app had to keep calendars, daily fits, posts, likes, follows, and account-specific content consistent as people moved between their own wardrobe and their friends' feeds.",
    learned:
      "This project taught me how to turn a personal idea into a product people can actually use with friends. It also gave me experience thinking through authenticated users, social relationships, and the many small states behind a seemingly simple feed.",
  },
  {
    slug: "order-management",
    title: "Small Business Order Management Platform",
    year: "2025",
    description:
      "A dashboard for a family catering business to manage orders, payments, and pickup dates across 30+ customers.",
    role: "Solo developer",
    tech: ["Python", "Flask", "SQLite"], // private repo — no link
    overview:
      "An internal web dashboard built for a family catering business to replace scattered spreadsheets for tracking customer orders.",
    problem:
      "Order, payment, and pickup information for 30+ customers lived in spreadsheets, which made it easy to miss orders, miscalculate totals, or lose track of payment status.",
    built:
      "Built the full application: customer search, order filtering, automated totals, duplicate detection, and CSV/Excel export for records.",
    decisions:
      "Chose Flask with SQLite for a lightweight, self-hosted tool that could fit the business's existing workflow without requiring a complicated deployment. The interface was designed around quick entry, clear order status, and easy retrieval of customer records.",
    challenges:
      "The main challenge was translating an informal, spreadsheet-based process into a structured workflow that still felt simple for non-technical users. I also had to account for duplicate customer names, changing order details, payment status, and exportable records.",
    learned:
      "I learned that useful software starts with understanding the user's actual process. A technically simple tool can create a lot of value when it removes repetitive entry and presents information in a way that matches how a business already operates.",
  },
  {
    slug: "computer-vision-automation",
    title: "Real-Time Computer Vision Automation",
    year: "2025",
    description:
      "A real-time vision system that detects on-screen events and triggers automated inputs with low latency.",
    role: "Solo developer",
    tech: ["Python", "OpenCV"], // private repo — no link
    overview:
      "A real-time computer vision system that watches for specific visual events and responds with automated keyboard input.",
    problem:
      "The system detects QTEs and other on-screen events that require quick responses. Manual input was inconsistent and sometimes inaccurate, so the project explored how computer vision could recognize those events and trigger a response more reliably.",
    built:
      "Built the detection pipeline with OpenCV image detection and region-based tracking, plus a configurable hotkey/macros layer for low-latency responses.",
    decisions:
      "Used region-based tracking instead of full-frame analysis to reduce unnecessary processing and focus detection on the parts of the screen where relevant events appear. The automation layer was kept configurable so detection and input behavior could be adjusted independently.",
    challenges:
      "The main challenge was balancing responsiveness with reliability: detection thresholds needed to be sensitive enough to catch short-lived events without triggering on unrelated visual changes or producing duplicate responses.",
    learned:
      "I learned how real-time systems require practical tradeoffs between accuracy, speed, and robustness. Small changes to regions, thresholds, and timing can significantly affect the behavior of an interactive automation tool.",
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    year: "2024",
    description:
      "A web-based check-in system with user management, duplicate prevention, and date filtering.",
    role: "Solo developer",
    tech: ["Python", "Flask", "Excel"], // private repo — no link
    overview:
      "A web-based attendance system for managing and recording participant check-ins for a private community organization.",
    problem:
      "The organization needed a more consistent way to record attendance than relying on manual sign-in and scattered records. The system gives participants a quick check-in flow while making attendance easier for organizers to review later.",
    built:
      "Implemented QR-assisted check-in, user management, duplicate-entry prevention, date filtering, and attendance tracking, with separate admin and general-user functionality backed by persistent database storage.",
    decisions:
      "Used Flask for a focused web application and separated the general check-in experience from administrative tools. Attendance records were stored in a structured format so organizers could filter dates, review participation, and export information when needed.",
    challenges:
      "The hardest part was making check-in quick for participants while preventing duplicate records and preserving useful administrative controls. The system needed to handle the normal user flow and the less frequent cases where an organizer needed to correct or review attendance data.",
    learned:
      "I learned how authentication, roles, validation, and data organization come together in a workflow used by real people. It also reinforced the importance of making common actions fast while keeping administrative details accessible.",
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
      "CSE 11: Introduction to Programming & Computational Problem Solving (Accelerated), Multivariable Calculus, Differential Equations, Linear Algebra, Statistics",
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
  outside: [
    "Public speaking",
    "Mentoring",
    "Basketball",
    "Reading",
    "Hiking",
    "Spending time with friends",
  ],
};
