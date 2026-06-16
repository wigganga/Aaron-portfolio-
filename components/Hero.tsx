"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px clamp(64px, 8vh, 120px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div style={{ y: nameY, opacity, maxWidth: 1280, margin: "0 auto", width: "100%" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8C8880",
            marginBottom: "clamp(32px, 5vw, 56px)",
          }}
        >
          VP, Brand Creative · Seattle Kraken
        </motion.p>

        {/* Name — the full typographic statement */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.22, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(72px, 13.5vw, 192px)",
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "#111110",
              fontWeight: 400,
            }}
          >
            Aaron
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.36, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(72px, 13.5vw, 192px)",
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#BAB6B0",
              marginBottom: "clamp(36px, 5vw, 64px)",
            }}
          >
            Huffman
          </motion.div>
        </div>

        {/* Bottom bar — discipline + lineage */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.68 }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px 48px",
            borderTop: "1px solid #DDD8CF",
            paddingTop: "clamp(20px, 3vw, 32px)",
          }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(13px, 1.3vw, 16px)",
            lineHeight: 1.7,
            color: "#514E49",
          }}>
            Brand strategy. Narrative systems.<br />Creative direction.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", alignItems: "center" }}>
            {["GS&P", "Wieden+Kennedy", "Droga5", "REI"].map((a, i, arr) => (
              <span key={a} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#BAB6B0",
                }}>
                  {a}
                </span>
                {i < arr.length - 1 && <span style={{ color: "#DDD8CF", fontSize: 8 }}>·</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
