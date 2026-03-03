"use client";

import { useState } from "react";
import { links } from "@/constants/links";
import Link from "next/link";

const Hamburger = ({ openMenu, setOpenMenu }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <button
        className={openMenu ? "hamburgerButton open" : "hamburgerButton"}
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
      </button>

      {openMenu && (
        <div className="mobilePanel">
          <ul>
            {links.map((item, index) =>
              item.dropdown ? (
                <li key={index}>
                  <span onClick={() => setOpenDropDown(!openDropDown)}>
                    {item.label}
                  </span>

                  {openDropDown && (
                    <ul>
                      {item.dropdown.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpenMenu(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.href} onClick={() => setOpenMenu(false)}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Hamburger;
