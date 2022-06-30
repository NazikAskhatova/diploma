import React from "react";
import classes from "./AboutPage.module.css";
import MoodboardN from "../../assets/necklace-varmelli.jpg";
import MoodboardS from "../../assets/Section2_Moodboard-Image5-DomeRing.webp";
import Charlotte from "../../assets/charlotte-r.jpg";
function AboutPage() {
  return (
    <>
      <div className={classes.Homeart}>
        <div className={classes.container}>
          <h3 className={classes.Mission}>OUR MISSION </h3>

          <h4>
            From the beginning, our mission has been create an art for our
            customers, who can wear our jewelry with confidence.
          </h4>
          <p>
            We believe in jewelry as an expression of self: that it can mean
            whatever you want; that you can wear it when you want, buy it when
            you want, gift it, celebrate with it, reward yourself with it and
            keep it forever.
          </p>
        </div>
        <div>
          <img src={MoodboardS} alt="HomeLine" className={classes.brings} />
          <img src={MoodboardN} alt="earmood" className={classes.moodboard} />
          <img src={Charlotte} alt="charlo" className={classes.charlo}></img>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
