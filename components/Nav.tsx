"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Strategy", href: "#strategy" },
  { label: "Work", href: "#work" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [past, setPast] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setPast(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          transition: "background 0.4s, border-color 0.4s",
          background: past ? "rgba(245,242,237,0.96)" : "transparent",
          backdropFilter: past ? "blur(12px)" : "none",
          borderBottom: past ? "1px solid #DDD8CF" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a
              href="#top"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#111110",
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              AH
            </a>

            {/* Desktop */}
            <nav style={{ display: "flex", gap: 36, alignItems: "center" }}
                 className="hidden md:flex">
              {NAV.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#514E49",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#111110")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#514E49")}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            >
              <span style={{
                display: "block", width: 24, height: 1,
                background: "#111110",
                transition: "transform 0.3s, opacity 0.3s",
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: 24, height: 1,
                background: "#111110",
                transition: "opacity 0.3s",
                opacity: open ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: 24, height: 1,
                background: "#111110",
                transition: "transform 0.3s, opacity 0.3s",
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 90,
              background: "#FAF8F4",
              display: "flex", flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 40px 80px",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(36px, 10vw, 56px)",
                    color: "#111110",
                    textDecoration: "none",
                    lineHeight: 1.2,
                    padding: "8px 0",
                    borderBottom: "1px solid #DDD8CF",
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
