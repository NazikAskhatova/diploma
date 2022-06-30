import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../../redux/authSlice";
import classes from "./AuthDisplay.module.css";
// import image from "../../assets/page-header-img.webp";
import AuthHeader from "../../assets/nav-img.webp"
import Header from "../Header/Header";

export default function AuthDisplay() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <>
 {/* <img src={image} alt="Auth" className={classes.Authimg} /> */}
 <Header image={AuthHeader}/>
    <div className={classes.AuthD}>
      
      <form onSubmit={onAuthStart}>
        <h1>Sign in</h1>
        <p>Please sign in to your JewArt Account.</p>
        {errorOutput}
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>

        <button className={classes.buttonNew}><span className={classes.text}>Sign in</span></button>
        <button><span>Sign up</span></button>
      </form>
    </div>  
     </>
  );
}
