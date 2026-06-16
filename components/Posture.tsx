"use client";
import FadeIn from "./FadeIn";

export default function Posture() {
  return (
    <section style={{ background: "#111110", padding: "clamp(80px, 12vw, 160px) 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* The thesis — large, unhurried, no subtext competing with it */}
        <FadeIn y={24}>
          <blockquote
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4.2vw, 62px)",
              lineHeight: 1.2,
              color: "#EEE9E1",
              fontWeight: 400,
              maxWidth: 960,
              letterSpacing: "-0.01em",
            }}
          >
            I build brands from the inside out —<br />
            defining who they are, then shaping<br />
            how they show up in the world{" "}
            <em style={{ color: "#514E49", fontStyle: "italic" }}>over time.</em>
          </blockquote>
        </FadeIn>

        {/* Three pillars — minimal, text-only, generous spacing */}
        <FadeIn delay={0.2} y={16}>
          <div
            style={{
              marginTop: "clamp(56px, 8vw, 100px)",
              paddingTop: "clamp(32px, 4vw, 48px)",
              borderTop: "1px solid #1E1E1C",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(32px, 4vw, 56px)",
            }}
          >
            {[
              { label: "Agency", body: "GS&P, Wieden+Kennedy, Droga5 — a decade building positioning and strategy for Prudential, Hennessy, Johnsonville, NBA, Nike Women." },
              { label: "Brand", body: "At REI, brand strategy fused with long-term narrative — writing multi-year stories that shaped visual language, design systems, and creative output across the org." },
              { label: "Now", body: "VP of Brand Creative, Seattle Kraken. Building something rare: a genuine emotional connection between an expansion franchise and its city." },
            ].map(p => (
              <div key={p.label}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#3A3A38",
                  marginBottom: 20,
                }}>
                  {p.label}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "#6A6660",
                }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
