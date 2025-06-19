
export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-cyan-400 mb-6">Kontakt</h2>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Dein Name"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded"
        />
        <input
          type="email"
          placeholder="Deine E-Mail"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded"
        />
        <textarea
          placeholder="Nachricht"
          rows="5"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded font-bold"
        >
          Absenden
        </button>
      </form>
    </section>
  );
}
