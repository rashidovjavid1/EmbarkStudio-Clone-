"use client";

import { usePathname } from "next/navigation";
import { LinkedinIcon } from "./Icons/LinkedinIcon";
import Hamburger from "./Hamburger";
import { links } from "@/constants/links";
import XIcon from "./Icons/XIcon";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <div className="headerLeft">
          <div className="headerLogo">
            <Link href="/">
              <img src="/embark-logo.png" alt="EmbarkLogo" />
            </Link>
          </div>
        </div>

        <div className="headerMain">
          <nav>
            <ul className="nav">
              {links.map((item) => {
                if (item.dropdown) {
                  return (
                    <li key={item.label} className="nav-item">
                      <span className="nav-trigger">
                        {item.label}

                        <ul className="dropdown">
                          {item.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <Link href={sub.href}>{sub.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </span>
                    </li>
                  );
                }

                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <li key={item.label} className="nav-item">
                    <Link href={item.href} className={isActive ? "active" : ""}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="hamburgerMenu">
          <Hamburger />
        </div>
        <div className="headerRight">
          <div className="headerRightMain">
            <Link href="https://x.com/embarkstudios">
              <XIcon />
            </Link>
            <Link href="https://www.linkedin.com/company/12648322/">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
