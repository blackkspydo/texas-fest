import React from "react";
import { Nav } from "@/components/nav-outer";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <Toaster />
      <main className="max-w-[1300px] mx-auto">{children}</main>
    </>
  );
}
