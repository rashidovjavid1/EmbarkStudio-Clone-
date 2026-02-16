import Link from "next/link";

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
        "The Rust Belt awaits! Pre-Orders are available for Arc Raiders now! Get the Deluxe Edition to earn the exclusive Astro Bundle. Haven't played yet? Don't miss our Server Slam open test happening Oct 17-19! It's free to join,so invite your friends and get ready to head Topside,Raiders!",
      tag: "ARC Raiders will launch on October 30",
    },

    {
      image: "/WEB_News_Banner_s3_emerald.jpg",
      label: "THE FINALS | World Tour Emerald",
      description:
        "It ain't easy being green.. but it worth a try!Win tournaments and unlock every Emerald reward in Season 3! Play THE FINALS World Tour now!",
      tag: "",
    },

    {
      image: "/WEB_News_Banner_1.6.0.jpg",
      label: "THE FINALS | Steal The Spotlight Event",
      description:
        "In this limited Mid-season. Event:the lights are out and cashout stations are guarded by turrets and tripwires in the special Solo Bank it mode!",
      tag: "",
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
              {newsCardItems.map((item, index) => (
                <div key={index} className="newsSectionCard">
                  <div className="newsSectionCardImage">
                    <img src={item.image} alt={item.label} />
                  </div>
                  <div className="newsSectionBottom">
                    <a href="#">
                      <h3> {item.label}</h3>
                    </a>
                    <a href="#">
                      <p>{item.description}</p>
                      <div className="tag">
                        <span>{item.tag}</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
