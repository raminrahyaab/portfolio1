function HeroSection({ startAnimations }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://bestwpware.com/html/themetum/koyta/light/koyta-one/assets/img/01_koyta_img/slider01.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-[#111135]/70" />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl items-center px-5 py-20 sm:px-6">
        <div className="max-w-3xl">
          <p className={`${startAnimations ? 'animate-rise' : ''} mb-6 text-xs uppercase tracking-[0.32em] text-white/90`}>Welcome to Koyta</p>
          <h1 className={`${startAnimations ? 'animate-rise' : ''} text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl`} style={{ animationDelay: '0.1s' }}>
            I am <span className="text-[#ff508e]">Harry Jason</span> Photographer
          </h1>
          <p className={`${startAnimations ? 'animate-rise' : ''} mt-6 max-w-2xl text-zinc-200 sm:text-lg`} style={{ animationDelay: '0.2s' }}>
            Sapiente corrupti duis ipsum a faucibus vero varius nulla. A alias magna reiciendis
            nunc sapien consectetuer culpa.
          </p>
          <div className={`mt-10 flex flex-wrap gap-4 ${startAnimations ? 'animate-rise' : ''}`} style={{ animationDelay: '0.3s' }}>
            <a href="#work" className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#111135]">
              Go to Portfolio
            </a>
            <a href="#contact" className="rounded-full bg-[#ff508e] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ea3c7c]">
              Lets Talk
            </a>
          </div>

          <div className={`mt-12 inline-flex items-center gap-3 ${startAnimations ? 'animate-rise' : ''}`} style={{ animationDelay: '0.45s' }}>
            <span className={`h-2 w-2 rounded-full bg-[#ff508e] ${startAnimations ? 'pulse-ring' : ''}`} />
            <span className="text-xs uppercase tracking-[0.24em] text-zinc-300">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
