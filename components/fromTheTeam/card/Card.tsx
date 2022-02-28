import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/FromTheTeamCard.module.scss";

const Card = (props) => {
  const [readMore, setReadMore] = useState(true);

  const { imgPath, cardTitle, cardPara, animation, hasVideo } = props;

  const media = useRef(null);
  const content = useRef(null);
  const paraRef = useRef(null)

  const More = () => {
    setReadMore(!readMore);
    if (readMore) {
      content.current.style.height = "100%";
      media.current.style.height = "0%";
      paraRef.current.style.overflow = "auto";
      paraRef.current.style.height = "23rem";
    } else {
      content.current.style.height = "60%";
      media.current.style.height = "40%";
      paraRef.current.style.overflow = "hidden";
      paraRef.current.style.height = "8em";
    }
  };

  useEffect(()=>{
    paraRef.current.scrollTo(0, 0)
  }, [readMore])

  return (
    <div data-aos={animation} className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div ref={media} className={styles["card-media"]}>
          {hasVideo ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tmbVk_Xc5XQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image layout="fill" src={imgPath} alt={`${cardTitle} image`} />
          )}
        </div>
        <div ref={content} className={styles["card-content"]}>
          <div className={styles["card-title"]}>
            <h2>{cardTitle}</h2>
          </div>
          <div className={styles["card-para"]}>
            <p id="lol" ref={paraRef}>{cardPara}</p>
          </div>
          <button className={styles["read-btn"]} onClick={More}>
            {readMore ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
