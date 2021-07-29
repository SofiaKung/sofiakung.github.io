import './App.css'
import Navbar from './components/Navbar/Navbar.js'
import Intro from './components/Intro/Intro.js'
import Project from './components/Project/Project.js'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Project />
      <Footer />
    </div>
  )
}

export default App
