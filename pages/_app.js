import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// 1. nextjs가 home을 받음
// 2. getServerSideProps 를 사용할 걸 알고 API를 호출
// 3. props를 return함
// 4. nextjs가 APp의 pageProps부분에 3의 props를 넣어 보내줌
// 5. home에 props를 받고 해당 데이터를 띄움
