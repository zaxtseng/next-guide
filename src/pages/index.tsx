import Game, { IGame, loadGame } from "@/components/Game";
import { Layout } from "@/components/Layout";
import Swiper, { ISwiper, loadSwiper } from "@/components/Swiper";
import { Inter } from "next/font/google";
// 谷歌字体
const inter = Inter({ subsets: ["latin"] });

export default function Home({swiper,game}:{ swiper: ISwiper[],game: IGame[] }) {
  return (
    <>
      <Layout>
        <Swiper data={swiper} />
        <Game data={game} title='Game' />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
    const { data: swiper } = await loadSwiper();
    const { data: game } = await loadGame();
  return {
    props: {
      swiper,
      game
    },
  }
}
