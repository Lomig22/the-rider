import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image avec overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="gradient-text">THE RIDER</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Performance. Défi. Dépassement.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Jordan – Pilote Motocross
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="#identity"
              className="px-8 py-4 bg-[#0066FF] text-white text-lg font-semibold rounded-full hover:bg-[#4D94FF] transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir le Rider
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Devenir Sponsor
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#identity"
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5 },
          }}
        >
          <FaChevronDown className="text-white text-3xl" />
        </motion.a>
      </div>

      {/* Effet de vitesse / Motion Lines */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0066FF]/20 to-transparent transform skew-x-12" />
      </motion.div>
    </section>
  )
}

export default HeroSection
