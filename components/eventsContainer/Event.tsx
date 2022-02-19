import styles from "../../styles/EventsContainer.module.scss";

const Event = () => {
  return (
    <div className={styles["event-container"]}>
      <div className={styles["content"]}>
        <div className={styles["details"]}>
          <h2>Quizonmania</h2>
          <p>
            An intriguing and fun quiz competition that will test your
            knowledge.There will be 3 quizzes with specific topics.
          </p>
          <div className={styles["fee"]}>
            <span>Participation fee: </span>
            <ul>
              <li>One Quiz - 50/-</li>
              {/* <li>Two Quiz - 80/-</li>
              <li>Three Quiz - 100/-</li> */}
            </ul>
          </div>
        </div>
        <div className={styles["button-links"]}>
          <a href="#" rel="noreferrer" target="_blank">
            Register Now
          </a>
          <a href="#" rel="noreferrer" target="_blank">
            Rulebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
