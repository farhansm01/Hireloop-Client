// src/components/dashboard/recruiter/DashboardSidebar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutCellsLarge,        // Dashboard — verify this exists, fallback to LayoutLayoutCellsLarge
  House,       // My Company
  Briefcase,   // Manage Jobs
  FolderExclamation,       // Applications — verify, fallback to Envelope
  Gear,        // Settings
  Bars,
  Xmark,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutCellsLarge, label: "Dashboard", href: "/dashboard/recruiter" },
    { icon: House, label: "My Company", href: "/dashboard/recruiter/company" },
    { icon: Briefcase, label: "Manage Jobs", href: "/dashboard/recruiter/jobs" },
    { icon: FolderExclamation, label: "Applications", href: "/dashboard/recruiter/applications" },
    { icon: Gear, label: "Settings", href: "/dashboard/recruiter/settings" },
  ];

  const isActive = (href) => {
    if (href === "/dashboard/recruiter") return pathname === href;
    return pathname.startsWith(href);
  };

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {active && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-full bg-white" />
            )}
            <item.icon width={20} height={20} className="shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const sidebarContent = (
    <div className="flex h-full flex-col">

      {/* Logo */}
      <div className="px-2 pb-6">
        <h1 className="text-white text-2xl font-extrabold">HireLoop</h1>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3 px-2 pb-6">
        <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
          AS
        </div>
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">Alex Sterling</p>
          <p className="text-gray-500 text-xs">Recruiter</p>
          <span className="inline-block mt-1 text-[10px] font-bold tracking-wide text-gray-300 border border-[#2a2a2a] rounded px-1.5 py-0.5">
            PREMIUM ACCOUNT
          </span>
        </div>
      </div>

      {/* Nav */}
      {navContent}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-[#2a2a2a] bg-[#0d0d0d] p-4 min-h-screen">
        {sidebarContent}
      </aside>

      {/* Mobile trigger + drawer */}
      <div className="lg:hidden">
        <Drawer>
          <Button
            variant="bordered"
            className="fixed left-4 top-4 z-50 gap-2 rounded-lg border border-[#2a2a2a] bg-[#161616] text-gray-300 px-3 py-2 text-sm"
          >
            <Bars width={18} height={18} />
            Menu
          </Button>

          <Drawer.Backdrop className="bg-black/60">
            <Drawer.Content placement="left" className="w-72 max-w-[80%]">
              <Drawer.Dialog className="flex h-full flex-col bg-[#0d0d0d]">
                <Drawer.Header className="flex items-center justify-between border-b border-[#2a2a2a] px-4 py-3">
                  <Drawer.Heading className="text-base font-semibold text-white">
                    HireLoop
                  </Drawer.Heading>
                  <Drawer.CloseTrigger className="text-gray-400 hover:text-white">
                    <Xmark width={20} height={20} />
                  </Drawer.CloseTrigger>
                </Drawer.Header>
                <Drawer.Body className="p-4">
                  {/* User Profile */}
                  <div className="flex items-center gap-3 pb-6">
                    <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      AS
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">Alex Sterling</p>
                      <p className="text-gray-500 text-xs">Recruiter</p>
                      <span className="inline-block mt-1 text-[10px] font-bold tracking-wide text-gray-300 border border-[#2a2a2a] rounded px-1.5 py-0.5">
                        PREMIUM ACCOUNT
                      </span>
                    </div>
                  </div>
                  {navContent}
                </Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}