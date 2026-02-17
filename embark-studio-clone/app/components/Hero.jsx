import Link from "next/link";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const newsCardItems = [
    {
      image: "/WEB_News_Banne_ARC_TT2.jpg",
      label: "ARC Raiders | Thank you Raiders!",
      description:
        "ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
      tag: "enlist.resist",
    },
    {
      image: "/WEB_News_Banner_Deluxe.jpg",
      label: "ARC RAIDERS | Pre-Order Now!",
      description:
        "The Rust Belt awaits! Pre-Orders are available for Arc Raiders now! ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
      tag: "ARC Raiders will launch on October 30 ",
    },
    {
      image: "/WEB_News_Banner_s3_emerald.jpg",
      label: "THE FINALS | World Tour Emerald",
      description:
        "Win tournaments and unlock every Emerald reward in Season 3! ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
      tag: "",
    },
    {
      image: "/WEB_News_Banner_1.6.0.jpg",
      label: "THE FINALS | Steal The Spotlight Event",
      description:
        "In this limited Mid-season Event the lights are out. ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
      tag: "",
    },

    {
      image: "/makingTHEFINALS.jpg",
      label: "Creating a Dynamism Shooter | THE FINALS",
      description:
        "When we started making THE FINALS, we wanted to bring together all the things we always loved in games: Dynamism! In thi episode of MAKING THE FINALS, our Creative Director, Gustav Tilleby Silow, explains Dynamism and walks us through the journey of making the world's first Dynamism Shooter. ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long ",
    },

    {
      image: "/WEB_News_Banner_s8.jpg",
      label: "THE FINALS | GAME TIME",
      description:
        "Season 8 is here!This is the main event,Contestants with all eyes on the grandest of stages, if there ever was a moment to play your best, this is it.The game is on.The greatest gameshow on Earth is back for another season!This is THE FINALS",
    },
  ];
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
