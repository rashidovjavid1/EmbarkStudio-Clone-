"use client";

import { useState } from "react";
import Link from "next/link";
import { links } from "@/constants/links";
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="hamburgerMenu">
      <div className="container">
        <div className="hamburgerMenuButton">
          {links.map((item, index) => (
            <ul key={index}>
              <li>
                <Link href="/">{item.label}</Link>
              </li>
            </ul>
          ))}
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
