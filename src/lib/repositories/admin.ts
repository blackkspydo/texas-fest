import { backendClient } from "@/lib/config";

export const login = async (userName: string, password: string) => {
  return backendClient.post("/admin/login", {
    userName,
    password
  });
};

export const getAllUsers = async () => {
  return backendClient.get("/admin/dashboard/status/verified");
};

export const verifyUser = async (userId: string) => {
  return backendClient.post(`/admin/dashboard/status/verified/${userId}`);
}