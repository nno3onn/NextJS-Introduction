// 1. 모든 파일에 React를 import할 필요 없음(hooks를 사용하지 않는 이상)
// 2. 404 페이지를 만들 필요 없음
// 3. 파일 확장명을 jsx로 지을 필요 없음

import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "4b9deaf6bccf0ef59e596f59eba8a566";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // IIFE(즉시실행함수표현. Immediately Invoked Function Expression)
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading ...</h4>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
