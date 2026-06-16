"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const PROJECTS = [
  {
    id: "kraken-narratives",
    n: "01",
    client: "Seattle Kraken",
    title: "Annual Brand Narratives",
    discipline: "Brand Strategy · Creative Direction",
    year: "2020–Ongoing",
    logline: "Six seasons. One continuous arc.",
    body: "Each season, a single narrative anchors everything — campaigns, in-arena experience, show opens, design, social. Season Six: \"Anchored in the PNW.\" A cinematic system building genuine emotional ownership of the Pacific Northwest.",
    scope: ["Brand Platform Development", "Seasonal Narrative Writing", "Campaign Creative Direction", "In-Arena Experience"],
    links: [{ label: "Read the Season Narratives →", href: "https://docs.google.com/document/d/17a7xHuwSeYQroMJdLu0W4iY9SLFVkVmSHeIhRCqDazA/edit" }],
    accent: "#162F58",
  },
  {
    id: "rei",
    n: "02",
    client: "REI",
    title: "Find Out",
    discipline: "Brand Strategy · Campaign",
    year: "Wieden+Kennedy",
    logline: "Grow beyond the core without losing it.",
    body: "Challenge: expand beyond the dedicated outdoor enthusiast without alienating them. Insight: curiosity is a more universal motivator than passion. The result — \"Find Out\" — an invitation to discover what only the outside can teach you. Two films. Cannes recognition.",
    scope: ["Brand Positioning", "Campaign Concepting", "Long-form Film", "Cannes Lions"],
    links: [
      { label: "Watch: Worm →", href: "https://www.youtube.com/watch?v=c0X6DgPzN7s" },
      { label: "Watch: Silence →", href: "https://www.youtube.com/watch?v=5ApIn2aqTto" },
    ],
    accent: "#2C6E3A",
  },
  {
    id: "playoffs",
    n: "03",
    client: "Seattle Kraken",
    title: "Legendary Moments",
    discipline: "Playoff Campaign · Brand",
    year: "2023",
    logline: "Historic before the outcome was written.",
    body: "When the Kraken reached the playoffs for the first time, the creative had to match the weight of the moment. Built on The Deep — the Kraken's founding mythology — and the earned confidence of a city that had waited long enough. Campaign, in-arena, OOH, broadcast.",
    scope: ["Campaign Strategy", "Brand Identity", "In-Arena Creative", "Broadcast"],
    links: [],
    accent: "#162F58",
  },
  {
    id: "uncharted",
    n: "04",
    client: "Seattle Kraken × Filson",
    title: "Uncharted Snapshots",
    discipline: "Branded Content Series",
    year: "2023–2024",
    logline: "Where brand mythology meets documentary craft.",
    body: "In partnership with historic Pacific Northwest outfitter Filson, a cinematic series takes fans deep into the soul of the region and the players who represent it. Not advertising. Not content. Something in between.",
    scope: ["Brand Partnership", "Content Strategy", "Cinematic Direction", "Series Development"],
    links: [],
    accent: "#5C3A1E",
  },
];

export default function Work() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" style={{ background: "#FAF8F4", padding: "clamp(80px, 10vw, 140px) 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        <FadeIn>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8C8880", marginBottom: 28 }}>
            Selected Work
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(34px, 5vw, 72px)",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            color: "#111110",
            maxWidth: 680,
            marginBottom: "clamp(56px, 7vw, 96px)",
          }}>
            Each project a chapter,<br /><em>not a campaign.</em>
          </h2>
        </FadeIn>

        {/* Project rows */}
        <div style={{ borderTop: "1px solid #DDD8CF" }}>
          {PROJECTS.map((p, idx) => {
            const isOpen = expanded === p.id;
            return (
              <FadeIn key={p.id} delay={idx * 0.04}>
                <div style={{ borderBottom: "1px solid #DDD8CF" }}>

                  {/* Row header — always visible */}
                  <div
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === "Enter" && setExpanded(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 1fr auto",
                      gap: "clamp(16px, 3vw, 40px)",
                      alignItems: "center",
                      padding: "clamp(24px, 3vw, 36px) 0",
                      cursor: "pointer",
                    }}
                    className="work-row"
                  >
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#BAB6B0", letterSpacing: "0.1em" }}>
                      {p.n}
                    </span>

                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8C8880", marginBottom: 8 }}>
                        {p.client} · {p.year}
                      </p>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(20px, 2.5vw, 36px)",
                        color: "#111110",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.1,
                        transition: "color 0.25s",
                      }}>
                        {p.title}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "#BAB6B0",
                        letterSpacing: "0.08em",
                        display: "none",
                      }} className="discipline-label">
                        {p.discipline}
                      </span>
                      <span style={{
                        width: 24, height: 24,
                        border: "1px solid #DDD8CF",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        transition: "transform 0.35s, border-color 0.25s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        fontSize: 14, color: "#8C8880",
                      }}>
                        +
                      </span>
                    </div>
                  </div>

                  {/* Expandable detail */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "clamp(24px, 4vw, 64px)",
                        paddingBottom: "clamp(32px, 4vw, 56px)",
                        paddingLeft: "calc(40px + clamp(16px, 3vw, 40px))",
                      }} className="project-detail">

                        {/* Left: logline + body */}
                        <div>
                          <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(15px, 1.4vw, 18px)",
                            color: "#514E49",
                            fontStyle: "italic",
                            lineHeight: 1.5,
                            marginBottom: 20,
                          }}>
                            &ldquo;{p.logline}&rdquo;
                          </p>
                          <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(13px, 1.1vw, 14px)",
                            lineHeight: 1.85,
                            color: "#6A6660",
                            marginBottom: 24,
                          }}>
                            {p.body}
                          </p>
                          {p.links.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
                              {p.links.map(l => (
                                <a
                                  key={l.label}
                                  href={l.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: 12,
                                    color: "#162F58",
                                    textDecoration: "none",
                                    letterSpacing: "0.02em",
                                    borderBottom: "1px solid #C8C2B8",
                                    paddingBottom: 2,
                                    transition: "border-color 0.2s, color 0.2s",
                                  }}
                                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#162F58"; e.currentTarget.style.color = "#111110"; }}
                                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#C8C2B8"; e.currentTarget.style.color = "#162F58"; }}
                                >
                                  {l.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Right: scope */}
                        <div>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#BAB6B0", marginBottom: 20 }}>
                            Scope of Work
                          </p>
                          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {p.scope.map(s => (
                              <div key={s} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                                <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#BAB6B0", flexShrink: 0 }} />
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#8C8880" }}>{s}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
      <style>{`
        .work-row:hover .discipline-label { display: inline !important; }
        @media (min-width: 768px) { .discipline-label { display: inline !important; } }
        @media (max-width: 640px) { .project-detail { grid-template-columns: 1fr !important; padding-left: 0 !important; } }
      `}</style>
    </section>
  );
}
