import { useState } from 'react'
import { go } from '../../utils/helpers'
import { VEHICLE_DATABASE, LOCATIONS } from '../../data/content'
import heroBg from '../../assets/hero-bg.jpeg'

export default function Hero({ onSelectVehicle }) {
  const [query, setQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All')

  const brands = Object.keys(VEHICLE_DATABASE)
  
  // Extract all vehicle models for instant search autocomplete / suggestions
  const allVehicles = Object.entries(VEHICLE_DATABASE).flatMap(([brand, models]) =>
    models.map((model) => ({ brand, model }))
  )

  const searchResults = query.trim()
    ? allVehicles.filter(
        (v) =>
          v.model.toLowerCase().includes(query.toLowerCase()) ||
          v.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : []

  const handleSelectCar = (item) => {
    setQuery(`${item.brand} ${item.model}`)
    if (onSelectVehicle) {
      onSelectVehicle(`${item.brand} ${item.model}`)
    }
    go('ready-stock')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSelectVehicle && query) {
      onSelectVehicle(query)
    }
    go('ready-stock')
  }

  return (
    <section id="home">
      <div className="relative py-16 bg-[#262729] sm:py-24 lg:py-28 overflow-hidden border-b border-[#3f4247]">
        {/* Background Image: Mercedes-Benz S-Class Luxury Interior */}
        <div className="absolute inset-0">
          <img
            className="object-cover object-center w-full h-full"
            src={heroBg}
            alt="SAHORA Luxury Mercedes Interior Seat Upholstery"
            loading="eager"
          />
        </div>

        {/* Cinematic Gradient Vignette Overlay with #262729 tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#262729]/80 via-[#262729]/65 to-[#262729]/90 backdrop-blur-[0.5px]"></div>

        {/* Content Container */}
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2] shadow-lg shadow-black/30 mb-6">
              <span>★</span>
              <span>AUTONEX AUTOMOTIVE • DESIGN CATALOGUE</span>
            </div>

            {/* Main Catalogue Heading matching user brief */}
            <div className="space-y-2">
              <span className="block text-sm sm:text-base font-semibold tracking-widest uppercase text-[#FFE7C2]/90">
                Automotive Seat Covers
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
                CRAFTED TO COMFORT.<br />
                <span className="text-[#FFE7C2]">DESIGNED TO IMPRESS.</span>
              </h1>
            </div>

            

            {/* Interactive Vehicle Model Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto mt-8 sm:mt-10 relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your vehicle (e.g. Creta, Thar Roxx, Nexon, Curvv, Brezza)..."
                  className="block w-full py-4 pl-12 pr-32 text-sm sm:text-base font-medium text-white placeholder-gray-400 bg-[#262729]/95 backdrop-blur-md border border-[#FFE7C2]/40 rounded-xl shadow-2xl focus:ring-2 focus:ring-[#FFE7C2] focus:border-[#FFE7C2] focus:outline-none transition-all"
                />

                <div className="absolute inset-y-1.5 right-1.5 flex items-center">
                  <button
                    type="submit"
                    className="h-full px-5 text-xs font-bold uppercase tracking-wider text-[#262729] bg-[#FFE7C2] hover:bg-[#FFF4E3] rounded-lg transition-colors flex items-center justify-center shadow-md active:scale-95"
                  >
                    Explore
                  </button>
                </div>
              </div>

              {/* Autocomplete / Instant Dropdown Results */}
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-[#262729] border border-[#3f4247] rounded-xl shadow-2xl overflow-hidden z-30 text-left">
                  <div className="p-2 text-[11px] font-bold uppercase tracking-wider text-[#FFE7C2] border-b border-[#333539] bg-[#1f2022]">
                    Compatible Vehicles Found ({searchResults.length})
                  </div>
                  {searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectCar(item)}
                      className="w-full px-4 py-2.5 text-xs text-gray-200 hover:text-white hover:bg-[#34363a] flex items-center justify-between transition-colors border-b border-[#333539]/50 last:border-0"
                    >
                      <span className="font-semibold">{item.model}</span>
                      <span className="text-[10px] uppercase tracking-wider text-[#FFE7C2] bg-[#3a3c42] px-2 py-0.5 rounded">
                        {item.brand}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </form>

            {/* Quick Car Tags from User List */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-gray-300">
              <span className="text-[#FFE7C2] font-semibold text-[11px] uppercase tracking-wider">
                Popular Models:
              </span>
              {['Creta', 'Thar Roxx', 'Nexon', 'Curvv', 'Brezza', 'Hycross', 'Slavia'].map((car) => (
                <button
                  key={car}
                  type="button"
                  onClick={() => {
                    setQuery(car)
                    if (onSelectVehicle) onSelectVehicle(car)
                    go('ready-stock')
                  }}
                  className="px-2.5 py-1 rounded-full bg-[#262729]/80 border border-[#44464b] hover:border-[#FFE7C2] hover:text-[#FFE7C2] text-xs font-medium transition-all"
                >
                  {car}
                </button>
              ))}
            </div>

            {/* Key Hubs & Brand Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto mt-10 md:mt-14 gap-4 sm:gap-6 pt-6 border-t border-white/15">
              <div className="p-3 rounded-xl bg-[#262729]/80 border border-[#3a3c40] backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-black text-[#FFE7C2]">06</p>
                <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mt-0.5">Ready Stock Quilts</p>
              </div>

              <div className="p-3 rounded-xl bg-[#262729]/80 border border-[#3a3c40] backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-black text-[#FFE7C2]">37+</p>
                <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mt-0.5">SH Bespoke Designs</p>
              </div>

              <div className="p-3 rounded-xl bg-[#262729]/80 border border-[#3a3c40] backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-black text-[#FFE7C2]">16</p>
                <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mt-0.5">Leather Color Shades</p>
              </div>

              <div className="p-3 rounded-xl bg-[#262729]/80 border border-[#3a3c40] backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-black text-[#FFE7C2]">3 Hubs</p>
                <p className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider mt-0.5">Hyd • Vja • Vizag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
