import classes from "./Location.module.css";
import LocationImg from "../../assets/location.webp";
function Location() {
  return (
    <>
    <hr className={classes.hrStyle}></hr>
      <div className={classes.mapStyle}>
          
        <div>
          <img src={LocationImg} alt="Location" />
        </div>
        <div className={classes.container}>
          <p>
            Come Say Hi Shop our entire lineup of fine faves in store, get
            styled and join the JewArt.
          </p>
        </div>
      </div>
    </>
  );
}

export default Location;
