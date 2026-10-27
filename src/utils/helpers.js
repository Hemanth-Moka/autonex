import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently scrolled into view.
 * @param {string[]} ids - Array of section element IDs to observe.
 * @returns {string} The ID of the currently visible section.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])

  return active
}

/**
 * Smoothly scrolls to a section by ID.
 * @param {string} id - The target element ID.
 */
export function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
