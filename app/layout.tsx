import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "EurekAI",
  description:
    "Programas para líderes y equipos en la intersección de innovación, inteligencia artificial e impacto. Bootcamp y cursos aplicables desde el primer día.",
  icons: {
    icon: '/eurekai.png',
    shortcut: '/eurekai.png',
    apple: '/eurekai.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
