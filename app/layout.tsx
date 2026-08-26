import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mauliksolanki.vercel.app"),
  title: {
    default: "Maulik Solanki | Web Developer & MERN Stack Developer",
    template: "%s | Maulik Solanki",
  },
  description:
    "Maulik Solanki is a web developer and MERN stack developer building fast, scalable web applications, AI integrations, dashboards, and payment products.",
  applicationName: "Maulik Solanki Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  keywords: [
    "Maulik Solanki",
    "maulik solanki",
    "@Maulik1742",
    "Maulik1742",
    "Portfolio",
    "Maulik Portfolio",
    "Maulik Solanki Portfolio",
    "Maulik Solanki web developer",
    "Maulik Solanki MERN stack developer",
    "web developer",
    "MERN stack developer",
    "Full Stack Developer",
    "Full Stack Product Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Maulik Solanki" }],
  publisher: "Maulik Solanki",
  creator: "Maulik Solanki",
  openGraph: {
    title: "Maulik Solanki | Web Developer & MERN Stack Developer",
    description:
      "Explore the portfolio of Maulik Solanki, a web developer and MERN stack developer specializing in React, Next.js, Node.js, AI integrations, and scalable products.",
    url: "https://mauliksolanki.vercel.app",
    siteName: "Maulik Solanki Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maulik Solanki Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maulik Solanki | Web Developer & MERN Stack Developer",
    description:
      "Web developer and MERN stack developer building scalable web applications, AI integrations, and modern digital products.",
    images: ["/og-image.png"],
    creator: "@Maulik1742",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Maulik Solanki | Web Developer & MERN Stack Developer",
    url: "https://mauliksolanki.vercel.app/",
    mainEntity: {
      "@type": "Person",
      name: "Maulik Solanki",
      url: "https://mauliksolanki.vercel.app/",
      jobTitle: "Web Developer and MERN Stack Developer",
      description:
        "Web developer and MERN stack developer building scalable web applications, AI integrations, dashboards, and payment products.",
      sameAs: [
        "https://github.com/maulik1742",
        "https://www.linkedin.com/in/maulik-solanki-8b6a85218/",
        "https://www.instagram.com/maulik_solanki_1742/",
      ],
      knowsAbout: [
        "Web development",
        "MERN stack development",
        "React",
        "Next.js",
        "Node.js",
        "AI integrations",
        "Payment integrations",
      ],
    },
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
