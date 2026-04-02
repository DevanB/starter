import { Link, usePage } from "@inertiajs/react";
import { BookOpen, FolderGit2, LayoutGrid } from "lucide-react";

import AppLogo from "@/components/app-logo";
import { NavFooter } from "@/components/nav-footer";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboard } from "@/routes";
import type { NavItem } from "@/types";

export function AppSidebar() {
  const page = usePage();
  const dashboardUrl = page.props.currentTeam ? dashboard(page.props.currentTeam.slug) : "/";

  const mainNavItems: NavItem[] = [
    {
      href: dashboardUrl,
      icon: LayoutGrid,
      title: "Dashboard",
    },
  ];

  const footerNavItems: NavItem[] = [
    {
      href: "https://github.com/laravel/react-starter-kit",
      icon: FolderGit2,
      title: "Repository",
    },
    {
      href: "https://laravel.com/docs/starter-kits#react",
      icon: BookOpen,
      title: "Documentation",
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={dashboardUrl} prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <TeamSwitcher />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
