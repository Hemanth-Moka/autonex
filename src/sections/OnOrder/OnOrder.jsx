import { useState } from 'react'
import { ON_ORDER_DESIGNS } from '../../data/content'
import { go } from '../../utils/helpers'

export default function OnOrder({ onSelectDesign }) {
  const [selectedCode, setSelectedCode] = useState(null)
  const [filterMode, setFilterMode] = useState('All')

  const handlePick = (design) => {
    setSelectedCode(design.code)
    if (onSelectDesign) {
      onSelectDesign(`On Order: ${design.code} (${design.type})`)
    }
    go('contact')
  }

  const list = ON_ORDER_DESIGNS.filter((d) => {
    if (filterMode === 'Specialty') return d.isSpecial
    if (filterMode === 'Standard') return !d.isSpecial
    return true
  })

  return (
    <section id="on-order" className="py-16 sm:py-24 bg-[#1f2022] text-white border-y border-[#3f4247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Bespoke Commissioned Series
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ON ORDER <span className="text-[#FFE7C2]">(SH – 01 TO SH – 36 + SH-3D)</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Commissioned Designs, Tailored to your Vehicle & Trim. Choose your design code to order custom crafted seat upholstery tailored to your vehicle's seats.
          </p>

          {/* Quick Filter */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {['All Designs (37)', 'Standard (36)', 'Specialty (SH-3D)'].map((tab) => {
              const key = tab.startsWith('Specialty') ? 'Specialty' : tab.startsWith('Standard') ? 'Standard' : 'All'
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilterMode(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    filterMode === key
                      ? 'bg-[#FFE7C2] text-[#262729] shadow-sm'
                      : 'bg-[#2a2c30] text-gray-400 hover:text-white border border-[#3f4247]'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* 3D Perforation Feature Spotlight Banner */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-[#2c2b29] via-[#3d3831] to-[#262729] border-2 border-[#FFE7C2]/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFE7C2] text-[#262729] text-xs font-black uppercase tracking-widest">
              Flagship Innovation
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              SH-3D • <span className="text-[#FFE7C2]">3D PERFORATION SPECIALTY</span>
            </h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Micro-engineered geometric airflow matrix. Designed for ventilated seat comfort and luxury high-permeability driving dynamics.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handlePick({ code: 'SH - 3D', type: '3D PERFORATION SPECIALTY' })}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#FFE7C2] hover:bg-white text-[#262729] text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
          >
            Commission SH-3D →
          </button>
        </div>

        {/* Grid of All SH-01 to SH-36 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {list.map((item) => (
            <div
              key={item.code}
              className={`p-4 rounded-2xl bg-[#282a2e] border transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 ${
                item.isSpecial
                  ? 'border-[#FFE7C2] bg-gradient-to-br from-[#38332a] to-[#282a2e] shadow-lg shadow-[#FFE7C2]/10 col-span-2 sm:col-span-1'
                  : 'border-[#383a3f] hover:border-[#FFE7C2]/70 hover:shadow-lg hover:shadow-black/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs sm:text-sm font-black tracking-wider ${
                    item.isSpecial ? 'text-[#FFE7C2]' : 'text-white group-hover:text-[#FFE7C2]'
                  }`}>
                    {item.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FFE7C2]/60 group-hover:bg-[#FFE7C2]" />
                </div>
                <div className="text-[11px] font-bold text-gray-200 leading-tight">
                  {item.type}
                </div>
                <div className="text-[10px] text-gray-400 mt-1 leading-snug">
                  {item.trim}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePick(item)}
                className="mt-3 w-full py-1.5 px-2 rounded-lg bg-[#34363b] group-hover:bg-[#FFE7C2] text-gray-300 group-hover:text-[#262729] text-[10px] font-bold uppercase tracking-wider transition-colors text-center"
              >
                Select Code
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
