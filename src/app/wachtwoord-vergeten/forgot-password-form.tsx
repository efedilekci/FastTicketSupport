"use client";

import Link from "next/link";
import {
  authFieldClassName,
  authSubmitClassName,
} from "@/components/auth/auth-shell";

export function ForgotPasswordForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="email@example.com"
          className={authFieldClassName}
        />
      </div>
      <button type="submit" className={authSubmitClassName}>
        Versturen
      </button>
      <p className="text-center text-sm text-muted-foreground">
        <Link href="/inloggen" className="text-foreground underline underline-offset-4">
          Terug naar inloggen
        </Link>
      </p>
    </form>
  );
}
