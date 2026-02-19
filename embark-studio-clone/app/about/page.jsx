import React from "react";
import { projectImages } from "@/constants/projectImages";

const page = () => {
  return (
    <div className="aboutPageMain">
      <div className="container">
        <div className="pageTitleDescription">
          <div className="pageTitle">
            <h1>The future belongs to the</h1>
            <span>curious</span>
          </div>
          <div className="description">
            <p>
              From the arcade era to now, games have been a driving force of
              culture — shaping trends, pushing technology, and redefining
              entertainment. But as our industry has grown, creativity has
              shrunk, and today our industry is divided. On one side, indie
              developers take risks and push the limits, while large AAA-giants
              play it safe. Sequels, remakes, and franchises dominate, while
              fresh ideas struggle for space.
            </p>
            <p>
              The result: less surprise, less discovery, less wonder. Embark
              Studios was founded to do something about this. We try to pair the
              innovation-mindset of an underdog with AAA ambition. Every
              breakthrough that happens here is driven by asking ourselves ‘what
              if.’ We believe that progress starts with curiosity, and this
              fuels everything we do — from the people we hire, the culture we
              nurture, and the products we build.{" "}
            </p>
          </div>
        </div>
        <div className="projects">
          {projectImages.map((item, index) => (
            <div key={index} className="projectImage">
              <img src={item} alt="#" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
