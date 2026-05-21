import useReveal from '../hooks/useReveal.js'

function BlogSection({ blogPosts }) {
  const { ref, visible } = useReveal()

  return (
    <section
      id="blog"
      ref={ref}
      className={`bg-[#f3f3f3] py-20 transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <p className={`text-sm uppercase tracking-[0.28em] text-[#ff508e] ${visible ? 'animate-rise' : ''}`}>Recent News</p>
        <h2 className={`mt-3 text-3xl font-semibold text-[#111135] sm:text-4xl ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: '0.1s' }}>
          Get Update From Blog
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <article key={post.title} className={`overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${visible ? 'animate-rise' : ''}`} style={{ animationDelay: `${0.15 + idx * 0.1}s` }}>
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{post.date}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#111135]">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
