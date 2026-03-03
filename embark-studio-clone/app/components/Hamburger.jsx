"use client";

import { useState } from "react";
import { links } from "@/constants/links";
import Link from "next/link";

const Hamburger = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpenMenu(!openMenu)}>
        <span></span>
        <span></span>
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
                          <Link href={sub.href}>{sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
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
