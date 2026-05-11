import { useQuery } from "@tanstack/react-query";
import { fetchStories } from "../api/hackerNews";

export const useStories = (type: string) => {
  return useQuery({
    queryKey: ["stories", type],
    queryFn: () => fetchStories(type),
  });
};
