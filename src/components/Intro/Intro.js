import React from 'react'
import './Intro.css'
import profilepic from './profilePic.jpg'
import Timeline from './Timeline'
const Intro = () => {
  return (
    <div className="intro-row" id="intro">
      <div className="intro-content  intro-p1">
        <img className="profile-image" src={profilepic} alt="profile pic" />
      </div>
      <div className="intro-content intro-p2">
        <h1 className="intro-section"> &#128075; Hi I' m Sofia Kung. </h1>
        <p className="intro-section">I am a data analyst based in Singapore.</p>
        <br></br>
        <p className="intro-section">
          I am now taking a quarter gap-year to self-learn web development,
          working towards being able to build a web app for my own app ideas.
        </p>
      </div>
      <Timeline />
    </div>
  )
}

export default Intro
