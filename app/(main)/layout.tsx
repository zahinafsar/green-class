import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
}
