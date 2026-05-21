import { useEffect, useRef, useState } from 'react'
import useReducedMotion from './useReducedMotion.js'

function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  const reducedMotion = useReducedMotion()
  const visible = reducedMotion || seen

  useEffect(() => {
    if (reducedMotion) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion, threshold])

  return { ref, visible }
}

export default useReveal
