import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './pages/Intro'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles/main.css'
import './styles/darkMode.css'
import './styles/skillsIcon.css'

function App() {
  useEffect(() => {
    // Initialize AOS globally
    const initAOS = async () => {
      const AOS = await import('aos')
      AOS.init({
        duration: 1000,
        once: true,
      })
    }

    initAOS()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home"  element={<Home />} />
        
        {/* Catch all undefined routes - Show 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App