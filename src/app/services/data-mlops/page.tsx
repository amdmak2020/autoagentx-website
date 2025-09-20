'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Database, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp
} from 'lucide-react'

const DataMLOpsPage = () => {
  const kpis = [
    { number: "95%+", label: "data completeness", icon: Database },
    { number: "Single", label: "source of truth adopted by GTM", icon: Target },
    { number: "Model", label: "evals tied to business metrics", icon: BarChart3 },
    { number: "Real-time", label: "pipeline & collections dashboards", icon: TrendingUp }
  ]

  const implementations = [
    {
      title: "Connectors & schemas",
      desc: "identity resolution; hygiene jobs"
    },
    {
      title: "Feature stores & eval pipelines",
      desc: "offline/online parity"
    },
    {
      title: "Dashboards",
      desc: "for pipeline, collections, onboarding"
    }
  ]

  const governance = [
    "Versioned configs; access policies; change logs"
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Data & MLOps for Revenue
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 mb-8">
              Clean signals, trustworthy dashboards, and models you can evaluate.
            </p>
            
            <Link
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=data_mlops&utm_content=hero_btn"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-green-500 hover:to-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problems We Fix */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Problems We Fix
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Fragmented data; no shared truth",
                "Vanity dashboards; no decision support", 
                "Unreliable models; no evaluation harness"
              ].map((problem, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                  <p className="text-red-800 font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes KPIs */}
      <section className="py-16 bg-gray-50">
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
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What We Implement
            </h2>
            
            <div className="space-y-6 mb-12">
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

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Governance
              </h3>
              <div className="space-y-3">
                {governance.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof & Demo */}
      <section className="py-16 bg-gray-50">
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
                    <strong>SaaS (pre-$5M ARR):</strong> DSO −24% in 8 weeks via collections signals + dunning logic.
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    Automated payment reminders increased collection rate by 18%.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-green-900 font-medium">
                    <strong>E-commerce:</strong> 95% data completeness after identity resolution pipeline.
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    Unified customer view increased LTV tracking accuracy by 40%.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Data & MLOps Pipeline Demo (90 seconds)
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/B5ODV3JpI2E"
                  title="Data MLOps Pipeline Demo - AutoAgent X"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Watch how we build data pipelines, feature stores, and evaluation frameworks for revenue teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready for Trusted Data & Models?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s build data systems that drive revenue decisions.
            </p>
            
            <Link
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=data_mlops&utm_content=footer_btn"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
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

export default DataMLOpsPage
