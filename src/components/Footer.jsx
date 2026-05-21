import { getAssetUrl } from '../utils/assets.js'

function Footer({ socialLinks }) {
  return (
    <footer className="border-t border-zinc-200 bg-[#111135] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-6">
        <div className="inline-flex items-center gap-3">
          <img src={getAssetUrl('assets/images/logo.png')} alt="Koyta" className="h-6 w-auto" />
          <p className="text-sm text-zinc-300">@ 2026 Themetum. All right reserved</p>
        </div>

        <ul className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
          {socialLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#ff508e]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
