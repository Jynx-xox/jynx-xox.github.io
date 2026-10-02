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
    tech: ["React", "JavaScript", "Supabase"],
    live: "https://wardrobe-nine-snowy.vercel.app/",
    overview:
      "A social wardrobe app for organizing clothing, sharing daily outfits, and staying connected with friends after starting college.",
    problem:
      "I built this to stay connected with friends after starting college and living farther apart. Instead of just sending occasional photos, we could share outfits, browse each other's fits, and keep up with a small part of everyday life.",
    built:
      "Built account creation and logins, clothing-item management, outfit posts, daily fits, a calendar, friend discovery through following and followers, and social interactions including likes. Friends can scroll through each other's outfits and clothing collections in one place.",
    decisions:
      "Designed the app around a social feed rather than a private closet. Supabase handles accounts and application data, while the interface keeps the visual parts — clothing, outfits, and daily posts — central to the experience.",
    challenges:
      "The hardest part was connecting several user-facing systems into one coherent flow: accounts, friend relationships, clothing items, outfit posts, likes, and calendar history all needed to work together without making the app feel complicated.",
    learned:
      "I learned how much product complexity can come from simple social features. Building this pushed me to think about authentication, user-generated content, relationships between users, and how to make a personal idea feel fun enough that friends would actually use it.",
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
      "Built the full application: customer search, order filtering, automated totals, duplicate detection, AI-assisted order entry, and exportable records for the business.",
    decisions:
      "Chose Flask with SQLite for a lightweight internal tool that could fit the business's existing workflow without requiring a complicated deployment. The AI-assisted entry flow was designed to turn loosely described order information into a consistent setup, while the main interface kept order status and customer records easy to review.",
    challenges:
      "The main challenge was translating an informal, spreadsheet-based process into a structured workflow that still felt simple for non-technical users. I also had to account for duplicate customer names, changing order details, payment status, and the need to check AI-generated entries before they became part of the business's records.",
    learned:
      "I learned that useful software starts with understanding the user's actual process. A technically simple tool can save a lot of time when it removes repetitive entry, reduces avoidable mistakes, and still leaves the user in control of the final information.",
  },
  {
    slug: "computer-vision-automation",
    title: "Real-Time Computer Vision Automation",
    year: "2025",
    description:
      "A real-time vision system for games that detects quick-time events and triggers keyboard inputs with low latency.",
    role: "Solo developer",
    tech: ["Python", "OpenCV"], // private repo — no link
    overview:
      "A real-time computer vision system for games that recognizes QTEs and other on-screen events, then responds with automated keyboard input.",
    problem:
      "The system detects quick-time events and other on-screen prompts in games that require fast responses. Manual input was inconsistent and sometimes inaccurate, so the project explored how computer vision could recognize those events and respond more reliably.",
    built:
      "Built a color-detection and image-analysis pipeline with OpenCV, region-based tracking, and a configurable keyboard-input layer that presses the appropriate keys when recognized events appear.",
    decisions:
      "Used targeted screen regions and color-based detection instead of treating every pixel on the screen equally. This reduced unnecessary processing and kept the automation layer separate from the vision logic so both could be tuned independently.",
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
    tech: ["Python", "Flask", "Supabase"], // private repo — no link
    overview:
      "A web-based attendance system for managing and recording participant check-ins for a private community organization.",
    problem:
      "The organization needed a more consistent way to record attendance than relying on manual sign-in and scattered records. The system gives participants a quick digital check-in flow while making attendance easier for organizers to review later.",
    built:
      "Implemented digital check-in, account creation and login, user management, duplicate-entry prevention, date filtering, and attendance tracking, with separate admin and general-user functionality backed by Supabase.",
    decisions:
      "Used Flask for a focused web application and Supabase for hosted authentication and data storage. The general check-in experience was kept separate from administrative tools so participants could get through the common flow quickly while organizers retained control over attendance records.",
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
    "Going out with friends",
  ],
};
