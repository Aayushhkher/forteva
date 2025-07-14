'use client'

import { useState } from 'react'

export function OnDemandProjectRequestSection() {
  const [form, setForm] = useState({ name: '', email: '', description: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.description) {
      setError('Please fill in all fields.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="on-demand" className="section-padding bg-forteva-card/30">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-futuristic font-bold mb-4">
            <span className="gradient-text">On-Demand</span> <span className="text-forteva-cta">Project Request</span>
          </h2>
          <p className="text-lg text-forteva-text/80 max-w-xl mx-auto">
            Have a custom project in mind? Tell us what you need and we’ll get in touch to discuss how FORTEVA can bring your vision to life.
          </p>
        </div>
        {submitted ? (
          <div className="bg-forteva-base/80 rounded-2xl p-8 text-center shadow-lg glassmorphism">
            <h3 className="text-2xl font-semibold text-forteva-cta mb-2">Thank you!</h3>
            <p className="text-forteva-text/80">Your request has been received. We’ll reach out to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-forteva-base/80 rounded-2xl p-8 shadow-lg glassmorphism flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-forteva-base/50 border border-forteva-text/20 text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-transparent transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-forteva-base/50 border border-forteva-text/20 text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-transparent transition-all"
              required
            />
            <textarea
              name="description"
              placeholder="Describe your project..."
              value={form.description}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg bg-forteva-base/50 border border-forteva-text/20 text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-transparent min-h-[120px] transition-all"
              required
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="relative overflow-hidden rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 bg-gradient-to-r from-forteva-button to-forteva-accent text-forteva-cta hover:from-forteva-accent hover:to-forteva-button neon-glow px-6 py-3 text-base w-full mt-2"
            >
              Send Request
            </button>
          </form>
        )}
      </div>
    </section>
  )
} 