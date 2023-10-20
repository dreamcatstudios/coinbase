import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import Table from "../components/Table";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Table />
      <ChooseUs />
      <JoinUs />
      <Footer />
    </>
  );
};

export default Homepage;
