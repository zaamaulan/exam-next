import { useEffect, useRef, useState } from 'react'

export const useElementSize = (box: 'content' | 'border' = 'content') => {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return

      const boxSize = entry.borderBoxSize?.[0]
      const contentSize = entry.contentRect

      setSize({
        width: box === 'border' ? boxSize?.inlineSize || contentSize.width : contentSize.width,
        height: box === 'border' ? boxSize?.blockSize || contentSize.height : contentSize.height,
      })
    })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [box])

  return { ref, ...size }
}
