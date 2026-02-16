import Link from "next/link";

const Hero = () => {
  const newsCardItems = [
    {
      image: "/WEB_News_Banne_ARC_TT2.jpg",
      label: "ARC Raiders | Thank you Raiders!",
      description:
        "ARC activity on the surface has receded for now.So you can take it easy for a while,get some rest,stretch your legs,maybe take scrappy for a walk?Just don't wonder too far. The Rust Belt never stays quiet for long",
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
