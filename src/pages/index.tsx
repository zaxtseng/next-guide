import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <Navigation />
    </>
  );
}
