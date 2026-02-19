import Link from "next/link";
import HeroSlider from "./HeroSlider";
import { newsCardItems } from "@/constants/newsCard";

const Hero = () => {
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
      </div>
    </section>
  );
};

export default Hero;
