import type { Story } from "../types/news";
import { useNavigate } from "react-router-dom";

interface Props {
  story: Story;
}

export default function NewsCard({ story }: Props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${story.id}`)}
      className="w-full flex p-4 mb-3 bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img
        src={`https://picsum.photos/seed/${story.id}/400/200`}
        alt={story.title}
        className=" w-48 h-48 object-cover rounded-xl"
      />

      <div className="p-3">
        <h2 className="font-bold text-lg mb-2">{story.title}</h2>

        <p className="text-sm text-gray-500">작성자: {story.by}</p>

        <p className="text-sm text-gray-500">
          {new Date(story.time * 1000).toISOString().split("T")[0]}
        </p>
      </div>
    </div>
  );
}
