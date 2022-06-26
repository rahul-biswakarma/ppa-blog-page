import React from "react";
import Link from "next/link";

const NavButtons = (props) => {
  return (
    <nav className={props.Styles.NavLinksContainer}>
      <Link href="/renaissance">
        <a className={props.Styles.NavLinks}>Renaissance</a>
      </Link>

      <Link href="/campus-programs">
        <a className={props.Styles.NavLinks}>Campus Programs</a>
      </Link>

      <Link href="/hire-with-us">
        <a className={props.Styles.NavLinks}>Hire With Us</a>
      </Link>

      <Link href="/stories">
        <a className={props.Styles.NavLinks}>Stories</a>
      </Link>

      <Link href="/events">
        <a className={props.Styles.NavLinks}>Events</a>
      </Link>
    </nav>
  );
};

export default NavButtons;
