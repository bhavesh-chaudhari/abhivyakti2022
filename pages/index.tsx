import Head from "next/head";
import Hero from "../components/hero/Hero";
import FromTheTeam from "../components/fromTheTeam/FromTheTeam";

const index = () => {
  return (
    <>
      <Head>
        <title>Abhivyakti 2022 | IIITN</title>
      </Head>
      <Hero></Hero>
      <FromTheTeam></FromTheTeam>
    </>
  );
};

export default index;
