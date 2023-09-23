import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/index/Hero'
import Overview from '@/components/index/Overview'
import RulesGuidelines from '@/components/index/RulesGuidelines'
import Criteria from '@/components/index/Criteria'
import Faqs from '@/components/index/Faqs'
import Container from '@/components/shared/Container'
import Timeline from '@/components/index/Timeline'
import Prizes from '@/components/index/Prizes'
import Sponsors from '@/components/index/Sponsors'
import PrivacyPolicy from '@/components/index/PrivacyPolicy'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content='Get linked Hackathon. A chance to win exciting prices' />
      </Head>
      <main>
        <section className='border-b border-b-slate-700'>
          <Hero />
        </section>

        <section className='border-b border-b-slate-700'>
          <Overview />
        </section>

        <section className='border-b border-b-slate-700'>
          <RulesGuidelines />
        </section>

        <section className='border-b border-b-slate-700'>
          <Criteria />
        </section>

        <section className='border-b border-b-slate-700'>
          <Faqs />
        </section>

        <Container>
          <Timeline />
        </Container>

        <section className='border-b border-b-slate-700'>
          <Prizes />
        </section>

        <section className='border-b border-b-slate-700'>
          <Sponsors />
        </section>

        <section className='border-b border-b-slate-700'>
          <PrivacyPolicy />
        </section>
      </main>
    </>
  )
}
