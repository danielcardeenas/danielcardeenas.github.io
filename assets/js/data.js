// Sidebar Data

const skills = [
  "JavaScript / Typescript",
  "React",
  "Angular",
  "React Native",
  "NextJS",
  "GraphQL",
  "AWS",
  "MasterCSS",
  "TailwindCSS",
  "GCS",
  "SQL",
  "Git",
  "Agile",
];

const skillsBackend = [
  "Node.js",
  "Cloudflare",
  "Firebase",
  "Pupeteer",
  "Playwright",
  "Cloudflare",
  "AWS",
  "GCS",
  "SQL",
  "C++",
  "Java",
  "CI/CD",
  "Automated Testing",
  "Aeron",
  "Websockets",
];

const details = [
  { label: "Location", value: "Monterrey, NL" },
  { label: "Experience", value: "+10 years" },
  { label: "Availability", value: "Open" },
  { label: "Relocation", value: "Yes" },
];

// Navigation

const navigation = [
  { name: "Resume", href: "./" },
  { name: "Projects", href: "./projects.html", disabled: true },
  // { name: "", href: "./blog.html", disabled: true },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
  {
    icon: "./assets/images/luxoft.png",
    role: "Senior Software Engineer - Lead Developer",
    company: "Luxoft",
    location: "Remote | Guadalajara, MX",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.",
  },
  {
    icon: "./assets/images/cemex.jpeg",
    role: "Senior Software Engineer - Frontend Architecture",
    company: "Cemex",
    location: "Remote | Monterrey, MX",
    period: "2018 - Jan 2022",
    type: "Full-time",
    href: "./previews/cemex-orders.html",
    largePreview: true,
    description: `Module creation from scratch. We used mainly Angular and React to create webcomponents. This application is targeted
to Cemex clients for easy buying and delivery to their jobsites. Supports more 20+ countries`,
  },
  {
    icon: "./assets/images/dhl.jpeg",
    role: "Contractor - Full Stack Developer",
    company: "DHL",
    location: "Remote",
    type: "Freelance",
    description:
      "Web application system development for DHL tracking of custom deliveries for B2B.",
  },
  {
    icon: "./assets/images/genie.jpeg",
    role: "Senior Software Engineer",
    company: "Genie",
    location: "Remote | Seattle, WA",
    period: "2022 - 2023",
    type: "Full-time",
    description: "Low lever software development with C++ for Genie machines.",
  },
  {
    icon: "./assets/images/stukent.jpeg",
    role: "Full Stack Developer",
    company: "Stukent",
    location: "Remote",
    period: "2021 - 2022",
    type: "Freelance",
    description:
      "Courseware development for digital  courses. Developed interactive web applications using React, Node.js, and .NET.",
  },
  {
    icon: "./assets/images/cemex.jpeg",
    role: "Frontend Developer",
    location: "Moneterrey, MX",
    company: "Cemex",
    period: "Aug 2016 - Jan 2018",
    type: "Full-time",
    href: "./previews/cemex-old.html",
    largePreview: true,
    description: "",
  },
  {
    icon: "./assets/images/oxxo.png",
    role: "Software Architecture, Lead Developer",
    company: "Oxxo",
    location: "Moneterrey, MX",
    period: "2014 - 2016",
    type: "Full-time",
    href: "./previews/oxxo.html",
    description:
      "Designed and implemented of a kiosk system for autoservice in selected Oxxo’s stores.",
  },
  {
    icon: "./assets/images/epicor.jpeg",
    role: "Software Engineer Intern",
    company: "Epicor",
    location: "San Pedro Garza García, MX",
    period: "2011 - 2013",
    type: "Full-time",
    description:
      "My first job. Developed a CRM system for Epicor’s clients and later on I got moved to the ERP team.",
  },
];

// Education

const educationList = [
  {
    icon: "./assets/images/uanl.jpeg",
    degree: "Physics",
    university: "UANL - Facultad de Ciencias Físico Matemáticas",
    location: "NL, Mexico",
    period: "2023",
    description:
      "Study of the fundamental principles of physics, including mechanics, electromagnetism, thermodynamics, and quantum mechanics.",
  },
  {
    icon: "./assets/images/uanl.jpeg",
    degree: "Software Engineer",
    university: "UANL - Facultad de Ingeniería Mecánica Eléctrica",
    location: "NL, Mexico",
    period: "2011 - 2016",
    description:
      "Study of software development principles, algorithms, data structures, and programming languages. Specialized in web development and cloud computing.",
  },
  {
    icon: "./assets/images/udemy.png",
    degree: "Machine Learning A-Z™: Hands-On Python & R In Data Science ",
    university: "Udemy",
    location: "Remote",
    period: "2018",
    description: "Machine Learning course",
  },
  {
    icon: "./assets/images/pnp.png",
    degree: "Startup Founder Program",
    university: "PlugNPlay",
    location: "Santa Clara, CA",
    period: "2015",
    description:
      "Developed a mobile app to help people find places. Daily workshops focused on how produce a fast app launching for startups, marketing, innovation, etc...",
  },
];

/**
 * Projects Page
 */

// Projects
const projectsList = [
  {
    icon: "./assets/images/codecrafthub.jpg",
    name: "CodeCraftHub",
    category: "Developer Tools",
    role: "Co-Founder",
    date: "Jun 2021",
    description:
      "CodeCraftHub is a collaborative platform for developers, streamlining code review and project management. Enhance your team's productivity with our intuitive tools.",
    website: "https://codecrafthub.com",
  },
  {
    icon: "./assets/images/ecommerceboost.jpg",
    name: "E-commerceBoost",
    category: "E-commerce",
    role: "Lead Developer",
    date: "Dec 2022",
    description:
      "E-commerceBoost is a full-stack solution for online retailers, offering seamless inventory management, secure payment gateways, and a user-friendly shopping experience.",
    website: "https://ecommerceboost.io",
  },
  {
    icon: "./assets/images/cloudsnip.jpg",
    name: "CloudSnip",
    category: "Cloud Services",
    role: "Technical Lead",
    date: "May 2020",
    description:
      "CloudSnip is a versatile cloud storage service, providing users with secure file storage, sharing, and synchronization across devices. Experience the next level of cloud convenience.",
    website: "https://cloudsnip.net",
  },
  {
    icon: "./assets/images/healthtrackr.jpg",
    name: "HealthTrackr",
    category: "HealthTech",
    role: "Founder",
    date: "Oct 2023",
    description:
      "HealthTrackr revolutionizes personal health management, offering a comprehensive platform for tracking fitness, nutrition, and health metrics. Take control of your well-being.",
    website: "https://healthtrackr.app",
  },
];

/**
 * Projects Page
 */

// Posts

const posts = [
  {
    date: "February 22, 2024",
    title: "Building an Online Presence as a Full Stack Developer",
    excerpt:
      "Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.",
  },
  {
    date: "February 15, 2024",
    title: "Navigating the Full Stack Developer Job Interview Maze",
    excerpt:
      "Prepare for success in your full stack developer job interviews. Uncover common interview questions, tips for showcasing your problem-solving skills, and strategies for handling technical assessments.",
  },
  {
    date: "February 8, 2024",
    title: "Mastering the Art of Full Stack Developer Cover Letters",
    excerpt:
      "Explore the art of writing compelling cover letters for full stack developer positions. Learn how to tailor your cover letter to showcase your technical prowess and demonstrate your passion for coding.",
  },
  {
    date: "February 1, 2024",
    title: "Crafting a Comprehensive Full Stack Developer Resume",
    excerpt:
      "Learn the essential elements to include in your full stack developer resume for a stand-out application. Nail down the perfect balance between showcasing skills and work experience.",
  },
];
