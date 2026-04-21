import { useRef, useEffect } from 'react'
import { Globe, ArrowRight, Instagram, Twitter } from 'lucide-react'
import AboutSection from './components/AboutSection'
import FeaturedVideoSection from './components/FeaturedVideoSection'
import PhilosophySection from './components/PhilosophySection'
import ServicesSection from './components/ServicesSection'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    /* Local RAF handle + fade-out guard */
    let rafId: number | null = null
    let fadingOut = false

    video.style.opacity = '0'

    /* Animates opacity from `from` → `to` over `duration` ms using RAF.
       No CSS transitions — vanilla JS only as per spec. */
    function animateOpacity(
      from: number,
      to: number,
      duration: number,
      onDone?: () => void,
    ) {
      if (rafId !== null) cancelAnimationFrame(rafId)
      const t0 = performance.now()
      function step(now: number) {
        const progress = Math.min((now - t0) / duration, 1)
        video!.style.opacity = String(from + (to - from) * progress)
        if (progress < 1) {
          rafId = requestAnimationFrame(step)
        } else {
          rafId = null
          onDone?.()
        }
      }
      rafId = requestAnimationFrame(step)
    }

    /* On canplay: play + fade in */
    function handleCanPlay() {
      video!.play().catch(() => {})
      animateOpacity(0, 1, 500)
    }

    /* On timeupdate: when ≤ 0.55 s remain, start fade-out once */
    function handleTimeUpdate() {
      if (
        video!.duration &&
        video!.duration - video!.currentTime <= 0.55 &&
        !fadingOut
      ) {
        fadingOut = true
        const current = parseFloat(video!.style.opacity || '1')
        animateOpacity(current, 0, 500)
      }
    }

    /* On ended: reset opacity, wait 100 ms, restart + fade in */
    function handleEnded() {
      fadingOut = false
      video!.style.opacity = '0'
      setTimeout(() => {
        video!.currentTime = 0
        video!.play().catch(() => {})
        animateOpacity(0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="bg-black">
      {/* ═══════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">

        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          src={HERO_VIDEO}
          muted
          autoPlay
          playsInline
          preload="auto"
          style={{ opacity: 0 }}
        />

        {/* Navbar */}
        <nav className="relative z-20 px-6 py-6">
          <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">

            {/* Left: logo + nav links */}
            <div className="flex items-center">
              <Globe size={24} className="text-white flex-shrink-0" />
              <span className="text-white font-semibold text-lg ml-2">Asme</span>
              <div className="hidden md:flex items-center gap-8 ml-8">
                {['Features', 'Pricing', 'About'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: auth buttons */}
            <div className="flex items-center gap-4">
              <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">
                Sign Up
              </button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">

          <h1
            className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Know it then <em className="italic">all</em>.
          </h1>

          {/* Email capture */}
          <div className="max-w-xl w-full mt-10">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm min-w-0"
              />
              <button className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors flex-shrink-0">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-white text-sm leading-relaxed px-4 mt-6 max-w-md">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>

          {/* Manifesto CTA */}
          <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors mt-6">
            Read our Manifesto
          </button>
        </div>

        {/* Social icons row */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          {[
            { icon: Instagram, label: 'Instagram' },
            { icon: Twitter,   label: 'Twitter'   },
            { icon: Globe,     label: 'Website'   },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </section>

      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </div>
  )
}
