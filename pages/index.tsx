import Head from 'next/head'
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/Footer"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"

export default function Home() {
  return (
    <>
      <Head>
        <title>SwiftPe - Send Money to India Instantly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <HeroSection />
          <HowItWorksSection />
          <FeaturesSection />
          <CTASection />
        </main>
        
        <Footer />
        
        <ScrollToTopButton />
      </div>
    </>
  )
}