import useReveal from '../hooks/useReveal.js'

function ContactSection({ contactDetails }) {
  const { ref, visible } = useReveal()

  return (
    <section
      id="contact"
      ref={ref}
      className={`mx-auto w-full max-w-6xl px-5 py-20 transition-all duration-700 sm:px-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>Contact</p>
      <h2 className={`mt-3 text-3xl font-semibold text-[#111135] sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
        Contact Us
      </h2>

      <div className="mt-10 grid gap-8 rounded-3xl border border-zinc-200 bg-white p-8 md:grid-cols-2 md:p-10">
        <div className={visible ? 'animate-rise' : ''} style={{ animationDelay: '0.18s' }}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Phone Number</p>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="mt-2 block text-lg text-[#111135] transition hover:text-[#ff508e]">
            {contactDetails.phone}
          </a>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Mail Address</p>
          <a href={`mailto:${contactDetails.email}`} className="mt-2 block text-lg text-[#111135] transition hover:text-[#ff508e]">
            {contactDetails.email}
          </a>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Office Address</p>
          <p className="mt-2 text-lg text-[#111135]">{contactDetails.address}</p>
        </div>

        <form className={`space-y-4 ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.28s' }}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Send Message</p>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-[#111135] outline-none transition focus:border-[#ff508e]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-[#111135] outline-none transition focus:border-[#ff508e]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-[#111135] outline-none transition focus:border-[#ff508e]"
          />
          <button
            type="button"
            className="rounded-full bg-[#111135] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ff508e]"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
