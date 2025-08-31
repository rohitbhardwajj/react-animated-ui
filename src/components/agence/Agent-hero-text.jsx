import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AgentPage2 from "./Agent-page2";

const AgentHeroText = () => {
  const section3ref = useRef(null);
  const imageRefsection3 = useRef(null);
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

  let content =[
    "Expertise",
    "Strategy Advertising Branding Design Content",
    " ",
    "Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity",
    "Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves",
    "Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud"
  ]
  const imageDiv = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
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

useGSAP(() => {
  gsap.to(section3ref.current, {
    scrollTrigger: {
      trigger: section3ref.current,
      start: "top 5%",
      end: "top -160%",

      onEnter: () => {
        gsap.to(section3ref.current, { 
          backgroundColor: "black", 
          duration: 0.5  // 1 second smooth animation
        });
      },

      onLeaveBack: () => {
        gsap.to(section3ref.current, { 
          backgroundColor: "white", 
          duration: 0.5   // smooth revert
        });
      }
    }
  });
});

useGSAP(() => {
  let images = gsap.utils.toArray(".section3 img");

  images.forEach((img, i) => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,   // next image directly uspe chipak jaaye
        markers: true
      }
    });
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
        <div className="section2">
          {content.map((item ,idx)=>{
            return <AgentPage2 key={idx} content={item}></AgentPage2>
          })}
        </div>
        <div ref={section3ref} className="section3">
          {imageUrls.map((elem ,idx)=>{
            return  <img key={idx} ref={imageRefsection3} src={elem} alt="" />
          })}
           
           
        </div>
    </div>
  );
};

export default AgentHeroText;
