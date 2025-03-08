import React from "react";
import { Sidebar } from "@/components/layout/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-80 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
}
