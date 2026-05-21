import useReveal from '../hooks/useReveal.js'

function PricingSection({ pricingPlans }) {
  const { ref, visible } = useReveal()

  return (
    <section
      ref={ref}
      className={`bg-[#f6f6f6] py-20 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <p className={`text-center text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>Pricing Table</p>
        <h2 className={`mt-3 text-center text-3xl font-semibold text-[#111135] sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
          Easy Pricing Process
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <article
              key={plan.title}
              className={`rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                idx === 1 ? 'ring-2 ring-[#ff508e]/30' : ''
              } ${visible ? 'animate-rise' : ''}`}
              style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
            >
              <img src={plan.icon} alt="" className="h-10 w-10" />
              <h3 className="mt-4 text-2xl font-semibold text-[#111135]">{plan.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-zinc-600">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full bg-[#111135] px-6 py-3 text-sm font-semibold text-white hover:bg-[#ff508e]"
              >
                {plan.price} ORDER
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
