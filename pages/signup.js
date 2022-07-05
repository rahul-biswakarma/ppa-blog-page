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
        <title>SignUp | Programming Pathshala</title>
      </Head>
      <div className={Styles.Header}>
        <Image src={Logo} alt="logo"></Image>
      </div>
      <div className={Styles.Form}>
        <h2>Sign Up</h2>
        <form>
          <label>Email</label>
          <input type="email" name="email" id="email-input" />
          <Link href="/set-password">
            <a>
              <input
                className={Styles.SetPasswordButton}
                type="submit"
                value="Set Password"
                id="set-password-button"
              />
            </a>
          </Link>
        </form>
        <div className={Styles.OrContainer}>OR</div>
        <button className={Styles.SignInWithGoogleButton}>
          <Image src={GoogleLogo} alt="Google Logo" /> Sign Up with Google
        </button>
        <div className={Styles.AlreadyLoggedIn}>
          Already have an account?
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
