import Image from "next/image";
import Ssr from "./Components/ssr";
import Csr from "./Components/csr";

export default function Home() {
  return (
    <>
    <Ssr/>
    <Csr/>
    </>
  );
}
