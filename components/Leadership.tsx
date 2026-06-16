"use client";
import FadeIn from "./FadeIn";

const QUOTES = [
  {
    quote: "Aaron is truly one of one. You'd be hard-pressed to find someone with the same mix of creative vision, charisma, and passion for what he believes in.",
    name: "Chase Johnsen",
    title: "Copywriter",
    org: "Seattle Kraken",
  },
  {
    quote: "The trust and camaraderie he's built makes it so easy to push each other to be better every day. He says all the time he'd street fight for us — and I don't think there's anyone on the team who wouldn't return the favor.",
    name: "Katie Spence",
    title: "Senior Designer",
    org: "Seattle Kraken",
  },
  {
    quote: "His leadership and deep understanding of our brand's soul have helped make the Kraken a beloved franchise. I can't wait to see where his compass takes us next.",
    name: "Ali Daniels",
    title: "SVP Marketing",
    org: "Seattle Kraken",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" style={{ background: "#111110", padding: "clamp(80px, 10vw, 140px) 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3A3A38", marginBottom: 28 }}>
            Team & Leadership
          </p>
        </FadeIn>

        {/* Opening statement — full width, commanding */}
        <FadeIn delay={0.06}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 72px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "#EEE9E1",
            maxWidth: 820,
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}>
            I hire people better than me,<br />
            then <em style={{ color: "#3A3A38" }}>get out of their way.</em>
          </h2>
        </FadeIn>

        {/* Principles — spare, deliberate */}
        <FadeIn delay={0.12}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
            paddingBottom: "clamp(56px, 7vw, 96px)",
            borderBottom: "1px solid #1E1E1C",
            marginBottom: "clamp(56px, 7vw, 96px)",
          }}>
            {[
              { n: "—", body: "Creative work is vulnerable work. Trust makes it stronger." },
              { n: "—", body: "I give honest, direct feedback — even when it's uncomfortable." },
              { n: "—", body: "I share the glow of success. I own the burn of failure." },
              { n: "—", body: "If you want an unfiltered view of my leadership, I'd happily connect you with anyone I've managed." },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#2A2A28", flexShrink: 0, marginTop: 2 }}>
                  {p.n}
                </span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", lineHeight: 1.8, color: "#6A6660" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials — the emotional core, given full room */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px, 6vw, 72px)" }}>
          {QUOTES.map((q, i) => (
            <FadeIn key={q.name} delay={i * 0.12} y={16}>
              <figure style={{ maxWidth: 800 }}>
                {/* Opening mark — large, typographic, not a font icon */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 80,
                  lineHeight: 0.6,
                  color: "#1E1E1C",
                  marginBottom: 28,
                  userSelect: "none",
                }}>
                  &ldquo;
                </div>
                <blockquote style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px, 2.2vw, 28px)",
                  lineHeight: 1.55,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#C8C2B8",
                  marginBottom: 32,
                  letterSpacing: "-0.005em",
                }}>
                  {q.quote}
                </blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ width: 32, height: 1, background: "#2A2A28" }} />
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#EEE9E1", fontWeight: 500 }}>
                      {q.name}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#3A3A38", marginTop: 3, letterSpacing: "0.04em" }}>
                      {q.title} · {q.org}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        {/* Context note */}
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2A2A28",
            marginTop: "clamp(56px, 7vw, 96px)",
            paddingTop: 32,
            borderTop: "1px solid #1A1A18",
          }}>
            From the team · Five-year anniversary · Seattle Kraken
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
