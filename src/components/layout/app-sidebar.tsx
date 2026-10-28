"use client";

import {
  LayoutDashboard,
  Settings,
  Sparkles,
  Ticket,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { PublicUser } from "@/types/user";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

const upcomingItems: { label: string; icon: LucideIcon }[] = [
  { label: "Tickets", icon: Ticket },
  { label: "Team", icon: Users },
  { label: "Instellingen", icon: Settings },
];

export function AppSidebar({ user }: { user: PublicUser }) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/dashboard" />}
              tooltip="FastTicketSupport"
              className="bg-sidebar-primary text-gold hover:bg-sidebar-primary hover:text-gold data-active:bg-sidebar-primary data-active:text-gold"
            >
              <Sparkles />
              <span>FastTicketSupport</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigatie</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      render={<Link href={item.href} />}
                      isActive={active}
                      tooltip={item.label}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}

              {upcomingItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      disabled
                      tooltip={`${item.label} volgt later`}
                      aria-label={`${item.label} (binnenkort)`}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
