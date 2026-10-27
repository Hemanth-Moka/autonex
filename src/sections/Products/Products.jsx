import { useState } from 'react'
import { PRODUCTS } from '../../data/content'
import { go } from '../../utils/helpers'

export default function Products({ onAddToCart, carSearchTerm }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Seat covers', 'Floor mats', 'Accessories']

  const filteredProducts = PRODUCTS.filter((item) => {
    if (activeCategory !== 'All' && item.cat !== activeCategory) {
      return false
    }
    return true
  })

  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100">
            Catalog & Shop
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Engineered automotive essentials
          </h2>
          <p className="mt-4 text-base text-gray-500">
            {carSearchTerm ? (
              <span>
                Displaying custom products calibrated for <strong className="text-gray-900">"{carSearchTerm}"</strong>.
              </span>
            ) : (
              'Full sets tailor-fitted to your car model with OEM-grade materials and reinforced seams.'
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((p) => {
            const artBg =
              p.cat === 'Seat covers'
                ? 'from-gray-900 to-gray-800'
                : p.cat === 'Floor mats'
                ? 'from-slate-900 to-indigo-950'
                : 'from-emerald-950 to-gray-900'

            const icon =
              p.cat === 'Seat covers' ? '💺' : p.cat === 'Floor mats' ? '🚗' : '✨'

            return (
              <div
                key={p.id}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className={`relative h-48 bg-gradient-to-br ${artBg} flex items-center justify-center overflow-hidden`}>
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">
                    {icon}
                  </div>
                  {p.tag && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-white/95 text-gray-900 rounded-md shadow-sm">
                      {p.tag}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-indigo-600">
                      {p.cat}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                      ★ {p.rating} <span className="text-gray-400 font-normal">({p.reviews})</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2 flex-grow">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-gray-900">{p.price}</span>
                    <span className="text-sm text-gray-400 line-through">{p.originalPrice}</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-2.5">
                    <button
                      onClick={() => go('contact')}
                      className="flex-grow py-2.5 px-4 rounded-lg bg-gray-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-sm text-center"
                    >
                      Instant Quote
                    </button>
                    <button
                      onClick={() => onAddToCart && onAddToCart(p)}
                      title="Add to cart"
                      className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50/50 transition-colors"
                      aria-label="Add to cart"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
