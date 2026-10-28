import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
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
    <TooltipProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar user={user} />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-1 h-4" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Dashboard</p>
              <p className="truncate text-xs text-muted-foreground">
                FastTicketSupport
              </p>
            </div>
            <p className="hidden truncate text-sm text-muted-foreground sm:block">
              {user.name}
            </p>
          </header>
          <div className="flex-1 p-4 sm:p-5">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
