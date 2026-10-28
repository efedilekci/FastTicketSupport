"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { loginAction, type AuthFormState } from "@/app/actions/auth";
import {
  authFieldClassName,
  authSubmitClassName,
} from "@/components/auth/auth-shell";

const initialState: AuthFormState = null;

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const [wachtwoordZichtbaar, setWachtwoordZichtbaar] = useState(false);

  return (
    <form action={formAction} className="space-y-4">
      {state && !state.ok ? (
        <p className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {state.message}
        </p>
      ) : null}

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
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="wachtwoord" className="text-sm">
            Wachtwoord
          </label>
          <Link
            href="/wachtwoord-vergeten"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Wachtwoord vergeten?
          </Link>
        </div>
        <div className="relative">
          <input
            id="wachtwoord"
            name="wachtwoord"
            type={wachtwoordZichtbaar ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="Wachtwoord"
            className={`${authFieldClassName} pr-10`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label={
              wachtwoordZichtbaar ? "Wachtwoord verbergen" : "Wachtwoord tonen"
            }
            onClick={() => setWachtwoordZichtbaar((zichtbaar) => !zichtbaar)}
          >
            {wachtwoordZichtbaar ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
        {state && !state.ok && state.fieldErrors?.wachtwoord ? (
          <p className="text-sm text-destructive">
            {state.fieldErrors.wachtwoord[0]}
          </p>
        ) : null}
      </div>

      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          name="onthoud"
          type="checkbox"
          className="size-4 rounded border border-input accent-gold-ink"
        />
        Onthoud mij
      </label>

      <button type="submit" className={authSubmitClassName} disabled={pending}>
        {pending ? "Bezig..." : "Inloggen"}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Nog geen account?{" "}
        <Link
          href="/registreren"
          className="text-foreground underline underline-offset-4"
        >
          Registreren
        </Link>
      </p>
    </form>
  );
}
