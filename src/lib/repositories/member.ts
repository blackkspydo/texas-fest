import { backendClient } from "../config";

export const uploadFile = async (formData: FormData) => {
  return backendClient.post("/members/upload/picture", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};
