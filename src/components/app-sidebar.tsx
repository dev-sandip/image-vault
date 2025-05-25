"use client";

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
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Images,
  Upload,
  Heart,
  Folder,
  Settings,
  HardDrive,
  TrendingUp,
} from "lucide-react";

const menuItems = [
  {
    title: "All Images",
    url: "/",
    icon: Images,
    count: 1247,
  },
  {
    title: "Recent Uploads",
    url: "/recent",
    icon: Upload,
    count: 23,
  },
  {
    title: "Favorites",
    url: "/favorites",
    icon: Heart,
    count: 89,
  },
  {
    title: "Collections",
    url: "/collections",
    icon: Folder,
    count: 12,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <HardDrive className="h-4 w-4" />
              Storage Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>2.4 GB used</span>
              <span>5 GB total</span>
            </div>
            <Progress value={48} className="h-2" />
          </CardContent>
        </Card>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Gallery</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      {item.count && (
                        <span className="text-xs text-muted-foreground">
                          {item.count}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3 px-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">This Month</span>
                <div className="flex items-center gap-1 text-green-600">
                  <TrendingUp className="h-3 w-3" />
                  <span className="font-medium">+127</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Total Views</span>
                <span className="font-medium">24.5K</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Downloads</span>
                <span className="font-medium">892</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          ImageVault v2.1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
