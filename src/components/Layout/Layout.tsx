import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";

type LayoutProps = {
	children : React.ReactNode
}

const Layout  = ({children} : LayoutProps) => {
  return (
    <>
      <Header />
			{children}
      <Footer />
    </>
  );
};

export default Layout;
