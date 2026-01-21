import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'THE RIDER - Jordan | Pilote Motocross',
  description: 'Performance. Défi. Dépassement. Découvrez l\'univers de Jordan, pilote motocross passionné et engagé.',
  keywords: 'motocross, pilote, Jordan, THE RIDER, sport, performance, sponsoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
