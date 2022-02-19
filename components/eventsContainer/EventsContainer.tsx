import Event from "./Event";
import styles from "../../styles/EventsContainer.module.scss";

const EventsContainer = () => {
  return (
    <>
      <div className={styles["events-container"]}>
        <div className={styles["heading"]}>
          <h1>Events</h1>
        </div>
        <Event></Event>
        <Event></Event>
        <Event></Event>
        <Event></Event>
        <Event></Event>
        <Event></Event>
        <Event></Event>
      </div>
    </>
  );
};

export default EventsContainer;
