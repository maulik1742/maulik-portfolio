"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

const PortfolioSection = () => {
  const [featured, ...projects] = portfolioData.portfolio;

  return (
    <section id="portfolio" className="relative z-10 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-yellow-300">
              Selected work
            </p>
            <h2 className="text-4xl font-black tracking-normal text-white md:text-5xl">
              Web development projects with sharper interfaces and cleaner
              systems.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/58">
            A cross-section of AI-powered products, brand websites, trading
            workflows, visitor management, communication platforms, and utility
            products.
          </p>
        </motion.div>

        <motion.a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group mb-5 grid overflow-hidden border border-white/10 bg-white/[0.045] backdrop-blur transition hover:border-teal-300/40 hover:bg-white/[0.065] lg:grid-cols-[1.08fr_0.92fr]"
        >
          <div className="relative min-h-[320px] overflow-hidden bg-slate-950 lg:min-h-[460px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/35" />
          </div>
          <div className="flex flex-col justify-between p-7 md:p-10">
            <div>
              <span className="inline-flex border border-teal-300/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
                Featured project
              </span>
              <h3 className="mt-6 text-4xl font-black text-white md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/64">
                {featured.description}
              </p>
            </div>
            <div className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
              Open project
              <FiArrowUpRight
                aria-hidden
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur transition hover:border-yellow-300/30 hover:bg-white/[0.065]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-white">
                    {project.title}
                  </h3>
                  <FiArrowUpRight
                    aria-hidden
                    className="mt-1 shrink-0 text-white/42 transition group-hover:text-yellow-300"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-white/58">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
