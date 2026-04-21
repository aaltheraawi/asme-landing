import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          About Us
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight max-w-3xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          We build tools that help you{' '}
          <em className="italic">understand</em> the world.
        </motion.h2>

        {/* Body copy */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.p
            className="text-white/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Asme is a next-generation knowledge platform designed to cut through
            the noise. We aggregate, analyse, and distil the signals that matter
            — from finance and geopolitics to science and culture — so you always
            have the full picture.
          </motion.p>
          <motion.p
            className="text-white/60 text-base leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            Our editorial team pairs deep domain expertise with AI-assisted
            research to surface context you won't find elsewhere. Trusted by
            analysts, executives, and curious minds in over 40 countries.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.hr
          className="border-white/10 mt-16 md:mt-20"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        />
      </div>
    </section>
  )
}
