import { useState } from 'react'
import Seat from '../../components/Seat/Seat'
import { MATERIALS, COLORS } from '../../data/content'
import { go } from '../../utils/helpers'

export default function Studio() {
  const [material, setMaterial] = useState('pu')
  const [colorId, setColorId] = useState('tan')

  const color = COLORS.find((c) => c.id === colorId) || COLORS[0]
  const mat = MATERIALS.find((m) => m.id === material) || MATERIALS[0]

  return (
    <section id="configurator" className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100">
            Interactive Visualizer
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Design your cabin in 3D studio
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Preview our OEM-grade materials and handpicked color palettes before ordering.
          </p>
        </div>

        {/* Studio Box */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Stage Column */}
          <div className="lg:col-span-7 relative bg-gradient-to-b from-gray-50 to-slate-100/70 rounded-2xl border border-gray-100 p-8 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] overflow-hidden">
            {/* Ambient soft glow */}
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-25 transition-all duration-500 pointer-events-none"
              style={{ backgroundColor: color.hex }}
            />
            <div className="w-full max-w-[300px] drop-shadow-2xl transition-transform duration-300">
              <Seat color={color} stitch={color.stitch} material={material} />
            </div>
          </div>

          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Material Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                1. Select Material Finish
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-100 rounded-xl border border-gray-200/80">
                {MATERIALS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMaterial(m.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-lg transition-all duration-200 text-center ${
                      material === m.id
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                2. Select Color Tone
              </label>
              <div className="flex items-center gap-3">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    title={c.label}
                    onClick={() => setColorId(c.id)}
                    className={`w-11 h-11 rounded-full border-2 transition-all duration-200 ${
                      colorId === c.id
                        ? 'scale-110 ring-4 ring-indigo-500/30 border-white shadow-md'
                        : 'border-white hover:scale-105 shadow-sm opacity-90'
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Spec Box */}
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs text-gray-700 leading-relaxed">
              <span className="font-bold text-indigo-900">{color.label} {mat.label}:</span>{' '}
              {mat.note}. Includes precision-matched high-tensile contrast stitching.
            </div>

            {/* CTA */}
            <button
              onClick={() => go('contact')}
              className="w-full py-3.5 px-6 rounded-xl bg-gray-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              Order this style for my car →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
