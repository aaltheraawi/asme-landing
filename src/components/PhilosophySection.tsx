import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    label: 'Innovation',
    heading: 'Ahead of the curve.',
    body: 'We invest in technology that finds patterns humans miss — indexing thousands of sources in real time so insights reach you before the market moves.',
  },
  {
    label: 'Vision',
    heading: 'The long view.',
    body: 'Short-term noise fades. We help you build a durable mental model of the forces shaping the next decade — geopolitical, economic, and technological.',
  },
]

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black px-6 pb-28 md:pb-40">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.2em] mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Philosophy
        </motion.p>

        {/* Two-column pillar cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              className="liquid-glass rounded-2xl p-8 md:p-10 flex flex-col gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.12,
              }}
            >
              <span className="text-white/40 text-xs uppercase tracking-[0.18em]">
                {p.label}
              </span>
              <h3
                className="text-2xl md:text-3xl text-white leading-snug"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {p.heading}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Big statement */}
        <motion.blockquote
          className="mt-16 md:mt-20 text-3xl md:text-5xl text-white/80 leading-snug tracking-tight max-w-3xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
        >
          "The best-informed person in the room is rarely the loudest — they're
          the most{' '}
          <em className="italic text-white">prepared</em>."
        </motion.blockquote>
      </div>
    </section>
  )
}
