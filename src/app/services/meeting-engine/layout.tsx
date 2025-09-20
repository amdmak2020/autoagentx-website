import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meeting Engine — 20–60 Qualified Meetings/Month | AutoAgent X",
  description: "Predictable outbound: clean targeting, inboxes that land, reply→calendar→CRM, daily KPIs. 20–60 qualified meetings/month in ~60 days.",
  openGraph: {
    title: "Meeting Engine — 20–60 Qualified Meetings/Month | AutoAgent X",
    description: "Predictable outbound: clean targeting, inboxes that land, reply→calendar→CRM, daily KPIs. 20–60 qualified meetings/month in ~60 days.",
    url: "https://autoagentx.com/services/meeting-engine",
  },
}

export default function MeetingEngineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
