import { useEffect, useRef, useState, type ReactNode } from 'react'

type Item = { title: string; description: string; theme: string; href: string; action: string; logo: ReactNode; tags: string[] }

// Opposed vertical panels inspired by Prompt 4, driven by natural page scroll.
// No wheel/key interception: touch, keyboard and anchor navigation keep working.
export default function AnimatedScroll({ items }: { items: Item[] }) {
  const root = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [enhanced, setEnhanced] = useState(false)
  useEffect(() => {
    const media = matchMedia('(min-width: 901px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)')
    const change = () => setEnhanced(media.matches)
    change()
    media.addEventListener('change', change)
    return () => media.removeEventListener('change', change)
  }, [])
  useEffect(() => {
    if (!enhanced) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = root.current?.getBoundingClientRect()
      if (!rect) return
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - innerHeight)))
      setActive(Math.min(items.length - 1, Math.floor(progress * items.length)))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    addEventListener('scroll', schedule, { passive: true })
    addEventListener('resize', schedule)
    return () => { cancelAnimationFrame(frame); removeEventListener('scroll', schedule); removeEventListener('resize', schedule) }
  }, [enhanced, items.length])
  return <div ref={root} className={`split-scroll ${enhanced ? 'enhanced' : ''}`} style={enhanced ? { height: `${items.length * 100}vh` } : undefined}>
    <div className="split-stage">{items.map((item, index) => <article key={item.title} className={`split-page ${item.theme} ${index === active ? 'is-active' : ''}`} inert={enhanced && index !== active} aria-hidden={enhanced && index !== active}>
      <div className="split-logo">{item.logo}</div>
      <div className="split-copy"><p className="section-kicker">{index === 0 ? 'O primeiro passo' : index === 1 ? 'Novos caminhos' : 'O próximo grande objetivo'}</p><h3>{item.title}</h3><p>{item.description}</p><ul>{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul><a href={item.href}>{item.action} ↗</a></div>
    </article>)}</div>
  </div>
}
