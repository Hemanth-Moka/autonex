import { useState } from 'react'
import { VEHICLE_DATABASE } from '../../data/content'
import { go } from '../../utils/helpers'

export default function VehicleList({ onSelectVehicle }) {
  const [activeBrand, setActiveBrand] = useState('Tata')
  const [searchTerm, setSearchTerm] = useState('')

  const brands = Object.keys(VEHICLE_DATABASE)

  const handleCarClick = (brand, model) => {
    if (onSelectVehicle) {
      onSelectVehicle(`${brand} ${model}`)
    }
    go('contact')
  }

  // Filter if user typed something in search
  const isSearching = searchTerm.trim().length > 0

  return (
    <section id="vehicles" className="py-16 sm:py-24 bg-[#1f2022] text-white border-y border-[#3f4247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Digital Template Coverage
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            COMPREHENSIVE <span className="text-[#FFE7C2]">VEHICLE LIST</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Direct computerized laser patterns archived in our Dehradun facility. Select your exact vehicle to confirm custom upholstery fitment.
          </p>

          {/* Quick Model Search */}
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Quick filter car models (e.g. Thar, Creta, Brezza, Curvv)..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#262729] border border-[#3f4247] text-xs sm:text-sm text-white placeholder-gray-400 focus:border-[#FFE7C2] focus:outline-none"
            />
          </div>
        </div>

        {isSearching ? (
          /* Search Results Across All Brands */
          <div className="bg-[#262729] rounded-3xl border border-[#3f4247] p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FFE7C2] mb-4">
              Search Results matching "{searchTerm}":
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.entries(VEHICLE_DATABASE).flatMap(([brand, models]) =>
                models
                  .filter(
                    (m) =>
                      m.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      brand.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((m) => (
                    <button
                      key={`${brand}-${m}`}
                      type="button"
                      onClick={() => handleCarClick(brand, m)}
                      className="p-3 rounded-xl bg-[#2e3033] border border-[#3f4247] hover:border-[#FFE7C2] text-left transition-all group"
                    >
                      <div className="text-[10px] font-bold uppercase text-[#FFE7C2]">
                        {brand}
                      </div>
                      <div className="text-xs sm:text-sm font-black text-white group-hover:text-[#FFE7C2] transition-colors mt-0.5">
                        {m}
                      </div>
                    </button>
                  ))
              )}
            </div>
          </div>
        ) : (
          /* Brand Tabs Layout */
          <div className="space-y-8">
            {/* Brand Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setActiveBrand(brand)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    activeBrand === brand
                      ? 'bg-[#FFE7C2] text-[#262729] shadow-lg shadow-black/40 scale-105'
                      : 'bg-[#282a2e] text-gray-300 hover:text-white border border-[#383a3f]'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Models Box */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#262729] border border-[#3f4247] shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#383a3f]">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                    {activeBrand} Models
                  </h3>
                  <span className="text-xs text-[#FFE7C2]">
                    {VEHICLE_DATABASE[activeBrand]?.length} Verified Model Patterns
                  </span>
                </div>
                {activeBrand === 'Skoda / Volkswagen' && (
                  <span className="text-[11px] font-semibold bg-[#383a3f] text-[#FFE7C2] px-3 py-1 rounded-full border border-[#484b52]">
                    ★ Note: All vehicle seats are structurally shared
                  </span>
                )}
              </div>

              {/* Models Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                {VEHICLE_DATABASE[activeBrand]?.map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => handleCarClick(activeBrand, model)}
                    className="p-3.5 rounded-xl bg-[#2e3033] border border-[#3a3c42] hover:border-[#FFE7C2] hover:bg-[#34363a] transition-all text-left flex flex-col justify-between group"
                  >
                    <span className="text-xs sm:text-sm font-black text-white group-hover:text-[#FFE7C2] transition-colors">
                      {model}
                    </span>
                    <span className="mt-2 text-[10px] font-bold text-[#FFE7C2] uppercase flex items-center justify-between">
                      <span>Get Fitment</span>
                      <span>→</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
