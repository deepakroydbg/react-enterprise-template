import { apiClient } from "./apiClient";
import { User } from "@/types/user";

export const getUsers = async (): Promise<User[]> => {
  const res = await apiClient.get("/users");
  return res.data;
};