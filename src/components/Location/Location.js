import classes from "./Location.module.css";
import LocationImg from "../../assets/location.webp"
function Location() {
  return (
    <>
      <div className={classes.mapStyle}>
        <p>
          Come Say Hi Shop our entire lineup of fine faves in store, get styled
          and join the JewArt.
        </p>
      </div>

      <div>
          <img src={LocationImg} alt="Location"/>
          </div>
      
    </>
  );
}

export default Location;
