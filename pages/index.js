// 1. 모든 파일에 React를 import할 필요 없음(hooks를 사용하지 않는 이상)
// 2. 404 페이지를 만들 필요 없음
// 3. 파일 확장명을 jsx로 지을 필요 없음

import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// ! getServerSideProps 이름 꼭 지킬 것!
// client에 보여주지 않는 부분.
// 코드는 서버로 돌아감. server쪽에서만 작동함. 그걸 이용해서 API key도 숨길 수 있다!
// return 값은 위의 export default function에 props로 전달함
// await fetch("/api/movies")의 fetch url은 front에서 작동하지만 서버에서는 작동하지 않는다.
// 프론트엔드에는 이미 브라우저에 URL에 있어서 된다. 하지만 서버에는 없으니까 http://localhost:3000을 추가해주어야 한다.
// 이제 소스코드 안에 html이 모두 들어간다. 그래서 loading할 필요가 없다. API가 돌아오기 전까지 화면에 아무것도 안 보일거다.

// 1. 데이터를 모두 가져온 뒤 띄워서 소스코드에 모든 정보를 보여주거나, 2. 혹은 데이터를 가져오기 전까지 loading을 띄워서 소스코드에 loading만 띄워줄 것인지 선택해야 한다.

// 1의 경우, nextJS가 백엔드에서 받아온 props를 return해서 여기에 가져다 주면, reactJS가 props를 가져와서 그걸 가지고 result Array를 뽑아준다!
// page가 유저에게 보여지기 전에 props를 받아오는 function을 만들어야 한다.
// 그리고 유저가 자바스크립트를 활성화하지 않아도 화면이 뜬다!
// 하지만 1은 유저가 아무것도 보지 못한 채로 오래 기다려야 한다는 단점이 있다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
