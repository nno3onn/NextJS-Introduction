// 1. 모든 파일에 React를 import할 필요 없음(hooks를 사용하지 않는 이상)
// 2. 404 페이지를 만들 필요 없음
// 3. 파일 확장명을 jsx로 지을 필요 없음

// react였다면 react-helmet 사용해야 했을 것
import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>hello</h1>
    </div>
  );
}
