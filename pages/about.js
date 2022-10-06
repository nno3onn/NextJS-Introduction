import Head from "next/head";
import Seo from "../components/Seo";

export default function Potato() {
  // component(혹은 함수) 이름은 중요치 않음. export default가 중요함.
  return (
    <div>
      <Seo title="About" />
      <h1>About</h1>
    </div>
  );
}
