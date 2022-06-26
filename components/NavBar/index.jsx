import React from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Logo from "/public/logo.svg";
import NavButtons from "./NavButtons";
import Styles from "./Nav.module.css";

const NavBar = () => {
  return (
    <div className={Styles.NavContainer}>
      <Image src={Logo} alt="Logo" />
      <NavLinks Styles={Styles} />
      <NavButtons Styles={Styles} />
    </div>
  );
};

export default NavBar;
