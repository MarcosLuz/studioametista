'use client'

import { motion } from 'framer-motion'
import { PulsatingButton } from '@/components/magicui/pulsating-button'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre as aulas no Estúdio Ametista. Poderia me ajudar?'
    window.open(`https://wa.me/5547997440932?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <PulsatingButton
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center group transition-all duration-300"
        pulseColor="#10B981"
        duration="1.5s"
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl mb-0.5 group-hover:scale-110 transition-transform duration-300">
            💬
          </span>
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-12 bg-green-600 px-2 py-1 rounded text-white whitespace-nowrap">
            Fale Conosco
          </span>
        </div>
      </PulsatingButton>
    </motion.div>
  )
}