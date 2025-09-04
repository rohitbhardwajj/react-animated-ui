import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Agent from "./pages/Agents";
import Transistion from "./components/animation/Transistion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const changeurl = useLocation();

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".mainn",
  //       { opacity: 0 },
  //       { opacity: 1, duration: 0.5, delay: 2 }
  //     );
  //   },
  //   [changeurl.pathname]
  // );

  return (
    <div>
      {/* Animation div hamesha chalega */}
      <Transistion
        isTransitioning={isTransitioning}
        setIsTransitioning={setIsTransitioning}
      />

      {/* Content hamesha render hoga but GSAP se visible hoga */}
      <div className="mainn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/agents" element={<Agent />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
