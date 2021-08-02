import React from 'react'
import './Project.css'
import AuditAnalytics from './images/AuditAnalytics.png'
import Geviz3 from './images/Geviz3.png'
import FraudML from './images/FraudML.png'
import { Link } from 'react-router-dom'

const Project = () => {
  const ProjectItems = [
    {
      projectName: 'Visualize Singapore Government Spending',
      imageSrc: Geviz3,
      url: '/Geviz',
    },

    {
      projectName: 'Procurement Fraud Tableau Dashbord',
      imageSrc: AuditAnalytics,
      url: '/AuditAnalytics',
    },
  ]

  return (
    <div className="project-row" id={'project-section'}>
      <div>
        <h1 className="white-text">My Projects</h1>
        <p className="white-text">A glimpse of the my past projects</p>
      </div>
      <div className="image-row">
        {ProjectItems.map((item, index) => (
          <>
            <div className="project-item">
              <Link className="img-container" to={item.url}>
                <img
                  className="home-project-image"
                  src={item.imageSrc}
                  alt="project pic"
                />
                <h3 className="hover-text middle">{item.projectName}</h3>
              </Link>
            </div>
          </>
        ))}
        <div className="project-item">
          <a
            href="https://towardsdatascience.com/detecting-firms-with-intentional-misstatements-using-machine-learning-a943191f88cf"
            class=" img-container"
          >
            <img class="home-project-image" src={FraudML} alt="project pic" />
            <h3 class="hover-text middle">
              Detecting Financial Statement Fraud with ML
            </h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
