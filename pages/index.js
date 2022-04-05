import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import About from "../components/About";
import Wearables from "../components/Wearables";
import NFTDisplay from "../components/NFTDisplay";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Wearables />
      <NFTDisplay />
    </div>
  );
}
