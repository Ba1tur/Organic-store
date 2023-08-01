import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { fetchProducts } from "@/redux/ProductList";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(14));
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
