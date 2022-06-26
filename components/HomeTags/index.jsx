import React from "react";
import Styles from "./HomeTags.module.css";

const Tags = (props) => {
  return (
    <div className={Styles.Tags}>
      {props.Tag} <span className={Styles.TagCount}>({props.TagCount})</span>
    </div>
  );
};

export default Tags;
