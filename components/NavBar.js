import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  // react-router 설치 없이 next.js에 내장되어 있는 router 바로 사용 가능 (간편!)
  const router = useRouter();

  return (
    <nav>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      {/* 훨씬 빠르고 새로고침하지 않음 */}
      {/* Link에 무언갈 전달하기 위해선 Link 안에 a 태그를 넣는 게 좋음. a 넣는 걸 습관화하기. */}
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
