function Preloader({ hide }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0f1022] transition-opacity duration-500 ${
        hide ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 rounded-full border-2 border-white/20" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#ff508e] border-r-[#ff508e] animate-spin" />
          <span className="absolute inset-[10px] rounded-full border border-white/20" />
          <span className="absolute inset-[10px] rounded-full border border-transparent border-b-white animate-[spin_1.5s_linear_infinite_reverse]" />
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">Koyta Portfolio</p>
          <p className="mt-2 text-sm text-zinc-400">Loading experience...</p>
        </div>
      </div>
    </div>
  )
}

export default Preloader
