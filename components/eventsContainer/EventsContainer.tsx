import Event from "./Event";
import styles from "../../styles/EventsContainer.module.scss";
import eventsData from "../../data/eventsData";

const EventsContainer = () => {
  return (
    <>
      <div className={styles["events-container"]}>
        <div className={styles["heading"]}>
          <h1>Events</h1>
        </div>
        {
          eventsData.map(event=>{
            return <Event key={event.id} {...event} ></Event>;
          })
        }
      </div>
    </>
  );
};

export default EventsContainer;
