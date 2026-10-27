import { go } from '../../utils/helpers'
import {
  BRAND_NAME,
  PARENT_COMPANY,
  LOCATIONS,
  PRIMARY_PHONE,
  SECONDARY_PHONE,
  EMAIL,
  WEBSITE,
  INSTAGRAM,
  SIGMA_INSTAGRAM,
} from '../../data/content'
import sahoraLogo from '../../assets/sahora-logo.jpg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1c1d1f] text-white border-t border-[#333539] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2e3033]">
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={sahoraLogo}
                alt="SAHORA Logo"
                className="h-8 w-auto object-contain brightness-105"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              <strong className="text-white">A DESIGN CATALOGUE BY {PARENT_COMPANY}.</strong> Crafted to Comfort. Designed to Impress. Specializing in high-precision automotive seat covers, bespoke quilting, and performance interior upgrades.
            </p>
            <div className="pt-1 text-xs text-[#FFE7C2] font-semibold space-y-1">
              <div>📍 Hubs: {LOCATIONS.join(' • ')}</div>
              <div>📞 {PRIMARY_PHONE} • {SECONDARY_PHONE}</div>
              <div>✉️ {EMAIL}</div>
            </div>
          </div>

          {/* Quick Catalogue Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFE7C2] mb-4">
              Catalogue
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button type="button" onClick={() => go('ready-stock')} className="hover:text-white transition-colors">
                  Ready Stock (01-06)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('on-order')} className="hover:text-white transition-colors">
                  Bespoke (SH Series)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('colors')} className="hover:text-white transition-colors">
                  Color Range (16 Shades)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('vehicles')} className="hover:text-white transition-colors">
                  Vehicle Compatibility List
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('sister-brands')} className="hover:text-white transition-colors">
                  Motopep & Sigma
                </button>
              </li>
            </ul>
          </div>

          {/* Associated Brands */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFE7C2] mb-4">
              Associated Brands
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div>
                <strong className="text-white block uppercase">Motopep</strong>
                <span>Car Seat covers, Floor Matting & Memory Foam</span>
              </div>
              <div>
                <strong className="text-white block uppercase">Sigma</strong>
                <span>Precut PPF, TPU Colour Series & Ceramic Sun Film Kits</span>
              </div>
              <div className="pt-2 flex gap-4 text-xs font-semibold">
                <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-[#FFE7C2] hover:underline">
                  @{INSTAGRAM}
                </a>
                <a href={`https://instagram.com/${SIGMA_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                  @{SIGMA_INSTAGRAM}
                </a>
              </div>
            </div>
          </div>

          {/* Hub Branches & Direct Web */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFE7C2]">
              Regional Distribution
            </h4>
            <div className="text-xs text-gray-400 space-y-2">
              <div>
                <strong className="text-white block">Telangana Hub</strong>
                <span>Hyderabad Experience & Logistics Desk</span>
              </div>
              <div>
                <strong className="text-white block">Andhra Pradesh Hubs</strong>
                <span>Vijayawada • Visakhapatnam Commercial Centers</span>
              </div>
              <div className="pt-2">
                <a
                  href={`https://${WEBSITE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg bg-[#2e3033] border border-[#3f4247] text-white hover:text-[#FFE7C2] font-semibold text-xs"
                >
                  Visit {WEBSITE} ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} {PARENT_COMPANY} • {BRAND_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[#FFE7C2]">
            <span>Crafted to Comfort</span>
            <span>•</span>
            <span>Designed to Impress</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
