"use client";

import { useState } from "react";
import Link from "next/link";
import { links } from "@/constants/links";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="hamburgerMenu">
      <div className="container">
        <div className="hamburgerToggle">
          <button
            className={`hamburgerButton ${openMenu ? "active" : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          ></button>
        </div>

        <div className={`hamburger ${openMenu ? "show" : ""}`}>
          <button
            className="closeIcon"
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            X
          </button>
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <Link href="/">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="logo">
          <Link href="/">
            <img src="/embark-logo.png" alt="embarkLogo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HamburgerMenu;
