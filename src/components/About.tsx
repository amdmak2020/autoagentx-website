'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Clock,
  CheckCircle
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: '20-60', label: 'Qualified Meetings/Month', icon: Users },
    { number: '85%+', label: 'Inbox Placement Rate', icon: CheckCircle },
    { number: '20-40%', label: 'Faster Collections', icon: Clock },
    { number: '5-15pt', label: 'Renewal Lift', icon: Award },
  ]

  const values = [
    {
      icon: Target,
      title: 'Outcomes First',
      description: 'We pick the simplest stack that hits the KPI. Results matter more than fancy tools.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Observable Operations',
      description: 'Metrics, logs, and audit trails over opinions. You&apos;ll see exactly what&apos;s working.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Small Wins Compound',
      description: 'Fast pilots, weekly experiments, steady iteration. Progress you can feel.',
      color: 'from-green-500 to-teal-500'
    },
  ]

  const team = [
    {
      name: 'Ahmed Hussein',
      role: 'Founder & AI Agent Developer',
      image: '/images/ahmed.jpg',
      bio: 'AI Agent Developer specializing in Workflow Automation | LLM & Computer Vision Expert | Python, Rust enthusiast building Next-Gen AI at SmythOS. Cairo-based engineer with high interests in AI, web3, blockchain, and content creation (plus cats 🐱). Always open to new ideas and adventures - this bio is definitely not AI generated |-|-|',
      education: 'Ain Shams University',
      location: 'Cairo, Egypt',
      linkedin: 'www.linkedin.com/in/ahmed-hussein-aa3512196',
      connections: '500+ connections'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            B2B teams that need outcomes now, not platforms later: Agencies, SaaS companies, and IT Services. 
            Cairo-based, operating globally with USD pricing.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden border border-gray-200/50"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle Glow Effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                />
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-8 shadow-2xl group-hover:shadow-xl relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <Icon className="h-10 w-10 relative z-10 drop-shadow-lg" />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                How We Work
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Define</h4>
                    <p className="text-gray-600">Align on KPIs, users, data sources, guardrails, and baseline metrics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Build</h4>
                    <p className="text-gray-600">Implement workflows, integrations, domains/inboxes, routing, and governance with logging.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Validate</h4>
                    <p className="text-gray-600">Seed tests, QA runs, acceptance criteria, rollback plan.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Operate</h4>
                    <p className="text-gray-600">Daily/weekly metrics, experiments, incident response, and monthly reviews.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-2 w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded mb-2 w-5/6"></div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded mb-2 w-2/3"></div>
                    <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Meet the Founder
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ahmed leads implementation personally and keeps the work grounded 
            in business outcomes and measurable KPIs.
          </p>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 max-w-2xl"
              >
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDgiIGN5PSI0OCIgcj0iNDgiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzEpIi8+CjxwYXRoIGQ9Ik00OCA0OEM1My41MjI4IDQ4IDU4IDQzLjUyMjggNTggMzhDNTggMzIuNDc3MiA1My41MjI4IDI4IDQ4IDI4QzQyLjQ3NzIgMjggMzggMzIuNDc3MiAzOCAzOEMzOCA0My41MjI4IDQyLjQ3NzIgNDggNDggNDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNzIgNzJDNzIgNjAuOTU0MyA2My4wNDU3IDUyIDUyIDUySDQ0QzMyLjk1NDMgNTIgMjQgNjAuOTU0MyAyNCA3MkgyNCIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzEiIHgxPSI0OCIgeTE9IjAiIHgyPSI0OCIgeTI9Ijk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzQjgyRjYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K'
                    }}
                  />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <div className="flex items-center justify-center space-x-4 mb-4 text-sm text-gray-500">
                  <span>{member.education}</span>
                  <span>•</span>
                  <span>{member.location}</span>
                  <span>•</span>
                  <span>{member.connections}</span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Clever LinkedIn Link */}
                <div className="flex justify-center">
                  <a
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                    <span className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                      (totally not AI-generated profile 🤖)
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
