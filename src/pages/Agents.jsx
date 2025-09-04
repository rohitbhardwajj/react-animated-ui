import React from "react";
import Nav from "../components/home/Nav";
import AgentHeroText from "../components/agence/Agent-hero-text";
import AgentLastPage from "../components/agence/Agent-last-page";
const Agents = () => {
  return (
    <div className="agents-page">
      <Nav></Nav>
      <div>
        <AgentHeroText></AgentHeroText>
      </div>
        <div>
          <AgentLastPage></AgentLastPage>
        </div>
    </div>
  );
};

export default Agents;
