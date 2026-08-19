"use server";

import { getSql, ensureTableExists } from "@/lib/db";
import { revalidatePath } from "next/cache";

export type User = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  created_at: string;
};

export async function createUser(prevState: any, formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const apellido = formData.get("apellido") as string;
  const email = formData.get("email") as string;

  if (!nombre || !apellido || !email) {
    return { error: "Todos los campos son obligatorios." };
  }

  try {
    await ensureTableExists();
    const sql = getSql();
    await sql`
      INSERT INTO usuarios (nombre, apellido, email)
      VALUES (${nombre.trim()}, ${apellido.trim()}, ${email.trim().toLowerCase()})
      ON CONFLICT (email) DO UPDATE SET
        nombre = EXCLUDED.nombre,
        apellido = EXCLUDED.apellido;
    `;
    revalidatePath("/");
    return { success: true, message: "¡Usuario registrado correctamente!" };
  } catch (error: any) {
    console.error("Error al guardar usuario:", error);
    return { error: error.message || "Error al guardar en la base de datos." };
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    await ensureTableExists();
    const sql = getSql();
    const users = await sql`
      SELECT id, nombre, apellido, email, created_at
      FROM usuarios
      ORDER BY created_at DESC
      LIMIT 50;
    `;
    return users as unknown as User[];
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}
