import "server-only";
import {
  AuthError,
  getAuthenticatedUser,
  loginUser,
  logoutUser,
  registerUser,
  requireAuthenticatedUser,
} from "@/server/services/auth.service";
import {
  loginSchema,
  registerSchema,
} from "@/server/validations/auth.schema";
import type { PublicUser } from "@/types/user";

export type AuthActionResult =
  | { ok: true; user: PublicUser }
  | {
      ok: false;
      message: string;
      fieldErrors?: Record<string, string[]>;
    };

function formBoolean(value: FormDataEntryValue | null): boolean {
  return value === "on" || value === "true" || value === "1";
}

export async function loginController(
  formData: FormData,
): Promise<AuthActionResult> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    wachtwoord: formData.get("wachtwoord"),
    onthoud: formBoolean(formData.get("onthoud")),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Controleer je gegevens.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await loginUser(parsed.data);
    return { ok: true, user };
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, message: error.message };
    }
    return { ok: false, message: "Inloggen is mislukt. Probeer het later opnieuw." };
  }
}

export async function registerController(
  formData: FormData,
): Promise<AuthActionResult> {
  const parsed = registerSchema.safeParse({
    naam: formData.get("naam"),
    email: formData.get("email"),
    wachtwoord: formData.get("wachtwoord"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Controleer je gegevens.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const user = await registerUser(parsed.data);
    return { ok: true, user };
  } catch (error) {
    if (error instanceof AuthError) {
      return { ok: false, message: error.message };
    }
    return {
      ok: false,
      message: "Registreren is mislukt. Probeer het later opnieuw.",
    };
  }
}

export async function logoutController(): Promise<void> {
  await logoutUser();
}

export async function currentUserController(): Promise<PublicUser | null> {
  return getAuthenticatedUser();
}

export async function requireUserController(): Promise<PublicUser> {
  return requireAuthenticatedUser();
}
