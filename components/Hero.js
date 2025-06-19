import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-semibold text-gray-900"
      >
        Welcome to CYONIQ
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 max-w-2xl text-lg text-gray-600"
      >
        Innovative solutions at the intersection of cybersecurity and artificial intelligence.
      </motion.p>
      <motion.a
        href="#features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 px-8 py-3 bg-gray-900 text-white rounded hover:bg-gray-800"
      >
        Learn more
      </motion.a>
    </section>
  )
}
