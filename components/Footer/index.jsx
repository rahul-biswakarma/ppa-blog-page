import React from "react";
import Image from "next/image";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import Styles from "./Footer.module.css";
import ChatIcon from "/public/social-media-icons/chat.svg";

const Footer = () => {
  return (
    <>
      <footer className={Styles.Footer}>
        <FooterLeft Styles={Styles} />
        <FooterRight Styles={Styles} />
        <div className={Styles.ChatBoxContainer}>
          <Image src={ChatIcon} alt="Chat box Icon" />
          Chat with an Expert
        </div>
      </footer>
      <div className={Styles.CopyrightContainer}>
        All rights reserved with @Programming Pathshala
      </div>
    </>
  );
};

export default Footer;
