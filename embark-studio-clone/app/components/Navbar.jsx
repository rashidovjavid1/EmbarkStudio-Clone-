import React from "react";
import { LinkedinIcon } from "./Icons/LinkedinIcon";
import XIcon from "./Icons/XIcon";

const Navbar = () => {
  const links = ["HOME", "ABOUT", "GAMES", "BLOG", "CAREERS"];

  return (
    <header className="navbar">
      <div className="container">
        <div className="headerLeft">
          <div className="headerLogo">
            <img src="/embark-logo.png" alt="EmbarkLogo" />
          </div>
        </div>

        <div className="headerMain">
          <nav>
            <ul>
              {links.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="headerRight">
          <div className="headerRightMain">
            <a href="https://x.com/embarkstudios">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com/company/12648322/">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
