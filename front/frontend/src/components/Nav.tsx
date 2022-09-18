import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../Netflix_Logo_PMS.png";
import home from "../home.png";

// const baseUrl: string = "https://image.tmdb.org/t/p/original";
const Nav: React.FC = () => {
  const [show, handleShow] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        console.log(window.screenY);
        console.log(true);
        handleShow(true);
      } else {
        console.log(window.screenY);
        console.log(false);
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener(
        "scroll",
        () => {
          console.log("now!!!");
        },
        {}
      );
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={logo} alt="NetFlix Logo" className="nav__logo" />
      <img src={home} alt="avatar" className="nav__avatar" />
    </div>
  );
};

export default Nav;
