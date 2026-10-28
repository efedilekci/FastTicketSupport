import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "./forgot-password-form";

export const metadata: Metadata = {
  title: "Wachtwoord vergeten",
  description: "Vraag een nieuw wachtwoord aan bij FastTicketSupport.",
};

export default function WachtwoordVergetenPage() {
  return (
    <AuthShell
      title="Wachtwoord vergeten"
      description="Vul je e-mailadres in"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
