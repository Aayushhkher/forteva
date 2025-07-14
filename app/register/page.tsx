'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github, Chrome, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await register(formData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Registration failed:', error)
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'One uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'One lowercase letter', met: /[a-z]/.test(formData.password) },
    { label: 'One number', met: /\d/.test(formData.password) },
    { label: 'One special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password) }
  ]

  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0

  return (
    <div className="min-h-screen bg-forteva-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Back */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-forteva-cta hover:text-forteva-accent transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism p-8 rounded-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-futuristic font-bold text-forteva-cta mb-2">
              Join FORTEVA
            </h1>
            <p className="text-forteva-text/70">
              Create your account to access premium tools
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button 
              variant="secondary" 
              className="w-full group"
              type="button"
              onClick={() => signIn('google')}
            >
              <Chrome className="w-6 h-6 mr-2" />
              Continue with Google
            </Button>
            <Button 
              variant="secondary" 
              className="w-full group"
              type="button"
              onClick={() => signIn('github')}
            >
              <Github className="w-6 h-6 mr-2" />
              Continue with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-forteva-text/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-forteva-card text-forteva-text/60">or sign up with email</span>
            </div>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-forteva-text mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-forteva-text mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forteva-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-forteva-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-forteva-text/50 hover:text-forteva-text transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Password Requirements */}
              {formData.password.length > 0 && (
                <div className="mt-2 space-y-1">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        req.met ? 'bg-green-500' : 'bg-forteva-text/30'
                      }`}>
                        {req.met && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span className={req.met ? 'text-green-400' : 'text-forteva-text/50'}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-forteva-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 bg-forteva-accent/10 border rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:border-forteva-cta transition-all ${
                    formData.confirmPassword.length > 0
                      ? passwordsMatch
                        ? 'border-green-500/50 focus:ring-green-500/50'
                        : 'border-red-500/50 focus:ring-red-500/50'
                      : 'border-forteva-accent/20 focus:ring-forteva-cta/50'
                  }`}
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-forteva-text/50 hover:text-forteva-text transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {formData.confirmPassword.length > 0 && (
                <div className="mt-1 text-xs">
                  {passwordsMatch ? (
                    <span className="text-green-400">Passwords match</span>
                  ) : (
                    <span className="text-red-400">Passwords don't match</span>
                  )}
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 mt-1 text-forteva-cta bg-forteva-accent/10 border-forteva-accent/20 rounded focus:ring-forteva-cta/50"
                required
              />
              <label htmlFor="terms" className="text-sm text-forteva-text/70">
                I agree to the{' '}
                <Link href="/terms" className="text-forteva-cta hover:text-forteva-accent transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-forteva-cta hover:text-forteva-accent transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full group"
              disabled={!agreedToTerms || !passwordsMatch || passwordRequirements.some(req => !req.met) || isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-forteva-text/70">
              Already have an account?{' '}
              <Link href="/login" className="text-forteva-cta hover:text-forteva-accent transition-colors font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 