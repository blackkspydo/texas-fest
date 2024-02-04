"use client";
import React from "react";
import { Nav } from "@/components/nav-outer";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Toaster />
      <main className="max-w-[1300px] mx-auto">{children}</main>
    </QueryClientProvider>
  );
}
