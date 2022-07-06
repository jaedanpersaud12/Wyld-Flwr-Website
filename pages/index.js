import Head from "next/head"
import Image from "next/image"
import Hero from "../components/Home/Hero"
import NFTS from "../components/Home/NFTS"
import Phygicode from "../components/Home/Phygicode"
import Section1 from "../components/Home/Section1"

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Hero />
      <Section1 />
      <Phygicode />
      <NFTS />
    </div>
  )
}
