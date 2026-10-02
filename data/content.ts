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
      "A place to keep track of clothes, put outfits together, and see what I wore.",
    role: "Solo developer",
    tech: ["React", "JavaScript", "Supabase"],
    live: "https://wardrobe-nine-snowy.vercel.app/",
    overview:
      "I started this after moving away for college and wanting an easier way to share everyday stuff with friends — outfits included.",
    problem:
      "My friends and I were farther apart, so the usual group-chat updates became less frequent. I wanted something a little more fun than sending a random outfit photo once in a while.",
    built:
      "I put together logins, clothing-item management, outfit posts, daily fits, a calendar, following and followers, and likes. Friends can browse each other's outfits and clothing collections without jumping between different apps.",
    decisions:
      "I made it more social than a typical closet app. Supabase takes care of accounts and data, while the interface puts the clothes and outfit posts front and center.",
    challenges:
      "The tricky part was getting all the small pieces to work together: users, follows, clothes, posts, likes, and calendar history. Each feature was manageable on its own, but the app only felt good when the whole flow stayed simple.",
    learned:
      "This project showed me how quickly a small idea can turn into a real product once other people use it. I had to think about authentication, user-generated content, and the little details that make an app worth coming back to.",
  },
  {
    slug: "order-management",
    title: "Small Business Order Management Platform",
    year: "2025",
    description:
      "A dashboard I made for my family's catering business to keep orders, payments, and pickup dates in one place.",
    role: "Solo developer",
    tech: ["Python", "Flask", "SQLite"], // private repo — no link
    overview:
      "This replaced the collection of spreadsheets we were using to keep track of customer orders.",
    problem:
      "With 30+ customers, it was easy for an order or payment update to get buried in a spreadsheet. Finding a customer's information also took longer than it should have.",
    built:
      "I added customer search, order filters, automatic totals, duplicate detection, AI-assisted order entry, and exports so the business could get to the information it needed faster.",
    decisions:
      "I used Flask and SQLite because this was an internal tool, not something that needed a huge stack. The main goal was to fit the way the business already worked instead of forcing everyone into a completely new process.",
    challenges:
      "The hard part was turning an informal spreadsheet workflow into something structured without making it annoying to use. Customer names could repeat, orders changed, and AI-generated entries still needed to be checked before they were saved.",
    learned:
      "I got a better sense of what makes a tool useful in practice. Saving a few clicks is nice, but making information easier to trust and find is what actually helped.",
  },
  {
    slug: "computer-vision-automation",
    title: "Real-Time Computer Vision Automation",
    year: "2025",
    description:
      "A small computer-vision tool that spots quick-time events in games and presses the right key.",
    role: "Solo developer",
    tech: ["Python", "OpenCV"], // private repo — no link
    overview:
      "I built this to see how quickly a program could recognize an on-screen prompt and react to it.",
    problem:
      "Some game prompts only stay on screen for a moment. I wanted to test whether a camera-style computer-vision pipeline could catch them more consistently than manual input.",
    built:
      "The tool uses OpenCV for color detection and image analysis, watches specific parts of the screen, and sends the matching keyboard input when it finds an event.",
    decisions:
      "I focused on small regions of the screen instead of processing everything. That cut down on unnecessary work and made it easier to tune the vision code separately from the keyboard controls.",
    challenges:
      "The balance was the difficult part. If detection was too sensitive, it reacted to things that were not prompts; if it was too strict, it missed events that only appeared briefly.",
    learned:
      "This was a good introduction to the tradeoffs in real-time software. A change that improves accuracy can also add delay, and small timing differences can change the result completely.",
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    year: "2024",
    description:
      "A check-in site with accounts, duplicate prevention, and simple attendance filters.",
    role: "Solo developer",
    tech: ["Python", "Flask", "Supabase"], // private repo — no link
    overview:
      "I made this for a community organization that needed a cleaner way to record attendance than paper sign-ins.",
    problem:
      "Manual sign-ins and scattered records made attendance harder to review than it needed to be. Participants needed a quick check-in, while organizers needed a reliable record afterward.",
    built:
      "I added account creation, login, digital check-in, user management, duplicate-entry prevention, date filters, and separate admin and general-user flows.",
    decisions:
      "Flask kept the app focused, while Supabase handled authentication and storage. I kept the normal check-in flow separate from the admin tools so most people could finish quickly without losing the controls organizers needed.",
    challenges:
      "The main challenge was handling the normal case and the messy cases at the same time: quick check-ins, accidental duplicates, and organizers needing to review or correct older records.",
    learned:
      "This gave me hands-on practice with authentication, roles, validation, and data that people actually depend on. It also reminded me that the most common action should usually be the easiest one.",
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
