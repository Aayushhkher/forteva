'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Footer() {
  return (
    <footer id="contact" className="bg-forteva-card/80 pt-16 pb-8 mt-24 relative z-10">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-futuristic font-bold mb-4 text-forteva-cta">
              FORTEVA.TECH
            </h3>
            <p className="text-forteva-text/80 mb-6 leading-relaxed">
              Redefining intelligence and delivering cutting-edge technology solutions. 
              We help businesses leverage the power of AI to transform their operations 
              and accelerate growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-forteva-cta" />
                <span className="text-forteva-text">kheraayush190@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-forteva-cta" />
                <span className="text-forteva-text">+91 6366299955</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-forteva-cta" />
                <span className="text-forteva-text">India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-futuristic font-semibold mb-4 text-forteva-cta">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'AI Bots & Automation',
                'Custom Dashboards',
                'Web Development',
                'ML Models',
                'Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-forteva-text/70 hover:text-forteva-cta transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-futuristic font-semibold mb-4 text-forteva-cta">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Blog',
                'Press'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-forteva-text/70 hover:text-forteva-cta transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid lg:grid-cols-2 gap-8 py-8 border-t border-forteva-accent/20">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-futuristic font-semibold mb-4 text-forteva-cta">
              Stay Updated
            </h4>
            <p className="text-forteva-text/70 mb-4">
              Get the latest updates on AI technology and our new features.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-forteva-base/50 border border-forteva-text/20 text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-transparent"
              />
              <Button size="sm" className="group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-lg font-futuristic font-semibold mb-4 text-forteva-cta">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glassmorphism flex items-center justify-center text-forteva-text hover:text-forteva-cta hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-forteva-accent/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-forteva-text/60 text-sm">
              © 2024 FORTEVA.TECH. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-forteva-text/60 hover:text-forteva-cta transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-forteva-text/60 hover:text-forteva-cta transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-forteva-text/60 hover:text-forteva-cta transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 