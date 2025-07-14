'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const projectCategories = [
  {
    id: 1,
    title: 'NETSCAN',
    description: 'Live time network analyzer for real-time monitoring and analysis',
    icon: '🌐',
    examples: ['Real-time Network Monitoring', 'Traffic Analysis', 'Security Alerts'],
    features: ['Live Network Monitoring', 'Traffic Visualization', 'Security Alerts', 'Performance Analytics'],
    status: 'Live',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    title: 'PLUMBER BOOKING',
    description: 'Multi-dashboard system for booking plumbers and service providers',
    icon: '🔧',
    examples: ['Customer Dashboard', 'Provider Management', 'Booking System'],
    features: ['Customer Dashboard', 'Provider Management', 'Real-time Booking', 'Payment Integration'],
    status: 'Demo',
    color: 'from-green-500/20 to-emerald-500/20'
  }
]

export function CustomProjectsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="projects" className="section-padding bg-forteva-card/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
            <span className="gradient-text">Our</span>{' '}
            <span className="text-forteva-cta">Projects</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-3xl mx-auto">
            Explore our latest projects showcasing cutting-edge technology solutions. 
            All projects are available for free trial in the first month.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Categories Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden glassmorphism">
              {projectCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: activeCategory === index ? 1 : 0,
                    scale: activeCategory === index ? 1 : 0.8,
                    zIndex: activeCategory === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-8 flex flex-col justify-center"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{category.icon}</div>
                    
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forteva-accent/20 text-forteva-text text-xs font-medium mb-4">
                      <div className={`w-2 h-2 rounded-full ${category.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                      {category.status}
                    </div>
                    
                    <h3 className="text-2xl font-futuristic font-bold mb-3 text-forteva-cta">
                      {category.title}
                    </h3>
                    <p className="text-forteva-text/80 mb-4">
                      {category.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {category.features.map((feature, i) => (
                        <div key={i} className="text-xs text-forteva-text/60 bg-forteva-accent/10 rounded-lg p-2">
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Examples */}
                    <div className="space-y-1">
                      {category.examples.map((example, i) => (
                        <div key={i} className="text-sm text-forteva-text/70">
                          • {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {projectCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCategory === index 
                      ? 'bg-forteva-cta scale-125' 
                      : 'bg-forteva-text/30 hover:bg-forteva-text/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Conversational Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
                          <div className="p-8 rounded-2xl glassmorphism">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forteva-button to-forteva-accent flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-forteva-cta" />
                  </div>
                  <div>
                    <h3 className="font-futuristic font-semibold text-forteva-cta">
                      Free Trial
                    </h3>
                    <p className="text-sm text-forteva-text/60">
                      Try our projects for free
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-forteva-accent/10 to-forteva-button/10 border border-forteva-accent/20">
                    <h4 className="font-futuristic font-semibold text-forteva-cta mb-2">
                      🎉 First Month Free
                    </h4>
                    <p className="text-sm text-forteva-text/70">
                      All projects are available for free trial in the first month. 
                      No credit card required, no hidden fees.
                    </p>
                  </div>

                  {/* Project Cards */}
                  <div className="space-y-3">
                    {projectCategories.map((project, index) => (
                      <div key={index} className="p-3 rounded-lg bg-forteva-accent/5 border border-forteva-accent/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{project.icon}</span>
                            <span className="font-medium text-forteva-cta">{project.title}</span>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </div>
                        </div>
                        <p className="text-xs text-forteva-text/60 mb-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.features.slice(0, 2).map((feature, i) => (
                            <span key={i} className="text-xs text-forteva-text/50 bg-forteva-accent/10 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-sm text-forteva-text/60">
                      Ready to get started?
                    </div>
                    <Button 
                      size="sm"
                      className="group"
                    >
                      Start Free Trial
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>


          </motion.div>
        </div>
      </div>
    </section>
  )
} 