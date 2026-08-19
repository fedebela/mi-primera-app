import UserForm from "@/app/components/UserForm";
import { getUsers } from "@/app/actions";

function SoccerBall() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" role="img" aria-label="Pelota de fútbol">
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

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <SoccerBall />
        <h1 style={styles.title}>Mi primera aplicación</h1>
        <p style={styles.subtitle}>Registro de usuarios con Neon Postgres en Vercel</p>
      </header>

      <div style={styles.container}>
        <section style={styles.card}>
          <h2 style={styles.cardTitle}>Nuevo Usuario</h2>
          <UserForm />
        </section>

        <section style={styles.card}>
          <h2 style={styles.cardTitle}>
            Usuarios Registrados ({users.length})
          </h2>
          {users.length === 0 ? (
            <p style={styles.emptyText}>
              Aún no hay usuarios registrados. ¡Sé el primero!
            </p>
          ) : (
            <ul style={styles.userList}>
              {users.map((u) => (
                <li key={u.id} style={styles.userCard}>
                  <div style={styles.userName}>
                    {u.nombre} {u.apellido}
                  </div>
                  <div style={styles.userEmail}>{u.email}</div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "3rem 1.5rem",
    backgroundColor: "#f0fdf4",
    fontFamily:
      "'Trebuchet MS', 'Segoe UI', system-ui, -apple-system, sans-serif",
  },
  header: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "2.5rem",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "2.75rem",
    fontWeight: 800,
    background: "linear-gradient(90deg, #16a34a, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#4b5563",
    margin: 0,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    width: "100%",
    maxWidth: "900px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    padding: "2rem",
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
    border: "1px solid #e5e7eb",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: 700,
    color: "#111827",
    marginTop: 0,
    marginBottom: "1.25rem",
  },
  emptyText: {
    color: "#6b7280",
    fontStyle: "italic",
  },
  userList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.75rem",
    maxHeight: "360px",
    overflowY: "auto" as const,
  },
  userCard: {
    padding: "0.85rem 1rem",
    borderRadius: "0.5rem",
    backgroundColor: "#f9fafb",
    border: "1px solid #f3f4f6",
  },
  userName: {
    fontWeight: 600,
    color: "#111827",
  },
  userEmail: {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginTop: "0.2rem",
  },
};
