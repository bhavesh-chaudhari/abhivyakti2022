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
