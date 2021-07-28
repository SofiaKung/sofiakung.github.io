import React from 'react'
import { MenuItems } from './Menuitems'
import './Intro.css'
import profilepic from './profilePic.jpg'

const Intro = () => {
  return (
    <React.Fragment>
      <div className="intro-row" id="intro">
        <div className="intro-content">
          <img className="profile-image" src={profilepic} alt="profile pic" />
        </div>
        <div className="intro-content">
          <h1 className="intro-section"> &#128075; Hi I' m Sofia Kung. </h1>
          <p className="intro-section">I am a data analyst.</p>
          <br></br>
          <p className="intro-section">
            I am now taking a quarter gap-year to self-learn web development,
            working towards being able to build a web app for my own app ideas.
          </p>
        </div>
      </div>
      <div className="timeline-row text-center">
        <svg width="1000" height="130" />
        <line x1="0" y1="70" x2="1800" y2="70"></line>
      </div>
    </React.Fragment>
  )
}

export default Intro
