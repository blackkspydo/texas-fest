import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export function Nav() {
  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-md bg-white dark:bg-gray-800">
      <Link className="flex items-center" href="#">
        <MountainIcon className="h-6 w-6" />
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
        <Link
          className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:underline"
          href="#"
        >
          Attendance
        </Link>
      </nav>
      <Button className="hidden md:flex" variant="outline">
        Logout
      </Button>
    </header>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
