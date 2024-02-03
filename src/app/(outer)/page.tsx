"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-[100px] px-5 flex flex-col md:flex-row gap-10 items-center justify-center min-h-screen">
      <div className="">
        <div className="sm:max-w-md ">
          <div>
            <div className="text-2xl font-bold mb-6 text-left text-gray-700 dark:text-gray-200">Register Your Team</div>
            <p>Register your team for the event by clicking the button below.</p>
            <Link href="/event-registration">
              <Button className="w-[200px] mt-5" type="submit" onClick={() => {}}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 md:border-t-0 md:border-r-2  border-gray-300 dark:border-gray-700 w-full mx-[25px] md:w-0 md:h-[300px]" />
      <div className="">
        <div className="sm:max-w-md ">
          <div>
            <div className="text-2xl font-bold mb-6 text-left text-gray-700 dark:text-gray-200">
              Check Your Team&apos;s Status
            </div>
            <p>Input your teamID below to check your team&apos;s status.</p>
          </div>
          <div className="flex flex-col items-start gap-5 space-y-2">
            <div className="flex flex-col w-full items-start gap-1 space-y-2">
              <Label htmlFor="team-id">Team ID</Label>
              <Input id="team-id" placeholder="Enter your team ID" />
            </div>

            <Button className="w-[200px]" type="submit" onClick={() => {}}>
              Check Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
