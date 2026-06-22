"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/25 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-teal-300 text-sm font-black text-slate-950">
              MS
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/56">
              Building scalable, high-performance web applications that solve
              real business problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/46">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-white/64">
              {portfolioData.header.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="transition hover:text-teal-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
          >
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/46">
              Contact
            </h4>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="group inline-flex items-center gap-2 text-sm font-bold text-teal-200 transition hover:text-white"
            >
              <FiMail aria-hidden />
              {portfolioData.contact.email}
              <FiArrowUpRight
                aria-hidden
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/46 md:flex-row md:items-center md:justify-between">
          <span>{portfolioData.footer.copyright}</span>
          <span>Designed and built with intention.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
