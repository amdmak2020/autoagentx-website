'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle
} from 'lucide-react'

const Snapshots = () => {
  const snapshots = [
    {
      client: "US Agency (11–50)",
      result: "+27 meetings in 30 days",
      details: "New domains + two 7-touch sequences; inbox 89%, bounce 1.8%.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      client: "SaaS (pre-$5M ARR)",
      result: "AVD +32%, 3 inbound demos",
      details: "in 2 weeks.",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500"
    },
    {
      client: "Gulf IT Services",
      result: "First-touch <2h, +42% meetings",
      details: "via routing & SLAs.",
      icon: Clock,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Snapshots
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {snapshots.map((snapshot, index) => {
            const Icon = snapshot.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${snapshot.color} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {snapshot.client}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {snapshot.result}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {snapshot.details}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Snapshots
