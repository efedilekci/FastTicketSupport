import "server-only";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "@/server/db/pool";
import type { UserRole } from "@/types/user";

export interface UserRow extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}

export async function findUserByEmail(email: string): Promise<UserRow | null> {
  const [rows] = await pool.execute<UserRow[]>(
    `SELECT id, name, email, password_hash, role, created_at, updated_at
     FROM users
     WHERE email = ?
     LIMIT 1`,
    [email],
  );

  return rows[0] ?? null;
}

export async function findUserById(id: number): Promise<UserRow | null> {
  const [rows] = await pool.execute<UserRow[]>(
    `SELECT id, name, email, password_hash, role, created_at, updated_at
     FROM users
     WHERE id = ?
     LIMIT 1`,
    [id],
  );

  return rows[0] ?? null;
}

export async function createUser(
  name: string,
  email: string,
  passwordHash: string,
  role: UserRole = "user",
): Promise<number> {
  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO users (name, email, password_hash, role)
     VALUES (?, ?, ?, ?)`,
    [name, email, passwordHash, role],
  );

  return result.insertId;
}
