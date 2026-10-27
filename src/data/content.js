// ─── SAHORA Brand & Entity Info ──────────────────────────────────────────────
export const BRAND_NAME = 'SAHORA'
export const PARENT_COMPANY = 'AUTONEX AUTOMOTIVE'
export const WEBSITE = 'sahora.co.in'
export const EMAIL = 'sahorasalesadmin@gmail.com'
export const INSTAGRAM = 'sahora.auto'
export const SIGMA_INSTAGRAM = 'sigmappf'

export const PRIMARY_PHONE = '+91 6281315207'
export const SECONDARY_PHONE = '+91 9121257996'
export const WHATSAPP_NUMBER = '916281315207'

export const LOCATIONS = ['Hyderabad', 'Vijayawada', 'Visakhapatnam']

export const BRAND_COLORS = {
  bg: '#262729',
  beige: '#FFE7C2',
  white: '#FFFFFF',
}

// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV = [
  { id: 'ready-stock', label: 'Ready Stock (01-06)' },
  { id: 'on-order',    label: 'Bespoke (SH Series)' },
  { id: 'colors',      label: 'Color Range'         },
  { id: 'vehicles',    label: 'Vehicle List'        },
  { id: 'sister-brands', label: 'Motopep & Sigma'   },
  { id: 'contact',     label: 'Enquire & Quote'     },
]

// ─── Ready Stock Designs (01 - 06) ──────────────────────────────────────────
export const READY_STOCK_DESIGNS = [
  {
    num: '01',
    code: 'RS-01',
    title: 'Diamond Hexagon Quilt',
    pattern: 'Diamond Hexagon',
    desc: 'Featuring an elegant Diamond Hexagon Quilted center panel complemented by different colors crafted from high quality Automotive-grade Leather.',
    tag: 'Flagship Ready Stock',
    badge: 'Executive',
    previewHex: '#3a2d24',
    accentHex: '#FFE7C2',
  },
  {
    num: '02',
    code: 'RS-02',
    title: 'Diamond Quilt',
    pattern: 'Diamond Symmetry',
    desc: 'Featuring a refined Diamond Quilted pattern on the center panel crafted with meticulous symmetry and uniform spacing creating a rhythmic geometric texture.',
    tag: 'Timeless Luxury',
    badge: 'Popular',
    previewHex: '#1f1f22',
    accentHex: '#d8b98b',
  },
  {
    num: '03',
    code: 'RS-03',
    title: 'HEXAGONAL Quilt',
    pattern: 'Interlocking Honeycomb',
    desc: 'Featuring a refined Hexagonal Quilted pattern on the center panel characterized by a series of evenly spaced, interlocking hexagons that create a geometric honeycomb effect.',
    tag: 'Geometric Tech',
    badge: 'High Precision',
    previewHex: '#25292e',
    accentHex: '#9bb0c1',
  },
  {
    num: '04',
    code: 'RS-04',
    title: 'HEXAGONAL Quilt II',
    pattern: 'Elongated Hex Lattice',
    desc: 'Featuring an elongated Hexagonal Quilted pattern arranged in both vertical & Horizontal patterns on the center panel characterized by a series of evenly spaced, continuous hexagons.',
    tag: 'Modern Sport',
    badge: 'Dual Axis',
    previewHex: '#29211c',
    accentHex: '#FFE7C2',
  },
  {
    num: '05',
    code: 'RS-05',
    title: 'MULTI-STITCH HEXAGON QUILT',
    pattern: 'Multi-Color Dual Stitch',
    desc: 'Featuring a multi color multiple stitching Hexagon & Elongated Hexagon Quilted pattern arranged in vertical pattern on the center panel highlighted by side piping defining the side bolsters.',
    tag: 'Artisan Stitching',
    badge: 'Piped Bolsters',
    previewHex: '#351f22',
    accentHex: '#e5a5a5',
  },
  {
    num: '06',
    code: 'RS-06',
    title: '“RACETRACK” ACCENT STRIP',
    pattern: 'Horizontal Performance Strip',
    desc: 'Featuring a horizontal “Racetrack” Accent Strip running across the center panel giving the seats a modern performance-oriented aesthetic.',
    tag: 'Track Inspired',
    badge: 'Sport Spec',
    previewHex: '#181b22',
    accentHex: '#c73b3b',
  },
]

// ─── The Color Range ────────────────────────────────────────────────────────
export const COLOR_RANGE = [
  { name: 'BLACK',         hex: '#18181b', textColor: '#ffffff', note: 'Deep Obsidian Satin' },
  { name: 'TAN',           hex: '#b36d37', textColor: '#ffffff', note: 'Warm Tuscan Tan' },
  { name: 'BEIGE',         hex: '#FFE7C2', textColor: '#262729', note: 'Signature Sahora Beige' },
  { name: 'CAMEL',         hex: '#c19a6b', textColor: '#262729', note: 'Rich Safari Camel' },
  { name: 'DARK GREY',     hex: '#3f4247', textColor: '#ffffff', note: 'Graphite Charcoal' },
  { name: 'CRETA GREY',    hex: '#5f646d', textColor: '#ffffff', note: 'OEM Creta Grey' },
  { name: 'ICE GREY',      hex: '#d1d5db', textColor: '#1f2937', note: 'Cool Glacier Tone' },
  { name: 'BETTLENUT',     hex: '#5c3317', textColor: '#ffffff', note: 'Natural Bettlenut Wood' },
  { name: 'CHESTNUT',      hex: '#693829', textColor: '#ffffff', note: 'Deep Roast Chestnut' },
  { name: 'MAROON',        hex: '#631e28', textColor: '#ffffff', note: 'Imperial Royal Maroon' },
  { name: 'WINE',          hex: '#4a1525', textColor: '#ffffff', note: 'Burgundy Reserve' },
  { name: 'BLUE',          hex: '#1e3a8a', textColor: '#ffffff', note: 'Nautical Navy Blue' },
  { name: 'RED',           hex: '#991b1b', textColor: '#ffffff', note: 'Rosso Corsa Sport' },
  { name: 'LIGHT GREEN',   hex: '#65a30d', textColor: '#ffffff', note: 'Olive Sage Green' },
  { name: 'PERSIAN GREEN', hex: '#0d9488', textColor: '#ffffff', note: 'Emerald Persian Teal' },
  { name: 'WHITE',         hex: '#f8fafc', textColor: '#1e293b', note: 'Ultra Pure Nappa' },
]

// ─── On Order Commissioned Designs (SH Series) ──────────────────────────────
export const ON_ORDER_DESIGNS = [
  { code: 'SH - 01', type: 'Diamond Pleat', trim: 'Executive Dual-Tone' },
  { code: 'SH - 02', type: 'French Seam Curve', trim: 'Perforated Center' },
  { code: 'SH - 03', type: 'Ribbed Channel', trim: 'Tuck & Roll Retro' },
  { code: 'SH - 04', type: 'Honeycomb Wave', trim: 'High-Density Foam' },
  { code: 'SH - 05', type: 'Double Chevron', trim: 'Contrast Bolster' },
  { code: 'SH - 06', type: 'Dynamic Contour', trim: 'Sport Perimeter' },
  { code: 'SH - 07', type: 'Grid Matrix', trim: 'Micro-Perforated' },
  { code: 'SH - 08', type: 'Arrowhead Quilt', trim: 'Aesthetic Piping' },
  { code: 'SH - 09', type: 'GT Split Stripe', trim: 'Alcantara Center' },
  { code: 'SH - 10', type: 'Lombardy Lattice', trim: 'Nappa Smooth' },
  { code: 'SH - 11', type: 'Monaco Fluted', trim: 'Luxury Padding' },
  { code: 'SH - 12', type: 'Diamond Rib', trim: 'Embroidered Border' },
  { code: 'SH - 13', type: 'Linear Barcode', trim: 'Modern Minimal' },
  { code: 'SH - 14', type: 'Triple Stripe', trim: 'Heritage Racing' },
  { code: 'SH - 15', type: 'Hexagon Micro', trim: 'Dual Color Thread' },
  { code: 'SH - 16', type: 'Hourglass Weave', trim: 'Ergonomic Support' },
  { code: 'SH - 17', type: 'Asymmetrical Slash', trim: 'Avant-Garde' },
  { code: 'SH - 18', type: 'Crosshatch Royal', trim: 'Deep Tufted' },
  { code: 'SH - 19', type: 'Crest Hex', trim: 'Laser Precision' },
  { code: 'SH - 20', type: 'Centurion Flute', trim: 'OEM Luxury Match' },
  { code: 'SH - 21', type: 'Veloce Mesh', trim: 'Breathable Core' },
  { code: 'SH - 22', type: 'Apex Quilt', trim: 'Double Needle Edge' },
  { code: 'SH - 23', type: 'Stuttgart Diamond', trim: 'Prestige Grade' },
  { code: 'SH - 24', type: 'Torino Fluted Rib', trim: 'Ultra Bolster' },
  { code: 'SH - 25', type: 'Cascading Hex', trim: 'Gradient Spacing' },
  { code: 'SH - 26', type: 'Stratos Panel', trim: 'Two-Tone Splice' },
  { code: 'SH - 27', type: 'Signature Crest', trim: 'Custom Logo Emboss' },
  { code: 'SH - 28', type: 'Modena Diamond II', trim: 'Contrast Underlay' },
  { code: 'SH - 29', type: 'Nurburg Wave', trim: 'Lateral Grip' },
  { code: 'SH - 30', type: 'Executive Split', trim: 'Piped Seam Line' },
  { code: 'SH - 31', type: 'Imperial Quilt', trim: 'Hand-Crafted Seam' },
  { code: 'SH - 32', type: 'Bavarian Flute', trim: 'Sub-Flush Channel' },
  { code: 'SH - 33', type: 'Matrix Micro-Grid', trim: 'Aerated Nappa' },
  { code: 'SH - 34', type: 'Kevlar Texture Pattern', trim: 'High Abrasion' },
  { code: 'SH - 35', type: 'Monolith Sport', trim: 'Integrated Headrest' },
  { code: 'SH - 36', type: 'Presidential Diamond', trim: 'Zero-Sag Base' },
  { code: 'SH - 3D', type: '3D PERFORATION SPECIALTY', trim: 'True 3D Climate Airflow Core', isSpecial: true },
]

// ─── Associated Brands & Sister Products ────────────────────────────────────
export const SISTER_BRANDS = [
  {
    name: 'MOTOPEP',
    subtitle: 'Automotive Comfort & Interior Floor Systems',
    focus: 'Car Seat Covers (Low Quality to Premium), Floor Matting, Memory Foam Products',
    items: [
      'Universal & Tailored Seat Covers across price segments',
      'High-Grade All-Weather Floor Matting Systems',
      'Memory Foam Headrests, Backrests & Lumbar Cushions',
      'Driver Comfort Ergonomic Kits',
    ],
    tag: 'Comfort & Utility',
  },
  {
    name: 'SIGMA',
    subtitle: 'Surface Protection Films & Precision Performance Parts',
    focus: 'Car Interior Precut PPF Kits, Exterior TPU PPF, Nano Ceramic Sun Film Kits & Spare Parts',
    instagram: '@sigmappf',
    items: [
      'Car Interior Precut Laser PPF Kits (Screen, Consoles, Piano Black)',
      'Car Exterior PPF: TPU Ultra Gloss, TPU Matte, TPU Gloss Black',
      'TPU Colour Series, TPU Satin Clear & OG Carbon Fibre PPF',
      'Nano Ceramic Sun Film Kits (5%, 35%, 50% VLT Regulations)',
      'Curated Premium Auto Spare Parts',
    ],
    tag: 'Advanced PPF & Tint',
  },
]

// ─── Complete Vehicle Compatibility Database ─────────────────────────────────
export const VEHICLE_DATABASE = {
  'Tata': [
    'Sierra', 'Punch', 'Aeris', 'Nexon', 'Tiago', 'Harrier', 
    'Punch EV', 'Altroz', 'Curvv', 'Safari', 'Old Altroz', 'Old Nexon'
  ],
  'Suzuki (Maruti)': [
    'Brezza', 'Fronx / Baleno', 'Swift', 'Dzire', 'Victoris', 'Grand Vitara', 
    'Ertiga', 'Wagon-R', 'XL6', 'Old Baleno', 'Old Wagon-R', 'Old Brezza', 
    'Old Ertiga', 'Old Swift', 'Old Dzire', 'Alto K10', 'Celerio', 'S-Presso', 'Eeco', 'Jimny'
  ],
  'Mahindra': [
    '7XO', 'Thar OG / Thar', 'Thar Roxx', '3XO', 'Scorpio-N', 
    'XEV 9e', 'Scorpio', 'Bolero Neo'
  ],
  'Hyundai': [
    'Creta', 'Venue', 'Exter', 'Nios', 'i20', 'Verna', 
    'Old Venue', 'Old Creta', 'Old Grand i10', 'Old Santro', 'Elite i20', 'Aura'
  ],
  'Toyota': [
    'Glanza / Taisor', 'Hyryder', 'Hycross', 'Crysta', 'Rumion', 'Old Innova'
  ],
  'Kia': [
    'Seltos', 'Sonet', 'Carens', 'Syros', 'Old Seltos'
  ],
  'Skoda / Volkswagen': [
    'Slavia / Kylaq / Kushaq', 'Virtus / Taigun'
  ],
  'MG': [
    'Comet'
  ],
  'Renault': [
    'Triber', 'Kwid', 'Kiger', 'Duster'
  ],
  'Honda': [
    'Amaze - 2nd gen', 'New Amaze', 'Elevate', 'Old City - IVTEC', 'Old City - IDTEC'
  ],
  'Nissan': [
    'Magnite', 'Gravite'
  ],
}

// ─── Plant & Craftsmanship Facts ────────────────────────────────────────────
export const STATS = [
  { value: '38,942+', label: 'Delivered in South India' },
  { value: '3 Hubs',   label: 'Hyd • Vja • Vizag' },
  { value: '37 Designs', label: 'Ready + Bespoke SH Series' },
  { value: '500+ Cars',  label: 'Direct Laser Digital Templates' },
]

export const STEPS = [
  {
    title: '1. CNC Computerized Pattern Cut',
    text: 'Laser digital mapping guarantees every bolster, headrest, and armrest conforms to factory specifications.',
  },
  {
    title: '2. High-Tension Precision Stitching',
    text: 'Japanese computerized twin-needle embroidery ensures geometric quilt symmetry roll after roll.',
  },
  {
    title: '3. Physical Vehicle Seat Frame Inspection',
    text: 'Every batch is fit-tested on actual vehicle seat frames for seamless split and airbag safety.',
  },
  {
    title: '4. Vacuum Sealed & Dispatched',
    text: 'Inspected, sealed with installation fittings, and express dispatched across Andhra Pradesh & Telangana.',
  },
]
