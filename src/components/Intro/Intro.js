import React from "react";
import "./Intro.css";
import profilepic from "./profilePic.jpg";
import Timeline from "./Timeline";
const Intro = () => {
  return (
    <div className="intro-row">
      <div className="intro-content  intro-p1">
        <img className="profile-image" src={profilepic} alt="profile pic" />
      </div>
      <div className="intro-content intro-p2">
        <h1 className="intro-section"> &#128075; Hi I' m Sofia Kung. </h1>
        <p className="intro-section">
          I fight abuse and fraud with data analytics
        </p>
        <br></br>
        <p className="intro-section">
          I worked as data analyst for 3 years in consulting, product analytics
          and now risk/fraud analytics in Gojek. During my free time I work on
          UI/UX design, graphic design and web development
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default Intro;
