import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajeev Tripathi",
  initials: "RT",
  url: "https://tripathiraj9801.vercel.app",
  location: "Bengauluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Software Engineer building 5G systems for India.",
  summary:
    "I’m Rajeev Tripathi, a Software Engineer at Nokia,optimizing 5G systems and building scalable solutions. During my time here, I’ve worked on diverse projects, from developing auth systems to enhancing system performance, impacting millions of users. As a computer science  graduate, I co-founded an e-commerce venture that generated $10k in revenue within 10 months and published a research paper on distributed systems at ICBAR. I specialize in Python, C++, and Kubernetes, with a focus on high-performance, scalable solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Go lang",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS (EC2, EKS)"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rajeevtripathi9801@gmail.com",
    tel: "+91 8467908357",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rajeevtripathi9801",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tripathiraj9801",
        icon: Icons.x,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajeevtripathi9801",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nokia",
      href: "https://www.nokia.com/",
      badges: [],
      location: "Bengaluru, India",
      title: "Software Engineer",
      logoUrl: "/nokia.png",
      start: "September 2024",
      end: "Present",
      description:
        "Developed and tested back-end systems for the CNUM feature, which played a key role in integrating network elements for 5G rollout. The system facilitated the integration plan for circle owners, ensuring effective network management."
    },
    {
      company: "Nokia",
      badges: [],
      href: "https://www.nokia.com/",
      location: "Bengaluru, India",
      title: "Software Engineer Intern",
      logoUrl: "/nokia.png",
      start: "August 2023",
      end: "May 2024",
      description:
        "Improved REST API response time by 10% through migrating from JRuby to Spring, optimized search with a Binary Search Tree, developed a ROBOT framework for pre-testing and automated license uploads, and implemented a Python-based multipart upload system, improving reliability and reducing reuploads by 23%.",
    },
    {
      company: "MLH Fellowship",
      badges: [],
      href: "",
      location: "Bengaluru, India",
      title: "Software Engineering Fellow",
      logoUrl: "/MLH.png",
      start: "June 2022",
      end: "July 2023",
      description:
        "Optimized autonomous drone resource allocation by implementing transfer learning and reinforcement learning, improving scanning efficiency by 17%, and enhanced Kubernetes observability by adding detailed metrics to the kubelet, tracking pod start-up times with improved data representation."
    },
    {
      company: "Sneakily",
      badges: [],
      href: "",
      location: "Chandigarh, India",
      title: "Co Founder",
      logoUrl: "\sneakily.jpg",
      start: "August 2022",
      end: "May 2023",
      description:
        "Co-developed a prototype web application for local vendors, enabling direct sales of shoes to customers, and successfully onboarded multiple vendors, generating $80,000 in revenue within 8 months, fostering local entrepreneurship.",
    },
    {
      company: "Google Developer Student Club",
      badges: [],
      href: "https://www.nokia.com/",
      location: "Chandigarh, India",
      logoUrl: "\gdsc.png",
      title: "Technical Member",
      start: "August 2021",
      end: "July 2022",
      description:
        "Facilitated events for students interest in core computer science concepts and increased participation from 120 to 256 members around 110% increase and taught 20+ students.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "Bachelors in Engineering in Computer Science",
      logoUrl: "/cu.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Delhi Public School",
      href: "https://dpshardwar.com/",
      degree: "Intermediate in Mathmatics",
      logoUrl: "/dps.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Chat Backend",
      href: "",
      dates: "",
      active: true,
      description:
        " Implemented a horizontally scalable chat app with Nginx-optimized Socket.IO, reducing latency by 50% and database queries by 70% through Redis caching with Kubernetes-based infrastructure with Docker containers, achieving 20% cost reduction and 40% overall performance improvement.",
      technologies: [
        "Node.js",
        "Typescript",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "AWS EKS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rajeevtripathi9801/Chat-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Chat.png",
      video:
        "",
    },
    {
      title: "Decentralised Blogging Platform",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a Solidity-based blogging platform on Ethereum with 100% code coverage, integrating IPFS for decentralized storage with enhanced UX through Next.js server-side rendering and client routing, achieving 10% faster load times.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Solidity",
        "TailwindCSS",
        "IFPS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://dwitter-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rajeevtripathi9801/Dapp-Blog",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DApp.png",
      video: "",
    },
    {
      title: "Intern Applier",
      href: "",
      dates: "",
      active: true,
      description:
        "Automated job application bot built with Python, Selenium, and Beautiful Soup. Scrapes multiple job boards, filters listings, auto-fills applications, and handles various submission formats. Streamlines job search process, enabling mass applications while adhering to ethical web scraping practices.",
      technologies: [
        "Python",
        "Beautiful Soup",
        "Selenium",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rajeevtripathi9801/Intern-Applier",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Intern.png",
      video: "",
    },
    {
      title: "Digital Signature AES",
      href: "",
      dates: "",
      active: true,
      description:
        "This project demonstrates a secure connection between a client and server where data is sent in an encrypted manner. It implements simplified versions of AES (Advanced Encryption Standard), RSA (Rivest–Shamir–Adleman), and Digital Signature generation and verification using Python and socket programming.",
      technologies: [
        "Python",
        "AES Signature",
        "Real Time System",
        "RSA Algorithm",
        ],
      links: [
        {
          type: "Source",
          href: "https://github.com/rajeevtripathi9801/Digital-Signature",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/digital.png",
      video:
        "",
    },
  ],
  
} as const;
