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
  "Node.js",
  "Cloudflare",
  "AWS",
  "GCS",
  "SQL",
  "C++",
  "Java",
  "CI/CD",
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
  { name: "Projects", href: "./projects.html" },
  { name: "Blog", href: "./blog.html" },
];

/**
 * Resume Page
 */

// Experience Data

const jobsList = [
  {
    icon: "./assets/images/luxoft.png",
    role: "Senior Software Engineer",
    company: "Luxoft",
    location: "Remote / Guadalajara, MX",
    period: "Jul 2022 - Present",
    type: "Full-time",
    description:
      "Developed and maintained web applications using React, Node.js, and Python. Worked with a team of engineers to deliver high-quality software on time and within budget.",
  },
  {
    icon: "./assets/images/cemex.jpeg",
    role: "Software Development Engineer in Test",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "Aug 2017 - Jan 2018",
    type: "Full-time",
    description:
      "Wrote and executed test cases for Microsoft's Windows operating system. Worked with a team of engineers to ensure the quality of the software.",
  },
  {
    icon: "./assets/images/dhl.jpeg",
    role: "Contractor - Fronetned Software Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Feb 2018 - Jun 2020",
    type: "Full-time",
    description:
      "Designed and implemented new features for Amazon's e-commerce platform. Worked on a team of engineers to improve the user experience and increase sales.",
  },
  {
    icon: "./assets/images/genie.jpeg",
    role: "Software Engineer Intern",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Feb 2018 - Jun 2020",
    type: "Full-time",
    description:
      "Designed and implemented new features for Amazon's e-commerce platform. Worked on a team of engineers to improve the user experience and increase sales.",
  },
  {
    icon: "./assets/images/stukent.jpeg",
    role: "Software Engineer Intern",
    company: "Tesla",
    location: "Palo Alto, CA",
    period: "Dec 2016 - May 2017",
    type: "Freelance",
    description:
      "Developed software for Tesla's autonomous driving vehicles. Worked on a team of engineers to improve the safety and reliability of the software.",
  },
  {
    icon: "https://soybacalar.com/img_logos/616c7c7e89651.png",
    role: "Software Engineer Intern",
    company: "Tesla",
    location: "Palo Alto, CA",
    period: "Dec 2016 - May 2017",
    type: "Full-time",
    description:
      "Developed software for Tesla's autonomous driving vehicles. Worked on a team of engineers to improve the safety and reliability of the software.",
  },
  {
    icon: "./assets/images/epicor.jpeg",
    role: "Software Engineer Intern",
    company: "Tesla",
    location: "Palo Alto, CA",
    period: "Dec 2016 - May 2017",
    type: "Full-time",
    description:
      "Developed software for Tesla's autonomous driving vehicles. Worked on a team of engineers to improve the safety and reliability of the software.",
  },
];

// Education

const educationList = [
  {
    icon: "./assets/images/stanford.jpg",
    degree: "Master of Science in Computer Science",
    university: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description:
      "Developed a machine learning algorithm to predict customer churn. Built a web application to help students find roommates.",
  },
  {
    icon: "./assets/images/universityofcalifornia.jpg",
    degree: "Bachelor of Science in Computer Science",
    university: "University of California",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    description:
      "Developed a mobile app to help students track their expenses. Built a website for a local business.",
  },
  {
    icon: "./assets/images/deanza.jpg",
    degree: "Associate of Science in Computer Science",
    university: "De Anza College",
    location: "Cupertino, CA",
    period: "2012 - 2014",
    description:
      "Developed a game using Python. Built a website for a student organization.",
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
