import { Header } from '@/components/sections/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatWeOfferSection } from '@/components/sections/WhatWeOfferSection'
import { OnDemandProjectRequestSection } from '@/components/sections/OnDemandProjectRequestSection'
import { AboutUsSection } from '@/components/sections/AboutUsSection'
import { CustomProjectsSection } from '@/components/sections/CustomProjectsSection'
import { WhyFortevaSection } from '@/components/sections/WhyFortevaSection'
import { Footer } from '@/components/sections/Footer'
import { OurTeamSection } from '@/components/sections/OurTeamSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-forteva-base">
      <Header />
      <HeroSection />
      <WhatWeOfferSection />
      <OnDemandProjectRequestSection />
      <AboutUsSection />
      <OurTeamSection />
      <CustomProjectsSection />
      <WhyFortevaSection />
      <Footer />
    </main>
  )
} 