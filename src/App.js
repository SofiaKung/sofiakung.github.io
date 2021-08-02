import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Geviz from './GevizPage'
import Audit from './AuditPage'
import Home from './Home'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Sofia Kung | Data Analyst | Web Developer </title>
          <meta name="description" content="Sofia Kung's personal website" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Switch>
          <Route exact path="/">
            <Home title="Home" />
          </Route>

          <Route exact path="/geviz">
            <Geviz title="Geviz" />
          </Route>
          <Route exact path="/AuditAnalytics">
            <Audit title="Fraud Procurement Dashboard" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
