import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { fetchProducts } from "@/redux/ProductList";
import Subscribe from "../Subscribe/Subscribe";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(16));
  }, []);

  return (
    <>
      <Header />
      {children}
      <Subscribe/>
      <Footer />
    </>
  );
};

export default Layout;
