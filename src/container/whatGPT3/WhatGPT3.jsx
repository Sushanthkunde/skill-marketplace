import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is FutureFolio"
        text="It is a skill marketplace platform where tudents showcase their skills , work experience, education , projects , hackatons, and social media handles and can start building their future"
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Website</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="SkillHub 360"
        text="A live skill-trading system where students can instantly swap services through a structured credit system."
      />
      <Feature
        title="Portfolio"
        text="Each student gets a dynamic portfolio page showcasing their skills, completed projects, testimonials, and work samples."
      />
      <Feature
        title="Integrated Learning"
        text="Instead of just offering skills, the platform features mini-courses & certification challenges that students complete to unlock job opportunities."
      />
    </div>
  </div>
);

export default WhatGPT3;
