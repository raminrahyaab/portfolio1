import useReveal from '../hooks/useReveal.js'

function TestimonialsSection({ testimonials, clientLogos }) {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      className={`bg-white py-20 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>Client</p>
        <h2 className={`mt-3 text-3xl font-semibold text-[#111135] sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
          What Our Client Say?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <article key={item.name} className={`rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-6 transition hover:-translate-y-1 hover:shadow-md ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: `${0.16 + idx * 0.1}s` }}>
              <p className="text-zinc-600">"{item.quote}"</p>
              <div className="mt-5 flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full border border-zinc-200 object-cover" />
                <div>
                  <p className="font-semibold text-[#111135]">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {clientLogos.map((logo, idx) => (
            <div key={`${logo}-${idx}`} className={`flex h-20 items-center justify-center rounded-xl border border-zinc-200 bg-white transition hover:-translate-y-0.5 ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: `${0.2 + idx * 0.05}s` }}>
              <img src={logo} alt="Client logo" className="h-10 w-auto opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
