import Layout from "../components/Layout";
import "../styles/globals.css";

// _app 파일에 적은 코드 넣기(Layout Component 활용)

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
