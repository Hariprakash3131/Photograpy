
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/sections/Portfolio'
import Navbar from './components/layout/Navbar'
import Banner from './components/sections/Banner'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Portfolio />
              <Services />
              <Gallery />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
