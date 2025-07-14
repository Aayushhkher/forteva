'use client'

import { motion } from 'framer-motion'
import { Bot, BarChart3, Globe, Brain } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const services = [
  {
    icon: Bot,
    title: 'AI Bots & Automation',
    description: 'Intelligent chatbots and workflow automation solutions that streamline your business processes.',
    features: ['24/7 Customer Support', 'Process Automation', 'Smart Workflows', 'Multi-language Support'],
    color: 'from-forteva-accent to-forteva-button',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: BarChart3,
    title: 'Custom Dashboards',
    description: 'Beautiful, interactive data visualizations and analytics dashboards tailored to your needs.',
    features: ['Real-time Analytics', 'Interactive Charts', 'Custom KPIs', 'Mobile Responsive'],
    color: 'from-forteva-button to-forteva-accent',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Globe,
    title: 'Full-stack Websites',
    description: 'Modern, responsive websites and e-commerce platforms built with cutting-edge technology.',
    features: ['SEO Optimized', 'Fast Loading', 'E-commerce Ready', 'Cloud Hosted'],
    color: 'from-forteva-accent to-forteva-button',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Brain,
    title: 'ML Models on Demand',
    description: 'Custom machine learning models and AI solutions designed for your specific use cases.',
    features: ['Predictive Analytics', 'NLP Processing', 'Computer Vision', 'Auto-scaling'],
    color: 'from-forteva-button to-forteva-accent',
    gradient: 'from-orange-500/20 to-red-500/20'
  }
]

export function WhatWeOfferSection() {
  return (
    <section id="services" className="section-padding bg-forteva-card/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
            <span className="gradient-text">What We</span>{' '}
            <span className="text-forteva-cta">Offer</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business 
            and accelerate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl glassmorphism hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-forteva-cta" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-futuristic font-semibold mb-3 text-forteva-cta">
                    {service.title}
                  </h3>
                  <p className="text-forteva-text/70 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-forteva-cta" />
                        <span className="text-xs text-forteva-text/60">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="w-full group/btn"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-forteva-cta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 