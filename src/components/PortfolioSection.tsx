import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070&auto=format&fit=crop',
    title: 'Circuit Cross',
    category: 'Action',
  },
  {
    url: 'https://images.unsplash.com/photo-1568560869-25b8f7c8e5c3?q=80&w=2070&auto=format&fit=crop',
    title: 'En Plein Vol',
    category: 'Saut',
  },
  {
    url: 'https://images.unsplash.com/photo-1598808503491-ff9d0ae050c9?q=80&w=2070&auto=format&fit=crop',
    title: 'Vitesse Pure',
    category: 'Racing',
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop',
    title: 'Projection',
    category: 'Technique',
  },
  {
    url: 'https://images.unsplash.com/photo-1568560869-e1b57b8b66d7?q=80&w=2070&auto=format&fit=crop',
    title: 'Moto Bleue',
    category: 'Machine',
  },
  {
    url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop',
    title: 'Performance',
    category: 'Compétition',
  },
]

const PortfolioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black"
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
            Portfolio <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-gray-400">
            Chaque image raconte une histoire de vitesse et de dépassement
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6"
                initial={{ y: 20, opacity: 0 }}
                animate={
                  hoveredIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: 20, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                <div className="text-[#0066FF] text-sm font-semibold mb-2">
                  {image.category}
                </div>
                <h3 className="text-2xl font-bold text-white">{image.title}</h3>
              </motion.div>

              {/* Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                initial={false}
              />

              {/* Light Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0066FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 text-lg">
            Plus de contenu disponible sur demande
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
