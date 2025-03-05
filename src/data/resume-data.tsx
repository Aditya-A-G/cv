import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { LeetCodeIcon } from "@/components/icons/LeetCodeIcon";

export const RESUME_DATA = {
  name: "Aditya Ghadge",
  initials: "AG",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "I'm a Full Stack Engineer who enjoys building practical and scalable web applications. I have experience working on a wide range of projects, from real-time apps to AI-driven platforms. I always look for ways to improve both the user experience and system performance.",
  summary:
    "I specialize in using Javascript, TypeScript, Python, React, NextJs, Node.js and FastApi to develop high-quality web applications. I've successfully taken several projects from the initial concept to launch, focusing on both performance and maintainability. Recently, I've been working with AI tools and improving web performance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65503300?v=4",
  personalWebsiteUrl: "https://adityacodes.tech",
  contact: {
    email: "adityaghadge360@gmail.com",
    tel: "+91 9136795245",
    social: [
      {
        name: "Portfolio",
        url: "https://adityacodes.tech/",
        icon: LeetCodeIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/aditya-A-G",
        icon: GitHubIcon,
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/u/Acquire/",
        icon: LeetCodeIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-ghadge/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/AdityaGhad47567",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Mumbai University",
      degree: "Bachelor's Degree in Information Technology",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Clyra",
      link: "https://www.clyralabs.com/",
      badges: ["Remote"],
      title: "SDE - Full-Stack ",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "A] Drove secure authentication by bridging Next.js SSR with a FastAPI backend, enabling robust authenticated sessions B] Engineered Airtable sync APIs with strict schema enforcement, cutting data validation errors by 35% C] Integrated LiveKit, various APIs, and animations into the frontend, thus boosting user interaction. D] Deployed frontend and backend on GCP using Nginx with automated SSL configuration, ensuring smooth deployments. ",
    },
    {
      company: "Tring",
      link: "https://gettring.com/",
      badges: ["Remote"],
      title: "SDE - Frontend ",
      start: "Sep 2024",
      end: "Nov 2024",
      description:
        "A] Managed the frontend development of a B2B dashboard to ensure responsiveness and ease of use. B] Merged separate Admin and User React projects into a single, streamlined codebase. C] Built a mobile app using Expo (React Native), increasing product accessibility.",
    },
    {
      company: "Optriment",
      link: "https://optriment.com",
      badges: ["Remote"],
      title: "SDE - Full-Stack ",
      start: "May 2023",
      end: "Aug 2023",
      description:
        "A] Developed a smart contract for batch payments on the blockchain, reducing transaction costs by 15–20%. B] Built CRUD APIs for transactions with Prisma and PostgreSQL to streamline data operations.  C] Created an admin dashboard that shortened transaction audit time by 45% for the operations team.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "React/Next.js",
    "Tailwind",
    "Node.js",
    "Express",
    "FastApi",
    "MongoDB",
    "Postgres",
    "Redis",
    "CI/CD",
    "Docker",
    "AWS",
    "GCP",
  ],
  projects: [
    {
      title: "Website Testing Platform",
      techStack: [
        "TypeScript",
        "Next.js",
        "Express",
        "RabbitMq",
        "Puppeteer",
        "Redis",
        "MongoDB",
      ],
      description:
        "Built a platform to test website performance, measuring load times, interactivity and more from different regions and preparing to add more types of testing.",
      link: {
        label: "Website Testing",
        href: "https://testify.adityacodes.tech/",
      },
    },
    {
      title: "Multiplayer Chess",
      techStack: ["TypeScript", "React", "Express", "WebSockets", "MongoDB"],
      description:
        "Built a real-time multiplayer chess game with move validation and real-time updates using WebSockets. Deployed on AWS with Docker Swarm.",
      link: {
        label: "Multiplayer Chess",
        href: "https://chess.adityacodes.tech/",
      },
    },
    {
      title: "AI Blogger",
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Clerk", "Stripe"],
      description:
        "Developed a blogging platform that uses AI models to generate blog posts and accompanying images automatically.",
      link: {
        label: "AI Blogger",
        href: "https://writer.adityacodes.tech/",
      },
    },
    {
      title: "Whiteboard",
      techStack: ["React", "TypeScript", "Canvas", "Next.js"],
      description:
        "Created an online whiteboard app similar to Excalidraw, allowing users to draw and share.",
      link: {
        label: "Whiteboard",
        href: "https://whiteboard.adityacodes.tech/",
      },
    },

    {
      title: "AI Blogger Landing Page",
      techStack: ["Next.js", "Framer Motion", "TailwindCSS"],
      description:
        "Developed a landing page for an AI-powered blogging platform, featuring smooth animations and server-side rendering for faster performance.",
      link: {
        label: "AI Blogger Landing Page",
        href: "https://blogger.adityacodes.tech/",
      },
    },
  ],
} as const;
