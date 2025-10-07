'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Video, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Eye,
  MousePointer,
  Download,
  FileText
} from 'lucide-react'

const ContentMediaPage = () => {
  const kpis = [
    { number: "30–120", label: "Shorts/month", icon: Video },
    { number: "AVD↑", label: "and first-2-second retention", icon: Eye },
    { number: "Clicks", label: "to site/lead magnet", icon: MousePointer },
    { number: "Weekly", label: "performance reports", icon: TrendingUp }
  ]

  const implementations = [
    {
      title: "Topic sourcing",
      desc: "120–150-word scripts (hook by 0–2s)"
    },
    {
      title: "VO pacing",
      desc: "readable captions; brand lower-thirds"
    },
    {
      title: "Metadata, render",
      desc: "auto upload & schedule; weekly report"
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Content & Media Automation
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 mb-8">
              Short-form at scale—hooks, captions, and scheduling done.
            </p>
            
            <a
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=content_media&utm_content=hero_btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
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
                    <strong>SaaS (pre-$5M ARR):</strong> AVD +32% and 3 inbound demos in 2 weeks after hooks optimization.
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    Big captions + 2-second hooks improved retention and click-through.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-green-900 font-medium">
                    <strong>Marketing Agency:</strong> 120 Shorts/month with 15% CTR increase via automated captions.
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    Consistent templates + weekly batching scaled content production.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                YouTube Shorts Factory Demo (90 seconds)
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/B5ODV3JpI2E"
                  title="YouTube Shorts Factory Demo - AutoAgent X"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Watch our content automation system: scripting, voiceover, visual assembly, captions, and scheduling.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get the Complete Overview
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Shorts Factory One-Pager
              </h3>
              
              <p className="text-gray-600 mb-6">
                Complete overview of our content automation system: production process, KPIs, pricing, and deliverables.
              </p>
              
              <a
                href="/PDFs/Brand_ShortsFactory_OnePager_v1.pdf"
                download="Content_Media_Overview.pdf"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
              
              <p className="text-xs text-gray-500 mt-3">
                PDF • 2 pages • Updated Dec 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready for Content at Scale?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s build systems that create engaging short-form content consistently.
            </p>
            
            <a
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=content_media&utm_content=footer_btn"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContentMediaPage
