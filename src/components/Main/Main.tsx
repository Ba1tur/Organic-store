import React from "react";
import Hero from "./Hero/Hero";
import Offer from "./Offer/Offer";
import AboutUs from "./AboutUs/AboutUs";
import OurProduct from "./OurProduct/OurProduct";
import Testimonial from "./Testimonial/Testimonial";
import OrganickOffer from "./OrganickOffer/OrganickOffer";
import Subscribe from "../Subscribe/Subscribe";

const Main = () => {
  return (
    <>
      <Hero />
      <Offer />
      <AboutUs />
      <OurProduct/>
      <Testimonial/>
      <OrganickOffer/>
      <Subscribe/>
    </>
  );
};

export default Main;
