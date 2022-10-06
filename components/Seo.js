import Head from "next/head";
// react였다면 react-helmet 사용해야 했을 것

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
