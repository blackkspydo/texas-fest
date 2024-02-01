import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center mb-4">Status Check</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="team-id">Team ID</Label>
            <Input id="team-id" placeholder="Enter your team ID" />
          </div>
          <Button className="w-full" type="submit">
            Check Status
          </Button>
          <div className="flex items-center justify-center space-x-2">
            <span className="inline-flex h-6 w-6 rounded-full bg-green-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Approved</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="inline-flex h-6 w-6 rounded-full bg-red-600" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Rejected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
