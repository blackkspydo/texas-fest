import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Login() {
  return (
    <div className="flex flex-col bg-white w-full h-full fixed top-1/2 left-1/2 dark:bg-gray-900 justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">Login</h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label className="text-gray-700 dark:text-gray-200" htmlFor="username">
              Username
            </Label>
            <Input className="w-full" id="username" required type="text" />
          </div>
          <div className="space-y-1">
            <Label className="text-gray-700 dark:text-gray-200" htmlFor="password">
              Password
            </Label>
            <Input className="w-full" id="password" required type="password" />
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
