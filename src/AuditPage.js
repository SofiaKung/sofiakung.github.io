import Navbar from './components/Navbar/Navbar'
import './ProjectPage.css'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

import AuditCover from './components/Project/images/AuditAnalytics.png'
import overview from './components/Project/images/overview.JPG'
import scatter from './components/Project/images/scatter.JPG'
import transaction from './components/Project/images/transaction.JPG'

const Audit = () => {
  const GalleryItem = [
    {
      title: 'An Overview of 3-way Match Results',
      description:
        'This chart gives users a quick overview of the 3-way match results. The categories that are alarming are purchases without PO. By clicking on each category of the three-way match results, the entire dashboard is filtered to show transactions belonging to a category of 3-way matching results.',
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
      <Helmet>
        <title>Procurement Fraud Dashboard</title>
        <meta
          name="description"
          content="Detecting Procurement Fraud with Tableau"
        />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <Navbar />
      <div class="project-heading">
        <h1>Procurement Fraud Dashboard</h1>
        <p>Detecting potential procurement fraud with Tableau</p>
        <br />
        <img class="project-cover" src={AuditCover} alt="project pic" />
      </div>
      <div class="project-content">
        <h3 class="bold-text"> Overview of Project:</h3>
        <p>
          This dashboard aims to apply data analytics in procurement audit
          testing. Procurement tends to be a key area for financial audit as
          procurement transactions can impact many different accounts on the
          financial statement. The main fraud risks of procurement transactions
          are:
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
          To address these audit risks, the most common test to select a sample
          of transactions to perform the 3-way matching test. This audit test
          checks whether the quantity and dollar amount on purchase order (PO)
          matches the corresponding invoice (INV) and goods receipt report (GR),
          ensuring the purchase is indeed authorised, billed with the correct
          amount and received by the company.
        </p>
        <br />
        <p>
          With the aid of data analytics, 3-way matching can be performed on
          100% of procurement transactions, as opposed to the traditional
          approach of selecting a certain number of transactions for audit
          testing. This will provide a more complete assurance as all
          transactions that do not fulfill the test can be detected.
        </p>
        <br />
        <p>Tools Used: Excel, SQL and Tableau</p>
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

export default Audit
