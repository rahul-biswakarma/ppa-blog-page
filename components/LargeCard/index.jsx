import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./LargeCard.module.css";

const LargeCard = (props) => {
  return (
    <div className={Styles.LargeCardContainer}>
      <Image
        className={Styles.LargeCardImage}
        src={props.ImageSrc}
        alt={props.ImageAlt}
        width={1200}
        height={500}
        layout="responsive"
      />
      <div className={Styles.LargeCardTag}>{props.Tag}</div>
      <div className={Styles.LargeCardTextContainer}>
        <Link href={props.ArticleLink}>
          <a>
            <h1>{props.Title}</h1>
          </a>
        </Link>
        <p>
          {props.Date} | {props.ReadTime} READ
        </p>
        <div className={Styles.LargeCardAuthor}>By {props.Author}</div>
      </div>
    </div>
  );
};

export default LargeCard;
