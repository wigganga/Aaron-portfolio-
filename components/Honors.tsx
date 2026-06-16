"use client";
import FadeIn from "./FadeIn";

const HONORS = [
  {
    org: "Cannes Lions",
    note: null,
    items: [
      { name: "Young Lion Media", result: "Gold, USA · Bronze, Global" },
      { name: "Prudential \"Day One\"", result: "Bronze Integrated · Golden Pencil" },
      { name: "Johnsonville \"Made the Johnsonville Way\"", result: "Silver · Bronze ×2" },
    ],
  },
  {
    org: "Sports Clio",
    note: null,
    items: [
      { name: "The Creature — Short Film", result: "Bronze" },
    ],
  },
  {
    org: "Emmy Awards",
    note: "Pacific Northwest",
    items: [
      { name: "Creative Campaigns, Sports Opens, Branded Content", result: "7 wins" },
    ],
  },
  {
    org: "Telly Awards",
    note: null,
    items: [
      { name: "Creative Campaign Work", result: "Gold · Silver · Bronze — 8 total" },
    ],
  },
  {
    org: "Addy Awards",
    note: "Seattle",
    items: [
      { name: "Creative Campaigns", result: "7 wins" },
    ],
  },
];

export default function Honors() {
  return (
    <section style={{ background: "#F5F2ED", padding: "clamp(80px, 10vw, 140px) 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C8880", marginBottom: 28 }}>
            Recognition
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 52px)",
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            color: "#111110",
            maxWidth: 560,
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}>
            Earned by teams<br />worth <em>remembering.</em>
          </h2>
        </FadeIn>

        {/* Awards table — precise, understated */}
        <div style={{ borderTop: "1px solid #DDD8CF" }}>
          {HONORS.map((h, i) => (
            <FadeIn key={h.org} delay={i * 0.05}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "clamp(20px, 3vw, 48px)",
                padding: "clamp(24px, 3vw, 36px) 0",
                borderBottom: "1px solid #DDD8CF",
              }} className="honor-row">
                {/* Award org */}
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(14px, 1.2vw, 17px)", color: "#111110", fontWeight: 400 }}>
                    {h.org}
                  </p>
                  {h.note && (
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#BAB6B0", marginTop: 4, letterSpacing: "0.06em" }}>
                      {h.note}
                    </p>
                  )}
                </div>

                {/* Entries */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {h.items.map(item => (
                    <div
                      key={item.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "clamp(12px, 2vw, 32px)",
                      }}
                    >
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(12px, 1vw, 13px)", color: "#6A6660", lineHeight: 1.5 }}>
                        {item.name}
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#BAB6B0", flexShrink: 0, letterSpacing: "0.04em" }}>
                        {item.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 560px) {
          .honor-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
