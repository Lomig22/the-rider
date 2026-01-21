'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEye, FaTrophy, FaHandshake, FaChartLine } from 'react-icons/fa'

const benefits = [
  {
    icon: FaEye,
    title: 'Visibilité Maximale',
    description:
      'Votre marque en avant-plan sur toutes les compétitions et contenus digitaux.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaTrophy,
    title: 'Image de Performance',
    description:
      'Associez votre marque aux valeurs de dépassement, courage et excellence.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FaHandshake,
    title: 'Partenariat Long Terme',
    description:
      'Une collaboration durable basée sur la confiance et des objectifs communs.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: FaChartLine,
    title: 'ROI Mesurable',
    description:
      'Impact direct et quantifiable sur votre notoriété et votre audience.',
    color: 'from-blue-600 to-blue-700',
  },
]

const SponsorSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="sponsor"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Pourquoi Devenir <span className="gradient-text">Sponsor</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rejoignez l'aventure et associez votre marque à l'excellence sportive. 
            Un partenariat qui inspire et qui performe.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-rider-blue transition-all duration-300 h-full">
                {/* Icon with gradient background */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="text-white text-2xl" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-rider-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-blue p-12 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Prêt à Rejoindre l'Aventure ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Devenez partenaire officiel et propulsez votre marque au sommet
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-10 py-4 bg-white text-rider-blue text-lg font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous Maintenant
            </motion.a>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rider-blue to-rider-lightBlue rounded-3xl blur opacity-30 -z-10" />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
    </section>
  )
}

export default SponsorSection
