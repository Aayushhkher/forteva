'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const plans = [
  {
    name: 'Free Tier',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with AI tools',
    features: [
      '5 AI content generations per month',
      'Basic analytics dashboard',
      'Community support',
      'Limited API access'
    ],
    popular: false,
    gradient: 'from-forteva-text/20 to-forteva-accent/20'
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing businesses and teams',
    features: [
      'Unlimited AI content generation',
      'Advanced analytics & insights',
      'Priority support',
      'Full API access',
      'Custom integrations',
      'Team collaboration tools'
    ],
    popular: true,
    gradient: 'from-forteva-cta/20 to-forteva-button/20'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Pro',
      'Custom AI model training',
      'Dedicated account manager',
      'SLA guarantees',
      'On-premise deployment',
      'Custom integrations',
      'Advanced security features'
    ],
    popular: false,
    gradient: 'from-forteva-accent/20 to-forteva-button/20'
  }
]

export function PricingSection() {
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
            <span className="gradient-text">Simple</span>{' '}
            <span className="text-forteva-cta">Pricing</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow. 
            No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`relative h-full p-8 rounded-2xl glassmorphism hover:bg-white/10 transition-all duration-500 transform group-hover:scale-105 ${
                plan.popular ? 'border-2 border-forteva-cta/50' : ''
              }`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-forteva-cta to-forteva-button text-forteva-base text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-futuristic font-bold mb-2 text-forteva-cta">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-futuristic font-bold text-forteva-cta">
                        {plan.price}
                      </span>
                      <span className="text-forteva-text/60 ml-2">
                        /{plan.period}
                      </span>
                    </div>
                    <p className="text-forteva-text/70 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-forteva-accent/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-forteva-cta" />
                        </div>
                        <span className="text-forteva-text/80 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full group/btn"
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    {plan.price === '$0' ? 'Get Started Free' : 'Choose Plan'}
                  </Button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-forteva-cta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-block p-6 rounded-xl glassmorphism">
            <p className="text-forteva-text/80 mb-4">
              Need a custom plan? Contact us for enterprise solutions.
            </p>
            <Button variant="ghost" size="sm">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 