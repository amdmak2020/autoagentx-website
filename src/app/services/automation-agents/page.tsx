'use client'

import { motion } from 'framer-motion'
import { 
  Bot, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Shield,
  Download,
  FileText
} from 'lucide-react'

const AutomationAgentsPage = () => {
  const kpis = [
    { number: "<2h", label: "time-to-first-touch", icon: Clock },
    { number: "30–70%", label: "more meetings from same lead flow", icon: Users },
    { number: ">95%", label: "SLA adherence on key stages", icon: CheckCircle },
    { number: "24/7", label: "automated triage & routing", icon: Bot }
  ]

  const implementations = [
    {
      title: "Triage & routing",
      desc: "classify, prioritize, assign; SLA-driven alerts"
    },
    {
      title: "Scheduling & booking",
      desc: "2-slot proposals; auto calendar holds"
    },
    {
      title: "Enrichment",
      desc: "firmographics/technographics; de-dupe; suppression"
    },
    {
      title: "Inbox/DM copilot",
      desc: "drafts, snippets, objection handling, handoff"
    }
  ]

  const guardrails = [
    "Audit logs, idempotent actions, retry/backoff, suppression lists",
    "Least-privilege access; secrets management"
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
              Automation & AI Agents
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              Human-in-the-loop workflows that handle the busywork—reliably.
            </p>
            
            <a
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=automation_agents&utm_content=hero_btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book a 15-min fit call
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
                "Slow triage → leads and tickets go stale",
                "Manual scheduling, routing, and enrichment", 
                "Inboxes and DMs pile up; follow-ups missed"
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
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

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Guardrails & Observability
              </h3>
              <div className="space-y-3">
                {guardrails.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
                    <strong>IT Services (50+ employees):</strong> First-touch &lt;2h, +42% meetings via SLA/routing agents.
                  </p>
                  <p className="text-blue-700 text-sm mt-2">
                    Automated triage reduced response time from 8h to &lt;2h average.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <p className="text-green-900 font-medium">
                    <strong>SaaS Startup:</strong> 95% SLA adherence on lead routing after AI agent deployment.
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    Eliminated manual handoffs; automated enrichment + CRM sync.
                  </p>
                </div>
              </div>
            </div>

            {/* YouTube Demo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Automation Agents Demo (90 seconds)
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/S4Ink5gaHiM"
                  title="Automation Agents Demo - AutoAgent X"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                See how AI agents handle lead triage, scheduling, and CRM automation in real-time.
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automation Solutions Overview
              </h3>
              
              <p className="text-gray-600 mb-6">
                Learn about our automation and AI agent solutions. Download our Meeting Engine overview to see how we automate workflows.
              </p>
              
              <a
                href="/PDFs/Brand_MeetingEngine_OnePager_v2.pdf"
                download="Automation_Solutions_Overview.pdf"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s design AI agents that handle your busywork reliably.
            </p>
            
            <a
              href="https://calendly.com/ytautoagentx/30min?utm_source=site&utm_medium=cta&utm_campaign=automation_agents&utm_content=footer_btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
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

export default AutomationAgentsPage
