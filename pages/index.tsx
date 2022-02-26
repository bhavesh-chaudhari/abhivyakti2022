import Head from "next/head";
import Hero from "../components/hero/Hero";
import FromTheTeam from "../components/fromTheTeam/FromTheTeam";

const index = () => {
  return (
    <>
      <Head>
        <title>Abhivyakti 2022 | IIITN</title>
        <meta name="title" content="Abhivyakti 2022 | IIITN"></meta>
        <meta
          name="description"
          content="A stage for students to celebrate and a chance for creative minds to express the diversity of our country, ABHIVYAKTI - the festival of expression, reminds us of the deep-rooted sense of culture in us. For the past five years, Abhivyakti has witnessed students from all over the country participate in competitions to showcase the talent pool in music, dance, drama, photography and everything that adds colors to our life. It is the floor where students learn to coordinate, manage, interact and work together as a team with common objectives."
        />
        <meta
          name="keywords"
          content="Abhivyakti 2022, Abhivyakti, Cultural Festival of IIIT Nagpur, IIITN"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          property="og:image"
          content="https://abhivyakti.vercel.app/_next/image?url=%2Fsvgs-to-convert%2Fabhivyakti-logo.svg&w=640&q=75"
        ></meta>
      </Head>
      <Hero></Hero>
      <FromTheTeam></FromTheTeam>
    </>
  );
};

export default index;
