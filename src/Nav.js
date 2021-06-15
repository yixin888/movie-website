import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll");
      };
    },[]);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://s3-us-west-2.amazonaws.com/prod-api-lymberfitness/organizations/73367/original_logo.gif?1622702682" 
            alt="lightness logo" 
            />

        <img 
          className="nav__avatar"
          src="https://i.pinimg.com/originals/a4/df/1e/a4df1e5b8f552c831c1b0953e1aa72ee.jpg" 
            alt="lightness logo" 
            />
        </div>
    );
}

export default Nav;
