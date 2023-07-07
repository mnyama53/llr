import { useState } from "react";
import Navigation from "./Navigation";
import NavLogo from "../assets/nav-logo.png";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <img src={NavLogo} alt="Little Lemon logo" className="nav-image" />

      <button className="burger-icon" onClick={handleToggle}>
        <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
      </button>

      <Navigation device="desktop" />
      {navbarOpen && <Navigation device="mobile" />}
    </nav>
  );
}