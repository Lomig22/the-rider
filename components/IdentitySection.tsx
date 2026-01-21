'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const IdentitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="identity"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1568560869-25b8f7c8e5c3?q=80&w=2070&auto=format&fit=crop)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Accent Blue Border */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full border-4 border-rider-blue rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              L'Identité du{' '}
              <span className="gradient-text">Rider</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="leading-relaxed">
                <span className="text-rider-blue font-semibold">Jordan</span> n'est pas juste un pilote,
                c'est une force de la nature sur deux roues. Passionné par le motocross depuis son plus
                jeune âge, il a transformé sa passion en une quête de performance absolue.
              </p>

              <p className="leading-relaxed">
                Chaque circuit est un nouveau défi, chaque course une opportunité de se dépasser.
                Son approche combine <span className="text-white font-semibold">mental d'acier</span>,
                <span className="text-white font-semibold"> discipline rigoureuse</span> et
                <span className="text-white font-semibold"> ambition sans limite</span>.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-black gradient-text mb-2">💪</div>
                  <div className="text-sm font-semibold text-white">Mental</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-black gradient-text mb-2">🎯</div>
                  <div className="text-sm font-semibold text-white">Discipline</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-black gradient-text mb-2">🚀</div>
                  <div className="text-sm font-semibold text-white">Ambition</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IdentitySection
