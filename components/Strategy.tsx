"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const FOUR_BOX = [
  { label: "People", sub: "Who they serve", body: "Who they serve and what they genuinely need. Not the assumed customer — the real one, with real friction." },
  { label: "Culture", sub: "What's shaping behavior", body: "The broader tensions and conversations shaping behavior. Where the culture is moving, and what it's moving away from." },
  { label: "Competition", sub: "The landscape", body: "The landscape and white space. Not just direct competition — everything competing for the same attention and belief." },
  { label: "Category", sub: "Rules of the game", body: "The rules of the game — and which ones are worth breaking. What the category expects, and where it's gone stale." },
];

const THREE_C = [
  {
    label: "Clarity",
    body: "Know who you are. Define it sharply enough that anyone in the organization can act on it without asking.",
    aside: "Without clarity, consistency is impossible. You can't show up consistently as something you haven't defined.",
  },
  {
    label: "Consistency",
    body: "Show up the same way, again and again, until it becomes the thing people expect — and then exceed.",
    aside: "Most brands collapse here. Not from bad strategy, but from impatience. Culture is built in years, not quarters.",
  },
  {
    label: "Continuity",
    body: "Build iterative stories in chapters, not campaigns. Brands compound like interest.",
    aside: "The brands that last don't reinvent themselves. They deepen. Every execution is an installment in a longer story.",
  },
];

export default function Strategy() {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  return (
    <section id="strategy" style={{ background: "#F5F2ED", padding: "clamp(80px, 10vw, 140px) 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Label + title */}
        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C8880", marginBottom: 28 }}>
            The Framework
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 72px)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            color: "#111110",
            fontWeight: 400,
            maxWidth: 800,
            marginBottom: "clamp(64px, 9vw, 120px)",
          }}>
            Over two decades, distilled<br />
            into <em>one system.</em>
          </h2>
        </FadeIn>

        {/* ── 01 Four-Box ── */}
        <FadeIn>
          <div style={{ marginBottom: "clamp(64px, 8vw, 100px)" }}>
            <div style={{
              display: "flex", alignItems: "baseline", gap: 20,
              borderTop: "1px solid #DDD8CF", paddingTop: 24, marginBottom: 40,
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#BAB6B0", letterSpacing: "0.12em" }}>01</span>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 2.2vw, 30px)", color: "#111110", fontWeight: 400, letterSpacing: "-0.01em" }}>
                  The Four-Box Audit
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#8C8880", marginTop: 6, lineHeight: 1.6 }}>
                  Every brand lives at the intersection of four forces. Where they overlap is where positioning lives.
                </p>
              </div>
            </div>

            {/* Interactive four-box grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              border: "1px solid #DDD8CF",
            }}>
              {FOUR_BOX.map((item, i) => (
                <div
                  key={item.label}
                  onMouseEnter={() => setActiveBox(i)}
                  onMouseLeave={() => setActiveBox(null)}
                  style={{
                    padding: "clamp(28px, 3vw, 48px)",
                    borderRight: i % 2 === 0 ? "1px solid #DDD8CF" : undefined,
                    borderBottom: i < 2 ? "1px solid #DDD8CF" : undefined,
                    transition: "background 0.3s",
                    background: activeBox === i ? "#EEE9E1" : "transparent",
                    cursor: "default",
                  }}
                >
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(22px, 2vw, 30px)",
                    color: "#111110",
                    fontWeight: 400,
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#BAB6B0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                    {item.sub}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: activeBox === i ? "#514E49" : "#8C8880",
                    transition: "color 0.3s",
                    maxWidth: 320,
                  }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── 02 Position to System ── */}
        <FadeIn delay={0.05}>
          <div style={{ marginBottom: "clamp(64px, 8vw, 100px)" }}>
            <div style={{
              display: "flex", alignItems: "baseline", gap: 20,
              borderTop: "1px solid #DDD8CF", paddingTop: 24, marginBottom: 40,
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#BAB6B0", letterSpacing: "0.12em" }}>02</span>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 2.2vw, 30px)", color: "#111110", fontWeight: 400, letterSpacing: "-0.01em" }}>
                  From Position to System
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#8C8880", marginTop: 6, lineHeight: 1.6 }}>
                  Once foundations are clear, we build the architecture for how the brand creates value over time.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "#DDD8CF" }}>
              {[
                { label: "Pathways", body: "Map the customer journey — barriers, opportunities, and how the brand can show up at every inflection point with relevance and precision.", num: "P1" },
                { label: "Platforms", body: "Where and how the brand creates value in media. Not interruptions — a presence that earns attention because it genuinely belongs.", num: "P2" },
                { label: "Performance", body: "How we measure impact, learn from the work, and evolve the system. Brands that don't measure don't learn. Brands that don't learn don't last.", num: "P3" },
              ].map(item => (
                <div key={item.label} style={{ background: "#F5F2ED", padding: "clamp(28px, 3vw, 40px)" }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#BAB6B0", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>
                    {item.num}
                  </p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 1.8vw, 24px)", color: "#111110", fontWeight: 400, marginBottom: 16, letterSpacing: "-0.01em" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, lineHeight: 1.8, color: "#8C8880" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── 03 Three C's — the signature treatment ── */}
        <FadeIn delay={0.05}>
          <div>
            <div style={{
              display: "flex", alignItems: "baseline", gap: 20,
              borderTop: "1px solid #DDD8CF", paddingTop: 24, marginBottom: 56,
            }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#BAB6B0", letterSpacing: "0.12em" }}>03</span>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 2.2vw, 30px)", color: "#111110", fontWeight: 400, letterSpacing: "-0.01em" }}>
                  The Three C&rsquo;s of Brand Stewardship
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#8C8880", marginTop: 6, lineHeight: 1.6 }}>
                  Clarity creates momentum. Consistency builds trust. Continuity builds culture.
                </p>
              </div>
            </div>

            {/* Each C: full-width row, large numeral as texture, not decoration */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {THREE_C.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(24px, 4vw, 64px)",
                    alignItems: "start",
                    padding: "clamp(32px, 4vw, 56px) 0",
                    borderBottom: i < 2 ? "1px solid #E5DFD5" : undefined,
                  }}
                  className="three-c-row"
                >
                  {/* Left: label + body */}
                  <div>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(28px, 3.5vw, 52px)",
                      color: "#111110",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      lineHeight: 1,
                      marginBottom: 20,
                    }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.8, color: "#514E49", maxWidth: 400 }}>
                      {item.body}
                    </p>
                  </div>
                  {/* Right: aside — editorial annotation */}
                  <div style={{ paddingTop: 4 }}>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(13px, 1.1vw, 15px)",
                      lineHeight: 1.75,
                      color: "#BAB6B0",
                      fontStyle: "italic",
                      borderLeft: "1px solid #DDD8CF",
                      paddingLeft: "clamp(20px, 2.5vw, 36px)",
                    }}>
                      {item.aside}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .three-c-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
