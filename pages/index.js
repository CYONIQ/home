import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>CYONIQ – Professional Services</title>
        <meta name="description" content="Cybersecurity and AI consulting" />
      </Head>
      <Navbar />
      <main className="bg-white text-gray-900 font-sans">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
