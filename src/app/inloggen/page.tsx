import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Inloggen",
  description: "Log in bij FastTicketSupport.",
};

export default function InloggenPage() {
  return (
    <AuthShell
      title="Inloggen"
      description="Vul je e-mailadres en wachtwoord in"
    >
      <LoginForm />
    </AuthShell>
  );
}
