import { PRICING } from '../../data/content'
import { go } from '../../utils/helpers'

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100">
            Transparent Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Clear packages. No surprise add-ons.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            All tiers include complete front and rear seat configurations tailored to your vehicle specifications.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING.map((tier) => (
            <div
              key={tier.tier}
              className={`relative flex flex-col p-8 sm:p-9 rounded-3xl bg-white transition-all duration-300 ${
                tier.featured
                  ? 'border-2 border-indigo-600 shadow-xl shadow-indigo-600/10 scale-100 lg:-translate-y-2'
                  : 'border border-gray-200/80 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-indigo-600/30">
                  {tier.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900">{tier.tier}</h3>

              <div className="mt-4 mb-3">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{tier.price}</span>
                <span className="text-xs text-gray-500"> / {tier.priceNote}</span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {tier.desc}
              </p>

              {/* Feature Checklist */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => go('contact')}
                className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center ${
                  tier.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/30 active:scale-[0.99]'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm active:scale-[0.99]'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
