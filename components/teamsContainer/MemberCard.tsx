import React from "react";
import Image from "next/image";
import styles from "../../styles/TeamsContainer.module.scss";

const MemberCard = (props) => {
  const { isLead, image, title, name, email } = props;

  return (
    <div className={styles["lead-card"]}>
      <div className={styles["lead-image"]}>
        <Image width={"200px"} height={"200px"} src={image} alt={name} />
      </div>
      <div className={styles["lead-details"]}>
        <h2>{title}</h2>
        <h3>{name}</h3>
        {
          email ? <a href="mailto:">
          <h4>{email}</h4>
        </a> : null
        }
      </div>
    </div>
  );
};

export default MemberCard;
