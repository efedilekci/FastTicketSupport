import "server-only";
import { hashPassword, verifyPassword } from "@/server/auth/password";
import {
  createSession,
  destroySession,
  getSession,
} from "@/server/auth/session";
import {
  createUser,
  findUserByEmail,
  findUserById,
} from "@/server/models/user.model";
import type { LoginInput, RegisterInput } from "@/server/validations/auth.schema";
import type { PublicUser } from "@/types/user";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

function toPublicUser(user: {
  id: number;
  name: string;
  email: string;
  role: PublicUser["role"];
}): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function registerUser(input: RegisterInput): Promise<PublicUser> {
  const existing = await findUserByEmail(input.email);
  if (existing) {
    throw new AuthError("Er bestaat al een account met dit e-mailadres.");
  }

  const passwordHash = await hashPassword(input.wachtwoord);
  const userId = await createUser(input.naam, input.email, passwordHash);
  await createSession(userId);

  const user = await findUserById(userId);
  if (!user) {
    throw new AuthError("Account aanmaken is mislukt.");
  }

  return toPublicUser(user);
}

export async function loginUser(input: LoginInput): Promise<PublicUser> {
  const user = await findUserByEmail(input.email);
  if (!user) {
    throw new AuthError("E-mailadres of wachtwoord is onjuist.");
  }

  const valid = await verifyPassword(input.wachtwoord, user.password_hash);
  if (!valid) {
    throw new AuthError("E-mailadres of wachtwoord is onjuist.");
  }

  await createSession(user.id, input.onthoud);
  return toPublicUser(user);
}

export async function logoutUser(): Promise<void> {
  await destroySession();
}

export async function getAuthenticatedUser(): Promise<PublicUser | null> {
  const session = await getSession();
  if (!session.userId) {
    return null;
  }

  const user = await findUserById(session.userId);
  if (!user) {
    await destroySession();
    return null;
  }

  return toPublicUser(user);
}

export async function requireAuthenticatedUser(): Promise<PublicUser> {
  const user = await getAuthenticatedUser();
  if (!user) {
    throw new AuthError("Je moet ingelogd zijn.");
  }
  return user;
}
