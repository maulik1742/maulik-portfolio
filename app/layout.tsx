import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mauliksolanki.vercel.app"),
  title: "Maulik Solanki | Full Stack Product Engineer",
  description:
    "Maulik Solanki builds scalable, high-performance web applications using React, Next.js, Node.js, and modern MERN stack technologies.",
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
  creator: "Maulik Solanki",
  openGraph: {
    title: "Maulik Solanki | Full Stack Product Engineer",
    description:
      "Explore projects, skills, and experience of Maulik Solanki, a developer specializing in React, Next.js, Node.js, and scalable web applications.",
    url: "https://mauliksolanki.vercel.app",
    siteName: "Maulik Solanki Portfolio",
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
    title: "Maulik Solanki | Full Stack Product Engineer",
    description:
      "Full-stack developer specializing in React, Next.js, and Node.js. Building scalable, modern web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
