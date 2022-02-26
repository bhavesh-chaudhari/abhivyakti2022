import styles from "../../styles/EventsContainer.module.scss";

const Event = (props) => {
  const {
    eventTitle,
    eventDetails,
    participationFee,
    registerLink,
    rulebookLink,
    dataAos
  } = props;

  return (
    <div data-aos={dataAos} data-aos-duration={800} className={styles["event-container"]}>
      <div className={styles["content"]}>
        <div className={styles["details"]}>
          <h2>{eventTitle}</h2>
          <p>{eventDetails}</p>
          <div className={styles["fee"]}>
            <span>Participation fee: </span>
            <ul>
              {participationFee.map((fee: string, index: number) => {
                return <li key={index}>{fee}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={styles["button-links"]}>
          <a href={registerLink} rel="noreferrer" target="_blank">
            Register Now
          </a>
          {rulebookLink ? (
            <a href={rulebookLink} rel="noreferrer" target="_blank">
              Rulebook
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Event;
