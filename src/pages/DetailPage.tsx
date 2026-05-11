import { useNavigate, useParams } from "react-router-dom";

import { useStory } from "../hooks/useStory";

export default function DetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, isError } = useStory(Number(id));

  if (isLoading) {
    return <p>로딩중...</p>;
  }

  if (isError || !data) {
    return <p>에러 발생</p>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* 썸네일 */}
      <img
        src={`https://picsum.photos/seed/${data.id}/1200/500`}
        alt={data.title}
        className="
          w-full
          h-[400px]
          object-cover
          rounded-2xl
          mb-8
        "
      />

      {/* 제목 */}
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      {/* 정보 */}
      <div
        className="
          flex
          gap-4
          text-gray-500
          border-b
          pb-6
          mb-6
        "
      >
        <span>작성자: {data.by}</span>

        <span>
          작성일: {new Date(data.time * 1000).toISOString().split("T")[0]}
        </span>

        <span>점수: {data.score}</span>
      </div>

      {/* 설명 카드 */}
      <div
        className="
          bg-gray-50
          rounded-2xl
          p-6
          space-y-4
          mb-8
        "
      >
        <div>
          <p className="text-gray-400 text-sm">Story ID</p>

          <p className="font-semibold">{data.id}</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Type</p>

          <p className="font-semibold">{data.type}</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Comments</p>

          <p className="font-semibold">{data.descendants ?? 0}</p>
        </div>
      </div>

      {/* 링크 버튼 */}
      <a
        href={data.url}
        target="_blank"
        rel="noreferrer"
        className="
          inline-block
          bg-black
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-gray-800
          transition
        "
      >
        원문 보러가기
      </a>

      {/* 뒤로가기 */}
      <button
        onClick={() => navigate(-1)}
        className="
          ml-4
          border
          px-6
          py-3
          rounded-xl
          hover:bg-gray-100
          transition
        "
      >
        뒤로가기
      </button>
    </div>
  );
}
