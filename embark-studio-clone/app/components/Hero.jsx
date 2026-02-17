import Link from "next/link";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const newsCardItems = [
    {
      image: "/WEB_News_Banne_ARC_TT2.jpg",
      label: "ARC Raiders | Thank you Raiders!",
      description:
        "ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
      tag: "enlist.resist",
    },
    {
      image: "/WEB_News_Banner_Deluxe.jpg",
      label: "ARC RAIDERS | Pre-Order Now!",
      description:
        "The Rust Belt awaits! Pre-Orders are available for Arc Raiders now!",
      tag: "ARC Raiders will launch on October 30",
    },
    {
      image: "/WEB_News_Banner_s3_emerald.jpg",
      label: "THE FINALS | World Tour Emerald",
      description:
        "Win tournaments and unlock every Emerald reward in Season 3!",
      tag: "",
    },
    {
      image: "/WEB_News_Banner_1.6.0.jpg",
      label: "THE FINALS | Steal The Spotlight Event",
      description: "In this limited Mid-season Event the lights are out.",
      tag: "",
    },

    {
      image: "/makingTHEFINALS.jpg",
      label: "Creating a Dynamism Shooter | THE FINALS",
      description:
        "When we started making THE FINALS, we wanted to bring together all the things we always loved in games: Dynamism! In thi episode of MAKING THE FINALS, our Creative Director, Gustav Tilleby Silow, explains Dynamism and walks us through the journey of making the world's first Dynamism Shooter.",
    },
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
      </div>
    </section>
  );
};

export default Hero;
