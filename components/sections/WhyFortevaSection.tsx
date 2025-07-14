'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startCount = 0
    const increment = end / (duration * 60) // 60fps

    const timer = setInterval(() => {
      setCount((prev: number) => {
        if (prev >= end) {
          clearInterval(timer)
          return end
        }
        return prev + increment
      })
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{Math.floor(count).toLocaleString()}+</span>
}

export function WhyFortevaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { label: 'Projects Done', value: 10, suffix: '+' },
    { label: 'Live Tools', value: 5, suffix: '' }
  ]

  return (
    <section ref={ref} className="section-padding bg-forteva-base">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats and Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
                <span className="gradient-text">Why</span>{' '}
                <span className="text-forteva-cta">FORTEVA?</span>
              </h2>
              <p className="text-lg text-forteva-text/80 leading-relaxed">
                We combine cutting-edge AI technology with elegant design to deliver 
                solutions that not only work flawlessly but also look stunning. 
                Our team of experts ensures every project exceeds expectations.
              </p>
            </div>

            {/* Dynamic Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl glassmorphism"
                >
                  <div className="text-3xl font-futuristic font-bold text-forteva-cta mb-2">
                    {isInView ? <Counter end={stat.value} /> : '0'}
                    {stat.suffix}
                  </div>
                  <div className="text-forteva-text/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                'AI-Powered Solutions',
                '24/7 Expert Support',
                'Custom Development',
                'Scalable Architecture'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-forteva-cta" />
                  <span className="text-forteva-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Cube Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] lg:h-[500px] relative flex items-center justify-center"
          >
            <div className="w-64 h-64 rounded-lg bg-gradient-to-br from-forteva-accent/20 to-forteva-button/20 flex items-center justify-center">
              <div className="text-6xl animate-spin-slow">⚡</div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-forteva-cta/20 to-forteva-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 