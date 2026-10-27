import { READY_STOCK_DESIGNS } from '../../data/content'
import { go } from '../../utils/helpers'

export default function ReadyStock({ onSelectDesign, selectedCar }) {
  return (
    <section id="ready-stock" className="py-16 sm:py-24 bg-[#262729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Ready Stock Series
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            READY STOCK <span className="text-[#FFE7C2]">PATTERNS (01 – 06)</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Engineered center panel quilting crafted from high quality Automotive-grade leather. Immediate availability for rapid fitment.
          </p>
          {selectedCar && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#333539] border border-[#FFE7C2]/30 text-xs text-[#FFE7C2]">
              <span>✓ Verified Fit for:</span> <strong className="text-white">{selectedCar}</strong>
            </div>
          )}
        </div>

        {/* 6 Ready Stock Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {READY_STOCK_DESIGNS.map((item) => (
            <div
              key={item.num}
              className="group relative rounded-3xl bg-[#2e3033] border border-[#3f4247] p-7 flex flex-col justify-between hover:border-[#FFE7C2] hover:shadow-2xl hover:shadow-black/60 transition-all duration-300"
            >
              <div>
                {/* Number Badge & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1f2022] border border-[#3f4247] flex items-center justify-center font-black text-xl text-[#FFE7C2] group-hover:bg-[#FFE7C2] group-hover:text-[#262729] transition-colors">
                    {item.num}
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#3a3c42] text-gray-300 border border-[#484a50]">
                    {item.badge}
                  </span>
                </div>

                {/* Quilt Pattern Artistic Representation */}
                <div className="h-44 rounded-2xl bg-gradient-to-br from-[#1d1e20] to-[#262729] border border-[#383a3f] p-4 flex flex-col items-center justify-center relative overflow-hidden mb-6">
                  {/* Subtle geometric pattern SVG */}
                  <svg className="w-full h-full opacity-40 group-hover:opacity-60 transition-opacity" viewBox="0 0 200 120" fill="none">
                    {item.num === '01' && (
                      <g stroke="#FFE7C2" strokeWidth="1.5">
                        <polygon points="100,20 130,40 130,80 100,100 70,80 70,40" />
                        <polygon points="50,10 70,25 70,55 50,70 30,55 30,25" />
                        <polygon points="150,10 170,25 170,55 150,70 130,55 130,25" />
                        <line x1="100" y1="20" x2="100" y2="100" strokeDasharray="3 3" />
                      </g>
                    )}
                    {item.num === '02' && (
                      <g stroke="#FFE7C2" strokeWidth="1.5">
                        <path d="M40 60 L100 10 L160 60 L100 110 Z" />
                        <path d="M60 60 L100 25 L140 60 L100 95 Z" />
                        <line x1="20" y1="60" x2="180" y2="60" strokeDasharray="4 4" />
                        <line x1="100" y1="0" x2="100" y2="120" strokeDasharray="4 4" />
                      </g>
                    )}
                    {item.num === '03' && (
                      <g stroke="#FFE7C2" strokeWidth="1.5">
                        <polygon points="60,30 80,45 80,75 60,90 40,75 40,45" />
                        <polygon points="100,30 120,45 120,75 100,90 80,75 80,45" />
                        <polygon points="140,30 160,45 160,75 140,90 120,75 120,45" />
                      </g>
                    )}
                    {item.num === '04' && (
                      <g stroke="#FFE7C2" strokeWidth="1.5">
                        <polygon points="100,10 130,35 130,85 100,110 70,85 70,35" />
                        <line x1="70" y1="60" x2="130" y2="60" />
                        <line x1="100" y1="10" x2="100" y2="110" />
                      </g>
                    )}
                    {item.num === '05' && (
                      <g strokeWidth="1.5">
                        <polygon points="100,20 135,40 135,80 100,100 65,80 65,40" stroke="#FFE7C2" />
                        <polygon points="100,30 125,45 125,75 100,90 75,75 75,45" stroke="#f87171" strokeDasharray="3 2" />
                        <line x1="45" y1="0" x2="45" y2="120" stroke="#FFE7C2" strokeWidth="2" />
                        <line x1="155" y1="0" x2="155" y2="120" stroke="#FFE7C2" strokeWidth="2" />
                      </g>
                    )}
                    {item.num === '06' && (
                      <g>
                        <rect x="20" y="45" width="160" height="30" rx="4" fill="#c73b3b" fillOpacity="0.2" stroke="#c73b3b" strokeWidth="2" />
                        <line x1="20" y1="60" x2="180" y2="60" stroke="#FFE7C2" strokeWidth="2" strokeDasharray="6 4" />
                        <circle cx="100" cy="60" r="10" stroke="#FFE7C2" strokeWidth="2" fill="#262729" />
                      </g>
                    )}
                  </svg>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold tracking-widest text-[#FFE7C2] uppercase bg-[#1f2022]/90 px-2 py-0.5 rounded border border-[#383a3f]">
                    {item.pattern}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black uppercase text-white tracking-wide group-hover:text-[#FFE7C2] transition-colors">
                  {item.title}
                </h3>

                {/* Description directly from user brief */}
                <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-5 border-t border-[#3b3d42] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#FFE7C2]">
                  Automotive-grade leather
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectDesign) onSelectDesign(item.title)
                    go('contact')
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FFE7C2] text-[#262729] hover:bg-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  Enquire {item.num} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
