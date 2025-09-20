'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target, 
  Users, 
  CheckCircle, 
  Clock,
  DollarSign,
  ArrowRight,
  Play
} from 'lucide-react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meeting Engine — 20–60 Qualified Meetings/Month | AutoAgent X",
  description: "Predictable outbound: clean targeting, inboxes that land, reply→calendar→CRM, daily KPIs. 20–60 qualified meetings/month in ~60 days.",
  canonical: "https://autoagentx.com/services/meeting-engine",
  openGraph: {
    title: "Meeting Engine — 20–60 Qualified Meetings/Month | AutoAgent X",
    description: "Predictable outbound: clean targeting, inboxes that land, reply→calendar→CRM, daily KPIs. 20–60 qualified meetings/month in ~60 days.",
    url: "https://autoagentx.com/services/meeting-engine",
  },
}

const MeetingEnginePage = () => {
  const kpis = [
    { number: "20–60", label: "QMs/month", icon: Target },
    { number: ">85%", label: "Inbox placement", icon: CheckCircle },
    { number: "<3%", label: "Bounce rate", icon: CheckCircle },
    { number: "40–60%", label: "Positives → meetings", icon: Users }
  ]

  const timeline = [
    {
      week: "Week 1",
      tasks: "ICP, domains/DNS, warming, data pull, sequence drafts, seed tests."
    },
    {
      week: "Week 2", 
      tasks: "Go-live 60–120 sends/day; first meetings book."
    },
    {
      week: "Weeks 3–8",
      tasks: "Ramp & optimize; A/B subject/first-line; add re-engage drip & ABM micro-wave."
    }
  ]

  const pricing = [
    { tier: "Setup", price: "$2,500–$4,000", description: "(one-time)" },
    { tier: "Monthly", price: "$2,500 / $4,000 / $6,000", description: "(targets: ~20 / 35–45 / 50–60 QMs/mo)" },
    { tier: "Bonus", price: "$120/meeting", description: "above target" }
  ]

  const faqs = [
    {
      question: "Do you \"do AI\"?",
      answer: "We sell outcomes. We use automation and AI where it speeds results."
    },
    {
      question: "How fast to first wins?",
      answer: "Inside 14 days; steady state by 30–60 days."
    },
    {
      question: "Compliance?",
      answer: "CAN-SPAM/GDPR/PECR; opt-out link; central suppression list."
    },
    {
      question: "What's a qualified meeting?",
      answer: "Decision-maker/committee member, ICP fit, booked on shared calendar, attends."
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Meeting Engine
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              Predictable outbound that books qualified sales calls—fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact?utm_source=site&utm_medium=cta&utm_campaign=meeting_engine&utm_content=hero_btn"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Book a 15-min fit call
              </Link>
            </div>
            
            <div className="text-center mb-4">
              <span className="text-blue-300 text-sm">
                Prefer DMs? <strong>DM &quot;MEETINGS&quot;</strong>
              </span>
            </div>
            
            <p className="text-blue-200 text-sm">
              Outcome-first. Fast pilots. Weekly reporting.
            </p>
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mb-4">
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
                Meetings are inconsistent; emails hit spam; replies slip through cracks.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-2xl">
              <h3 className="text-xl font-bold text-green-900 mb-3">The Outcome</h3>
              <p className="text-green-800">
                Predictable meetings in ~60 days, inboxes that land, replies routed to calendar and CRM.
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
                  title: "Targeting & data",
                  desc: "600–1,000 verified decision-makers/month; ICP segmentation; dedupe; suppression/DNC."
                },
                {
                  title: "Deliverability", 
                  desc: "2–4 sending domains; SPF/DKIM/DMARC; warmed inboxes; seed monitoring."
                },
                {
                  title: "Messaging",
                  desc: "two 7-touch email sequences + 5-step LinkedIn cadence; 1–2 sentence first-line personalization; single CTA."
                },
                {
                  title: "Orchestration",
                  desc: "reply triage → propose 2 slots → calendar booking → CRM updates, tasks, SLAs; OOO/referrals handled."
                },
                {
                  title: "Reporting",
                  desc: "daily snapshot (sends, bounces, inbox %, positives, meetings, show rate) + weekly optimizations."
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
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
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
                  <div className="text-2xl font-bold text-blue-600 mb-2">{tier.price}</div>
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
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-900 font-medium">
                    <strong>US Agency (11–50)</strong> — +27 meetings in 30 days after domain pool + two 7-touch sequences; inbox 89%, bounce 1.8%.
                  </p>
                </div>
              </div>

              {/* Video Demo */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meeting Engine Demo (90 seconds)</h3>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/S4Ink5gaHiM"
                    title="Meeting Engine Demo - Predictable outbound system that books qualified meetings"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Booking Meetings?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s align on your ICP and map the fastest path to 20–60 qualified meetings/month.
            </p>
            
            <Link
              href="/contact?utm_source=site&utm_medium=cta&utm_campaign=meeting_engine&utm_content=footer_btn"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <p className="text-blue-200 text-sm mt-4">
              Want the 60-sec teardown on your stack? We&apos;ll record it free.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MeetingEnginePage
