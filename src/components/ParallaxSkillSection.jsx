import useReveal from '../hooks/useReveal.js'
import { useEffect, useState } from 'react'

function ParallaxSkillSection({ skills, highlights }) {
  const { ref, visible } = useReveal(0.15)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden py-20 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{
        backgroundImage:
          "url('https://bestwpware.com/html/themetum/koyta/light/koyta-one/assets/img/01_koyta_img/exp-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#111135]/82" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>My Services</p>
          <h2 className={`mt-3 text-3xl font-semibold text-white sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
            My Design and Development Skill
          </h2>
          <p className={`mt-5 max-w-xl text-zinc-300 ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.2s' }}>
            Mattis sunt aptent dapibus conubia magnis. Do faucibus volutpat vel excepturi accumsan
            henderit morbi leo, rerum excepturi aptent torquento.
          </p>
          <a
            href="https://www.youtube.com/watch?v=SMKPKGW083c"
            target="_blank"
            rel="noreferrer"
            className={`mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff508e] text-xl text-white shadow-lg shadow-[#ff508e]/40 transition hover:scale-105 hover:bg-[#ea3c7c] ${
              visible ? 'animate-rise pulse-ring' : ''
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            ▶
          </a>
        </div>

        <div>
          <div className={`space-y-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.15s' }}>
            {skills.map((skill, idx) => (
              <div key={skill.name} className={visible ? 'animate-rise' : ''} style={{ animationDelay: `${0.25 + idx * 0.1}s` }}>
                <div className="mb-2 flex items-center justify-between text-sm text-white">
                  <span>{skill.name}</span>
                  <span className="text-zinc-300">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/20">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#ff508e] to-white transition-all duration-1000"
                    style={{ width: visible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, idx) => (
              <div
                key={item.label}
                className={`rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur-sm ${
                  visible ? 'animate-rise' : ''
                }`}
                style={{ animationDelay: `${0.35 + idx * 0.1}s` }}
              >
                <img src={item.icon} alt="" className="mx-auto h-9 w-9" />
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSkillSection
