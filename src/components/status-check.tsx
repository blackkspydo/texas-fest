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

export function StatusCheck() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Check Team Status</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md min-h-[270px]">
        <DialogHeader>
          <DialogTitle>Check Your Team's Status</DialogTitle>
          <DialogDescription>Input your teamID below to check your team's status.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-5 space-y-2">
          <div className="flex flex-col w-full items-start gap-1 space-y-2">
            <Label htmlFor="team-id">Team ID</Label>
            <Input id="team-id" placeholder="Enter your team ID" />
          </div>

          <Button className="w-full" type="submit">
            Check Status
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
