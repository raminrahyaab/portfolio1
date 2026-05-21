import { useEffect, useState } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const reducedMotion = useReducedMotion()

  const size = 56
  const strokeWidth = 4
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0

      setVisible(scrollTop > 260)
      setProgress(nextProgress)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}
        className="group relative grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-[#111135]/85 text-white shadow-[0_10px_30px_rgba(17,17,53,0.45)] backdrop-blur-md transition hover:scale-105"
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ff508e"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-200"
          />
        </svg>

        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="relative">
          <path
            d="M12 19V5M12 5L6.75 10.25M12 5L17.25 10.25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="pointer-events-none absolute -top-9 rounded-md bg-[#111135] px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-200 opacity-0 shadow-md transition group-hover:opacity-100">
          Top
        </span>
      </button>
    </div>
  )
}

export default ScrollToTopButton
