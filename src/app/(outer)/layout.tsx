import React from "react";
import { Nav } from "@/components/nav-outer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main
      className="max-w-[1300px] mx-auto"
      >{children}</main>
    </>
  );
}
