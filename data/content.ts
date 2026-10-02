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
      "A web application for organizing clothing, creating outfits, and maintaining outfit history.",
    role: "Solo developer",
    tech: ["React", "JavaScript", "Supabase"],
    live: "https://wardrobe-nine-snowy.vercel.app/",
    overview:
      "A social wardrobe application designed to make sharing everyday outfits with friends more engaging.",
    problem:
      "Distance made informal group-chat updates less frequent. The application provides a focused and interactive alternative to occasionally sharing outfit photos.",
    built:
      "The application includes authentication, clothing-item management, outfit posts, daily outfits, calendar history, following, followers, and likes. Users can browse friends' outfits and clothing collections within one application.",
    decisions:
      "The application was designed to be more social than a conventional closet tracker. Supabase manages authentication and data, while the interface keeps clothing and outfit posts central to the experience.",
    challenges:
      "The primary challenge was coordinating the related parts of the application: users, follows, clothing items, posts, likes, and calendar history. Each feature was manageable independently, but the overall experience depended on keeping the full workflow straightforward.",
    learned:
      "The project demonstrated how a small concept can develop into a complete product once other people begin using it. It required practical decisions around authentication, user-generated content, and the details that encourage continued engagement.",
  },
  {
    slug: "order-management",
    title: "Small Business Order Management Platform",
    year: "2025",
    description:
      "An internal dashboard for managing customer orders, payments, and pickup dates for a family catering business.",
    role: "Solo developer",
    tech: ["Python", "Flask", "SQLite"], // private repo — no link
    overview:
      "An internal application that replaced the collection of spreadsheets used to manage customer orders for the business.",
    problem:
      "With more than 30 customers, order and payment updates could become difficult to locate in a spreadsheet. Retrieving customer information also required more time than necessary.",
    built:
      "The application includes customer search, order filters, automatic totals, duplicate detection, AI-assisted order entry, and data exports so the business can access key information more efficiently.",
    decisions:
      "Flask and SQLite were selected because the application was an internal tool and did not require a large infrastructure stack. The primary goal was to support the existing workflow without forcing the business to adopt an entirely new process.",
    challenges:
      "The main challenge was converting an informal spreadsheet workflow into a structured system without making it cumbersome to use. Customer names could repeat, orders could change, and AI-generated entries still required review before being saved.",
    learned:
      "The project strengthened the understanding of what makes an internal tool effective. Reducing clicks is useful, but improving the reliability and accessibility of information provides the greater benefit.",
  },
  {
    slug: "computer-vision-automation",
    title: "Real-Time Computer Vision Automation",
    year: "2025",
    description:
      "A computer-vision tool that detects quick-time events in games and provides the corresponding keyboard input.",
    role: "Solo developer",
    tech: ["Python", "OpenCV"], // private repo — no link
    overview:
      "A project evaluating how quickly a program could recognize an on-screen prompt and respond to it.",
    problem:
      "Some game prompts remain visible only briefly. The project evaluates whether a computer-vision pipeline can identify them more consistently than manual input.",
    built:
      "The tool uses OpenCV for color detection and image analysis, monitors defined regions of the screen, and sends the corresponding keyboard input when it identifies an event.",
    decisions:
      "Processing was limited to small regions of the screen rather than the entire display. This reduced unnecessary computation and allowed the vision logic to be tuned separately from the keyboard controls.",
    challenges:
      "The central challenge was finding the appropriate detection threshold. Excessive sensitivity produced false positives, while overly strict conditions caused the system to miss prompts that appeared only briefly.",
    learned:
      "The project introduced practical tradeoffs involved in real-time software. Improvements in accuracy can also introduce latency, and small timing differences can materially affect the result.",
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    year: "2024",
    description:
      "An attendance application with account management, duplicate prevention, and administrative filtering.",
    role: "Solo developer",
    tech: ["Python", "Flask", "Supabase"], // private repo — no link
    overview:
      "An attendance application developed for a community organization that needed a more reliable process than paper sign-ins.",
    problem:
      "Manual sign-ins and fragmented records made attendance difficult to review. Participants needed a quick check-in process, while organizers needed a dependable record afterward.",
    built:
      "The application includes account creation, authentication, digital check-in, user management, duplicate-entry prevention, date filters, and separate administrator and general-user workflows.",
    decisions:
      "Flask kept the application focused, while Supabase handled authentication and storage. The standard check-in flow was separated from administrative tools so participants could complete the primary task quickly without removing the controls organizers needed.",
    challenges:
      "The primary challenge was supporting both the standard workflow and less predictable cases, including rapid check-ins, accidental duplicates, and the need to review or correct historical records.",
    learned:
      "The project provided practical experience with authentication, roles, validation, and data that users depend on. It also reinforced the importance of making the most common action the easiest one to complete.",
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
      "CSE 11, Multivariable Calculus, Differential Equations, Linear Algebra, Statistics",
  },
  {
    period: "2025 — Present",
    title: "Software Developer",
    org: "Freelance",
    description:
      "Build Python tools and small automations for people who need a repetitive task to be less repetitive.",
  },
  {
    period: "2023 — Present",
    title: "Technology & Operations Assistant",
    org: "Family Catering Business",
    description:
      "Built tools for order tracking, scheduling, and customer records, and automated some of the spreadsheet work that used to take up time.",
  },
  {
    period: "2025 — Present",
    title: "Team Member",
    org: "Hollister, Abercrombie & Fitch",
    description:
      "Help customers find what they need, keep the floor organized, and work with the team during busy shifts.",
  },
  {
    period: "2024 — 2026",
    title: "Student Mentor",
    org: "James Logan Mentoring Program",
    description:
      "Met with high school students each week to help with math, computer science, and whatever they were stuck on.",
  },
  {
    period: "2023 — 2024",
    title: "Varsity Member",
    org: "Speech & Debate (Forensics)",
    description:
      "Competed in public speaking and performance events around the Bay Area.",
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
    "Surfing",
  ],
};
