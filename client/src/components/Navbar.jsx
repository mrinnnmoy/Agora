import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <h1>Agora</h1>
        </div>

        {/* Nav Links */}
        <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#Home" className="active">Home</a>
          <a href="#About">About Us</a>
          <a href="#Features">Features</a>
          <a href="#NFTs">NFTs</a>
          <a href="#Blog">Blog</a>
          <a href="#Contact">Contact</a>

          {/* Show ConnectButton inside menu on mobile */}
          <div className="mobile-wallet-button">
            {isMenuOpen && <ConnectButton />}
          </div>
        </nav>

        {/* Desktop Connect Button */}
        <div className="wallet-button desktop-only">
          <ConnectButton />
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;