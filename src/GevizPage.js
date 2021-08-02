import Navbar from './components/Navbar/Navbar'
import './ProjectPage.css'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

import GevizCover from './components/Project/images/Geviz3.png'
import network from './components/Project/images/network.JPG'
import sankey from './components/Project/images/sangkey.JPG'
import treemap from './components/Project/images/treemap.png'
import wordcloud from './components/Project/images/wordcloud.JPG'

const Geviz = () => {
  const GalleryItem = [
    {
      title: 'An Overview of Agency Spending within Each Ministry',
      description:
        "Treemap chart is used here to provide a birds-eye view of each each ministry's spending breakdown by agency and category. The size of the box represents number of procurement contracts of each procurement category while the colour intensity represents the total amount of good and services procured.",
      imageSrc: treemap,
    },
    {
      title: 'Relationships Between Agencies and Suppliers',
      description:
        'To best represent the interlinked relationship beteewen suppliers and agencies under a selected ministry, network diagram was used to shows the common suppliers between agencies. The triangle icon represents agencies while the circle icon represents suppliers.',
      imageSrc: network,
    },
    {
      title: 'Main Suppliers of an Agency by Spending Category',
      description:
        "This sankey diagram was created with R's NetworkD3 library, the chart shows the cash flow between a selected agency and its suppliers for a selected procurement category. The thickness of the path represents the total dollar amount of goods and services procured from a particular supplier.",
      imageSrc: sankey,
    },
    {
      title: 'A Glimpse into Goods and Services Procured',
      description:
        "This word cloud was created with R's Wordcloud2 library, it shows the top goods and services procured by a selected agency and a selected category. The size of the word within the word cloud corresponds to the frequency of the word in the procurement descriptions.",
      imageSrc: wordcloud,
    },
  ]
  return (
    <>
      <Helmet>
        <title>Visualizing Singapore Government Spending</title>
        <meta
          name="description"
          content="Insights into the spending pattern of each Ministry and Agency of
          Singapore Government"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Navbar />
      <div class="project-heading">
        <h1>Visualizing Singapore Government Spending</h1>
        <p>
          Insights into the spending pattern of each Ministry and Agency of
          Singapore Government
        </p>
        <br />
        <img class="project-cover" src={GevizCover} alt="project pic" />
      </div>
      <div class="project-content">
        <h3 class="bold-text"> Overview of Project:</h3>
        <p>
          As part of Singapore's Smart Nation Initiative, the nation's public
          data is made available on open data portals for decision makers to
          monitor and gain insights about Singapore’s social and economic
          trends.
        </p>
        <br />
        <p>
          Due to the lack of a proper tool to visualize these data, the public
          is unable to harness the value of these data. To address this issue,
          we created GeViz, an interactive visual analytics dashboard for the
          public and ministries of Singapore to uncover insights on Singapore
          government's procurement spending, with the aim to identify
          procurement needs of Singapore government, spending patterns, as well
          as, relationships between ministries and suppliers.
        </p>
        <br />
        <p>
          Link to Application:
          <a
            class="url-color"
            href="https://is428-ay1819-geviz.shinyapps.io/Group7_GeViz/"
          >
            Geviz Dashboard
          </a>
        </p>
        <p>
          Tools Used: R (visualization application development), Python (web
          scraping category classification) and Adobe Photoshop
        </p>
        <br />
        <h3 class="bold-text"> Visualization Techniques:</h3>

        <div class="gallery">
          {GalleryItem.map((item, index) => (
            <>
              <div class="gallery-box">
                <img
                  class="project-image"
                  src={item.imageSrc}
                  alt="project pic"
                />
                <h4 class="bold-text">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Geviz
