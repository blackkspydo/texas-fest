import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { clearToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function Nav() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    setLoading(true);
    clearToken();
    setLoading(false);
    router.replace("/");
  };
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md bg-white dark:bg-gray-800">
      <Link className="flex items-center" href="#">
        <Image src="/logo.png" width={150} height={24} alt="Texas" />
        <span className="sr-only">Texas</span>
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline" href="/dashboard">
          Dashboard
        </Link>
        <Link
          className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline"
          href="/approval-requests"
        >
          Approval Requests
        </Link>
        <Link className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline" href="/attendance">
          Attendance
        </Link>
      </nav>
      <Button className="hidden md:flex" variant="outline" onClick={handleLogout}
        loading={loading}
      >
        Logout
      </Button>
    </header>
  );
}
