import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import {TopImage} from "@/components/TopImage"

export default function Home() {
  return (
    <>
      <Head>
        <title>Captivators- A group of clubs</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      
      <main className='bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800'>
      <TopImage />
        <Hero />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        {/* <Testimonials /> */}
        <Pricing />
        <CallToAction />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
