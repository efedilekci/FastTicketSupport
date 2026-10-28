import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Je FastTicketSupport-dashboard.",
};

export default function DashboardPage() {
  return (
    <section className="rounded-lg border border-border bg-card p-8 shadow-sm">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Dit is een kale startpagina. Hier komen later tickets, statussen en
        overzichten.
      </p>
    </section>
  );
}
