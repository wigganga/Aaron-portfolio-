"use client";
import FadeIn from "./FadeIn";

export default function CreativePhilosophy() {
  return (
    <section style={{ background: "#EEE9E1", padding: "clamp(64px, 8vw, 112px) 40px", borderTop: "1px solid #DDD8CF" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }} className="philosophy-grid">
        <FadeIn>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 3vw, 44px)",
            lineHeight: 1.25,
            color: "#111110",
            letterSpacing: "-0.01em",
            fontWeight: 400,
          }}>
            Creative should feel{" "}
            <em>inevitable</em> — like it could only come from this brand, at this moment.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { label: "Culturally relevant", body: "It earns its place in culture. It doesn't interrupt — it belongs." },
              { label: "Narrative-first", body: "Every execution advances a longer story. Nothing exists in isolation." },
              { label: "Business-moving", body: "Beautiful work that doesn't move the business is decoration. Strategy comes first." },
              { label: "Human at the core", body: "Under every strategy is a person who needs to feel something. We never forget that." },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#8C8880", marginTop: 7, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "#111110", marginBottom: 3 }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, lineHeight: 1.7, color: "#8C8880" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <style>{`
        @media (max-width: 640px) { .philosophy-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
