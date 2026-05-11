import type { Story } from "../types/news";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchStoryIds = async (type: string): Promise<number[]> => {
  const response = await fetch(`${BASE_URL}/${type}.json`);

  if (!response.ok) {
    throw new Error(`스토리 목록 조회 실패`);
  }

  return response.json();
};

export const fetchStory = async (id: number): Promise<Story> => {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);

  if (!response.ok) {
    throw new Error(`스토리 상세 조회 실패`);
  }

  return response.json();
};

export const fetchStories = async (type: string): Promise<Story[]> => {
  const storyIds = await fetchStoryIds(type);

  const selectedIds = storyIds.slice(0, 15);

  const stories = await Promise.all(selectedIds.map((id) => fetchStory(id)));
  return stories;
};
