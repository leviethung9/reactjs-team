import React from "react";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import { GlobalStyle } from "../styles/GlobalStyle.js";
import "../../assets/style.css"

const MainLayout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div style={{ marginTop: "80px" }}>{children}</div>
      <Footer></Footer>
    </div>
  );
};
export default MainLayout;
