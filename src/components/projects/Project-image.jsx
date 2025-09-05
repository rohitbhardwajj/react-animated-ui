import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectImage = () => {
  useGSAP(() => {
    let data = gsap.utils.toArray(".kk");

    data.forEach((el) => {
      gsap.fromTo(el,
        { height: "80px"
         }, 
        {
          height: "400px",
          scrollTrigger: {
            trigger: el,    
            start: "top 60%", // jab element viewport me aaye
            end: "+=100%",   // kab tak chale
            scrub: true,      // scroll ke sath smooth animation
          },
        }
      );
    });
  });

  return (
    <div className="project-image space-y-10">
        <div className="kk">
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" />
             </div>
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg" alt="" />
             </div>
        </div>
        <div className="kk">
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg" alt="" />
             </div>
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg" alt="" />
             </div>
        </div>
        <div className="kk">
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg" alt="" />
             </div>
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg" alt="" />
             </div>
        </div>
        <div className="kk">
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg" alt="" />
             </div>
             <div className="img1 bg-red-400 w-40">
                <img src="https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg" alt="" />
             </div>
        </div>
     
         <div className="agtlst1 ml  lastone">
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

export default ProjectImage;
