'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)
      // Handle error (show toast, etc.)
    } finally {
      setIsLoading(false)
    }
  }

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
              Welcome Back
            </h1>
            <p className="text-forteva-text/70">
              Sign in to access your FORTEVA tools
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
              <span className="px-2 bg-forteva-card text-forteva-text/60">or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forteva-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-forteva-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-forteva-text/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-forteva-accent/10 border border-forteva-accent/20 rounded-xl text-forteva-text placeholder-forteva-text/50 focus:outline-none focus:ring-2 focus:ring-forteva-cta/50 focus:border-forteva-cta transition-all"
                  placeholder="Enter your password"
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-forteva-cta bg-forteva-accent/10 border-forteva-accent/20 rounded focus:ring-forteva-cta/50"
                />
                <span className="ml-2 text-sm text-forteva-text/70">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-forteva-cta hover:text-forteva-accent transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full group" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-forteva-text/70">
              Don't have an account?{' '}
              <Link href="/register" className="text-forteva-cta hover:text-forteva-accent transition-colors font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 