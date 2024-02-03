"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { backendClient } from "@/lib/config";
import { getToken, setToken } from "@/lib/utils";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
export function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await backendClient.post("/admin/login", loginInfo);
    setLoading(false);
    if (response.status === 200) {
      setToken(response.data.accessToken);
      return redirect("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Invalid username or password",
        duration: 3000,
        variant: "destructive"
      });
    }
  };

  if (getToken()?.length) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col bg-white w-full h-full fixed top-1/2 left-1/2 dark:bg-gray-900 justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 dark:text-gray-200">Login</h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label className="text-gray-700 dark:text-gray-200" htmlFor="username">
              Username
            </Label>
            <Input
              className="w-full"
              id="username"
              required
              type="text"
              onChange={(e) => setLoginInfo({ ...loginInfo, userName: e.target.value })}
              value={loginInfo.userName}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-gray-700 dark:text-gray-200" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full"
              id="password"
              required
              type="password"
              onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
              value={loginInfo.password}
            />
          </div>
          <Button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
            loading={loading}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
