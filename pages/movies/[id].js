import { useRouter } from "next/router";

export default function Detail() {
  const { query } = useRouter();
  return (
    <div>
      {/* 본 페이지에서 넘어온 경우에만 정보를 띄움. 아니면 로딩 띄움 */}
      <h4>{query.title || "Loading"}</h4>
    </div>
  );
}
