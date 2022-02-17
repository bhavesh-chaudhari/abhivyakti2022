import styles from "../../styles/Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["main"]}>
          <h1>ABHIVYAKTI 2022</h1>
          <p>4th-6th March</p>
          <button>Browse Events</button>
        </div>
        <div className={styles["presented-by"]}>
          <p>Proudly Presented By</p>
          <h3>
            Indian Institute of Information <br /> Technology, Nagpur
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero