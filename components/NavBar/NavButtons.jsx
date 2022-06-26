import React from "react";

const NavButtons = (props) => {
  return (
    <div className={props.Styles.NavButtonContainer}>
      <div className={props.Styles.NavLoginButton}>Log In</div>
      <div className={props.Styles.NavFreeTrailButton}>Start Free Trail</div>
    </div>
  );
};

export default NavButtons;
