import Navbar from './components/Navbar/Navbar'
import './ProjectPage.css'
import Footer from './components/Footer'

import AuditCover from './components/Project/images/AuditAnalytics.png'
import overview from './components/Project/images/overview.JPG'
import scatter from './components/Project/images/scatter.JPG'
import transaction from './components/Project/images/transaction.JPG'

const Audit = () => {
  const GalleryItem = [
    {
      title: 'An Overview of 3-way Match Results',
      description:
        'This chart gives users a quick overview of the 3-way match results. By clicking on each category of the three-way match results, the entire dashboard is filtered to show transactions belonging to that category.',
      imageSrc: overview,
    },
    {
      title:
        'Identify Transactions with Huge Difference in Goods Receipt and Invoice Amount',
      description:
        'The scatter plot shows the procurement items with a huge difference in goods received amount and invoice amount recorded in the local currency as a large circle. A huge difference in amount may suggests that the company is overpaying its suppliers or the payment record is incomplete.',
      imageSrc: scatter,
    },
    {
      title: 'Transaction Details',
      description:
        'The transaction detail table shows the procurement details according to the filters applied. By selecting multiple circles on the scatter plot, the table below will reflect the corresponding transaction details. This allows users to compile transactions that requires further investigation in a tabular format. ',
      imageSrc: transaction,
    },
  ]
  return (
    <>
      <Navbar />
      <div class="project-heading">
        <h1>Visualizing Singapore Government Spending</h1>
        <p>
          Insights into the spending pattern of each Ministry and Agency of
          Singapore Government
        </p>
        <br />
        <img class="project-cover" src={AuditCover} alt="project pic" />
      </div>
      <div class="project-content">
        <h3 class="bold-text"> Overview of Project:</h3>
        <p>
          This dashboard is created for the module - ACCT 423 Audit Analytics.
          The dashboard aims to apply data analytics in procurement audit
          testing. Procurement is a key area for audit as procurement
          transactions can impact many different financial accounts. The main
          audit risks of procurement transactions are:
        </p>
        <br />
        <ul>
          <li>Unauthorized purchases</li>
          <li>
            Inaccurate recording of quantity/amount of goods purchased, received
            and paid
          </li>
        </ul>
        <br />

        <p>
          To address these audit risks, the most common audit test is a 3-way
          match test on a selected sample of transactions. With the aid of data
          analytics, 3-way matching can be performed on 100% of procurement
          transactions, as opposed to the traditional approach of selecting a
          certain number of transactions for audit testing. This will provide a
          more complete assurance as all transactions that do not fulfill the
          test can be detected.
        </p>
        <br />
        <p>Tools Used: Excel, SQL and Tableau</p>
        <br />

        <h3 class="bold-text"> Visualization Techniques:</h3>
      </div>
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
      <Footer />
    </>
  )
}

export default Audit
