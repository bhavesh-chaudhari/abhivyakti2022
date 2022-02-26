import Head from "next/head";
import TeamsContainer from "../../components/teamsContainer/TeamsContainer";
import Card from "../../components/fromTheTeam/card/Card";
import fromTheTeamData from "../../data/fromTheTeamData";
import styles from "../../styles/About.module.scss"

const index = () => {
  return (
    <>
      <Head>
        <title>Abhivyakti 2022 | About</title>
        <meta name="title" content="Abhivyakti 2022 | About"></meta>
        <meta
          name="description"
          content="Abhivyakti is the Annual Cultural fest organised by IIIT Nagpur. The idea behind Abhivyakti is to provide a stage for students to come up with their talents and shine. Abhivyakti is a cultural extravaganza that showcases an envious talent pool and a home to expressions. It's the floor where students learn to coordinate, manage, interact and work together as a team with common objectives."
        />
        <meta
          name="keywords"
          content="About Abhivyakti 2022, Abhivyakti, Cultural Festival of IIIT Nagpur"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta
          property="og:image"
          content="https://abhivyakti.vercel.app/_next/image?url=%2Fsvgs-to-convert%2Fabhivyakti-logo.svg&w=640&q=75"
        ></meta>
      </Head>
      <TeamsContainer></TeamsContainer>
      <div className={styles["from-the-team-section"]}>
        <h1 id="fromTheTeam">From The Team</h1>
        {fromTheTeamData.map((data) => {
          return <Card key={data.id} {...data}></Card>;
        })}
      </div>
    </>
  );
};

export default index;
