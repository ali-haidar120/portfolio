export const personalInfo = {
  name: "Ali Haidar",
  tagline: "Computer Science Student | Aspiring Software Engineer | Web Developer",
  animatedTitles: [
    "Computer Science Student",
    "Aspiring Software Engineer",
    "Web Developer",
    "Full Stack Development Enthusiast"
  ],
  location: "Islamabad, Pakistan",
  email: "alihaidar3406@gmail.com",
  phone: "0304-9443427",
  github: "https://github.com/ali-haidar120",
  linkedin: "https://www.linkedin.com/in/ali-haidar120",
  cvPath: "/Ali-Haidar-CV.pdf",
  photoPath: "/ali-haidar.jpg",
  summary:
    "I am a 7th-semester Computer Science student at International Islamic University Islamabad, passionate about software development, web technologies, and building practical solutions to real-world problems. I enjoy learning new technologies, solving problems, and developing efficient, user-friendly applications.",
  aboutExtended:
    "Throughout my academic journey and practical experiences, I have developed a strong foundation in full-stack development, object-oriented principles, and modern web architectures. With hands-on projects ranging from Django-powered web platforms to robust C++ software and relational database systems, I prioritize writing clean, maintainable code. Beyond web engineering, I am keenly interested in expanding into cloud computing, DevOps practices, and practical AI integrations to build scalable software systems that create measurable real-world impact.",
  stats: [
    { label: "Academic Standing", value: "7th Sem", detail: "BS Computer Science" },
    { label: "Cumulative GPA", value: "3.02", detail: "Scale of 4.00" },
    { label: "Internship Completed", value: "1", detail: "Web Developer" },
    { label: "Featured Projects", value: "3+", detail: "Full Stack & Systems" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core languages for systems, algorithms, and application logic",
      skills: [
        { name: "C++", level: "Core", focus: "OOP, Data Structures & Logic", icon: "Code2" },
        { name: "Python", level: "Proficient", focus: "Backend, Scripting & Automation", icon: "Terminal" },
        { name: "JavaScript (ES6+)", level: "Proficient", focus: "Modern Web & DOM Manipulation", icon: "Braces" },
        { name: "SQL", level: "Proficient", focus: "Queries, Relational Design & Optimization", icon: "Database" }
      ]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Frontend design, styling systems, and content management",
      skills: [
        { name: "HTML5", level: "Advanced", focus: "Semantic Markup & Accessibility", icon: "FileCode" },
        { name: "CSS3", level: "Advanced", focus: "Flexbox, Grid & Responsive Layouts", icon: "Palette" },
        { name: "Bootstrap", level: "Proficient", focus: "Component Kits & Rapid Prototyping", icon: "Layers" },
        { name: "WordPress", level: "Experienced", focus: "CMS Architecture & Site Building", icon: "Globe" },
        { name: "Elementor", level: "Experienced", focus: "Visual Design & Page Optimization", icon: "Layout" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Databases",
      description: "Server-side frameworks, ORM, and data persistence",
      skills: [
        { name: "Django", level: "Proficient", focus: "MVT Architecture, Auth, RESTful APIs", icon: "Server" },
        { name: "MongoDB", level: "Familiar", focus: "NoSQL Document Stores & Schemas", icon: "HardDrive" },
        { name: "SQL & Relational DBs", level: "Proficient", focus: "Schema Design, Joins & Queries", icon: "Database" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Deployment",
      description: "Developer workflows, version control, and cloud platforms",
      skills: [
        { name: "Git", level: "Core Tool", focus: "Version Control, Branching & Merges", icon: "GitBranch" },
        { name: "GitHub", level: "Core Tool", focus: "Collaboration, Pull Requests & Repos", icon: "Github" },
        { name: "VS Code", level: "Daily Driver", focus: "Development & Debugging Environment", icon: "Laptop" },
        { name: "Vercel", level: "Platform", focus: "Modern Frontend Cloud Deployments", icon: "UploadCloud" },
        { name: "Railway", level: "Platform", focus: "Backend Cloud Hosting & DB Provisioning", icon: "Cloud" },
        { name: "Microsoft Excel", level: "Proficient", focus: "Data Analysis & Structured Reporting", icon: "FileSpreadsheet" }
      ]
    },
    {
      id: "competencies",
      title: "Core Competencies",
      description: "Engineering methodologies and professional strengths",
      skills: [
        { name: "Full-Stack Development", level: "Core Strength", focus: "Frontend to Backend Integration", icon: "Cpu" },
        { name: "Object-Oriented Programming (OOP)", level: "Core Strength", focus: "Encapsulation, Inheritance, Polymorphism", icon: "Box" },
        { name: "Database Management", level: "Core Strength", focus: "ER Diagrams, Normalization & Integrity", icon: "Database" },
        { name: "Web API Integration", level: "Core Strength", focus: "REST Protocols & JSON Data Flow", icon: "Network" },
        { name: "Team Collaboration", level: "Professional", focus: "Communication, Agile Teamwork & Coordination", icon: "Users" }
      ]
    }
  ]
};

export const experiences = [
  {
    role: "Web Developer Intern",
    department: "Creative Art & Design Department",
    company: "Kohistan Builders & Developers",
    type: "Internship",
    duration: "29 June 2026 – 09 August 2026",
    location: "Islamabad, Pakistan",
    supervisor: "Malik Muhammad Hasnat (Web Developer)",
    referenceNo: "KBD/DHR&OD/E/26/09/1657",
    letterDate: "03-Sep-2026",
    signatory: "Umaira Shaheen (Manager HR)",
    verificationEmail: "hr@kbd.com.pk",
    letterImage: "/internship-letter.jpg",
    letterPdf: "/Kohistan-Builders-Internship-Letter.pdf",
    description:
      "Successfully completed internship in the Creative Art & Design Department under the supervision of Web Developer Malik Muhammad Hasnat, demonstrating dedication, professionalism, and fulfilling assigned responsibilities.",
    responsibilities: [
      "Customized themes and page templates to align with client branding and functional requirements.",
      "Maintained website performance, responsiveness, and content management workflows using Elementor and WordPress core.",
      "Collaborated with the creative web team and supervisor to implement updates and optimize frontend assets."
    ],
    technologies: ["WordPress", "Elementor", "HTML5", "CSS3", "CMS Management", "Web Design"]
  },
  {
    role: "Operations Team Member",
    company: "SENSE Society",
    type: "Student Volunteer Experience",
    duration: "Currently Volunteering",
    location: "IIUI Campus",
    isVolunteer: true,
    description:
      "Supporting operational activities, coordinating team tasks, assisting with event planning, and contributing to the smooth execution of society activities.",
    responsibilities: [
      "Coordinating logistical requirements and task schedules across cross-functional student teams.",
      "Assisting in the planning and on-ground execution of university-wide tech workshops and student events.",
      "Facilitating member communication and operational follow-ups to ensure timely delivery of society initiatives."
    ],
    technologies: ["Team Coordination", "Event Planning", "Operations Management", "Communication"]
  }
];

export const projects = [
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    subtitle: "Web-Based Academic Management & Interactive Education Platform",
    date: "June 2026",
    technologies: ["Python", "Django", "JavaScript", "Bootstrap", "HTML5", "CSS3", "SQLite/SQL"],
    badge: "Full-Stack Web App",
    description:
      "Developed a web-based Learning Management System with secure user authentication, role-based access, course management, assignment submission, and student-instructor interactions.",
    fullDetails: [
      "Architected role-based access control (RBAC) separating administrative, instructor, and student privileges.",
      "Implemented dynamic course enrollment, module creation, and real-time assignment submission tracking.",
      "Engineered clean database models in Django ORM with relational integrity between courses, submissions, and users.",
      "Built responsive user interfaces with Bootstrap and custom CSS for seamless mobile and desktop accessibility."
    ],
    highlights: ["Role-Based Access (Admin/Teacher/Student)", "Assignment Submissions", "Course Portal", "Secure Django Auth"],
    githubUrl: "https://github.com/ali-haidar120",
    isPlaceholderLink: true
  },
  {
    id: "library",
    title: "Library Management System",
    subtitle: "Object-Oriented Record & Book Circulation Management Engine",
    date: "November 2025",
    technologies: ["C++", "Object-Oriented Programming (OOP)", "File Handling", "Data Structures"],
    badge: "Systems & OOP Application",
    description:
      "Developed a Library Management System to manage book records, issue and return operations, and member information efficiently.",
    fullDetails: [
      "Applied strict OOP paradigms including encapsulation, inheritance, and polymorphism for modular code structure.",
      "Implemented robust persistent file storage for cataloging thousands of books, patron memberships, and transaction logs.",
      "Created search, filter, and penalty calculation algorithms based on issue and return dates.",
      "Ensured error-handling and data validation to prevent corrupted records or invalid circulation states."
    ],
    highlights: ["Catalog Management", "Issue & Return Tracking", "Member Information Engine", "File Persistence"],
    githubUrl: "https://github.com/ali-haidar120",
    isPlaceholderLink: true
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    subtitle: "Relational Database Design & Supply Chain Tracking System",
    date: "May 2025",
    technologies: ["Microsoft Access", "SQL", "Relational Database Design", "Query Optimization"],
    badge: "Database System",
    description:
      "Designed a relational database to manage customers, products, orders, suppliers, shipments, and payments. Implemented tables, relationships, and SQL queries for efficient data management.",
    fullDetails: [
      "Modeled comprehensive Entity-Relationship (ER) schemas adhering to 3NF database normalization standards.",
      "Engineered automated SQL queries, views, and parameterized forms for swift product stock auditing.",
      "Created relationship constraints to ensure referential integrity across orders, suppliers, and transaction records.",
      "Designed an intuitive form interface and reporting dashboards for instantaneous inventory stock level overview."
    ],
    highlights: ["ER Schema & 3NF Normalization", "Suppliers & Shipments", "Order & Payment Pipelines", "Complex SQL Queries"],
    githubUrl: "https://github.com/ali-haidar120",
    isPlaceholderLink: true
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "International Islamic University Islamabad (IIUI)",
    location: "Islamabad, Pakistan",
    period: "2023 – 2027 (Expected)",
    status: "Currently in 7th Semester",
    cgpa: "3.02 / 4.00",
    focus: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Systems & SQL",
      "Web Technologies & Frameworks",
      "Operating Systems & Computer Networks",
      "Software Engineering Methodologies"
    ]
  }
];

export const certifications = [
  {
    id: "fullstack-air-uni",
    title: "Full Stack Development",
    workshopTitle: "Workshop on Full Stack Development",
    award: "Certificate of Participation",
    recipient: "Ali Haidar",
    issuer: "Centre for Professional Development",
    institution: "Air University, Islamabad",
    serialNo: "2508586",
    date: "18 to 22 August, 2025",
    signatory: "Zaheer Mirza",
    signatoryRole: "Air Commodore (Retd), Director CPD",
    type: "Professional Certification",
    image: "/certificate-fullstack.jpg",
    description:
      "Awarded for successfully completing the intensive professional workshop on Full Stack Development held at the Centre for Professional Development (CPD), Air University, Islamabad.",
    skillsLearned: [
      "Full Stack Web Architecture",
      "Modern Web Development Fundamentals",
      "API & Systems Integration",
      "Database Connectivity & Backend Logic"
    ]
  }
];

export const languages = [
  {
    language: "English",
    proficiency: "Professional Working Proficiency",
    level: "Fluent"
  },
  {
    language: "Urdu",
    proficiency: "Native / Bilingual",
    level: "Native"
  }
];
