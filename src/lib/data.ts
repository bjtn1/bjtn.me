export const personalInfo = {
  name: "Brandon Jose Tenorio Noguera",
  location: "DMV-Baltimore area, U.S.A.",
  email: "bjtn_website@bjtn.me",
  github: "https://github.com/bjtn1",
  linkedin: "https://www.linkedin.com/in/brandon-jose-tenorio-noguera/",
};

export const workExperience = [
  {
    company: "Teamania",
    location: "Rockville, MD",
    position: "Supervisor",
    period: "March 2019 - Present",
    achievements: [
      "- Led a team of 5 to optimize closing procedures, cutting down closing time by 25% through workflow restructuring.",
      "- Maintained and built relationships with 50+ customers daily",
      "- Provided exceptional customer service and efficient product deliveries",
      "- Ensured utmost customer satisfaction which resulted in an increase in tips by 100%",
      "- Demonstrated strong organizational skills in managing multiple tasks efficiently in a fast-paced environment",
      "- Managed and trained a team of 5 people to carry out efficient, effective, and satisfactory customer service resulting in reviews averaging a 4-star rating on sites like Yelp and Google reviews",
    ],
  },
  {
    company: "Biology Department of the University of Maryland - Baltimore County",
    location: "Catonsville, MD",
    position: "Research Lab Aide",
    period: "August 2023 - December 2023",
    achievements: [
      "- Collaborated closely with 6 graduate students to understand research needs and provide effective support",
      "- Safely handled and managed dangerous chemicals within a research laboratory environment",
      "- Thoroughly maintained a clean workspace with equipment in accordance to laboratory standards to prevent contamination",
    ],
  },
];

export const education = [
  {
    institution: "University of Maryland - Baltimore County",
    location: "Maryland, U.S.A.",
    degree: "Bachelor of Science in Computer Science",
    period: "May 2022 - December 2024",
    achievements: [
      "- CMSC 304: Social & Ethical Issues in Information Technology",
      "- CMSC 421: Principles of Operating Systems",
      "- CMSC 491: Special Topics in Computer Science - Social and Crowd Computing",
      "- CMSC 441: Design & Analysis of Algorithms",
      "- CMSC 447: Software Engineering I",
      "- CMSC 471: Artificial Intelligence",
      "- CMSC 478: Introduction to Machine Learning",
      "- STAT 355: Probability & Statistics for Science & Engineering",
      "- CMSC 426: Principles of Computer Security",
      "- MATH 221: Introduction to Linear Algebra",
      "- CMSC 341: Data Structures",
      "- CMSC 340: Advanced C++",
      "- CMSC 331: Principles of Programming Languages",
      "- CMSC 313: Compute Organization & Assembly Programming",
      "- CMSC 411: Computer Architecture",
      "- CMSC 449: Malware Analysis",
      "- BIOL 142: Foundations of Biology",
      "- SOCY 101: Basic Concepts in Sociology",
    ],
  },
  {
    institution: "Montgomery College",
    location: "Maryland, U.S.A.",
    degree: "Associate of Arts in Computer Science",
    period: "August 2018 - May 2022",
    achievements: [
      "- CMSC 140: Introduction to Programming",
      "- MATH 181: Calculus I",
      "- MATH 182: Calculus II",
      "- MATH 280: Multivariable Calculus",
      "- CMSC 140: Introduction to Programming",
      "- CMSC 203: Computer Science I",
      "- CMSC 204: Computer Science II",
      "- CMSC 207: Introduction to Discrete Structures",
    ],
  },
];
export const skills = {
  programmingAndDevelopment: [
    "Python",
    "Java",
    "C",
    "C++",
    "Rust",
    "JavaScript",
    "Lua",
    "PHP",
    "Bash",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Astro",
    "Git",
    "GitHub",
    "Neovim",
    "LaTeX",
    "ArcGIS",
    "Vim",
    "Kernel Development (Linux Syscalls)",
    "Scikit-learn",
    "Support Vector Machine (SVM)",
    "Google Calendar API",
    "OAuth 2.0",
    "Selenium",
    "BeautifulSoup",
  ],
  operatingSystems: [
    "Arch Linux",
    "EndeavourOS",
    "Kali Linux",
    "Debian",
    "Ubuntu",
    "macOS",
    "Windows 10/11",
  ],
  productivityAndOffice: [
    "Excel",
    "Google Sheets",
    "Microsoft Word",
    "Google Docs",
    "PowerPoint",
    "Google Slides",
  ],
  languages: [
    "Spanish (native)",
    "English (fluent)",
    "French (basic)",
    "ASL (basic)",
  ]
};

export const projects = [
  {
    title: "PoGoCal",
    github: "https://github.com/bjtn1/pogocal",
    demoUrl: "",
    technologies: ["Python", "Google Calendar API", "Web Scraping", "Selenium"],
    description: [
      "Automates synchronization of Pokémon GO events to your personal Google Calendar",
      "Scrapes event data from LeekDuck using Selenium webdriver",
      "Handles rate limiting and API quotas gracefully",
      "Supports custom timezone configuration for accurate event scheduling",
      "Self-contained Docker container for easy deployment"
    ],
  },
  {
    title: "doopie",
    github: "https://github.com/bjtn1/doopie",
    technologies: ["Python", "CLI", "File System", "SHA-256 Hashing"],
    description: [
      "Identifies duplicate files by comparing SHA-256 checksums",
      "Recursive directory scanning with configurable depth",
      "Interactive mode for selective file deletion",
      "Generates comprehensive report of duplicate files",
      "Preserves file permissions during operations"
    ],
  },
  {
    title: "al",
    github: "https://github.com/bjtn1/al",
    technologies: ["Python", "File Organization", "Duplicate Detection", "CLI"],
    description: [
      "Organizes files into folders based on their extensions",
      "Visual tree output shows file movements before execution",
      "Dry-run mode for testing configuration",
      "Handles naming conflicts automatically",
      "Preserves original file timestamps"
    ],
  },
  {
    title: "Etch-a-Sketch",
    github: "https://github.com/bjtn1/etch-a-sketch",
    demoUrl: "https://bjtn1.github.io/etch-a-sketch/",
    technologies: ["JavaScript", "HTML5", "CSS3", "Interactive Web App"],
    description: [
      "Responsive canvas that works on mobile and desktop",
      "Color picker with hex code display",
      "Dynamic grid resizing without page reload",
      "Eraser tool with adjustable size",
      "Local storage for saving favorite colors"
    ],
  },
  {
    title: "Simple Pokémon",
    github: "https://github.com/bjtn1/simple-pokemon",
    demoUrl: "https://bjtn1.github.io/simple-pokemon/",
    technologies: ["JavaScript", "Game Development", "Type Matchups", "Web App"],
    description: [
      "Implements official Pokémon type effectiveness chart",
      "First-to-5 scoring system with win tracking",
      "Computer opponent with random type selection",
      "Mobile-friendly responsive design",
      "Visual indicators for super-effective/not-very-effective moves"
    ],
  },
  {
    title: "NSplitter",
    github: "https://github.com/bjtn1/nsplitter",
    technologies: ["Python", "File Processing", "CLI", "Large Files"],
    description: [
      "Splits files into 4GB chunks for FAT32 compatibility",
      "Merge function reconstructs original files perfectly",
      "Progress indicators for large file operations",
      "Checksum verification for data integrity",
      "Resume capability for interrupted transfers"
    ],
  },
  {
    title: "Chess Engine",
    github: "https://github.com/bjtn1/chess",
    technologies: ["C", "Bitboards", "Magic Bitboards", "Algorithm Optimization"],
    description: [
      "Implements magic bitboards for efficient sliding piece move generation",
      "Supports standard algebraic notation (SAN) for moves",
      "Perft testing for move generation validation",
      "Bitwise operations for maximum performance",
      "Text-based UI with move history"
    ],
  },
  {
    title: "Kernel Mailbox System",
    github: "https://github.com/bjtn1/mailbox",
    technologies: ["Linux Kernel", "C", "System Calls", "Binary Search Trees"],
    description: [
      "Implements character device driver for message passing",
      "BST-based mailbox organization by UID",
      "Thread-safe queue operations with mutex locks",
      "Syscall interface for user-space interaction",
      "Memory-efficient message storage"
    ],
  },
  {
    title: "task-cli",
    github: "https://github.com/bjtn1/task-cli",
    technologies: ["Python", "JSON", "CLI", "Productivity Tools"],
    description: [
      "Color-coded status indicators for tasks",
      "Natural language date parsing for due dates",
      "Tag system for task organization",
      "JSON schema validation for data integrity",
      "Interactive mode for quick task management"
    ]
  }
];

// export const awards = [
//   {
//     name: "IEEE YESIST12 Hackathon",
//     issuer: "IEEE",
//     date: "Sep 2022",
//     type: "International",
//     position: "Second Place",
//   },
//   {
//     name: "Prodigi Cognizant Hackathon",
//     issuer: "Cognizant",
//     date: "Feb 2023",
//     type: "National",
//     position: "Second Runner-up",
//   },
//   {
//     name: "Cisco Thingqbator Hackathon",
//     issuer: "Cisco",
//     date: "Jan 2023",
//     type: "National",
//     position: "First Runner-up",
//   },
//   {
//     name: "Innovators Day",
//     issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
//     date: "Sep 2022",
//     type: "National",
//     position: "First Prize",
//   },
//   {
//     name: "KG Hackfest'22",
//     issuer: "KGiSL Institute of Technology, Coimbatore",
//     date: "Sep 2022",
//     type: "National",
//     position: "Second Prize",
//   },
//   {
//     name: "Innohacks'22",
//     issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
//     date: "May 2022",
//     type: "National",
//     position: "Second Runner-up",
//   },
//   {
//     name: "Hack @ SKCET",
//     issuer: "Hackclub SKCET, SKCET, Coimbatore",
//     date: "Feb 2022",
//     type: "National",
//     position: "Most Impactful Hack",
//   },
// ];
