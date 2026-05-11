import { useQuery } from "@tanstack/react-query";
import { fetchStory } from "../api/hackerNews";

export const useStory = (id: number) => {
  return useQuery({
    queryKey: ["story", id],
    queryFn: () => fetchStory(id),
  });
};
