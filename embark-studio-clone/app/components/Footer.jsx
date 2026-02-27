import React from "react";
import { linkItems } from "@/constants/linkItems";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="linksSection">
          {linkItems.map((item, index) => (
            <div key={index} className="linkItem">
              <a href="#">
                <span>{item}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="privacyPolicy">
        <p>
          © 2026 Embark Studios AB. ARC RAIDERS, THE FINALS and EMBARK
          trademarks and logos are trademarks or registered trademarks of Embark
          Studios AB. All other trademarks and trade names are the property of
          their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
