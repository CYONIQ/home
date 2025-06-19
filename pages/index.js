
import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>CYONIQ – Cybersecurity & AI Consulting</title>
        <meta name="description" content="Modern Cybersecurity & KI Beratung für Unternehmen. Neon-Style Website mit Effekt." />
      </Head>
      <main className="bg-black text-white font-sans">
        <Hero />
        <Services />
        <Contact />
      </main>
    </>
  );
}
