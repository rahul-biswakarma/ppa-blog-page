import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./SocialIcons.module.css";
import YoutubeIcon from "/public/social-media-icons/white-youtube.svg";
import LinkedInIcon from "/public/social-media-icons/white-linkedin.svg";
import FacebookIcon from "/public/social-media-icons/white-facebook.svg";
import TelegramIcon from "/public/social-media-icons/white-telegram.svg";
import InstagramIcon from "/public/social-media-icons/white-instagram.svg";

const SocialMediaIcons = () => {
  return (
    <div className={Styles.SocialContainer}>
      <Link href="https://linkedin.com">
        <a className={Styles.SocialIconLinkedIn}>
          <Image src={LinkedInIcon} alt="LinkedIn" />
        </a>
      </Link>
      <Link href="https://youtube.com">
        <a className={Styles.SocialIconYoutube}>
          <Image src={YoutubeIcon} alt="Youtube" />
        </a>
      </Link>
      <Link href="https://facebook.com">
        <a className={Styles.SocialIconFacebook}>
          <Image src={FacebookIcon} alt="Facebook" />
        </a>
      </Link>
      <Link href="https://instagram.com">
        <a className={Styles.SocialIconInstagram}>
          <Image src={InstagramIcon} alt="Instagram" />
        </a>
      </Link>
      <Link href="https://telegram.com">
        <a className={Styles.SocialIconTelegram}>
          <Image src={TelegramIcon} alt="Telegram" />
        </a>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
