'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Target, 
  TrendingUp, 
  DollarSign,
  Calendar,
  Sparkles
} from 'lucide-react'

const Hero = () => {
  const [currentMetric, setCurrentMetric] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [robotPositions, setRobotPositions] = useState<Array<{x: number, y: number, type: number}>>([])
  const [particlePositions, setParticlePositions] = useState<Array<{x: number, y: number}>>([])
  const [mounted, setMounted] = useState(false)

  // Generate random positions on mount (client-side only)
  useEffect(() => {
    setMounted(true)
    
    // Generate robot positions
    const robotPos = []
    for (let i = 0; i < 3; i++) {
      robotPos.push({
        x: Math.random() * 80 + 10, // 10% to 90% to avoid edges
        y: Math.random() * 60 + 20, // 20% to 80% to avoid header/footer
        type: Math.floor(Math.random() * 3) // 3 different robot designs
      })
    }
    setRobotPositions(robotPos)

    // Generate particle positions
    const particlePos = []
    for (let i = 0; i < 15; i++) {
      particlePos.push({
        x: Math.random() * 100,
        y: Math.random() * 100
      })
    }
    setParticlePositions(particlePos)
  }, [])

  const liveMetrics = [
    { label: "Meetings Booked This Month", value: "847", icon: Calendar, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Pipeline Generated", value: "$2.4M", icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
    { label: "Active Campaigns", value: "23", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Client Success Rate", value: "94%", icon: Target, color: "text-orange-600", bg: "bg-orange-100" }
  ]


  const testimonialSnippets = [
    { text: "+27 meetings in 30 days", company: "US Marketing Agency" },
    { text: "DSO reduced by 24%", company: "UK SaaS Startup" },
    { text: "+42% more meetings", company: "Gulf IT Services" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics.length)
    }, 3000)

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [liveMetrics.length])

  const currentMetricData = liveMetrics[currentMetric]
  const MetricIcon = currentMetricData.icon

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.6
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Mouse-following spotlight */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
      </div>

      {/* Interactive Floating Particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                x: [
                  0, 
                  (mousePosition.x - particle.x) * 0.05, 
                  0
                ]
              }}
              transition={{
                duration: 8 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse-reactive energy rings */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-400/20 rounded-full"
            style={{
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              width: [0, 200 + i * 100, 400 + i * 150],
              height: [0, 200 + i * 100, 400 + i * 150],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Robot Watchers */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {robotPositions.map((robot, i) => {
          const centerX = robot.x
          const centerY = robot.y
          const deltaX = mousePosition.x - centerX
          const deltaY = mousePosition.y - centerY
          const angle = Math.atan2(deltaY, deltaX)
          const eyeDistance = 3 // Distance eyes can move from center
          
          // Different robot designs
          const robotDesigns = [
            { color: 'from-blue-500 to-cyan-500', accent: 'bg-blue-400', size: 'w-16 h-16' },
            { color: 'from-purple-500 to-pink-500', accent: 'bg-purple-400', size: 'w-12 h-12' },
            { color: 'from-green-500 to-teal-500', accent: 'bg-green-400', size: 'w-20 h-20' }
          ]
          
          const currentRobot = robotDesigns[robot.type]
          
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: i * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className={`absolute ${currentRobot.size}`}
              style={{
                left: `${robot.x}%`,
                top: `${robot.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Robot Head */}
              <div className={`relative w-full h-full bg-gradient-to-br ${currentRobot.color} rounded-2xl shadow-xl border-2 border-white/20 backdrop-blur-sm`}>
                {/* Head shine */}
                <div className="absolute top-1 left-2 w-3 h-3 bg-white/30 rounded-full blur-sm"></div>
                
                {/* Antenna */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-3 bg-gray-300"></div>
                  <motion.div 
                    className={`w-2 h-2 ${currentRobot.accent} rounded-full -mt-1`}
                    animate={{ 
                      boxShadow: [
                        "0 0 5px rgba(59, 130, 246, 0.5)",
                        "0 0 15px rgba(59, 130, 246, 0.8)",
                        "0 0 5px rgba(59, 130, 246, 0.5)"
                      ]
                    }}
                    transition={{ duration: 1.5 + i * 0.3, repeat: Infinity }}
                  />
                </div>
                
                {/* Eyes */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[0, 1].map((eyeIndex) => (
                    <div key={eyeIndex} className="relative">
                      {/* Eye socket */}
                      <div className="w-4 h-4 bg-gray-900 rounded-full border border-gray-700 overflow-hidden">
                        {/* Moving eye */}
                        <motion.div
                          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-inner"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${Math.cos(angle) * eyeDistance}px, ${Math.sin(angle) * eyeDistance}px)`
                          }}
                          transition={{ type: "spring", stiffness: 150, damping: 25 }}
                        >
                          {/* Eye highlight */}
                          <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full opacity-80"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mouth/Speaker */}
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    className="w-6 h-1 bg-gray-800 rounded-full"
                    animate={{ 
                      scaleX: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2 + i * 0.4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Speaker dots */}
                  <div className="flex justify-center space-x-0.5 mt-0.5">
                    {[0, 1, 2].map((dot) => (
                      <motion.div 
                        key={dot}
                        className="w-0.5 h-0.5 bg-gray-700 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: dot * 0.2 + i * 0.1
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Side panels */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-8 bg-gray-600 rounded-l-lg"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-8 bg-gray-600 rounded-r-lg"></div>
                
                {/* Glowing aura */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(59, 130, 246, 0.3)`,
                      `0 0 40px rgba(59, 130, 246, 0.5)`,
                      `0 0 20px rgba(59, 130, 246, 0.3)`
                    ]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          )
          })}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Glitch Effect Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                <span className="relative">
                  OUTCOMES
                  <motion.span
                    className="absolute inset-0 text-blue-400"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 2, -2, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                  >
                    OUTCOMES
                  </motion.span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NOT TOOLS
                </span>
              </h1>
            </motion.div>

            {/* Typing Effect Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                We build AI systems that{' '}
                <span className="text-blue-400 font-semibold">book qualified meetings</span>,{' '}
                <span className="text-purple-400 font-semibold">accelerate cash flow</span>, and{' '}
                <span className="text-green-400 font-semibold">eliminate pipeline leaks</span>.
                <br />
                <span className="text-sm text-gray-400 mt-2 block">
                  Cairo-based. Global results. Weekly reporting.
                </span>
              </p>
            </motion.div>

            {/* Live Metrics Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-8 p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 hover:border-white/50 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-blue-500/20"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`
              }}
              whileHover={{ 
                scale: 1.03,
                rotateX: 2,
                rotateY: 2
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-medium">LIVE METRICS</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">ACTIVE</span>
                </div>
              </div>
              
              <motion.div
                key={currentMetric}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center space-x-4"
              >
                <div className={`p-3 rounded-xl ${currentMetricData.bg}`}>
                  <MetricIcon className={`h-6 w-6 ${currentMetricData.color}`} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">
                    {currentMetricData.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {currentMetricData.label}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Proof Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-8 overflow-hidden"
            >
              <div className="text-gray-400 text-sm mb-2">CLIENT RESULTS:</div>
              <motion.div
                animate={{ x: [0, -300] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex space-x-8 whitespace-nowrap"
              >
                {[...testimonialSnippets, ...testimonialSnippets].map((testimonial, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                    <span className="font-semibold">{testimonial.text}</span>
                    <span className="text-gray-400">— {testimonial.company}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-blue-500 hover:via-blue-600 hover:to-purple-500 transition-all duration-500 shadow-2xl hover:shadow-blue-500/40 flex items-center justify-center overflow-hidden border border-white/20 hover:border-white/40"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <Zap className="mr-3 h-6 w-6 drop-shadow-lg" />
                  BOOK FIT CALL
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="group flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl hover:border-white/70 hover:bg-white/15 transition-all duration-500 backdrop-blur-md shadow-xl hover:shadow-2xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <Play className="mr-3 h-6 w-6 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  WATCH DEMOS
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative perspective-1000"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * -0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`
            }}
          >
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">autoagentx.terminal</span>
              </div>

              {/* Live Dashboard Content */}
              <div className="space-y-6">
                {/* KPI Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Meetings", value: "42", trend: "+18%", color: "text-blue-400" },
                    { label: "Pipeline", value: "$847K", trend: "+34%", color: "text-green-400" },
                    { label: "Inbox Rate", value: "94%", trend: "+12%", color: "text-purple-400" },
                    { label: "Show Rate", value: "67%", trend: "+8%", color: "text-orange-400" }
                  ].map((kpi, index) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                      }}
                      style={{
                        transform: `translateZ(${Math.sin((mousePosition.x + mousePosition.y + index * 50) * 0.02) * 5}px)`
                      }}
                    >
                      <div className="text-gray-400 text-xs font-mono uppercase">{kpi.label}</div>
                      <div className={`text-2xl font-bold ${kpi.color} mt-1`}>{kpi.value}</div>
                      <div className="text-green-400 text-xs mt-1">{kpi.trend}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Live Activity Feed */}
                <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700">
                  <div className="text-gray-400 text-xs font-mono uppercase mb-3">LIVE ACTIVITY</div>
                  <div className="space-y-2 font-mono text-sm">
                    {[
                      { time: "14:32", action: "Meeting booked", client: "TechCorp", status: "success" },
                      { time: "14:28", action: "Email opened", client: "StartupXYZ", status: "info" },
                      { time: "14:25", action: "Reply received", client: "AgencyABC", status: "success" }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + index * 0.2 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-gray-500">{activity.time}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-400' : 'bg-blue-400'
                        }`}></div>
                        <span className="text-gray-300">{activity.action}</span>
                        <span className="text-gray-500">→ {activity.client}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glowing Orb */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-80 blur-sm"
            />
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-60 blur-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <div className="text-xs font-mono mb-2">SCROLL FOR DETAILS</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
