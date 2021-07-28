import React from 'react'
import './Project.css'

const Project = () => {
  const ProjectItems = [
    {
      projectName: 'Visualize Singapore Government Spending',
      imageSrc: 'Geviz3.png',
      url: 'Geviz.html',
    },
    {
      projectName: 'Detecting Financial Statement Fraud with ML',
      imageSrc: 'FraudML.png',
      url:
        'https://towardsdatascience.com/detecting-firms-with-intentional-misstatements-using-machine-learning-a943191f88cf',
    },
    {
      projectName: 'Procurement Fraud Tableau Dashbord',
      imageSrc: 'AuditAnalytics.png',
      url: 'AuditAnalytics.html',
    },
  ]
  return (
    <div className="project-row" id="project-section">
      <div className="project-intro">
        <h1 className="white-text">My Projects</h1>
        <p className="white-text">A glimpse of the my past projects</p>
      </div>
      {ProjectItems.map((item, index) => {
        return (
          <>
            <a className="img-container" href={item.url}>
              <img
                className="home-project-image"
                src={require(`./${item.imageSrc}`)}
                alt="project pic"
              />
              <h3 className="text middle">{item.projectName}</h3>
            </a>
          </>
        )
      })}
    </div>
  )
}

export default Project
