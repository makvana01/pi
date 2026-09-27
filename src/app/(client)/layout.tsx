import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#f8f9fa]">{children}</div>;
}
