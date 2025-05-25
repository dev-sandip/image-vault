"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Search,
  Upload,
  User,
  Settings,
  LogOut,
  Cloud,
  Zap,
  ChevronDown,
  ImageIcon,
  Database,
} from "lucide-react";
import { useState } from "react";

export function AppHeader() {
  const [uploadProvider, setUploadProvider] = useState<
    "cloudinary" | "imagekit" | "uploadcare" | "filestack" | "imgur" | "aws-s3"
  >("imagekit");

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cloud className="h-4 w-4" />
          </div>
          <span className="font-semibold">ImageVault</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              {uploadProvider === "cloudinary" && (
                <>
                  <Cloud className="h-3 w-3" /> Cloudinary
                </>
              )}
              {uploadProvider === "imagekit" && (
                <>
                  <Zap className="h-3 w-3" /> ImageKit
                </>
              )}
              {uploadProvider === "uploadcare" && (
                <>
                  <Upload className="h-3 w-3" /> Uploadcare
                </>
              )}
              {uploadProvider === "filestack" && (
                <>
                  <ImageIcon className="h-3 w-3" /> Filestack
                </>
              )}
              {uploadProvider === "imgur" && (
                <>
                  <ImageIcon className="h-3 w-3" /> Imgur
                </>
              )}
              {uploadProvider === "aws-s3" && (
                <>
                  <Database className="h-4 w-4" /> AWS S3
                </>
              )}
              <ChevronDown className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => setUploadProvider("cloudinary")}>
              <Cloud className="h-4 w-4 mr-2" />
              Cloudinary
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setUploadProvider("imagekit")}>
              <Zap className="h-4 w-4 mr-2" />
              ImageKit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setUploadProvider("uploadcare")}>
              <Upload className="h-4 w-4 mr-2" />
              Uploadcare
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setUploadProvider("filestack")}>
              <ImageIcon className="h-4 w-4 mr-2" />
              Filestack
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setUploadProvider("imgur")}>
              <ImageIcon className="h-4 w-4 mr-2" />
              Imgur
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setUploadProvider("aws-s3")}>
              <Database className="h-4 w-4 mr-2" />
              AWS S3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-1 items-center gap-2 px-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search images..."
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm" className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Images
        </Button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
