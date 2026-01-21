'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaUser, FaBuilding, FaComments } from 'react-icons/fa'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
    setFormData({ name: '', company: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Rejoignez <span className="gradient-text">l'Aventure</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vous souhaitez devenir sponsor ou simplement en savoir plus ? 
              Contactez-nous dès maintenant.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    <FaUser className="inline mr-2 text-rider-blue" />
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rider-blue transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    <FaBuilding className="inline mr-2 text-rider-blue" />
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rider-blue transition-colors duration-300"
                    placeholder="Votre entreprise"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    <FaEnvelope className="inline mr-2 text-rider-blue" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rider-blue transition-colors duration-300"
                    placeholder="contact@example.com"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300 mb-2"
                  >
                    <FaComments className="inline mr-2 text-rider-blue" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rider-blue transition-colors duration-300 resize-none"
                    placeholder="Parlez-nous de votre projet de sponsoring..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="pt-4"
                >
                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-blue text-white text-lg font-bold rounded-full hover:shadow-2xl transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 40px rgba(0, 102, 255, 0.5)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Devenir Sponsor
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rider-blue to-rider-lightBlue rounded-3xl blur opacity-20 -z-10" />
          </motion.div>

          {/* Footer Info */}
          <motion.div
            className="mt-12 text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="mb-4">
              © 2026 THE RIDER - Jordan. Tous droits réservés.
            </p>
            <p className="text-sm">
              Performance • Défi • Dépassement
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rider-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default ContactSection
