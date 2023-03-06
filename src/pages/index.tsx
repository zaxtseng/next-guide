import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Swiper from "@/components/Swiper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <Navigation />
      <Swiper />
    </>
  );
}
