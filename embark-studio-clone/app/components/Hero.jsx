import Link from "next/link";
import HeroSlider from "./HeroSlider";
import { newsCardItems } from "@/constants/newsCard";

const Hero = () => {
  const linkItems = [
    "Embark HQ",
    "Contact Us",
    "Privacy policy",
    "Security",
    "Cookie Settings",
  ];

  return (
    <section className="hero">
      <div className="heroMain">
        <div className="heroBanner">
          <div className="heroImage">
            <img src="/arcRaiders.jpg" alt="ArcRaidersBanner" />
          </div>

          <div className="heroTitle">
            <Link
              href="https://arcraiders.com/#purchase"
              className="heroButton"
            >
              AVAILABLE NOW
            </Link>
          </div>
        </div>

        <section className="newsSection">
          <div className="container">
            <div className="sectionTitle">
              <h2>Latest News</h2>
            </div>

            <div className="newsSectionCards">
              <HeroSlider items={newsCardItems} />
            </div>
          </div>
        </section>
        <section className="bottomSection">
          <div className="container">
            <div className="linksSection">
              {linkItems.map((item, index) => (
                <a key={index} href="#">
                  <span>{item}</span>
                </a>
              ))}
            </div>
            <div className="privacyPolicy">
              <p>
                © 2026 Embark Studios AB. ARC RAIDERS, THE FINALS and EMBARK
                trademarks and logos are trademarks or registered trademarks of
                Embark Studios AB. All other trademarks and trade names are the
                property of their respective owners.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
