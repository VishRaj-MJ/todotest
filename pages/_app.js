import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      ToDo List
    </Head>
  <Header/>
  <div className="container mx-auto min-h-screen">
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
  )
}
