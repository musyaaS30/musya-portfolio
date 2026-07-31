import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import Preloader from '../components/Preloader'
import CustomCursor from '../components/CustomCursor'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, [location.state?.scrollTo]);
  return (
    <div className="index-page">
      <Preloader />
      <CustomCursor />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        {/* <Resume /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Services /> */}
        <FAQ />
        {/* <Contact /> */}
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default Home