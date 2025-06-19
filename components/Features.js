export default function Features() {
  const items = [
    {
      title: 'Cutting‑edge Security',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
      desc: 'Keep your data safe with state‑of‑the‑art protection.'
    },
    {
      title: 'AI Consulting',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
      desc: 'Implement machine intelligence tailored for your business.'
    },
    {
      title: 'Cloud Services',
      img: 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&w=1000&q=80',
      desc: 'Scale effortlessly with secure and reliable infrastructure.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {items.map(({ title, img, desc }) => (
          <div key={title} className="md:flex items-center mb-16">
            <div className="md:w-1/2">
              <img src={img} alt="" className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
