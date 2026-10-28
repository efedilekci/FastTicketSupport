import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "FastTicketSupport",
  description: "Hulp nodig? FastTicketSupport staat voor je klaar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={cn("font-sans", geist.variable)}>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  );
}
