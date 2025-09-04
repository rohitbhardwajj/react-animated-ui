import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const AgentLastPage = () => {
  useGSAP(() => {
    let data = gsap.utils.toArray(".agtlst1");

    data.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        },
      });
    });
  });

  return (
    <div className="agent-last-page">
      <div className="agtlst1">
        <img
          src="https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
          alt=""
        />
      </div>
      <div className="agtlst1">
        <img
          src="https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg"
          alt=""
        />
      </div>
      <div className="agtlst1">
        <img
          src="https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
          alt=""
        />
      </div>
      <div className="agtlst1  lastone">
        <div className="l1">
          <div className="lilft">
            <h1>FB</h1>
            <h1>FB</h1>
            <h1>FB</h1>
            <h1>FB</h1>
          </div>
          <div className="lirht">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="l2"></div>
      </div>
    </div>
  );
};

export default AgentLastPage;
