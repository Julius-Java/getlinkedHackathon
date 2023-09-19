import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

import Layout from '@/components/Layout'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
