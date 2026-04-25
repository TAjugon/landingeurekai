import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bootcamp presencial | EurekAI",
  description:
    "Innovación potenciada con inteligencia artificial. Un día presencial para pasar de reto a prototipo y plan de implementación.",
}

export default function BootcampLayout({ children }: { children: React.ReactNode }) {
  return children
}
