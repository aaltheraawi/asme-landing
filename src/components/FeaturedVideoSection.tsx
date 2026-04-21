import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

const FEATURED_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const v = videoRef.current
    if (!v) return
    setPlaying(true)
    v.play().catch(() => {})
  }

  return (
    <section className="bg-black px-6 pb-24 md:pb-32">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Label */}
        <motion.p
          className="text-white/40 text-xs uppercase tracking-[0.2em] mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Featured
        </motion.p>

        {/* Video container */}
        <motion.div
          className="relative w-full rounded-2xl overflow-hidden bg-white/5"
          style={{ aspectRatio: '16 / 9' }}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <video
            ref={videoRef}
            src={FEATURED_VIDEO}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            loop
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {/* Overlay / play button */}
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={handlePlay}
                aria-label="Play video"
                className="liquid-glass rounded-full p-6 text-white hover:bg-white/10 transition-colors"
              >
                <Play size={28} fill="white" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-white/30 text-sm mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          Asme — Know it then all.
        </motion.p>
      </div>
    </section>
  )
}
