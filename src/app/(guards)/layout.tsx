"use client";
import React from "react";
import { Nav } from "@/components/nav";
import { Toaster } from "@/components/ui/toaster";
import { getToken } from "@/lib/utils";
import { redirect } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Layout({ children }: { children: React.ReactNode }) {
  const checkIfLoggedIn = () => {
    if (typeof window === "undefined") return false;
    const token = getToken();
    if (!token) {
      return false;
    }
    return true;
  };

  if (!checkIfLoggedIn()) {
    redirect("/");
  }

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Toaster />
      <main className="max-w-[1300px] mx-auto">{children}</main>
    </QueryClientProvider>
  );
}
