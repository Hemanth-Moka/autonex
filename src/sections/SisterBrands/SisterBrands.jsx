import { SISTER_BRANDS } from '../../data/content'
import { go } from '../../utils/helpers'

export default function SisterBrands() {
  return (
    <section id="sister-brands" className="py-16 sm:py-24 bg-[#262729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Comprehensive Automotive Ecosystem
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            ASSOCIATED BRANDS: <span className="text-[#FFE7C2]">MOTOPEP & SIGMA</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Beyond bespoke Sahora upholstery, our parent group manufactures and distributes high-performance floor matting, memory foam comfort, precut PPF, and ceramic films.
          </p>
        </div>

        {/* 2 Massive Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {SISTER_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="rounded-3xl bg-[#2e3033] border border-[#3f4247] p-8 sm:p-10 flex flex-col justify-between hover:border-[#FFE7C2]/70 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#1f2022] text-[#FFE7C2] border border-[#3f4247]">
                    {brand.tag}
                  </span>
                  {brand.instagram && (
                    <a
                      href={`https://instagram.com/${brand.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-gray-400 hover:text-[#FFE7C2] transition-colors flex items-center gap-1.5"
                    >
                      <span>📸</span> {brand.instagram} ↗
                    </a>
                  )}
                </div>

                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
                  {brand.name}
                </h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#FFE7C2] mb-4">
                  {brand.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                  {brand.focus}
                </p>

                {/* Items Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-[#383a3f]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Key Product Capabilities:
                  </span>
                  {brand.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <span className="text-[#FFE7C2] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-[#383a3f] flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Bulk trade & dealership enquiries open
                </span>
                <button
                  type="button"
                  onClick={() => go('contact')}
                  className="px-4 py-2.5 rounded-xl bg-[#FFE7C2] text-[#262729] text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-md active:scale-95"
                >
                  Enquire {brand.name} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
