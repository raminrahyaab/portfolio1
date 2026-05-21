import { useMemo, useState } from 'react'
import useReveal from '../hooks/useReveal.js'

function PortfolioSection({ projects }) {
  const { ref, visible } = useReveal()
  const filters = useMemo(() => ['All', ...new Set(projects.map((project) => project.tag))], [projects])
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.tag === activeFilter)),
    [activeFilter, projects],
  )

  return (
    <section
      id="work"
      ref={ref}
      className={`mx-auto w-full max-w-6xl px-5 py-20 transition-all duration-700 sm:px-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>Gallery</p>
      <h2 className={`mt-3 text-3xl font-semibold text-[#111135] sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.08s' }}>
        Our Gallery Projects
      </h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
              activeFilter === filter
                ? 'bg-[#ff508e] text-white'
                : 'border border-zinc-300 bg-white text-zinc-600 hover:border-[#ff508e]/60'
            } ${visible ? 'animate-rise' : ''}`}
            style={{ animationDelay: '0.12s' }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {filteredProjects.map((item, idx) => (
          <article key={item.name} className={`group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: `${0.16 + idx * 0.08}s` }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#111135]">
                {item.tag}
              </p>
              <h3 className="absolute bottom-5 left-5 text-2xl font-semibold">{item.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
