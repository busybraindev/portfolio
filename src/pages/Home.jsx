import React from "react";
import Tm from "../components/Tm";
import Sb from "../components/Sb";
import Nav from "../components/Nav";
import Hero from "../components/Hero.jsx";
import Ab from "../components/Ab";
import Sk from "../components/Sk";
import Pj from "../components/Pj";
import Ct from "../components/Ct";
import Ft from "../components/Ft";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Tm></Tm>
      <Sb></Sb>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <Ab></Ab>
        <Sk></Sk>
        <Pj></Pj>
        <Ct></Ct>
      </main>
      <Ft></Ft>
    </div>
  );
};

export default Home;
