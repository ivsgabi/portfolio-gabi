"use client";
import { useState } from "react";
import NavbarDesktop from "./desktop/NavBarDesktop";
import NavbarMobile from "./mobile/NavBarMobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavbarMobile isOpen={isOpen} toggle={toggle} />
      <NavbarDesktop/>
    </>
  );
};

export default Navigation;