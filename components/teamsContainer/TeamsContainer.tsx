import React from "react";
import styles from "../../styles/TeamsContainer.module.scss"
import MemberCard from "./MemberCard";

import teamsData from "../../data/teamsData";

const TeamsContainer = () => {
  return (
    <div className={styles["teams-container"]}>
      <div className={styles["header"]}>
        <h1 id="team">The Team</h1>
      </div>
      <div className={styles["team-grid"]}>
        {teamsData.map((team) => {
          return <MemberCard key={team.id} {...team}></MemberCard>;
        })}
      </div>
    </div>
  );
};

export default TeamsContainer;
