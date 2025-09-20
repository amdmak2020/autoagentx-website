import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YouTube Shorts Factory — 30–120 Shorts/Month | AutoAgent X",
  description: "Daily vertical video: hooks in 2s, big captions, auto uploads, weekly performance report. 30–120 Shorts/month.",
  openGraph: {
    title: "YouTube Shorts Factory — 30–120 Shorts/Month | AutoAgent X",
    description: "Daily vertical video: hooks in 2s, big captions, auto uploads, weekly performance report. 30–120 Shorts/month.",
    url: "https://autoagentx.com/services/youtube-shorts-factory",
  },
}

export default function ShortsFactoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
