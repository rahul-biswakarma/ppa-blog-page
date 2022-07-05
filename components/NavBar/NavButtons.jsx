import React from "react";
import Link from "next/link";

const NavButtons = (props) => {
  return (
    <div className={props.Styles.NavButtonContainer}>
      <Link href="/signup">
        <div className={props.Styles.NavLoginButton}>Log In</div>
      </Link>
      <div className={props.Styles.NavFreeTrailButton}>Start Free Trail</div>
    </div>
  );
};

export default NavButtons;
