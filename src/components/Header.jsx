import { useState } from 'react'
import { getAssetUrl } from '../utils/assets.js'

function Header({ navItems, activeId }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <a href="#home" className="inline-flex items-center gap-3">
          <img src={getAssetUrl('assets/images/logo-dark.png')} alt="Koyta" className="h-6 w-auto" />
          <span className="text-xs tracking-[0.3em] text-zinc-500">PORTFOLIO</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`relative pb-1 transition after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff508e] after:transition-all hover:text-[#111135] hover:after:w-full ${
                  activeId === item.id ? 'text-[#ff508e] after:w-full' : ''
                }`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#111135] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ff508e] md:inline-block"
          >
            Hire Me
          </a>
          <button
            type="button"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-700 md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-5 py-4 md:hidden">
          <ul className="space-y-3 text-sm text-zinc-600">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={activeId === item.id ? 'text-[#ff508e]' : 'hover:text-[#111135]'}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
