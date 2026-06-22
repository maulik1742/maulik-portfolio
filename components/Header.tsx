"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { portfolioData } from "../portfolio";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "border-b border-white/10 bg-[#080a0f]/82 shadow-2xl shadow-black/25 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-teal-300 text-sm font-black text-slate-950">
            MS
          </span>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Maulik
          </span>
        </Link>

        <div className="hidden items-center gap-1 border border-white/10 bg-white/[0.035] p-1 backdrop-blur md:flex">
          {portfolioData.header.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="px-4 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/[0.07] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="hidden bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-teal-200 lg:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#080a0f]/95 px-6 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {portfolioData.header.navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  onClick={() => setIsOpen(false)}
                  className="border border-white/10 px-4 py-3 text-base font-semibold text-white/78"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
