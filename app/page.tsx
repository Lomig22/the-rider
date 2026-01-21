'use client'

import HeroSection from '@/components/HeroSection'
import IdentitySection from '@/components/IdentitySection'
import PerformanceSection from '@/components/PerformanceSection'
import PortfolioSection from '@/components/PortfolioSection'
import BikeSection from '@/components/BikeSection'
import SponsorSection from '@/components/SponsorSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <IdentitySection />
      <PerformanceSection />
      <PortfolioSection />
      <BikeSection />
      <SponsorSection />
      <ContactSection />
    </main>
  )
}
