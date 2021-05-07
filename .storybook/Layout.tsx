import React from "react";
import "../src/scss/tailwind.scss";
import "../public/fonts/style.css";

const Layout = ({ children }) => {
  return <div className="px-10 py-10">{children}</div>;
};

export default Layout;
