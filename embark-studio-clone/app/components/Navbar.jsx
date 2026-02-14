"use client";

import { usePathname } from "next/navigation";
import { LinkedinIcon } from "./Icons/LinkedinIcon";
import XIcon from "./Icons/XIcon";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

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

export default Navbar;
