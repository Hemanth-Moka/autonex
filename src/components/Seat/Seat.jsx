/**
 * SVG car seat illustration with dynamic colour, stitch, and material texture.
 * Controlled externally via props — no local state.
 */
export default function Seat({ color, stitch, material }) {
  const grain =
    material === 'fabric' ? 'url(#weave)' :
    material === 'pvc'    ? 'url(#pebble)' :
    null

  return (
    <svg
      className="seat"
      viewBox="0 0 400 460"
      role="img"
      aria-label={`Car seat in ${color.label} ${material}`}
    >
      <defs>
        {/* Fabric texture */}
        <pattern id="weave" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0L6 6M6 0L0 6" stroke="rgba(255,255,255,.07)" strokeWidth="1" />
        </pattern>

        {/* PVC texture */}
        <pattern id="pebble" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,.07)" />
          <circle cx="6" cy="6" r="1" fill="rgba(255,255,255,.05)" />
        </pattern>

        {/* Highlight sheen */}
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0"   stopColor="rgba(255,255,255,.22)" />
          <stop offset=".45" stopColor="rgba(255,255,255,0)"   />
          <stop offset="1"   stopColor="rgba(0,0,0,.35)"       />
        </linearGradient>
      </defs>

      {/* Headrest */}
      <rect x="150" y="20"  width="100" height="76" rx="34" fill={color.hex}     />
      <rect x="150" y="20"  width="100" height="76" rx="34" fill="url(#sheen)"   />
      <rect x="196" y="92"  width="8"   height="30"          fill="#2a2a2c"       />

      {/* Backrest */}
      <path d="M92 150c0-30 22-48 52-48h112c30 0 52 18 52 48l12 168H80z"          fill={color.hex}   />
      {grain && <path d="M92 150c0-30 22-48 52-48h112c30 0 52 18 52 48l12 168H80z" fill={grain}      />}
      <path d="M92 150c0-30 22-48 52-48h112c30 0 52 18 52 48l12 168H80z"          fill="url(#sheen)" />

      {/* Bolster stitching */}
      <path d="M118 120c-14 40-18 120-14 190" stroke={stitch} strokeWidth="2" strokeDasharray="6 6" fill="none" opacity=".85" />
      <path d="M282 120c14 40 18 120 14 190"  stroke={stitch} strokeWidth="2" strokeDasharray="6 6" fill="none" opacity=".85" />

      {/* Channel stitching */}
      {[160, 200, 240].map((x) => (
        <path key={x} d={`M${x} 130V300`} stroke={stitch} strokeWidth="2" strokeDasharray="6 6" opacity=".55" />
      ))}

      {/* Cushion */}
      <path d="M64 330c0-18 14-26 34-26h204c20 0 34 8 34 26v52c0 18-14 28-34 28H98c-20 0-34-10-34-28z" fill={color.hex}   />
      {grain && <path d="M64 330c0-18 14-26 34-26h204c20 0 34 8 34 26v52c0 18-14 28-34 28H98c-20 0-34-10-34-28z" fill={grain} />}
      <path d="M64 330c0-18 14-26 34-26h204c20 0 34 8 34 26v52c0 18-14 28-34 28H98c-20 0-34-10-34-28z" fill="url(#sheen)" />

      {/* Cushion stitching */}
      <path d="M86 336h228" stroke={stitch} strokeWidth="2" strokeDasharray="6 6" opacity=".85" />
      <path d="M86 380h228" stroke={stitch} strokeWidth="2" strokeDasharray="6 6" opacity=".55" />

      {/* Base rail */}
      <rect x="120" y="414" width="160" height="14" rx="7" fill="#2a2a2c" />
    </svg>
  )
}
