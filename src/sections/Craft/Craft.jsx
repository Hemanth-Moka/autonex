import { STATS, STEPS } from '../../data/content'

export default function Craft() {
  return (
    <section id="craft" className="py-16 sm:py-24 bg-[#1f2022] text-white border-y border-[#3f4247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Heritage & Manufacturing
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            PRECISION ENGINEERING <span className="text-[#FFE7C2]">AT SCALE</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Direct computerized CNC cutter patterns, Japanese twin-needle lockstitch tension, and physical vehicle frame fitment testing.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Key Plant Metrics */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl bg-[#282a2e] border border-[#3a3c42] shadow-xl hover:border-[#FFE7C2]/70 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black text-[#FFE7C2] font-heading">
                  {s.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* 4-Step Production Process */}
          <div className="space-y-4">
            {STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#282a2e] border border-[#3a3c42] shadow-md hover:border-[#FFE7C2] transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FFE7C2] text-[#262729] font-black text-sm flex items-center justify-center">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
