import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import ParallaxSkillSection from './components/ParallaxSkillSection.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'
import BlogSection from './components/BlogSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'
import useReducedMotion from './hooks/useReducedMotion.js'
import {
  blogPosts,
  clientLogos,
  contactDetails,
  navItems,
  parallaxHighlights,
  projects,
  pricingPlans,
  socialLinks,
  services,
  skills,
  stats,
  testimonials,
} from './data/portfolioData.js'

function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])
  const [activeId, setActiveId] = useState('home')
  const reducedMotion = useReducedMotion()
  const [loadingDone, setLoadingDone] = useState(false)
  const loading = !loadingDone && !reducedMotion
  const hideLoader = loadingDone || reducedMotion

  useEffect(() => {
    if (reducedMotion) return

    const start = Date.now()
    const minDuration = 900

    const completeLoad = () => {
      const elapsed = Date.now() - start
      const wait = Math.max(0, minDuration - elapsed)

      window.setTimeout(() => {
        setLoadingDone(true)
      }, wait)
    }

    if (document.readyState === 'complete') {
      completeLoad()
    } else {
      window.addEventListener('load', completeLoad, { once: true })
      return () => window.removeEventListener('load', completeLoad)
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + 160
      let current = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return
        if (marker >= section.offsetTop) current = id
      })

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return (
    <div className="min-h-screen bg-white text-[#111135]">
      {loading && <Preloader hide={hideLoader} />}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,#ffffff,#fbfbfb_55%,#ffffff)]" />

      <Header navItems={navItems} activeId={activeId} />

      <main>
        <HeroSection startAnimations={!loading} />
        <AboutSection stats={stats} skills={skills} />
        <ServicesSection services={services} />
        <ParallaxSkillSection skills={skills} highlights={parallaxHighlights} />
        <PortfolioSection projects={projects} />
        <PricingSection pricingPlans={pricingPlans} />
        <BlogSection blogPosts={blogPosts} />
        <TestimonialsSection testimonials={testimonials} clientLogos={clientLogos} />
        <ContactSection contactDetails={contactDetails} />
      </main>
      <Footer socialLinks={socialLinks} />
      <ScrollToTopButton />
    </div>
  )
}

export default App
