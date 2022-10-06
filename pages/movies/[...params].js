import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      {/* 본 페이지에서 넘어온 경우에만 정보를 띄움. 아니면 로딩 띄움 */}
      <h4>{title}</h4>
    </div>
  );
}

// 클라이언트에 로딩없이 빠르게 제목을 띄워주고(pre-render SSR), SEO 최적화를 위해
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
