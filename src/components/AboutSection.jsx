import { useEffect, useRef, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'
import { getAssetUrl } from '../utils/assets.js'

function AboutSection({ stats, skills }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!reducedMotion) return
    setInView(true)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.35 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (!reducedMotion) return
    setCounts(stats.map((item) => item.value))
  }, [reducedMotion, stats])

  useEffect(() => {
    if (reducedMotion) return
    if (!inView) return

    const duration = 1200
    const frameRate = 30
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      setCounts(stats.map((item) => Math.round(item.value * progress)))

      if (frame >= totalFrames) {
        clearInterval(timer)
        setCounts(stats.map((item) => item.value))
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [inView, reducedMotion, stats])

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 transition-all duration-700 sm:px-6 md:grid-cols-2 md:items-center ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="relative mx-auto max-w-md">
        <img src={getAssetUrl('assets/images/about-me.png')} alt="About" className={`w-full rounded-2xl border border-white/10 bg-white p-3 ${inView ? 'animate-zoom-soft' : ''}`} />
        <div className={`absolute -bottom-6 -right-6 rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg ${inView ? 'animate-rise float-slow' : ''}`} style={{ animationDelay: '0.25s' }}>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Based in</p>
          <p className="mt-1 text-lg font-semibold text-[#111135]">New York, USA</p>
        </div>
      </div>

      <div>
        <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${inView ? 'animate-rise' : ''}`}>about Us</p>
        <h2 className={`mt-4 text-3xl font-semibold leading-tight text-[#111135] sm:text-4xl ${inView ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
          Hi there, I am <span className="text-[#ff508e]">Herry Jason</span>
        </h2>
        <p className={`mt-5 text-zinc-600 ${inView ? 'animate-rise' : ''}`} style={{ animationDelay: '0.2s' }}>
          Eeniam possimus magni quia posuere praesentium laboriosam laudantium laborum quam
          dignissim nihil fugiat cursus, elementum deleniti molestiae assumenda.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {stats.map((item, idx) => (
            <div key={item.label} className={`rounded-xl border border-zinc-200 bg-[#f8f8f8] p-4 text-center transition hover:-translate-y-0.5 ${inView ? 'animate-rise' : ''}`} style={{ animationDelay: `${0.25 + idx * 0.08}s` }}>
              <p className="text-2xl font-semibold text-[#111135]">
                {counts[idx]}
                {item.suffix}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {skills.map((skill, idx) => (
            <div key={skill.name} className={inView ? 'animate-rise' : ''} style={{ animationDelay: `${0.45 + idx * 0.1}s` }}>
              <div className="mb-2 flex items-center justify-between text-sm text-[#111135]">
                <span>{skill.name}</span>
                <span className="text-zinc-500">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-zinc-200">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-[#111135] to-[#ff508e] transition-all duration-1000"
                  style={{ width: inView ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
