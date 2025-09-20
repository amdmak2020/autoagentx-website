'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Play, 
  Target
} from 'lucide-react'

const Hero = () => {
  const [currentMetric] = useState(0)
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


  useEffect(() => {
    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden lg:cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
      
      {/* Mobile-Optimized Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none lg:hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-4 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            x: [0, -10, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-6 w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 8, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-8 w-6 h-6 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-lg backdrop-blur-sm border border-white/20"
        />
        <motion.div
          animate={{ 
            y: [0, 18, 0],
            x: [0, -12, 0],
            rotate: [0, -4, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-60 right-4 w-10 h-10 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-2xl backdrop-blur-sm border border-white/20"
        />
      </div>
      {/* Custom Cursor - Desktop Only */}
      <motion.div
        className="hidden lg:block fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
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

      {/* Mouse-following spotlight - Desktop Only */}
      <div 
        className="hidden lg:block absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* Animated Background Grid - Simplified for Mobile */}
      <div className="absolute inset-0">
        <motion.div 
          className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 lg:from-blue-600/20 via-transparent to-purple-600/10 lg:to-purple-600/20"></div>
      </div>

      {/* Interactive Floating Particles - Desktop Only */}
      {mounted && (
        <div className="hidden lg:block absolute inset-0 overflow-hidden">
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

      {/* Mouse-reactive energy rings - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
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

      {/* Robot Watchers - Desktop Only */}
      {mounted && (
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
            AI solutions that move business metrics.
              </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-4xl mx-auto mb-8">
            We design, build, and operate intelligent workflows—so you book more meetings, collect cash faster, and deliver value on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=ai_solutions&utm_content=hero_btn"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book a 15-min fit call →
            </Link>
          </div>
          
          <p className="text-blue-300 text-sm">
            Prefer DMs? Reach us on LinkedIn.
              </p>
            </motion.div>

        {/* What We Solve - 4 Problem→Outcome Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              problem: "Inbound & Outbound Growth",
              outcome: "Consistent qualified pipeline",
              icon: Target,
              color: "from-blue-500 to-cyan-500"
            },
            {
              problem: "Finance & Collections", 
              outcome: "Faster invoice-to-cash",
              icon: Play,
              color: "from-green-500 to-teal-500"
            },
            {
              problem: "Operations & Support",
              outcome: "Shorter time-to-value and fewer escalations", 
              icon: Target,
              color: "from-purple-500 to-pink-500"
            },
            {
              problem: "Content & Media Automation",
              outcome: "Reliable short-form output that converts",
              icon: Play,
              color: "from-orange-500 to-red-500"
            }
          ].map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:border-white/50 transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} text-white mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {solution.problem}
                </h3>
                <p className="text-gray-300 text-sm">
                  → {solution.outcome}
                </p>
              </motion.div>
            )
          })}
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
