import useReveal from '../hooks/useReveal.js'

function ServicesSection({ services }) {
  const { ref, visible } = useReveal()

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-[#f3f3f3] py-20 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <p className="text-center text-sm uppercase tracking-[0.28em] text-[#ff508e]">My Services</p>
        <h2 className="mt-4 text-center text-3xl font-semibold text-[#111135] sm:text-4xl">Why Choose My Services</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.id}
              className={`group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#ff508e]/60 hover:shadow-md ${
                visible ? 'animate-rise' : ''
              }`}
              style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
            >
              <img src={service.icon} alt="" className="h-10 w-10" />
              <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-[#ff508e]">{service.id}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#111135]">{service.title}</h3>
              <p className="mt-4 text-zinc-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
