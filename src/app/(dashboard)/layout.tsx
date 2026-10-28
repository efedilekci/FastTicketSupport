import { redirect } from "next/navigation";
import { logoutAction } from "@/app/actions/auth";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { currentUserController } from "@/server/controllers/auth.controller";

export const instant = false;

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUserController();
  if (!user) {
    redirect("/inloggen");
  }

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
          <p className="text-sm font-semibold tracking-tight">
            FastTicket<span className="text-gold-ink">Support</span>
          </p>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user.name}
            </span>
            <form action={logoutAction}>
              <button
                type="submit"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                Uitloggen
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">{children}</main>
    </div>
  );
}
