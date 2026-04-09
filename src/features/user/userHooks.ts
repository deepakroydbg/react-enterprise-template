import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/services/userApi";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { User } from "@/types/user";

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: getUsers,
    placeholderData: [],
    staleTime: 1000 * 60 * 5,
  });
};