'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaRoad, FaFlagCheckered, FaMedal } from 'react-icons/fa'

const stats = [
  {
    icon: FaTrophy,
    number: '8+',
    label: 'Années de Pratique',
    color: 'text-rider-blue',
  },
  {
    icon: FaFlagCheckered,
    number: '45+',
    label: 'Compétitions',
    color: 'text-rider-lightBlue',
  },
  {
    icon: FaRoad,
    number: '120+',
    label: 'Circuits Parcourus',
    color: 'text-rider-blue',
  },
  {
    icon: FaMedal,
    number: 'Top 10',
    label: 'Classement National',
    color: 'text-rider-lightBlue',
  },
]

const PerformanceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="performance"
      ref={ref}
      className="relative py-24 md:py-32 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Performances & <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-xl text-gray-400">
            Des chiffres qui parlent d'eux-mêmes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-rider-blue transition-all duration-300 shadow-xl">
                {/* Icon */}
                <motion.div
                  className={`${stat.color} text-5xl mb-6`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <stat.icon />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-6xl md:text-7xl font-black gradient-text mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: index * 0.15 + 0.3,
                  }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-lg text-gray-300 font-semibold">
                  {stat.label}
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-rider-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block bg-gradient-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            🎯 Objectif 2026 : Podium National
          </div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rider-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default PerformanceSection
