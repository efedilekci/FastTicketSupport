import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "./register-form";

export const metadata: Metadata = {
  title: "Registreren",
  description: "Maak een account bij FastTicketSupport.",
};

export default function RegistrerenPage() {
  return (
    <AuthShell title="Registreren" description="Maak een account aan">
      <RegisterForm />
    </AuthShell>
  );
}
