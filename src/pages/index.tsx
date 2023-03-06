import Game from "@/components/Game";
import { Layout } from "@/components/Layout";
import Swiper from "@/components/Swiper";
import { Inter } from "next/font/google";
// 谷歌字体
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Swiper />
        <Game />
      </Layout>
    </>
  );
}
