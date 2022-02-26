import Link from "next/link";
import styles from "../../styles/Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["main"]}>
          <h1>ABHIVYAKTI 2022</h1>
          <p>4th-6th March</p>
          <div data-aos="zoom-in" data-aos-duration={500}>
            <Link href="/events">Browse Events</Link>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration={500}
          className={styles["presented-by"]}
        >
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