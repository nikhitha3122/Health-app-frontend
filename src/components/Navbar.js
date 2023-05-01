import React, { useState } from 'react';
import '../styles/nav.css';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/diabetes" className="nav__link">
           Diabetes
          </a>
        </li>
        <li className="nav__item">
          <a href="/liver" className="nav__link">
            Liver Disease
          </a>
        </li>
        <li className="nav__item">
          <a href="/kidney" className="nav__link">
            Kidney Disease
          </a>
        </li>
        <li className="nav__item">
          <a href="/heart" className="nav__link">
            Heart Disease
          </a>
        </li>
		<li className="nav__item">
          <a href="/cancer" className="nav__link">
            Breast Cancer
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;