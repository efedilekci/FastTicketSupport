import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const authFieldClassName =
  "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-gold-ink focus-visible:ring-3 focus-visible:ring-gold-ink/30";

export const authSubmitClassName = cn(
  buttonVariants({ size: "lg" }),
  "h-11 w-full rounded-lg",
);

export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-12 text-foreground">
      <div className="w-full max-w-md rounded-lg border border-border bg-card px-6 py-8 shadow-[0_18px_50px_rgba(35,40,37,.06)] sm:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link
            href="/"
            aria-label="FastTicketSupport"
            className="grid size-11 place-items-center rounded-lg bg-primary text-gold"
          >
            <Sparkles className="size-5" aria-hidden="true" />
          </Link>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </main>
  );
}
