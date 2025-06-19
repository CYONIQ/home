
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-8 text-cyan-400"
        >
          Leistungen
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">Cybersecurity</h3>
            <p className="text-gray-300">
              Pentesting, Schwachstellenanalysen, Sicherheitsarchitektur & Awareness-Strategien für Unternehmen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">KI-Beratung</h3>
            <p className="text-gray-300">
              Einführung von KI in Prozesse, Machbarkeitsstudien, ethische Nutzung und strategische Roadmaps.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-fuchsia-400 mb-2">Cloud & DevSecOps</h3>
            <p className="text-gray-300">
              Skalierbare Infrastrukturberatung, CI/CD Pipelines, Zero Trust Modelle & Tool-Auswahl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
