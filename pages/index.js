// 1. 모든 파일에 React를 import할 필요 없음(hooks를 사용하지 않는 이상)
// 2. 404 페이지를 만들 필요 없음
// 3. 파일 확장명을 jsx로 지을 필요 없음

import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>hello</h1>
      <style jsx>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
