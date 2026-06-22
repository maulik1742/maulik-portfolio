import {
  FaBolt,
  FaCreditCard,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";

export const portfolioData = {
  hero: {
    name: "Maulik Solanki",
    tagline: "Full Stack Product Engineer",
    description:
      "3.5+ years building fast, scalable MERN and Next.js products for real businesses, from dashboards and payments to AI-enabled workflows.",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/maulik1742", icon: FaGithub },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maulik-solanki-8b6a85218/",
        icon: FaLinkedin,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/maulik_solanki_1742/",
        icon: FaInstagram,
      },
    ],
  },
  header: {
    navLinks: [
      { name: "Home", url: "#hero" },
      { name: "Services", url: "#services" },
      { name: "Education", url: "#education" },
      { name: "Portfolio", url: "#portfolio" },
      { name: "Contact", url: "#contact" },
    ],
  },
  services: [
    {
      icon: FaBolt,
      title: "Product-Grade Web Apps",
      description:
        "Modern web applications designed around business workflows, sharp UX, and maintainable architecture.",
      points: [
        "React, Next.js, Node.js, REST APIs",
        "Authentication, dashboards, admin panels",
        "Clean, maintainable, testable code",
      ],
    },
    {
      icon: FaCreditCard,
      title: "Payments & Integrations",
      description:
        "Reliable payment and business integrations that are built for real production edge cases.",
      points: [
        "Stripe and Razorpay integration",
        "Subscriptions, invoices, webhooks",
        "Error handling and payment security",
      ],
    },
    {
      icon: FaRocket,
      title: "Performance & Scale",
      description:
        "Applications tuned to load faster, scale better, and cost less to run.",
      points: [
        "Frontend performance optimization",
        "API and database efficiency",
        "Scalable architecture decisions",
      ],
    },
  ],
  portfolio: [
    {
      title: "Apparel AI",
      description:
        "An AI-powered fashion platform for virtual clothing changes, image generation, and image-to-video transformations.",
      image: "/images/apparelai.png",
      link: "https://www.apparelai.io/",
    },
    {
      title: "Avrut Solutions",
      description:
        "A modern company portfolio website designed to present services, expertise, and brand credibility with clarity.",
      image: "/images/avrut.png",
      link: "https://avrut.com",
    },
    {
      title: "Tradeath",
      description:
        "A stock trading platform for buying, selling, and managing broker-connected strategies securely.",
      image: "/images/tradearth.png",
      link: "https://tradearth.in/",
    },
    {
      title: "Orafox",
      description:
        "A smart visitor management system that simplifies check-ins, improves security, and enables real-time tracking.",
      image: "/images/orafox.png",
      link: "https://tradearth.in/",
    },
    {
      title: "Traveldate",
      description:
        "A social communication platform with real-time chat and interactive networking features.",
      image: "/images/traveldate.png",
      link: "https://traveldate.org/",
    },
    {
      title: "Vianne Jewels",
      description:
        "A premium jewelry website focused on elegant collection browsing, luxury presentation, and craftsmanship.",
      image: "/images/Vianne.png",
      link: "https://viannejewels.com/",
    },
    {
      title: "SmileCare",
      description:
        "A dental clinic website with clear service information, trust-building content, and contact paths.",
      image: "/images/smileCare.png",
      link: "https://smilecare-roan.vercel.app/",
    },
    {
      title: "Briefly",
      description:
        "An AI-powered personalized news digest app built for faster reading and smarter discovery.",
      image: "/images/Briefly.png",
      link: "https://github.com/maulik1742/news_app",
    },
    {
      title: "Talksy",
      description:
        "A real-time chat application with instant messaging flows and modern social communication patterns.",
      image: "/images/talksy.png",
      link: "https://github.com/maulik1742/chat_app",
    },
    {
      title: "PixelTrim",
      description:
        "A fast web tool to resize, compress, and trim images in bulk with precision.",
      image: "/images/pixeltrim.png",
      link: "https://pixeltrim.vercel.app",
    },
  ],
  contact: {
    title: "Get in Touch",
    description:
      "Have a project in mind or want to discuss a build? Feel free to reach out.",
    email: "mauliksolanki2002@gmail.com",
    phone: "+916355940198",
  },
  footer: {
    copyright: "Copyright 2026 Maulik Solanki. All rights reserved.",
  },
  educationInfo: [
    {
      schoolName: "M.L. Parmar College",
      subHeader: "Bachelor of Computer Application",
      duration: "April 2019 - March 2022",
      desc: "Bachelor of Computer Application (BCA) from ML Parmar College, Surat, with a focus on computer science, programming, and IT applications.",
      grade: "Grade A",
      descBullets: [],
    },
    {
      schoolName: "Bhagwan Mahavir University",
      subHeader: "Master of Computer Application",
      duration: "April 2022 - April 2024",
      desc: "Master of Computer Application (MCA) from Bhagwan Mahavir University, specializing in advanced computer science concepts and IT management.",
      grade: "Grade A",
      descBullets: [],
    },
  ],
};
