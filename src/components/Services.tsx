'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { 
  ArrowRight, 
  Play, 
  X, 
  Users, 
  TrendingUp, 
  Video,
  Target,
  Clock,
  DollarSign,
  CheckCircle,
  ExternalLink,
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  const services = [
    {
      id: 1,
      title: "Meeting Engine",
      subtitle: "Predictable Outbound that Books Calls",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      videoId: "S4Ink5gaHiM",
      videoUrl: "https://www.youtube.com/watch?v=S4Ink5gaHiM",
      pdfUrl: "/PDFs/Brand_MeetingEngine_OnePager_v2.pdf",
      pdfName: "Meeting_Engine_Overview.pdf",
      outcome: "20–60 qualified meetings/month within ~60 days",
      whoFor: "Agencies, SaaS (<$10M ARR), and IT services that want more qualified meetings without hiring SDRs.",
      scope: [
        {
          title: "Targeting & data",
          desc: "600–1,000 verified decision-makers/month (Founder/CEO/CMO/VP/Head of Growth/RevOps), segmented by ICP."
        },
        {
          title: "Deliverability", 
          desc: "Dedicated sending domains, SPF/DKIM/DMARC, warm-up, seed tests, bounce/complaint suppression."
        },
        {
          title: "Messaging",
          desc: "Two short email sequences (7 touches each) + a 5-step LinkedIn cadence; first-line personalization; 1 clear CTA."
        },
        {
          title: "Orchestration",
          desc: "Reply triage → calendar booking → CRM updates, tasks & SLAs; &apos;OOO/Referral&apos; smart handling."
        },
        {
          title: "Reporting",
          desc: "Daily KPI snapshot (sends, bounces, inbox %, positive replies, meetings booked, show rate)."
        }
      ],
      timeline: "Week 1 setup → Week 2 first meetings → Weeks 3–8 ramp to target",
      kpis: [
        "Inbox placement >85% on seeds; bounces <3%",
        "Positive reply rate ≥3–8% (segment-dependent)", 
        "40–60% of positives convert to meetings",
        "Meetings target set in SOW (e.g., 30 QMs/mo by Day 60)"
      ],
      pricing: {
        setup: "$2.5k–$4k",
        retainer: "$2.5k / $4k / $6k (tiers for 20–60 QMs/mo)",
        bonus: "Optional: $120/meeting above target"
      }
    },
    {
      id: 2,
      title: "Social Growth & Lead Engine", 
      subtitle: "Content that Creates Pipeline",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      videoId: "5lBC6B-H28g",
      videoUrl: "https://www.youtube.com/watch?v=5lBC6B-H28g",
      outcome: "Weekly content that drives profile visits, website clicks, DMs → meetings",
      whoFor: "Founders/brands who want inbound demos from LinkedIn/X/Shorts—not vanity likes.",
      scope: [
        {
          title: "Strategy",
          desc: "3–5 content pillars tied to buyer pains (how-tos, mini case studies, quick teardowns, BTS)."
        },
        {
          title: "Production",
          desc: "30-day calendar; 10–15 posts/week across LinkedIn/X/Shorts; repurposing (video ↔ carousel ↔ text)."
        },
        {
          title: "Proof cadence",
          desc: "At least 1 proof post/week (before/after metric, teardown, client win)."
        },
        {
          title: "Conversion paths",
          desc: "Pinned lead magnet or booking link; DM → calendar flow; CRM logging for inbound."
        },
        {
          title: "Reporting",
          desc: "Weekly report on reach, link clicks, DMs, inbound meetings (not just followers)."
        }
      ],
      timeline: "Week 1 strategy & templates → Week 2 first content pack live → weekly cycles",
      kpis: [
        "Posting velocity achieved (≥10 posts/week)",
        "Click-throughs and inbound meetings tracked in CRM",
        "Month-over-month lift in profile visits, link clicks, and booked calls"
      ],
      pricing: {
        setup: "$1.5k–$3k",
        retainer: "$1.2k–$2.5k/mo (volume & channels)",
        addons: "Shorts factory, lead magnet build, newsletter roundup"
      }
    },
    {
      id: 3,
      title: "YouTube Shorts Factory",
      subtitle: "Daily Vertical Video at Scale",
      icon: Video,
      color: "from-red-500 to-orange-500", 
      videoId: "B5ODV3JpI2E",
      videoUrl: "https://www.youtube.com/watch?v=B5ODV3JpI2E",
      pdfUrl: "/PDFs/Brand_ShortsFactory_OnePager_v1.pdf",
      pdfName: "Shorts_Factory_Overview.pdf",
      outcome: "30–120 Shorts/month with repeatable quality, fast turnaround, and clear performance reporting",
      whoFor: "Founders/creators/brands that want consistent Shorts output that actually drives subs, clicks, and leads.",
      scope: [
        {
          title: "Topic sourcing",
          desc: "Curated feeds + trend signals; de-dupe; one-click approvals."
        },
        {
          title: "Scriptwriting", 
          desc: "120–150 words/Short; hook in the first 1–2s; no clickbait; clear payoff."
        },
        {
          title: "Voice & pacing",
          desc: "Clean VO (or approved TTS) at consistent loudness; mobile-first tempo."
        },
        {
          title: "Visual assembly",
          desc: "3–6 assets/Short; auto pan/zoom; brand lower-thirds; vertical-first framing."
        },
        {
          title: "Captions",
          desc: "Big, high-contrast, auto-timed to VO; keywords emphasized."
        },
        {
          title: "Metadata & scheduling",
          desc: "CTR-aware titles/descriptions/tags; auto-upload & schedule."
        },
        {
          title: "Performance loop",
          desc: "Post-publish report (views, AVD, retention curve, CTR); fail-safe auto-retry."
        }
      ],
      timeline: "Week 1 templates & pipeline → Week 2 first batch live → weekly batching thereafter",
      kpis: [
        "Output ≥30 Shorts/mo",
        "Average View Duration & % viewed trending up",
        "7-day CTR ≥ baseline + X%",
        "Clicks to site/lead magnet (if used)",
        "Consistent cadence (3–5+/week)"
      ],
      pricing: {
        setup: "$2.5k–$6k (templates, pipeline, brand kit)",
        retainer: "$800–$2,000/mo (volume-based)",
        addons: "Cross-post to Reels/TikTok, thumbnail variants, channel management"
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            Three Services in Detail
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            We build and operate systems that <span className="font-semibold text-blue-600">book more qualified meetings</span>, 
            <span className="font-semibold text-purple-600"> turn social & Shorts into pipeline</span>, and 
            <span className="font-semibold text-green-600"> report results weekly</span>—with clear KPIs and fast setup.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isActive = activeService === service.id
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-2xl border-2 transition-all duration-700 overflow-hidden group ${
                  isActive ? 'border-blue-500 shadow-blue-500/20 shadow-2xl scale-[1.02]' : 'border-gray-200/50 hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10'
                }`}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                
                {/* Subtle Border Glow */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
                />
                {/* Header */}
                <div 
                  className="relative p-4 sm:p-6 lg:p-10 cursor-pointer z-20 select-none"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('Card clicked:', service.title, 'Current active:', activeService, 'Will set to:', isActive ? null : service.id)
                    setActiveService(isActive ? null : service.id)
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-start lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-4 sm:space-x-6 lg:space-x-8 w-full lg:w-auto">
                      <motion.div 
                        className={`p-3 sm:p-4 lg:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} shadow-2xl group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex-shrink-0`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white relative z-10 drop-shadow-lg" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ChevronDown className="h-6 w-6" />
                          </motion.div>
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4">
                          {service.subtitle}
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full w-fit">
                            <Target className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">
                              {service.outcome}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 italic flex items-center space-x-1">
                            <span>👆 Click to {isActive ? 'collapse' : 'expand'} details, pricing, and timeline</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Thumbnail */}
                    <div className="w-full lg:w-auto lg:ml-6 mt-4 lg:mt-0">
                      {playingVideo === service.videoId ? (
                        <div className="relative w-full max-w-sm mx-auto lg:w-64 h-48 sm:h-36 rounded-xl overflow-hidden bg-black">
                          <iframe
                            src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&controls=1&rel=0`}
                            title={service.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setPlayingVideo(null)
                            }}
                            className="absolute top-2 right-2 w-8 h-8 bg-black bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                          >
                            <X className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      ) : (
                        <div 
                          className="relative w-full max-w-sm mx-auto lg:w-64 h-48 sm:h-36 rounded-xl overflow-hidden cursor-pointer group bg-gray-900"
                          onClick={(e) => {
                            e.stopPropagation()
                            setPlayingVideo(service.videoId)
                          }}
                        >
                          <Image
                            src={`https://img.youtube.com/vi/${service.videoId}/maxresdefault.jpg`}
                            alt={service.title}
                            width={320}
                            height={180}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                            <div className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                            Demo
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        {/* Who it's for */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Users className="h-5 w-5 text-blue-600 mr-2" />
                            Who it&apos;s for
                          </h4>
                          <p className="text-gray-600">{service.whoFor}</p>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <Clock className="h-5 w-5 text-purple-600 mr-2" />
                            Timeline
                          </h4>
                          <p className="text-gray-600">{service.timeline}</p>
                        </div>

                        {/* Pricing */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                            Pricing
                          </h4>
                          <div className="space-y-2 text-gray-600">
                            <p><span className="font-medium">Setup:</span> {service.pricing.setup}</p>
                            <p><span className="font-medium">Retainer:</span> {service.pricing.retainer}</p>
                            {service.pricing.bonus && (
                              <p><span className="font-medium">Bonus:</span> {service.pricing.bonus}</p>
                            )}
                            {service.pricing.addons && (
                              <p><span className="font-medium">Add-ons:</span> {service.pricing.addons}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {/* Scope */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Scope (what&apos;s included)
                          </h4>
                          <div className="space-y-3">
                            {service.scope.map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <span className="font-medium text-gray-900">{item.title}:</span>
                                  <span className="text-gray-600 ml-1">{item.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* KPIs */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            KPIs (acceptance criteria)
                          </h4>
                          <ul className="space-y-2">
                            {service.kpis.map((kpi, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{kpi}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <a
                          href={service.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch Demo
                        </a>
                        {service.pdfUrl && (
                          <a
                            href={service.pdfUrl}
                            download={service.pdfName}
                            className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </a>
                        )}
                      </div>
                      <Link
                        href="/contact"
                        className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Pipeline?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a 15-minute fit call to align on goals and map the fastest path to results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Fit Call Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
