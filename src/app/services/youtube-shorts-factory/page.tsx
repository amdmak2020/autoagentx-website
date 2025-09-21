'use client'

import { motion } from 'framer-motion'
import a from 'next/link'
import { 
  Video, 
  Play, 
  TrendingUp, 
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react'

const ShortsFactoryPage = () => {
  const kpis = [
    { number: "≥30", label: "Shorts/month", icon: Video },
    { number: "↗", label: "AVD & % viewed trending up", icon: TrendingUp },
    { number: "7-day", label: "CTR ≥ baseline + delta", icon: CheckCircle },
    { number: "Clicks", label: "to site/lead magnet", icon: ArrowRight }
  ]

  const timeline = [
    {
      week: "Week 1",
      tasks: "Templates & pipeline; brand kit; caption style; approve 15–20 topics."
    },
    {
      week: "Week 2", 
      tasks: "First batch live (produce 7; schedule 1/day)."
    },
    {
      week: "Ongoing",
      tasks: "Weekly batching; report; experiments on hooks, first 2s, titles."
    }
  ]

  const pricing = [
    { tier: "Setup", price: "$2,500–$6,000", description: "" },
    { tier: "Monthly", price: "$800–$2,000", description: "(30–120 Shorts/month)" },
    { tier: "Add-ons", price: "Custom", description: "cross-post to Reels/TikTok, thumbnail variants, channel management, lead magnet funnel, UTM→CRM tracking" }
  ]

  const faqs = [
    {
      question: "Who writes/voices?",
      answer: "We script; VO can be you or approved TTS."
    },
    {
      question: "Licensing?",
      answer: "Safe-listed assets/music; asset log maintained."
    },
    {
      question: "Paid?",
      answer: "Start organic; we can add retargeting later if needed."
    },
    {
      question: "File delivery?",
      answer: "We can post directly to your channel or hand off scheduled drafts."
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
              YouTube Shorts Factory
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 mb-8">
              Daily vertical video that actually drives subs, clicks, and leads.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=shorts_factory&utm_content=hero_btn"
              target="_blank"
              rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Book a 15-min fit call
              </a>
            </div>
            
            <div className="text-center">
              <span className="text-red-300 text-sm">
                Prefer DMs? <strong>DM &quot;SHORTS&quot;</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon
              return (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-xl mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {kpi.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {kpi.label}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Problem → Outcome */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h3 className="text-xl font-bold text-red-900 mb-3">The Problem</h3>
              <p className="text-red-800">
                Inconsistent posting; hooks miss in 2s; captions unreadable; uploads slip.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
              <h3 className="text-xl font-bold text-green-900 mb-3">The Outcome</h3>
              <p className="text-green-800">
                30–120 Shorts/month, consistent templates, clear weekly report (views, AVD, CTR).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What&apos;s Included
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Topics & scripting",
                  desc: "curated feeds + trend signals; one-click approvals; 120–150 words/Short; hook by 0–2s; no clickbait; clear payoff."
                },
                {
                  title: "Voice & pacing", 
                  desc: "clean VO (or approved TTS); consistent loudness; mobile-first tempo."
                },
                {
                  title: "Visual assembly",
                  desc: "3–6 assets/Short; subtle pan/zoom; brand lower-thirds; vertical framing."
                },
                {
                  title: "Captions",
                  desc: "big, high-contrast; timed to VO; keywords emphasized."
                },
                {
                  title: "Metadata & scheduling",
                  desc: "CTR-aware titles, descriptions, tags; auto upload & schedule."
                },
                {
                  title: "Performance loop",
                  desc: "mini-report after publish (views, AVD, retention, CTR); auto-retry on render/upload failures."
                }
              ].map((item, index) => (
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

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Timeline
            </h2>
            
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.week}</h4>
                    <p className="text-gray-600">{phase.tasks}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{tier.tier}</h4>
                  <div className="text-2xl font-bold text-red-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Proof of Results
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Case Study */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Snapshot</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="text-red-900 font-medium">
                    <strong>SaaS (pre-$5M ARR)</strong> — AVD +32% and 3 inbound demos in 2 weeks after hooks, big captions, weekly batching.
                  </p>
                </div>
              </div>

              {/* Video Demo */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">YouTube Shorts Factory Demo (90 seconds)</h3>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/B5ODV3JpI2E"
                    title="YouTube Shorts Factory Demo - Daily vertical video production system"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
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
              Ready to Scale Your Video Content?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s map your first 30 days of consistent Shorts production.
            </p>
            
            <a
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=shorts_factory&utm_content=footer_btn"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <p className="text-red-200 text-sm mt-4">
              We&apos;ll map your first 30 days in 10 minutes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ShortsFactoryPage
