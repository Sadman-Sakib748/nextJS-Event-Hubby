import React from 'react'
import HeroSection from './Component/HeroSection/page'
import StatsSection from './Component/StatsSection/page'
import FeaturedEvents from './Component/FeaturedEvents/page'
import CallToAction from './Component/CallToAction/page'

export default function HomePage() {
  return (
    <div>
     <HeroSection />
     <StatsSection />
     <FeaturedEvents />
     <CallToAction />
    </div>
  )
}
