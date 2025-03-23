import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Discover & Showcase Skills",
    text: "Students can create and interactive portfolio with skills,projects,hackathons, and experience.",
  },
  {
    title: "Find & Apply for Gigs",
    text: "Explore short-term work opportunities posted by startups and clients.",
  },
  {
    title: "Clients Can Post Gigs",
    text: "Startups can post gigs with requirements, deadlines, and payment details",
  },
  {
    title: "Easy Authentication & Dashboard",
    text: "Sign up as a Student or Client and access personalized dashboards. ",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
