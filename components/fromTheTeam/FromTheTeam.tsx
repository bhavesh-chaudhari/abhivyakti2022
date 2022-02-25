import React from 'react'
import styles from "../../styles/FromTheTeam.module.scss"
import Slider from "react-slick";
import { LeftActive } from '../svgComponents';
import { RightActive } from '../svgComponents';

// importing data
import fromTheTeamData from '../../data/fromTheTeamData';
import Card from "./card/Card";

const ArrowLeft = (props)=>{
  const { className, style, onClick } = props;
  return (
     <LeftActive
     className={className}
     style={{ ...style, display: "block"}}
     onClick={onClick}
   />
  );
}

const ArrowRight = (props)=>{
     const { className, style, onClick } = props;
     return (
       <RightActive
         className={className}
         style={{ ...style, display: "block"}}
         onClick={onClick}
       />
     );
}


const FromTheTeam = () => {

    const settings = {
      dots: true,
      swipeToSlide: true,
      variableWidth: true,
      adaptiveHeight: true,
      infinite: false,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      arrow: true,
      autoplay: false,
      speed: 400,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      appendDots: (dots) => (
        <div>
          <ul style={{ marginTop: "0px" }}> {dots} </ul>
        </div>
      ),
    };

    return (
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h1>From The Team</h1>
          <span className={styles["view"]}>
            <span>
              View All <span>&#x2197;</span>
            </span>
          </span>
        </div>
        <div className={styles["from-carousel-container"]}>
          <Slider {...settings}>
            {fromTheTeamData.map((card) => {
              return <Card key={card.id} {...card}></Card>;
            })}
          </Slider>
        </div>
      </div>
    );
}

export default FromTheTeam
