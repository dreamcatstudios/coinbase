import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <a href="/" className="logo">
            coinbase
          </a>
          <ul id="desktop-nav">
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              //   onSetActive={handleSetActive}
            >
              {" "}
              <a href="#">Home</a>
            </Link>
            <Link
              activeClass="active"
              to="market"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              //   onSetActive={handleSetActive}
            >
              {" "}
              <a href="#">Market</a>
            </Link>
            <Link
              activeClass="active"
              to="chooseus"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}

              //   onSetActive={handleSetActive}
            >
              <a href="#">Choose Us</a>
            </Link>
            <Link
              activeClass="active"
              to="joinus"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}

              //   onSetActive={handleSetActive}
            >
              <a href="#">Join</a>
            </Link>
          </ul>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-brand-twitter"
            >
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-brand-discord"
            >
              <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
              <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
              <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hamburger-menu"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
            <svg
              onClick={handleMenuClick}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="hamburger-menu"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </span>
        </div>
      </nav>

      <div className={mobileMenu ? "mobile-nav-active" : "mobile-nav-closed"}>
        <svg
          onClick={handleMenuClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="close-mobile"
        >
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
        <ul>
          <Link
            onClick={handleMenuClick}
            to="home"
            smooth={true}
            duration={500}
          >
            <li>
              <a href="#home">Home</a>
            </li>
          </Link>
          <Link
            onClick={handleMenuClick}
            to="market"
            smooth={true}
            duration={500}
          >
            <li>
              <a href="#market">Market</a>
            </li>
          </Link>
          <Link
            onClick={handleMenuClick}
            to="chooseus"
            smooth={true}
            duration={500}
          >
            <li>
              <a href="#choose-us">Choose Us</a>
            </li>
          </Link>
          <Link
            onClick={handleMenuClick}
            to="join-us"
            smooth={true}
            duration={500}
          >
            <li>
              <a href="#join">Join</a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
