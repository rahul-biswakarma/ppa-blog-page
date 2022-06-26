import React from "react";
import Link from "next/link";

const FooterLeft = (props) => {
  return (
    <div className={props.Styles.FooterLeft}>
      <h2>
        Want To know more <br />
        about our courses?
      </h2>
      <h3>
        Let’s here all about it. <a href="/contact-us">Contact Us</a>
      </h3>

      <div className={props.Styles.FooterLeftLinks}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/renaissance">
            <a>Renaissance</a>
          </Link>
          <Link href="/course-curriculum">
            <a>Course Curriculum</a>
          </Link>
        </nav>

        <nav>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
          <Link href="/stories">
            <a>Stories</a>
          </Link>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </nav>

        <nav>
          <Link href="/teach-with-us">
            <a>Teach with Us</a>
          </Link>
          <Link href="/get-scholarship">
            <a>Get Scholarship</a>
          </Link>
          <Link href="/terms-conditions">
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/refund-policy">
            <a>Refund Policy</a>
          </Link>
          <Link href="/careers">
            <a>Careers</a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default FooterLeft;
