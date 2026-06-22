"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const EducationSection = () => {
  return (
    <section id="education" className="relative z-10 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
              Foundation
            </p>
            <h2 className="text-4xl font-black tracking-normal text-white md:text-5xl">
              Academic base for software that has to be dependable.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/62 md:pt-8">
            Computer applications, programming fundamentals, and advanced IT
            concepts shaped the base that now supports production engineering
            work.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.educationInfo.map((edu, index) => (
            <motion.article
              key={edu.schoolName}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="mb-7 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">
                  {edu.duration}
                </span>
                <span className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 text-xs font-semibold text-white/60">
                  <FiAward aria-hidden /> {edu.grade}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white">{edu.subHeader}</h3>
              <p className="mt-2 font-semibold text-teal-200">{edu.schoolName}</p>
              <p className="mt-5 text-sm leading-7 text-white/62">{edu.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
