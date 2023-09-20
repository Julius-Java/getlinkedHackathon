import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content='Get linked Hackathon. A chance to win exciting prices' />
      </Head>
      <main>
        <div className='border-b border-b-slate-700'>
          <Hero />
        </div>
      </main>
    </>
  )
}
