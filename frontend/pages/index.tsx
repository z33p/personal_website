import React from "react";
import Layout from "./_layout";
import AboutMe from "./_aboutMe";
import Banner from "./_banner";
import Portfolio from "./_portfolio";

export default function index() {
  const navHeight = 3.5 + "rem";

  return (
    <Layout navHeight={navHeight}>
      <Banner style={{ height: `calc(100vh - ${navHeight})` }} />
      <AboutMe />
      <Portfolio />
    </Layout>
  );
}
