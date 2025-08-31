import React from "react";
import Nav from "../components/home/Nav";
import AgentHeroText from "../components/agence/Agent-hero-text";
const Agents = () => {
  return (
    <div className="agents-page">
      <Nav></Nav>
      <div>
        <AgentHeroText></AgentHeroText>
      </div>
      
    </div>
  );
};

export default Agents;
