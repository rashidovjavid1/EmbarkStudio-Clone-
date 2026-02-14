"use client";

import { useState } from "react";
import { LinkedinIcon } from "./Icons/LinkedinIcon";
import XIcon from "./Icons/XIcon";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (label) => {
    if (openMenu === label) {
      setOpenMenu(null);
    } else {
      setOpenMenu(label);
    }
  };

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "GAMES",
      dropdown: [
        { label: "THE FINALS", href: "/games/the-finals" },
        { label: "Arc Raiders", href: "/games/arc-raiders" },
        { label: "Embark ID Portal", href: "/embark-id-portal" },
      ],
    },
    { label: "BLOG", href: "/blog" },
    { label: "CAREERS", href: "/careers" },
  ];

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
            <ul className="nav">
              {links.map((item) => {
                if (item.dropdown) {
                  return (
                    <li key={item.label} className="nav-item">
                      <button
                        className="nav-trigger"
                        onClick={() => handleToggle(item.label)}
                      >
                        {item.label}
                      </button>

                      {openMenu === item.label && (
                        <ul className="dropdown">
                          {item.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <a href={sub.href}>{sub.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.label} className="nav-item">
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
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
