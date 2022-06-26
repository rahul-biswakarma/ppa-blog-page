import React from "react";
import Footer from "../components/Footer";
import LatestArticle from "../components/LatestArticles";
import NavBar from "../components/NavBar";
import Styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <LatestArticle />
      <Footer />
    </>
  );
};

export default Home;
