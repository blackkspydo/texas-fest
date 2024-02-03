"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const StatusCheckLottie = (state: "waiting" | "loading" | "approved" | "rejected" = "waiting") => {
  if (state === "waiting")
    return <dotlottie-player src="/waiting.lottie" loop autoplay style={{ height: "200px", width: "100%" }} />;
  if (state === "loading")
    return <dotlottie-player src="/loading.lottie" autoplay style={{ height: "200px", width: "100%" }} />;
  if (state === "approved")
    return <dotlottie-player src="/approved.lottie" autoplay style={{ height: "200px", width: "100%" }} />;
  if (state === "rejected")
    return <dotlottie-player src="/rejected.lottie" autoplay style={{ height: "200px", width: "100%" }} />;
};

export function StatusCheck() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js";
    script.type = "module";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [status, setStatus] = useState<"waiting" | "loading" | "approved" | "rejected">("waiting");
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="default">Check Team Status</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md min-h-[270px]">
        <DialogHeader>
          <DialogTitle>Check Your Team&apos;s Status</DialogTitle>
          <DialogDescription>Input your teamID below to check your team&apos;s status.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-5 space-y-2">
          <div className="flex flex-col w-full items-start gap-1 space-y-2">
            <Label htmlFor="team-id">Team ID</Label>
            <Input id="team-id" placeholder="Enter your team ID" />
          </div>

          <Button
            className="w-full"
            type="submit"
            onClick={() => {
              setStatus("loading");
              setTimeout(() => {
                setStatus(Math.random() > 0.5 ? "approved" : "rejected");
              }, 3000);
            }}
          >
            Check Status
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
