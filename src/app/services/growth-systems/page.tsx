'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  TrendingUp, 
  Target, 
  Users, 
  CheckCircle,
  ArrowRight,
  Mail,
  MessageSquare
} from 'lucide-react'

const GrowthSystemsPage = () => {
  const kpis = [
    { number: "20–60", label: "qualified meetings/month", icon: Target },
    { number: ">85%", label: "Inbox on seeds", icon: Mail },
    { number: "<3%", label: "Bounce rate", icon: CheckCircle },
    { number: "≥10", label: "posts/week; inbound demos tracked", icon: MessageSquare }
  ]

  const implementations = [
    {
      title: "Targeting & deliverability",
      desc: "sequences; LinkedIn cadence"
    },
    {
      title: "Social engine",
      desc: "3–5 pillars, weekly batching, DM→calendar flow"
    },
    {
      title: "Reporting",
      desc: "on replies, bookings, and inbound"
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Growth Systems (Outbound & Social)
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8">
              Repeatable demand: clean data, inboxes that land, content that converts.
            </p>
            
            <Link
              href="/contact?utm_source=site&utm_medium=cta&utm_campaign=growth_systems&utm_content=hero_btn"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Outcomes KPIs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Outcomes
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {kpi.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {kpi.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Implement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Implement
            </h2>
            
            <div className="space-y-6">
              {implementations.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}:</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Proof & Demo
            </h2>
            
            {/* Mini Snapshots */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-900 font-medium">
                    <strong>US Marketing Agency (11-50):</strong> +27 meetings in 30 days via domain pool + sequences.
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    89% inbox rate, 1.8% bounce rate across 4 sending domains.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-green-900 font-medium">
                    <strong>SaaS Startup:</strong> 3 inbound demos in 2 weeks via social engine + DM automation.
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    LinkedIn posts + automated DM sequences drove qualified leads.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Meeting Engine Demo (90 seconds)
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/S4Ink5gaHiM"
                  title="Meeting Engine Demo - AutoAgent X"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                See our outbound system in action: targeting, deliverability, sequences, and meeting booking automation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Scale Your Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s build systems that consistently generate qualified pipeline.
            </p>
            
            <Link
              href="/contact?utm_source=site&utm_medium=cta&utm_campaign=growth_systems&utm_content=footer_btn"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GrowthSystemsPage
