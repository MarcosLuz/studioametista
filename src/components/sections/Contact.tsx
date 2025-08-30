'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MagicCard } from '@/components/magicui/magic-card'
import { Meteors } from '@/components/magicui/meteors'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { Confetti } from '@/components/magicui/confetti'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show confetti and send WhatsApp message
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message} Telefone: ${formData.phone}, Email: ${formData.email}`
    window.open(`https://wa.me/5547997440932?text=${encodeURIComponent(message)}`, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-900 relative overflow-hidden">
      {/* Meteors Background */}
      <div className="absolute inset-0">
        <Meteors number={30} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Comece sua jornada{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              hoje mesmo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e dê o primeiro passo para uma vida mais saudável e equilibrada. 
            Nossa equipe está pronta para ajudar você a alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <MagicCard className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-6">
                  Envie sua mensagem
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="(47) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seus objetivos e qual modalidade tem interesse..."
                  />
                </div>
                
                <ShimmerButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-4 text-lg font-medium rounded-lg transition-all duration-300"
                  shimmerColor="#A78BFA"
                  shimmerSize="0.1em"
                >
                  {isSubmitting ? 'Enviando...' : 'Fale Conosco 💬'}
                </ShimmerButton>
                
                <p className="text-sm text-gray-600 text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para uma conversa direta conosco.
                </p>
              </form>
            </MagicCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <MagicCard className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Localização</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rua Alagoas, 137<br />
                      Anita Garibaldi<br />
                      Joinville - SC, Brasil
                    </p>
                  </div>
                </div>
              </MagicCard>
              
              <MagicCard className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Telefone</h4>
                    <a 
                      href="https://wa.me/5547997440932" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
                    >
                      (47) 99744-0932
                    </a>
                    <p className="text-gray-500 text-xs mt-1">WhatsApp disponível</p>
                  </div>
                </div>
              </MagicCard>
              
              <MagicCard className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Horários</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Segunda a Sexta: 06:00 - 21:00</p>
                      <p>Sábado: 08:00 - 11:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </div>

            {/* Google Maps */}
            <MagicCard className="bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7234567890123!2d-48.8461234567890!3d-26.3045678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzE2LjQiUyA0OMKwNTAnNDYuMCJX!5e0!3m2!1sen!2sbr!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Estúdiol Ametista"
              />
              <div className="p-4">
                <button
                  onClick={() => window.open('https://maps.google.com/maps?q=Rua+Alagoas+137+Joinville+SC', '_blank')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Abrir no Google Maps
                </button>
              </div>
            </MagicCard>
          </motion.div>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          manualstart
          particleCount={100}
          spread={70}
          origin={{ y: 0.6 }}
        />
      )}
    </section>
  )
}