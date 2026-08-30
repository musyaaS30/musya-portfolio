import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Resumepage from './pages/Resumepage'
import LiquidBackground from './components/ui/LiquidBackground'
import './styles/main.css'
import './styles/skillsIcon.css'
import './styles/liquidGlass.css'

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
      {/* Ambient Liquid Glass Floating Glow Background */}
      <LiquidBackground />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resumepage />} />
        
        {/* Catch all undefined routes - Show 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App