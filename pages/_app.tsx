import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import PrelineContext from '@/components/shared/Preline'
import Layout from '@/components/shared/Layout'
import { useRouter } from 'next/router'


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ["400", "700"]
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const routesWithLayout = ["/"]

  const useLayout = routesWithLayout.includes(router.pathname)

  return (
    <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href={""} />
        </Head>
        <style jsx global>{`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
        </style>
        {
            useLayout 
            ?
            (
              <Layout>
                <PrelineContext>
                  <Component {...pageProps}  />
                </PrelineContext>
              </Layout>
            )
            :
            (
              <PrelineContext>
                <Component {...pageProps}  />
              </PrelineContext>
            )
        }
    </>
  )
}
