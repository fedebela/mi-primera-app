"use client";

import { useActionState } from "react";
import { createUser } from "@/app/actions";

export default function UserForm() {
  const [state, formAction, isPending] = useActionState(createUser, null);

  return (
    <form action={formAction} style={styles.form}>
      {state?.error && <div style={{ ...styles.alert, ...styles.alertError }}>{state.error}</div>}
      {state?.success && <div style={{ ...styles.alert, ...styles.alertSuccess }}>{state.message}</div>}

      <div style={styles.fieldGroup}>
        <label htmlFor="nombre" style={styles.label}>Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          placeholder="Juan"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="apellido" style={styles.label}>Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
          placeholder="Pérez"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="email" style={styles.label}>Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="juan.perez@ejemplo.com"
          style={styles.input}
        />
      </div>

      <button type="submit" disabled={isPending} style={isPending ? { ...styles.button, opacity: 0.7 } : styles.button}>
        {isPending ? "Guardando en Neon..." : "Registrarme"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
    width: "100%",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#374151",
  },
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.85rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#059669",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  alert: {
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
  alertError: {
    backgroundColor: "#fef2f2",
    color: "#dc2626",
    border: "1px solid #fca5a5",
  },
  alertSuccess: {
    backgroundColor: "#ecfdf5",
    color: "#059669",
    border: "1px solid #6ee7b7",
  },
};
