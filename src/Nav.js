import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? handleShow(true) : handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="nav__avatar"
        src="https://image.freepik.com/free-vector/gamer-youtuber-gaming-avatar-with-headphones-esport-logo_8169-260.jpg"
        alt=""
      />
      <div className="nav__contents"></div>
    </div>
  );
}

export default Nav;
