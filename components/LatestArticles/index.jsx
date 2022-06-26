import React from "react";
import LargeCard from "/components/LargeCard";
import Styles from "./LatestAritcle.module.css";
import Tags from "../HomeTags";
import SocialMediaIcons from "../SocialMediaIcons";

const LatestArticle = () => {
  return (
    <div className={Styles.LatestArticleContainer}>
      <div className={Styles.LargeCardContainer}>
        <LargeCard
          ImageSrc="https://picsum.photos/1500/500"
          ImageAlt="Image"
          ArticleLink="https://google.com"
          Title="Hello World"
          Date="JUNE 9, 2022"
          ReadTime="5 MIN"
          Author="Brimstone"
          Tag="Interview Preparations"
        />
        <LargeCard
          ImageSrc="https://picsum.photos/1500/500"
          ImageAlt="Image"
          ArticleLink="https://google.com"
          Title="Hello World 2"
          Date="JULY 9, 2023"
          ReadTime="5 MIN"
          Author="Brimstone"
          Tag="Data Structures"
        />
        <LargeCard
          ImageSrc="https://picsum.photos/1500/500"
          ImageAlt="Image"
          ArticleLink="https://google.com"
          Title="Hello World 3"
          Date="AUGUST 9, 2025"
          ReadTime="5 MIN"
          Author="Brimstone"
          Tag="Interview Preparations"
        />
      </div>
      <div className={Styles.TagContainer}>
        <h2>Recommended Categories</h2>
        <div className={Styles.Tags}>
          <Tags Tag="Competetive Programming" TagCount="2" />
          <Tags Tag="Interview Preperation" TagCount="5" />
          <Tags Tag="Competitive Programming" TagCount="8" />
          <Tags Tag="Time and Space Complexities" TagCount="7" />
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default LatestArticle;
