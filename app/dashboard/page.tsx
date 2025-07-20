'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Globe, 
  Bot, 
  Brain, 
  Settings, 
  LogOut, 
  User, 
  Bell,
  Play,
  ExternalLink,
  Download,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/sections/Header'

// Mock tools data
const tools = [
  {
    id: 1,
    name: 'NETSCAN',
    description: 'Live time network analyzer for real-time monitoring and analysis',
    icon: Globe,
    status: 'active',
    type: 'Network Tool',
    lastUsed: '2 hours ago',
    features: ['Real-time Monitoring', 'Traffic Analysis', 'Security Alerts'],
    demoUrl: null
  },
  {
    id: 2,
    name: 'PLUMBER BOOKING',
    description: 'Multi-dashboard system for booking plumbers and service providers with multi-attribute selection and third-party API integration',
    icon: Bot,
    status: 'active',
    type: 'Booking System',
    lastUsed: '1 day ago',
    features: ['Multi-attribute Selection', 'Third-party API Keys', 'Customer Dashboard', 'Admin Dashboard', 'Plumber Dashboard'],
    demoUrl: 'https://web-production-fbd8.up.railway.app'
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const { user, logout } = useAuth()
  const router = useRouter()

  // Redirect if not authenticated
  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="min-h-screen bg-forteva-bg">
      <Header />
      <div className="pt-16">
        <div className="container-custom py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-futuristic font-bold text-forteva-cta mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-forteva-text/70">
              Access your FORTEVA tools and manage your account
            </p>
            
            {/* Trial Status */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-forteva-accent/10 to-forteva-button/10 border border-forteva-accent/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-forteva-cta">{user.plan}</p>
                  <p className="text-xs text-forteva-text/60">
                    {user.trialDaysLeft} days remaining in your trial
                  </p>
                </div>
                <Button size="sm" variant="secondary">
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 mb-8 p-1 rounded-xl bg-forteva-accent/10">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'tools', label: 'My Tools', icon: Globe },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-forteva-cta text-forteva-bg'
                    : 'text-forteva-text/70 hover:text-forteva-text'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl glassmorphism">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-2xl font-bold text-forteva-cta">2</span>
                  </div>
                  <h3 className="font-medium text-forteva-text mb-1">Active Tools</h3>
                  <p className="text-sm text-forteva-text/60">All tools are running smoothly</p>
                </div>

                <div className="p-6 rounded-xl glassmorphism">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-2xl font-bold text-forteva-cta">{user.trialDaysLeft}</span>
                  </div>
                  <h3 className="font-medium text-forteva-text mb-1">Days Left</h3>
                  <p className="text-sm text-forteva-text/60">In your free trial</p>
                </div>

                <div className="p-6 rounded-xl glassmorphism">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-2xl font-bold text-forteva-cta">4.9</span>
                  </div>
                  <h3 className="font-medium text-forteva-text mb-1">Rating</h3>
                  <p className="text-sm text-forteva-text/60">Average user satisfaction</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-xl glassmorphism p-6">
                <h3 className="text-lg font-futuristic font-semibold text-forteva-cta mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div key={tool.id} className="flex items-center justify-between p-4 rounded-lg bg-forteva-accent/5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forteva-button/20 to-forteva-accent/20 flex items-center justify-center">
                          <tool.icon className="w-5 h-5 text-forteva-cta" />
                        </div>
                        <div>
                          <h4 className="font-medium text-forteva-text">{tool.name}</h4>
                          <p className="text-sm text-forteva-text/60">Last used {tool.lastUsed}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="secondary">
                        <Play className="w-4 h-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tools' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="p-6 rounded-xl glassmorphism hover:bg-white/5 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forteva-button/20 to-forteva-accent/20 flex items-center justify-center">
                          <tool.icon className="w-6 h-6 text-forteva-cta" />
                        </div>
                        <div>
                          <h3 className="font-futuristic font-semibold text-forteva-cta">{tool.name}</h3>
                          <p className="text-sm text-forteva-text/60">{tool.type}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        tool.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {tool.status}
                      </div>
                    </div>

                    <p className="text-forteva-text/70 text-sm mb-4">
                      {tool.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <h4 className="text-sm font-medium text-forteva-text">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature, index) => (
                          <span key={index} className="text-xs text-forteva-text/60 bg-forteva-accent/10 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Launch Tool
                      </Button>
                      {tool.demoUrl ? (
                        <a
                          href={tool.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" variant="secondary" disabled>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="rounded-xl glassmorphism p-6">
                <h3 className="text-lg font-futuristic font-semibold text-forteva-cta mb-6">
                  Account Settings
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-forteva-accent/5">
                    <div>
                      <h4 className="font-medium text-forteva-text">Profile Information</h4>
                      <p className="text-sm text-forteva-text/60">Update your personal details</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-forteva-accent/5">
                    <div>
                      <h4 className="font-medium text-forteva-text">Subscription</h4>
                      <p className="text-sm text-forteva-text/60">Manage your plan and billing</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      Manage
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-forteva-accent/5">
                    <div>
                      <h4 className="font-medium text-forteva-text">Security</h4>
                      <p className="text-sm text-forteva-text/60">Change password and security settings</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <div>
                      <h4 className="font-medium text-red-400">Sign Out</h4>
                      <p className="text-sm text-forteva-text/60">Log out of your account</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="text-red-400 hover:text-red-300"
                      onClick={() => {
                        logout()
                        router.push('/')
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
} 