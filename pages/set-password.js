import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.svg";
import Styles from "/styles/Login.module.css";
import GoogleLogo from "/public/google-logo.svg";

const Login = () => {
  return (
    <div className={Styles.LoginPage}>
      <Head>
        <title>Set Password | Programming Pathshala</title>
      </Head>
      <div className={Styles.Header}>
        <Image src={Logo} alt="logo"></Image>
      </div>
      <div className={Styles.Form}>
        <h2>Set Password</h2>
        <form>
          <label>Set Password</label>
          <input type="password" name="password" id="set-password-input" />
          <div className={Styles.ExtraHeightDiv}></div>
          <label>Confirm Password</label>
          <input type="password" name="password" id="comfirm-password-input" />
          <input
            className={Styles.SetPasswordButton}
            type="submit"
            value="Sign Up"
            id="signup-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
