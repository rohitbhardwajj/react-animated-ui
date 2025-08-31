import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import React from "react";

const Transistion = (props) => {
  const location = useLocation();
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to(".transition-div", {
      display: "flex",
    });
    props.setIsTransitioning(true);
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
      ease: "power1.out",
    });
    props.setIsTransitioning(false)

    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: 0.3,
      },
      duration: 0.3,
      ease: "power1.in",
    });
    tl.to(".transition-div", {
      display: "none",
      
    });

    tl.to(".stairs", {
      y: "0%",
    });
  }, [location.pathname]); // yaha dependency pass karo

  return (
    <div className="transition-div">
      <div className="stairs" style={{ backgroundColor: "black" }}></div>
      <div className="stairs" style={{ backgroundColor: "black" }}></div>
      <div className="stairs" style={{ backgroundColor: "black" }}></div>
      <div className="stairs" style={{ backgroundColor: "black" }}></div>
      <div className="stairs" style={{ backgroundColor: "black" }}></div>
    </div>
  );
};

export default Transistion;
