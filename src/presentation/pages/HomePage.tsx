import { AboutSection } from '@/presentation/components/sections/AboutSection'
import { CtaSection } from '@/presentation/components/sections/CtaSection'
import { EventsSection } from '@/presentation/components/sections/EventsSection'
import { FacultySection } from '@/presentation/components/sections/FacultySection'
import { HeroSection } from '@/presentation/components/sections/HeroSection'
import { NewsSection } from '@/presentation/components/sections/NewsSection'
import { ProgramsSection } from '@/presentation/components/sections/ProgramsSection'
import { StatsBandSection } from '@/presentation/components/sections/StatsBandSection'
import { TestimonialsSection } from '@/presentation/components/sections/TestimonialsSection'
import { Footer } from '@/presentation/components/layout/Footer'
import { Navbar } from '@/presentation/components/layout/Navbar'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBandSection />
        <AboutSection />
        <ProgramsSection />
        <EventsSection />
        <FacultySection />
        <TestimonialsSection />
        <NewsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
