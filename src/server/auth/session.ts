import "server-only";
import { getIronSession, type SessionOptions } from "iron-session";
import { connection } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/server/auth/constants";

export type SessionData = {
  userId?: number;
};

export { SESSION_COOKIE };

function getSessionPassword(): string {
  const password = process.env.SESSION_PASSWORD;
  if (!password || password.length < 32) {
    throw new Error(
      "SESSION_PASSWORD ontbreekt of is korter dan 32 tekens.",
    );
  }
  return password;
}

export function sessionOptions(remember = false): SessionOptions {
  return {
    cookieName: SESSION_COOKIE,
    password: getSessionPassword(),
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: remember ? 60 * 60 * 24 * 30 : undefined,
    },
  };
}

export async function getSession(remember = false) {
  await connection();
  return getIronSession<SessionData>(
    await cookies(),
    sessionOptions(remember),
  );
}

export async function createSession(userId: number, remember = false) {
  const session = await getSession(remember);
  session.userId = userId;
  await session.save();
}

export async function destroySession() {
  const session = await getSession();
  session.destroy();
}
