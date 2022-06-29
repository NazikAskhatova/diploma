import React from "react";
import NavToggle from "../Nav/NavToggle/NavToggle";
import classes from "./Toolbar.module.css";
import Nav from "../Nav/Nav";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Nav />
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}
export default Toolbar;
