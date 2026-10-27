import { useState, useEffect } from 'react'
import { go } from '../../utils/helpers'
import { NAV, PRIMARY_PHONE, LOCATIONS } from '../../data/content'
import sahoraLogo from '../../assets/sahora-logo.jpg'

export default function Nav({ active }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    go(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Pill Bar */}
      <div
        className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 ${
          scrolled
            ? 'bg-[#262729]/85 backdrop-blur-2xl border border-[#FFE7C2]/30 shadow-2xl shadow-black/70 ring-1 ring-white/10'
            : 'bg-[#262729]/75 backdrop-blur-xl border border-[#FFE7C2]/20 shadow-xl shadow-black/50'
        }`}
      >
        {/* Brand Logo (Left) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus:outline-none group"
            aria-label="SAHORA Home"
          >
            <div className="p-1 rounded-full bg-black/40 border border-white/10 group-hover:border-[#FFE7C2]/50 transition-colors">
              <img
                src={sahoraLogo}
                alt="SAHORA Logo"
                className="h-6 sm:h-7 w-auto object-contain brightness-105"
              />
            </div>
            <div className="hidden xl:flex flex-col text-left leading-tight">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#FFE7C2]">
                Design Catalogue
              </span>
              <span className="text-[9px] text-gray-400 font-medium tracking-wider">
                AUTONEX AUTOMOTIVE
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links Pill List (Center) */}
        <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-black/30 border border-white/5">
          {NAV.map((n) => {
            const isActive = active === n.id
            return (
              <button
                key={n.id}
                onClick={() => handleNavClick(n.id)}
                className={`text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-all duration-200 rounded-full px-3.5 py-1.5 focus:outline-none ${
                  isActive
                    ? 'bg-[#FFE7C2] text-[#262729] shadow-md shadow-black/30 scale-100'
                    : 'text-gray-300 hover:text-[#FFE7C2] hover:bg-white/5'
                }`}
              >
                {n.label}
              </button>
            )
          })}
        </div>

        {/* Actions & CTA (Right) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Call Link (Desktop) */}
          <a
            href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-gray-300 hover:text-[#FFE7C2] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            title="Call Support Desk"
          >
            <span className="text-[#FFE7C2]">📞</span>
            <span className="hidden xl:inline">{PRIMARY_PHONE}</span>
          </a>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/sahora.auto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#FFE7C2] flex items-center justify-center transition-colors hidden sm:flex"
            title="@sahora.auto on Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Glowing Pill Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 sm:px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider text-[#262729] bg-[#FFE7C2] hover:bg-white shadow-lg shadow-black/40 hover:scale-[1.03] active:scale-95 transition-all"
          >
            Enquire
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:text-[#FFE7C2] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto w-full max-w-sm mt-2 rounded-3xl bg-[#262729]/95 backdrop-blur-2xl border border-[#FFE7C2]/30 shadow-2xl p-4 space-y-1.5 transition-all">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FFE7C2] border-b border-[#3a3c40] mb-2 flex items-center justify-between">
            <span>Navigation</span>
            <span>{LOCATIONS.join(' • ')}</span>
          </div>
          {NAV.map((n) => {
            const isActive = active === n.id
            return (
              <button
                key={n.id}
                onClick={() => handleNavClick(n.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#FFE7C2] text-[#262729]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {n.label}
              </button>
            )
          })}
          <div className="pt-2 border-t border-[#3a3c40]">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 rounded-xl bg-[#FFE7C2] text-[#262729] text-xs font-black uppercase tracking-wider text-center"
            >
              Order & Enquire via WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
