import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

import Layout from '@/components/shared/Layout'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </>
  )
}
