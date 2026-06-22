"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const CTA = () => {
  return (
    <section id="contact" className="relative z-10 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid overflow-hidden border border-white/10 bg-white/[0.045] backdrop-blur-xl md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="p-7 md:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
              Let&apos;s build
            </p>
            <h2 className="max-w-3xl text-4xl font-black tracking-normal text-white md:text-6xl">
              Have an idea? I&apos;ll help turn it into a product people can use.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
              Whether you are launching a startup, improving an existing
              system, or building from scratch, I can help with architecture,
              implementation, performance, and production polish.
            </p>
          </div>

          <div className="border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-12">
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="group flex items-center justify-between gap-4 border border-white/10 bg-teal-300 px-5 py-4 font-bold text-slate-950 transition hover:bg-teal-200"
              >
                <span className="inline-flex items-center gap-3">
                  <FiMail aria-hidden /> Email me
                </span>
                <FiArrowUpRight
                  aria-hidden
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="group flex items-center justify-between gap-4 border border-white/10 px-5 py-4 font-bold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="inline-flex items-center gap-3">
                  <FiPhone aria-hidden /> {portfolioData.contact.phone}
                </span>
                <FiArrowUpRight
                  aria-hidden
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
              <a
                href="#portfolio"
                className="group flex items-center justify-between gap-4 border border-white/10 px-5 py-4 font-bold text-white/72 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <span>Review projects first</span>
                <FiArrowUpRight
                  aria-hidden
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
