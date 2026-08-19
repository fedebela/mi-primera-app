import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    backgroundColor: "#f0fdf4",
    fontFamily:
      "'Trebuchet MS', 'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 800,
    background: "linear-gradient(90deg, #16a34a, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textAlign: "center",
    margin: 0,
    textShadow: "0 2px 12px rgba(22, 163, 74, 0.15)",
  },
};

function SoccerBall() {
  return (
    <svg width="160" height="160" viewBox="0 0 100 100" role="img" aria-label="Pelota de fútbol">
      <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#111827" strokeWidth="2" />
      <polygon points="50,22 68,32 62,52 38,52 32,32" fill="#111827" />
      <polygon points="50,78 68,68 62,48 38,48 32,68" fill="#111827" />
      <polygon points="20,52 24,30 44,36 44,50 30,66" fill="#111827" />
      <polygon points="80,52 76,30 56,36 56,50 70,66" fill="#111827" />
      <polygon points="36,72 44,52 56,52 64,72 50,84" fill="#111827" />
      <polygon points="36,28 44,48 56,48 64,28 50,16" fill="#111827" />
    </svg>
  );
}

export default function Home() {
  return (
    <main style={styles.main}>
      <SoccerBall />
      <h1 style={styles.title}>Mi primera aplicación</h1>
    </main>
  );
}