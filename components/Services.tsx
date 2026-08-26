"use client";

import { motion, Variants } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative z-10 overflow-hidden py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
              Capabilities
            </p>
            <h2 className="text-4xl font-black tracking-normal text-white md:text-5xl">
              Web development that moves from idea to reliable product.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/62 md:pt-8">
            As a web developer and MERN stack developer, I focus on the parts
            that decide whether a product feels credible: fast interfaces, clean
            flows, AI integrations, and backend decisions that stay readable
            after launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6 }}
                className="group relative border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-teal-300/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-teal-300 text-xl text-slate-950 shadow-[0_12px_30px_rgba(45,212,191,0.18)]">
                  <Icon aria-hidden />
                </div>

                <h3 className="text-2xl font-black text-white">
                  {service.title}
                </h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-white/62">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/72">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <FiCheck
                        aria-hidden
                        className="mt-1 shrink-0 text-base text-yellow-300"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
