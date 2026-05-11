import { useState } from "react";

import Tabs from "../components/Tabs";
import NewsCard from "../components/NewsCard";

import { useStories } from "../hooks/useStories";

export default function HomePage() {
  const [type, setType] = useState("topstories");

  const { data, isLoading, isError } = useStories(type);

  return (
    <div>
      <main className="max-w-6xl mx-auto p-6">
        <Tabs currentTab={type} onTabChange={setType} />

        {isLoading && <p>로딩중...</p>}

        {isError && <p>에러가 발생했습니다.</p>}

        <div className="flex-col">
          {data?.map((story) => (
            <NewsCard key={story.id} story={story} />
          ))}
        </div>
      </main>
    </div>
  );
}
