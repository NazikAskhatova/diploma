import React from "react";
import classes from "./HomeElement.module.css";
function HomeEl() {
  return (
    <>
      <div className={classes.Homeart}>
        <article>
          <h3> Handcrafted and Responsibly Sourced</h3>
          <h5> FAIR PRICING </h5>
          <p>
            Say goodbye to traditional 10x markups. We design fine jewelry that
            you can wear every single day.
          </p>
          <h5> HIGH QUALITY</h5>
          <p>
            We work with expert jewelers who use high-quality and enduring
            materials, from precious metals—such as recycled and responsibly
            mined gold—to responsibly sourced diamonds and AAA-grade gemstones.
          </p>
        </article>
      </div>
    </>
  );
}
export default HomeEl;
