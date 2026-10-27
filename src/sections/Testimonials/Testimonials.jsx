import { TESTIMONIALS } from '../../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100">
            Real Feedback
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by 14,000+ car owners
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Read real reviews from everyday commuters, weekend travelers, and fleet managers across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col"
            >
              <div className="text-amber-500 text-sm tracking-widest mb-3.5">
                {'★'.repeat(t.stars)}
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed flex-grow mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-xs flex items-center justify-center">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
