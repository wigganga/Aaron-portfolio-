"use client";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#111110", padding: "clamp(80px, 10vw, 140px) 40px clamp(40px, 5vw, 64px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* CTA — the close, unhurried */}
        <FadeIn>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 120px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            fontWeight: 400,
            color: "#EEE9E1",
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}>
            Let&rsquo;s build<br />
            <em style={{ color: "#2A2A28" }}>something</em><br />
            that lasts.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(32px, 5vw, 80px)",
            paddingBottom: "clamp(56px, 7vw, 96px)",
            borderBottom: "1px solid #1E1E1C",
          }} className="footer-grid">

            {/* Left: context */}
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(13px, 1.2vw, 15px)",
                lineHeight: 1.85,
                color: "#514E49",
                maxWidth: 380,
                marginBottom: 40,
              }}>
                VP of Brand Creative at the Seattle Kraken. Available for select consulting, speaking, and advisory work.
              </p>
              <a
                href="mailto:aaron@example.com"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px, 2vw, 28px)",
                  color: "#EEE9E1",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid #2A2A28",
                  paddingBottom: 4,
                  transition: "color 0.3s, border-color 0.3s",
                  display: "inline-block",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#8C8880"; e.currentTarget.style.borderColor = "#3A3A38"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#EEE9E1"; e.currentTarget.style.borderColor = "#2A2A28"; }}
              >
                aaron@example.com
              </a>
            </div>

            {/* Right: links */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 24 }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2A2A28", marginBottom: 16 }}>
                  Connect
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "LinkedIn", href: "https://linkedin.com" },
                    { label: "Instagram", href: "https://instagram.com" },
                  ].map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        color: "#514E49",
                        textDecoration: "none",
                        transition: "color 0.25s",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#EEE9E1"}
                      onMouseLeave={e => e.currentTarget.style.color = "#514E49"}
                    >
                      {l.label}
                      <span style={{ fontSize: 10, color: "#2A2A28" }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <FadeIn delay={0.15}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 12,
          }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#2A2A28" }}>
              © {new Date().getFullYear()} Aaron Huffman
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#2A2A28" }}>
              Brand strategy. Narrative systems. Creative direction.
            </p>
          </div>
        </FadeIn>

      </div>
      <style>{`
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
