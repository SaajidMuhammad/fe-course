import Navbar from "@/components/Common/Navbar";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
