import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AgentHeroText = () => {
  let imageUrls = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
   
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
     "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
     "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
      "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  ];
  const imageDiv = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        markers: true,
        start: "top 15%", 
        end: "top -160%", 
        pin:true,

        onUpdate: (elem) => {
            if(Math.floor(elem.progress * imageUrls.length)<14){
                imageDiv.current.children[0].src =
            imageUrls[Math.floor(elem.progress * imageUrls.length)];
            }else{
                imageDiv.current.children[0].src =
            imageUrls[13];
            }
          
            console.log(Math.floor(elem.progress * imageUrls.length));
        },
      },
    });
  });
  return (
    <div>
      <div  className="section1">
        <div ref={imageDiv} className="agent-fix-img-page">
          <img
            src="
https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="agent-hero-text">
          <div>SEVEN7Y</div>
          <div>TWO</div>
        </div>
        <div className="agent-hero-para">
          <p>
            {" "}
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded,
            and we make sure creativity crowds out ego from every corner. A
            brand is a living thing, with values, a personality and a story. If
            we ignore that, we can achieve short-term success, but not influence
            that goes the distance. We bring that perspective to every brand
            story we help tell.
          </p>
        </div>
      </div>
      <div className="section2"></div>
    </div>
  );
};

export default AgentHeroText;
