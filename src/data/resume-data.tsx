import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { link } from "fs";

export const RESUME_DATA = {
  name: "Aditya Ghadge",
  initials: "AG",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  about:
    "I'm a Full Stack Engineer who enjoys building practical and scalable web applications. I have experience working on a wide range of projects, from real-time apps to AI-driven platforms. I always look for ways to improve both the user experience and system performance.",
  summary:
    "I specialize in using TypeScript, React, NextJs and Node.js to develop high-quality web applications. I've successfully taken several projects from the initial concept to launch, focusing on both performance and maintainability. Recently, I've been working with AI tools and improving web performance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65503300?v=4",
  personalWebsiteUrl: "https://adityacodes.tech",
  contact: {
    email: "adityaghadge360@gmail.com",
    tel: "+91 9136795245",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aditya-A-G",
        icon: GitHubIcon,
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
      company: "Optriment",
      link: "https://optriment.com",
      badges: ["Remote", "Contract"],
      title: "Software Engineer",
      start: "May 2023",
      end: "July 2023",
      description:
        "Developed and maintained full-stack web applications using Next.js, TypeScript, and Node.js. Focused on building efficient APIs and improving front-end performance. Led efforts in integrating smart contracts, reducing transaction costs by 20%, while ensuring seamless integration between the front-end and blockchain technologies.",
    },
    {
      company: "Freelance",
      link: "https://github.com/aditya-A-G",
      title: "Full Stack Developer",
      badges: ["Remote"],
      start: "September 2024",
      end: "Present",
      description:
        "Working on B2B AI voice assistant. Tech Stack - React, NextJs, WebSockets, Tailwind, RadixUI ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgres",
    "Redis",
    "CI/CD",
    "Docker",
    "AWS",
  ],
  projects: [
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
