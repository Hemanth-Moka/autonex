import { useState } from 'react'
import { useActiveSection, go } from './utils/helpers'
import { NAV } from './data/content'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import ReadyStock from './sections/ReadyStock/ReadyStock'
import OnOrder from './sections/OnOrder/OnOrder'
import ColorRange from './sections/ColorRange/ColorRange'
import VehicleList from './sections/VehicleList/VehicleList'
import SisterBrands from './sections/SisterBrands/SisterBrands'
import Craft from './sections/Craft/Craft'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const active = useActiveSection(NAV.map((n) => n.id))
  const [selectedVehicle, setSelectedVehicle] = useState('')
  const [selectedDesign, setSelectedDesign] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const handleSelectVehicle = (car) => {
    setSelectedVehicle(car)
  }

  const handleSelectDesign = (design) => {
    setSelectedDesign(design)
  }

  const handleSelectColor = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className="min-h-screen bg-[#262729] text-white selection:bg-[#FFE7C2] selection:text-[#262729]">
      {/* Top Header */}
      <Nav active={active} />

      <main>
        {/* Hero Section */}
        <Hero onSelectVehicle={handleSelectVehicle} />

        {/* Ready Stock (01 - 06) */}
        <ReadyStock
          onSelectDesign={handleSelectDesign}
          selectedCar={selectedVehicle}
        />

        {/* On Order (SH-01 to SH-36 + SH-3D) */}
        <OnOrder onSelectDesign={handleSelectDesign} />

        {/* The Color Range (16 Leather Shades + Swatch Studio) */}
        <ColorRange onSelectColor={handleSelectColor} />

        {/* Vehicle Compatibility Database */}
        <VehicleList onSelectVehicle={handleSelectVehicle} />

        {/* Associated Sister Brands (Motopep & Sigma) */}
        <SisterBrands />

        {/* Engineering & Craftsmanship Heritage */}
        <Craft />

        {/* Official Hubs & WhatsApp Enquiry Desk */}
        <Contact
          prefilledCar={selectedVehicle}
          prefilledDesign={selectedDesign}
          prefilledColor={selectedColor}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
