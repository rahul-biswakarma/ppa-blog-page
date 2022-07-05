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
        <title>Login | Programming Pathshala</title>
      </Head>
      <div className={Styles.Header}>
        <Image src={Logo} alt="logo"></Image>
      </div>
      <div className={Styles.Form}>
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" name="email" id="email-input" />
          <div className={Styles.ExtraHeightDiv}></div>
          <label>Password</label>
          <input type="password" name="password" id="password-input" />
          <input
            className={Styles.SetPasswordButton}
            type="submit"
            value="Login"
            id="login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
