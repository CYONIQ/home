export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8">Contact</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-3 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </section>
  )
}
