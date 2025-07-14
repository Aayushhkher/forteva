'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, ExternalLink, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const tools = [
  {
    id: 1,
    name: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials.',
    icon: '🤖',
    category: 'AI Tools',
    demoUrl: '#',
    price: '$29/month'
  },
  {
    id: 2,
    name: 'Data Analytics Dashboard',
    description: 'Real-time analytics and insights with beautiful visualizations.',
    icon: '📊',
    category: 'Analytics',
    demoUrl: '#',
    price: '$49/month'
  },
  {
    id: 3,
    name: 'Customer Support Bot',
    description: '24/7 intelligent customer support with natural language processing.',
    icon: '💬',
    category: 'Automation',
    demoUrl: '#',
    price: '$39/month'
  },
  {
    id: 4,
    name: 'SEO Optimizer',
    description: 'AI-powered SEO analysis and optimization recommendations.',
    icon: '🔍',
    category: 'Marketing',
    demoUrl: '#',
    price: '$25/month'
  },
  {
    id: 5,
    name: 'Code Review Assistant',
    description: 'Automated code review and quality assurance for development teams.',
    icon: '💻',
    category: 'Development',
    demoUrl: '#',
    price: '$59/month'
  },
  {
    id: 6,
    name: 'Financial Forecasting',
    description: 'Predictive analytics for financial planning and risk assessment.',
    icon: '📈',
    category: 'Finance',
    demoUrl: '#',
    price: '$79/month'
  }
]

export function SubscriptionToolsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="section-padding bg-forteva-base">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-6">
            <span className="gradient-text">Subscription</span>{' '}
            <span className="text-forteva-cta">Tools</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-3xl mx-auto">
            Access our premium AI-powered tools and automation solutions. 
            Start with a free trial and scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(tool.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full p-6 rounded-2xl glassmorphism hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-forteva-accent/20 to-forteva-button/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tool icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forteva-button to-forteva-accent flex items-center justify-center text-2xl">
                    {tool.icon}
                  </div>
                </div>

                {/* Category badge */}
                <div className="relative z-10 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-forteva-accent/20 text-forteva-text text-xs font-medium">
                    {tool.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-futuristic font-semibold mb-2 text-forteva-cta">
                    {tool.name}
                  </h3>
                  <p className="text-forteva-text/70 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-forteva-cta font-semibold">{tool.price}</span>
                    <Zap className="w-4 h-4 text-forteva-text/50" />
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="flex-1 group/btn"
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>

                {/* Hover overlay */}
                {hoveredCard === tool.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl border border-forteva-cta/30 bg-forteva-cta/5"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl glassmorphism">
            <h3 className="text-2xl font-futuristic font-bold mb-4 text-forteva-cta">
              Ready to Get Started?
            </h3>
            <p className="text-forteva-text/80 mb-6 max-w-2xl">
              Join thousands of businesses already using FORTEVA.TECH tools 
              to accelerate their growth and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                View All Tools
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 