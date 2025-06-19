import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-white shadow fixed top-0 inset-x-0 z-10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-semibold text-gray-900">
          CYONIQ
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link href="#features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
