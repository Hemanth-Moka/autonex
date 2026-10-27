import { useState, useEffect } from 'react'
import {
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  WHATSAPP_NUMBER,
  EMAIL,
  WEBSITE,
  INSTAGRAM,
  SIGMA_INSTAGRAM,
  LOCATIONS,
  READY_STOCK_DESIGNS,
  COLOR_RANGE,
} from '../../data/content'

export default function Contact({ prefilledCar, prefilledDesign, prefilledColor }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Hyderabad',
    vehicle: prefilledCar || '',
    design: prefilledDesign || '01 Diamond Hexagon Quilt',
    color: prefilledColor || 'BEIGE',
    brandInquiry: 'SAHORA Seat Covers',
    note: '',
  })

  useEffect(() => {
    if (prefilledCar) setFormData((p) => ({ ...p, vehicle: prefilledCar }))
    if (prefilledDesign) setFormData((p) => ({ ...p, design: prefilledDesign }))
    if (prefilledColor) setFormData((p) => ({ ...p, color: prefilledColor }))
  }, [prefilledCar, prefilledDesign, prefilledColor])

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = [
      `*SAHORA DESIGN CATALOGUE ENQUIRY*`,
      `AUTONEX AUTOMOTIVE`,
      `---------------------------------`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Location / City: ${formData.city}`,
      `Vehicle Model: ${formData.vehicle}`,
      `Selected Design: ${formData.design}`,
      `Selected Color: ${formData.color}`,
      `Product Interest: ${formData.brandInquiry}`,
      formData.note ? `Note: ${formData.note}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#262729] text-white border-t border-[#3f4247]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#262729] bg-[#FFE7C2]">
            Official Brand Hubs & Enquiries
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            AUTONEX AUTOMOTIVE <span className="text-[#FFE7C2]">• SAHORA</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Direct sales desk, dealer wholesale supply, and bespoke commissioning across South India.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Company Official Hub Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#2e3033] border border-[#3f4247] shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFE7C2] block mb-1">
                Regional Hub Network
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                {LOCATIONS.join(' • ')}
              </h3>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#383a3f]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1f2022] text-[#FFE7C2] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  📞
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Direct Phone Lines</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    <a href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#FFE7C2] transition-colors">
                      {PRIMARY_PHONE}
                    </a>
                    {' • '}
                    <a href={`tel:${SECONDARY_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#FFE7C2] transition-colors">
                      {SECONDARY_PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1f2022] text-[#FFE7C2] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Official Email</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    <a href={`mailto:${EMAIL}`} className="hover:text-[#FFE7C2] transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1f2022] text-[#FFE7C2] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  🌐
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Official Website</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE7C2] transition-colors">
                      {WEBSITE} ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1f2022] text-[#FFE7C2] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  📸
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Instagram Handles</div>
                  <div className="text-sm font-bold text-white mt-0.5 flex gap-3">
                    <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-[#FFE7C2] hover:underline">
                      @{INSTAGRAM}
                    </a>
                    <a href={`https://instagram.com/${SIGMA_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                      @{SIGMA_INSTAGRAM}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#262729] border border-[#3f4247] text-xs text-gray-300 leading-relaxed">
              <strong className="text-[#FFE7C2] block uppercase tracking-wider mb-1">
                Sister Brands Available:
              </strong>
              • <strong>Motopep</strong>: Floor Matting & Memory Foam Ergonomics.<br />
              • <strong>Sigma</strong>: TPU PPF Kits & Nano Ceramic Sun Films (5, 35, 50 VLT).
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#2e3033] border border-[#3f4247] shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-1">
              Commission or Enquire Design
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mb-6">
              Fill in your car specifications. We immediately verify seat splits, airbag compliance, and dispatch turnaround.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Anand Reddy"
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9121257996"
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Hub / City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Other South India / Pan-India">Other Location (Pan-India Dispatch)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Vehicle Model & Year *
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="e.g. Creta 2024 / Thar Roxx / Curvv"
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="design" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Design Pattern / Code
                  </label>
                  <select
                    id="design"
                    name="design"
                    value={formData.design}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  >
                    <optgroup label="Ready Stock Series (01 - 06)">
                      {READY_STOCK_DESIGNS.map((d) => (
                        <option key={d.num} value={`${d.num} ${d.title}`}>
                          {d.num} {d.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Bespoke Series">
                      <option value="On Order: SH Series (Bespoke Commission)">SH Series (01 to 36 Commission)</option>
                      <option value="On Order: SH-3D (3D Perforation Specialty)">SH-3D (3D Perforation Specialty)</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="color" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Leather Color Shade
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                  >
                    {COLOR_RANGE.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.note})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="note" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows="2"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="e.g. Also need Motopep floor mats or Sigma PPF kit quote..."
                  className="w-full px-4 py-3 rounded-xl bg-[#262729] border border-[#3f4247] text-sm text-white focus:border-[#FFE7C2] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#FFE7C2] text-[#262729] font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Send WhatsApp Enquiry</span>
                <span>→</span>
              </button>

              {submitted && (
                <p className="text-xs font-bold text-[#FFE7C2] text-center mt-2">
                  ✓ WhatsApp chat launched with AUTONEX sales desk!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
