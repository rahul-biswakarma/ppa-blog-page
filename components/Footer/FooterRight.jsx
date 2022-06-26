import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import YoutubeIcon from "/public/social-media-icons/youtube.svg";
import LinkedInIcon from "/public/social-media-icons/linkedin.svg";
import FacebookIcon from "/public/social-media-icons/facebook.svg";
import TelegramIcon from "/public/social-media-icons/telegram.svg";
import InstagramIcon from "/public/social-media-icons/instagram.svg";

const FooterRight = (props) => {
  return (
    <div className={props.Styles.FooterRight}>
      <Image src={Logo} atl="Logo" />
      <p>
        We help our users to build skills, which are valued and enabling them to
        believe in themselves.
      </p>
      <div className={props.Styles.FooterRightSocialContainer}>
        <Link href="https://linkedin.com">
          <a className={props.Styles.FooterRightSocialIcon}>
            <Image src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </Link>
        <Link href="https://youtube.com">
          <a className={props.Styles.FooterRightSocialIcon}>
            <Image src={YoutubeIcon} alt="Youtube" />
          </a>
        </Link>
        <Link href="https://facebook.com">
          <a className={props.Styles.FooterRightSocialIcon}>
            <Image src={FacebookIcon} alt="Facebook" />
          </a>
        </Link>
        <Link href="https://instagram.com">
          <a className={props.Styles.FooterRightSocialIcon}>
            <Image src={InstagramIcon} alt="Instagram" />
          </a>
        </Link>
        <Link href="https://telegram.com">
          <a className={props.Styles.FooterRightSocialIcon}>
            <Image src={TelegramIcon} alt="Telegram" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FooterRight;
