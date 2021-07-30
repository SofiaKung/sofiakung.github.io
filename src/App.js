import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Geviz from './GevizPage'
import Audit from './AuditPage'
import Home from './Home'
function App() {
  return (
    <Router>
      <div className="App">
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
