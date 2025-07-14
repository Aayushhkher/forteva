'use client'

import { motion } from 'framer-motion'
import { Calendar, Target, Users, Zap } from 'lucide-react'

export function AboutUsSection() {
  return (
    <section id="about" className="section-padding bg-forteva-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
            <span className="gradient-text">About</span>{' '}
            <span className="text-forteva-cta">FORTEVA</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-3xl mx-auto">
            We're on a mission to democratize high-end technology and make premium tools 
            accessible to everyone, regardless of their budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-futuristic font-bold mb-4 text-forteva-cta">
                Our Story
              </h3>
              <p className="text-forteva-text/80 leading-relaxed mb-6">
                Founded in July 2025, FORTEVA.TECH was born from a simple yet powerful vision: 
                to bridge the gap between enterprise-grade technology and everyday users. We believe 
                that cutting-edge tools shouldn't be reserved only for those with deep pockets.
              </p>
              <p className="text-forteva-text/80 leading-relaxed">
                Our team of passionate developers and designers work tirelessly to create solutions 
                that rival the most expensive enterprise tools, but at a fraction of the cost. 
                We're committed to making technology work for everyone.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl glassmorphism">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forteva-button to-forteva-accent flex items-center justify-center">
                    <Target className="w-5 h-5 text-forteva-cta" />
                  </div>
                  <h4 className="text-lg font-futuristic font-semibold text-forteva-cta">
                    Our Vision
                  </h4>
                </div>
                <p className="text-forteva-text/80">
                  To provide high-end, expensive tech tools to everyone at an affordable price for all.
                </p>
              </div>

              <div className="p-6 rounded-xl glassmorphism">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forteva-accent to-forteva-button flex items-center justify-center">
                    <Zap className="w-5 h-5 text-forteva-cta" />
                  </div>
                  <h4 className="text-lg font-futuristic font-semibold text-forteva-cta">
                    Our Mission
                  </h4>
                </div>
                <p className="text-forteva-text/80">
                  Democratizing technology by creating premium solutions that are accessible, 
                  affordable, and powerful for businesses of all sizes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Company Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Founding Date */}
            <div className="p-6 rounded-xl glassmorphism">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forteva-button to-forteva-accent flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-forteva-cta" />
                </div>
                <div>
                  <h4 className="text-lg font-futuristic font-semibold text-forteva-cta">
                    Founded
                  </h4>
                  <p className="text-sm text-forteva-text/60">July 2025</p>
                </div>
              </div>
              <p className="text-forteva-text/80">
                A fresh start with a bold vision to transform how businesses access technology.
              </p>
            </div>

            {/* What We Do */}
            <div className="p-6 rounded-xl glassmorphism">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forteva-accent to-forteva-button flex items-center justify-center">
                  <Users className="w-5 h-5 text-forteva-cta" />
                </div>
                <div>
                  <h4 className="text-lg font-futuristic font-semibold text-forteva-cta">
                    What We Do
                  </h4>
                  <p className="text-sm text-forteva-text/60">Technology Democratization</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forteva-cta" />
                  <span className="text-forteva-text/80 text-sm">AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forteva-cta" />
                  <span className="text-forteva-text/80 text-sm">Custom Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forteva-cta" />
                  <span className="text-forteva-text/80 text-sm">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forteva-cta" />
                  <span className="text-forteva-text/80 text-sm">Enterprise Quality</span>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="p-6 rounded-xl glassmorphism">
              <h4 className="text-lg font-futuristic font-semibold text-forteva-cta mb-4">
                Our Values
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-forteva-accent/10">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-medium text-forteva-cta">Quality</div>
                  <div className="text-xs text-forteva-text/60">Premium Standards</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-forteva-accent/10">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm font-medium text-forteva-cta">Accessibility</div>
                  <div className="text-xs text-forteva-text/60">Affordable for All</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-forteva-accent/10">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-medium text-forteva-cta">Innovation</div>
                  <div className="text-xs text-forteva-text/60">Cutting-Edge Tech</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-forteva-accent/10">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="text-sm font-medium text-forteva-cta">Community</div>
                  <div className="text-xs text-forteva-text/60">Supporting Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 