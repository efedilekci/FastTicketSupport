"use server";

import { redirect } from "next/navigation";
import {
  loginController,
  logoutController,
  registerController,
  type AuthActionResult,
} from "@/server/controllers/auth.controller";

export type AuthFormState = AuthActionResult | null;

export async function loginAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const result = await loginController(formData);
  if (!result.ok) {
    return result;
  }
  redirect("/dashboard");
}

export async function registerAction(
  _prevState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const result = await registerController(formData);
  if (!result.ok) {
    return result;
  }
  redirect("/dashboard");
}

export async function logoutAction(): Promise<void> {
  await logoutController();
  redirect("/inloggen");
}
