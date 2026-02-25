import { links } from "@/constants/links";
import Link from "next/link";

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={openMenu ? "mobileMenu open" : "mobileMenu"}>
      <ul>
        {links.map((item) => (
          <li key={item.label}>
            <Link href="#" onClick={() => setOpenMenu(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
