"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stats = [
  ["3.5+", "Years shipping"],
  ["10+", "Products built"],
  ["5+", "Payment flows"],
  ["MERN", "Core stack"],
];

const previewProjects = portfolioData.portfolio.slice(0, 3);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-3 border border-white/12 bg-white/[0.04] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur"
          >
            <span className="h-2 w-2 bg-teal-300" />
            Available for product builds
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            I build web products that feel fast, look sharp, and survive
            production.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl"
          >
            {portfolioData.hero.name} is a {portfolioData.hero.tagline.toLowerCase()} focused
            on Next.js, MERN apps, dashboards, payments, and AI-powered
            workflows for ambitious teams.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 bg-teal-300 px-5 text-sm font-bold text-slate-950 shadow-[0_16px_42px_rgba(45,212,191,0.22)] transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              View selected work <FiArrowUpRight aria-hidden />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/15 bg-white/[0.04] px-5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <FiMail aria-hidden /> Start a conversation
            </a>
            <a
              href="/Maulik_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/10 px-5 text-sm font-bold text-white/75 transition hover:text-white"
            >
              <FiDownload aria-hidden /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-2xl grid-cols-2 border-y border-white/10 sm:grid-cols-4"
          >
            {stats.map(([value, label]) => (
              <div key={label} className="border-white/10 py-5 sm:border-r sm:px-5 first:sm:pl-0 last:border-r-0">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/48">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 border border-teal-300/10" />
          <div className="relative border border-white/12 bg-white/[0.045] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 bg-red-400" />
                <span className="h-2.5 w-2.5 bg-yellow-300" />
                <span className="h-2.5 w-2.5 bg-teal-300" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Product cockpit
              </span>
            </div>

            <div className="grid gap-3">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <Image
                  src={previewProjects[0].image}
                  alt={previewProjects[0].title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-200">
                    Featured build
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-white">
                    {previewProjects[0].title}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {previewProjects.slice(1).map((project) => (
                  <div
                    key={project.title}
                    className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-slate-950"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-sm font-bold text-white">
                      {project.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 transition hover:text-white md:flex"
      >
        Scroll <FiArrowDown aria-hidden />
      </button>
    </section>
  );
}
