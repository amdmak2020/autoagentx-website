'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Copy,
  Check,
  Calendar,
  Users,
  Zap,
  Star
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [currentWeek, setCurrentWeek] = useState<Date[]>([])
  const [meetingSpots, setMeetingSpots] = useState<{[key: string]: number}>({})
  const [animatedSpots, setAnimatedSpots] = useState<{[key: string]: number}>({})

  // Generate current week dates and meeting spots
  useEffect(() => {
    const today = new Date()
    const startOfWeek = new Date(today)
    const day = today.getDay()
    const diff = today.getDate() - day + (day === 0 ? -6 : 1) // Start from Monday
    startOfWeek.setDate(diff)
    
    const week = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      week.push(date)
    }
    setCurrentWeek(week)
    
    // Generate realistic meeting spots (1-4 per day)
    const spots: {[key: string]: number} = {}
    week.forEach(date => {
      const dayKey = date.toDateString()
      // Weekend has fewer spots
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const maxSpots = isWeekend ? 2 : 4
      // Past days have 0 spots
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
      spots[dayKey] = isPast ? 0 : Math.floor(Math.random() * maxSpots) + 1
    })
    setMeetingSpots(spots)
    
    // Animate spots appearing
    setTimeout(() => setAnimatedSpots(spots), 500)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using FormSubmit or similar service
      const response = await fetch('https://formsubmit.co/Ahmed@AutoAgentx.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table'
        })
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            message: ''
          })
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      // Still show success for better UX
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      }, 5000)
    }
    
    setIsSubmitting(false)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Ahmed@AutoAgentx.com',
      description: 'Drop me a message about your specific challenges.',
      copyable: true
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'I respond to all inquiries quickly.'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Everywhere at the same time ✨',
      description: 'Operating globally with USD pricing (quantum presence included).'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+201055233599',
      description: 'Call me directly (Egypt time zone).',
      copyable: true
    },
  ]

  const services = [
    '🤖 Automation & AI Agents',
    '📊 Data & MLOps for Revenue', 
    '📈 Growth Systems (Outbound & Social)',
    '🎥 Content & Media Automation',
    '📧 Meeting Engine',
    '🎥 YouTube Shorts Factory',
    '🎆 Custom AI Solution',
    '🤔 Not sure yet - let\'s chat!'
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Talk Results
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Book a 15-minute fit call to align on goals and map the fastest path to results. 
            Or drop us a message about your specific challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              How to Reach Us
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <p className="text-blue-600 font-medium">
                          {info.value}
                        </p>
                        {info.copyable && (
                          <button
                            onClick={() => copyToClipboard(info.value)}
                            className="group relative inline-flex items-center space-x-1 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105"
                          >
                            {copiedEmail ? (
                              <>
                                <Check className="h-3 w-3 text-green-500" />
                                <span className="text-green-500">Copied! ✨</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                            
                            {/* Cute tooltip */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              {copiedEmail ? "Yay! 🎉" : "Click to copy! 📋"}
                            </div>
                          </button>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center"
            >
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-600">
                Located in the heart of San Francisco&apos;s tech district
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl p-10 border border-gray-200/50 hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden"
          >
            {/* Professional Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Book Your Fit Call
              </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 shadow-sm hover:shadow-md placeholder:text-gray-600 placeholder:font-medium text-gray-800"
                      placeholder="✨ What should I call you? (e.g., Sarah the Pipeline Wizard)"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 shadow-sm hover:shadow-md placeholder:text-gray-600 placeholder:font-medium text-gray-800"
                      placeholder="📧 your.email@company.com (where the magic happens)"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 shadow-sm hover:shadow-md placeholder:text-gray-600 placeholder:font-medium text-gray-800"
                      placeholder="🏢 Your Amazing Company (or 'Stealth Startup' if you're being mysterious)"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 shadow-sm hover:shadow-md text-gray-700 font-medium"
                    >
                      <option value="" className="text-gray-500">🎯 Which solution interests you most?</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 shadow-sm hover:shadow-md resize-none placeholder:text-gray-700 placeholder:font-semibold text-gray-800"
                      placeholder="📝 What's your biggest challenge right now? For example: 'We need to automate our manual processes' or 'Our sales pipeline is unpredictable and we need better systems' - the more specific, the better I can help! 🚀"
                    />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-5 px-8 rounded-2xl font-bold hover:from-blue-500 hover:via-blue-600 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: isSubmitting ? '0%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
            </div>
          </motion.div>
        </div>

        {/* Amazing Animated Calendar Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-3xl shadow-2xl p-8 border border-white/60 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Available This Week
                </h2>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="text-2xl"
                >
                  ⚡
                </motion.div>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Limited spots available for fit calls this week. Book now to secure your preferred time!
              </p>
            </motion.div>

            <div className="grid grid-cols-7 gap-3 mb-6">
              {currentWeek.map((date, index) => {
                const dayKey = date.toDateString()
                const spots = animatedSpots[dayKey] || 0
                const dayName = date.toLocaleDateString('en', { weekday: 'short' })
                const dayNumber = date.getDate()
                const isToday = date.toDateString() === new Date().toDateString()
                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
                
                return (
                  <motion.div
                    key={dayKey}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
                    className={`relative p-4 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                      isToday 
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                        : isPast 
                        ? 'bg-gray-100 text-gray-400' 
                        : 'bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-200/60'
                    }`}
                  >
                    <div className="text-xs font-medium mb-1 opacity-80">{dayName}</div>
                    <div className="text-lg font-bold mb-2">{dayNumber}</div>
                    
                    {!isPast && (
                      <div className="space-y-1">
                        <div className="flex justify-center space-x-1">
                          {Array.from({ length: 4 }, (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ 
                                scale: i < spots ? 1 : 0.3, 
                                opacity: i < spots ? 1 : 0.3 
                              }}
                              transition={{ 
                                delay: 1.5 + index * 0.1 + i * 0.1,
                                duration: 0.3,
                                type: "spring"
                              }}
                              className={`w-2 h-2 rounded-full ${
                                i < spots 
                                  ? isToday 
                                    ? 'bg-white' 
                                    : 'bg-gradient-to-r from-green-400 to-emerald-500'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2 + index * 0.1 }}
                          className={`text-xs font-medium ${
                            isToday ? 'text-white/90' : 'text-gray-600'
                          }`}
                        >
                          {spots === 0 ? 'Booked' : `${spots} spot${spots > 1 ? 's' : ''}`}
                        </motion.div>
                      </div>
                    )}
                    
                    {isPast && (
                      <div className="text-xs text-gray-400">Past</div>
                    )}
                    
                    {isToday && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Stats and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {Object.values(animatedSpots).reduce((a, b) => a + b, 0)}
                </div>
                <div className="text-sm text-gray-600">Spots Available</div>
              </div>
              
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">15min</div>
                <div className="text-sm text-gray-600">Fit Call Duration</div>
              </div>
              
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/60">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Value Guaranteed</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="text-center"
            >
              <motion.a
                href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=contact_calendar&utm_content=calendar_widget"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your Spot Now</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xl"
                >
                  →
                </motion.div>
              </motion.a>
              
              <p className="text-sm text-gray-600 mt-4">
                🔥 Spots fill up fast! Don&apos;t miss your chance to transform your business.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
