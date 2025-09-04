import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import React from "react";

const Transistion = ({ setIsTransitioning }) => {
  const location = useLocation();

  useGSAP(() => {
    let tl = gsap.timeline({
      onStart: () => setIsTransitioning(true),
      onComplete: () => setIsTransitioning(false),
    });

    // Show overlay (upar aa jaye)
    tl.set(".transition-div", { display: "flex" });

    // Stairs grow
    tl.fromTo(
      ".stairs",
      { height: 0 },
      {
        height: "100%",
        stagger: { amount: -0.2 },
        ease: "power1.out",
        duration: 0.4,
      }
    );

    // Stairs slide down
    tl.to(".stairs", {
      y: "100%",
      stagger: { amount: 0.3 },
      duration: 0.4,
      ease: "power1.in",
    });

    // Hide overlay after animation
    tl.set(".transition-div", { display: "none" });
    tl.set(".stairs", { y: "0%", height: "0%" }); // reset for next time
  }, [location.pathname]);

  return (
    <div
      className="transition-div fixed top-0 left-0 w-full h-full z-[9999] flex flex-col pointer-events-none"
    >
      <div className="stairs flex-1 bg-black"></div>
      <div className="stairs flex-1 bg-black"></div>
      <div className="stairs flex-1 bg-black"></div>
      <div className="stairs flex-1 bg-black"></div>
      <div className="stairs flex-1 bg-black"></div>
    </div>
  );
};

export default Transistion;
