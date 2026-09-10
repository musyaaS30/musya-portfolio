import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Resumepage from './pages/Resumepage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import LiquidBackground from './components/ui/LiquidBackground'
import './styles/main.css'
import './styles/skillsIcon.css'
import './styles/liquidGlass.css'

// Reset window scroll to top synchronously before browser paint on navigation
function ScrollToTopOnNavigate() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.state?.scrollTo && !location.hash) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, location.state?.scrollTo]);

  return null;
}

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
      <ScrollToTopOnNavigate />

      {/* Ambient Liquid Glass Floating Glow Background */}
      <LiquidBackground />

      {/* Global Header pinned across all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resumepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Catch all undefined routes - Show 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App