import { useState } from 'react'
import { COLOR_RANGE } from '../../data/content'
import Seat from '../../components/Seat/Seat'
import { go } from '../../utils/helpers'

export default function ColorRange({ onSelectColor }) {
  const [activeColor, setActiveColor] = useState(COLOR_RANGE[2]) // Default Beige (#FFE7C2)
  const [material, setMaterial] = useState('pu')

  const handlePick = (c) => {
    setActiveColor(c)
    if (onSelectColor) {
      onSelectColor(c.name)
    }
  }

  return (
    <section id="colors" className="py-16 sm:py-24 bg-[#262729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Leather Swatch Studio
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            THE COLOR <span className="text-[#FFE7C2]">RANGE (16 SHADES)</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Curated automotive-grade leather shades engineered for OEM UV stability, heat resistance, and luxurious tactile feel.
          </p>
        </div>

        {/* Visualizer & Swatches Split */}
        <div className="rounded-3xl bg-[#2e3033] border border-[#3f4247] p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Interactive Seat Visualizer in Selected Swatch */}
          <div className="lg:col-span-5 relative bg-gradient-to-b from-[#1f2022] to-[#262729] rounded-2xl border border-[#3a3c40] p-8 flex flex-col items-center justify-center min-h-[360px] sm:min-h-[420px] overflow-hidden">
            <div
              className="absolute w-60 h-60 rounded-full blur-3xl opacity-30 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: activeColor.hex }}
            />
            <div className="w-full max-w-[280px] drop-shadow-2xl transition-transform duration-300">
              <Seat
                color={{ hex: activeColor.hex, label: activeColor.name }}
                stitch={activeColor.name === 'WHITE' || activeColor.name === 'BEIGE' ? '#333333' : '#FFE7C2'}
                material={material}
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFE7C2]">
                Active Preview:
              </span>
              <div className="text-base font-black text-white">{activeColor.name}</div>
              <span className="text-[11px] text-gray-400">{activeColor.note}</span>
            </div>
          </div>

          {/* Right: 16 Swatch Tiles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFE7C2]">
                  Select Color Swatch
                </span>
                <span className="text-xs text-gray-400">
                  Click to visualize on seat
                </span>
              </div>

              {/* 16 Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {COLOR_RANGE.map((c) => {
                  const isSelected = activeColor.name === c.name
                  return (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => handlePick(c)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 relative overflow-hidden group ${
                        isSelected
                          ? 'border-[#FFE7C2] ring-2 ring-[#FFE7C2]/50 shadow-lg shadow-black/40 scale-[1.02]'
                          : 'border-[#3d4045] hover:border-gray-400 bg-[#262729]'
                      }`}
                    >
                      {/* Swatch color pill */}
                      <div className="flex items-center justify-between">
                        <span
                          className="w-5 h-5 rounded-full border border-black/20 shadow-inner"
                          style={{ backgroundColor: c.hex }}
                        />
                        {isSelected && (
                          <span className="text-[10px] font-bold text-[#FFE7C2]">✓</span>
                        )}
                      </div>

                      <div>
                        <div className="text-[11px] font-black tracking-wide text-white group-hover:text-[#FFE7C2] transition-colors leading-tight">
                          {c.name}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Leather Sample Book Note directly from user brief */}
            <div className="p-4 rounded-xl bg-[#262729] border border-[#FFE7C2]/30 flex items-start gap-3">
              <span className="text-lg text-[#FFE7C2]">📖</span>
              <div className="text-xs text-gray-300 leading-relaxed">
                <strong className="text-[#FFE7C2] block uppercase tracking-wider mb-0.5">
                  Sample Book Consultation
                </strong>
                Further Colors & dual-tone combinations are available in the{' '}
                <span className="text-white font-semibold">SAHORA Leather Sample Book</span>.
                Visit our experience hubs in Hyderabad, Vijayawada, or Visakhapatnam to view physical swatch decks.
              </div>
            </div>

            <button
              type="button"
              onClick={() => go('contact')}
              className="w-full py-3.5 px-6 rounded-xl bg-[#FFE7C2] hover:bg-white text-[#262729] text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95 text-center"
            >
              Order Seat Covers in {activeColor.name} →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
