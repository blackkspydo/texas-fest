import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function Nav() {
  return (
    <header className="flex z-20 fixed w-full top-0 left-0 items-center justify-between px-4 py-4 shadow-md bg-white dark:bg-gray-800">
      <Link className="flex items-center" href="/">
        <Image src="/logo.png" width={150} height={24} alt="Texas" />
        <span className="sr-only">Texas</span>
      </Link>
      <Link href="/admin-login">
        <Button variant="default">Admin Login</Button>
      </Link>
    </header>
  );
}
