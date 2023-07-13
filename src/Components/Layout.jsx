import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Podaci o korisniku:</h1>
      <div style={{ border: "1px solid green", color: "blue" }}>{children}</div>
    </>
  );
};

export default Layout;
