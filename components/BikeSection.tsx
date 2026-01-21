'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCog, FaBolt, FaTachometerAlt, FaWeight } from 'react-icons/fa'

const bikeSpecs = [
  {
    icon: FaBolt,
    label: 'Puissance',
    value: '450cc',
  },
  {
    icon: FaTachometerAlt,
    label: 'Vitesse Max',
    value: '180 km/h',
  },
  {
    icon: FaWeight,
    label: 'Poids',
    value: '108 kg',
  },
  {
    icon: FaCog,
    label: 'Transmission',
    value: '5 vitesses',
  },
]

const BikeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="bike"
      ref={ref}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              La Machine <span className="gradient-text">Bleue</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Une moto de course conçue pour la{' '}
              <span className="text-rider-blue font-semibold">performance pure</span>. 
              Chaque composant est optimisé pour la vitesse, la précision et la fiabilité 
              dans les conditions les plus extrêmes.
            </motion.p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {bikeSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-rider-blue transition-all duration-300"
                >
                  <spec.icon className="text-rider-blue text-3xl mb-3" />
                  <div className="text-sm text-gray-400 mb-1">{spec.label}</div>
                  <div className="text-2xl font-bold text-white">{spec.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {['Suspension racing haute performance', 'Freinage optimisé', 'Châssis ultra-léger'].map(
                (feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-rider-blue rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1568560869-e1b57b8b66d7?q=80&w=2070&auto=format&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Accent Effect */}
            <motion.div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-rider-blue rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rider-blue/20 rounded-full blur-3xl -z-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BikeSection
