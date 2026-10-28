"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction, type AuthFormState } from "@/app/actions/auth";
import {
  authFieldClassName,
  authSubmitClassName,
} from "@/components/auth/auth-shell";

const initialState: AuthFormState = null;

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      {state && !state.ok ? (
        <p className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {state.message}
        </p>
      ) : null}

      <div className="space-y-1.5">
        <label htmlFor="naam" className="text-sm">
          Naam
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          autoComplete="name"
          required
          className={authFieldClassName}
        />
        {state && !state.ok && state.fieldErrors?.naam ? (
          <p className="text-sm text-destructive">{state.fieldErrors.naam[0]}</p>
        ) : null}
      </div>

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
        {state && !state.ok && state.fieldErrors?.email ? (
          <p className="text-sm text-destructive">{state.fieldErrors.email[0]}</p>
        ) : null}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="wachtwoord" className="text-sm">
          Wachtwoord
        </label>
        <input
          id="wachtwoord"
          name="wachtwoord"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          className={authFieldClassName}
        />
        {state && !state.ok && state.fieldErrors?.wachtwoord ? (
          <p className="text-sm text-destructive">
            {state.fieldErrors.wachtwoord[0]}
          </p>
        ) : null}
      </div>

      <button type="submit" className={authSubmitClassName} disabled={pending}>
        {pending ? "Bezig..." : "Registreren"}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Al een account?{" "}
        <Link
          href="/inloggen"
          className="text-foreground underline underline-offset-4"
        >
          Inloggen
        </Link>
      </p>
    </form>
  );
}
