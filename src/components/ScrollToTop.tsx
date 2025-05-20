// src/components/ScrollToTop.tsx
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
if (hash) {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView()
    }
    } else {
    window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
