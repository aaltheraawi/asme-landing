import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, BookOpen, Globe, BarChart2, Users, Mail } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Daily Briefings',
    desc: 'Curated morning and evening digests distilled from 6,000+ sources.',
  },
  {
    icon: Zap,
    title: 'Real-Time Alerts',
    desc: 'Breaking signal notifications the moment something material happens.',
  },
  {
    icon: BarChart2,
    title: 'Deep Analysis',
    desc: 'Long-form research reports on the trends reshaping industries.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    desc: 'Multilingual monitoring across 80+ countries in 14 languages.',
  },
  {
    icon: Users,
    title: 'Expert Network',
    desc: 'Exclusive commentary from practitioners, not just commentators.',
  },
  {
    icon: Mail,
    title: 'Newsletter',
    desc: 'One weekly email — the most important story, fully contextualised.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-black px-6 pb-32 md:pb-48">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          What We Do
        </motion.p>

        {/* Section heading */}
        <motion.h2
          className="text-4xl md:text-6xl text-white leading-[1.05] tracking-tight mb-14 md:mb-18 max-w-lg"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          Every format you <em className="italic">need</em>.
        </motion.h2>

        {/* Service cards grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="liquid-glass rounded-2xl p-7 flex flex-col gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-white/70 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p
                  className="text-white text-base font-medium mb-1"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {title}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          <p
            className="text-white/40 text-sm mb-2"
          >
            Ready to know it all?
          </p>
          <p
            className="text-white text-2xl md:text-3xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Start for free — no credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
