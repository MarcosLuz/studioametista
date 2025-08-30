'use client'

import { motion } from 'framer-motion'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { 
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  'Estúdiol': [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Modalidades', href: '#modalities' },
    { name: 'Horários', href: '#schedule' },
    { name: 'Estrutura', href: '#structure' }
  ],
  'Serviços': [
    { name: 'Mat Pilates', href: '#modalities' },
    { name: 'Equipment Pilates', href: '#modalities' },
    { name: 'Hatha Yoga', href: '#modalities' },
    { name: 'Aerial Pilates', href: '#modalities' }
  ],
  'Suporte': [
    { name: 'Contato', href: '#contact' },
    { name: 'WhatsApp', href: 'https://wa.me/5547997440932' },
    { name: 'Localização', href: '#contact' },
    { name: 'FAQ', href: '#contact' }
  ]
}

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: '📷',
    color: 'from-pink-500 to-pink-700'
  },
  {
    name: 'Facebook',
    href: '#',
    icon: '📱',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5547997440932',
    icon: '💬',
    color: 'from-green-500 to-green-700'
  }
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Beam Decoration */}
      <div className="absolute top-0 left-0 right-0">
        <div className="relative w-full h-2">
          <AnimatedBeam
            className="h-2"
            containerRef={{ current: null }}
            fromRef={{ current: null }}
            toRef={{ current: null }}
            curvature={0}
            reverse={false}
            pathColor="#8B5CF6"
            pathWidth={4}
            pathOpacity={0.8}
            gradientStartColor="#8B5CF6"
            gradientStopColor="#EC4899"
            delay={0}
            duration={5}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Estúdiol Ametista
                </h3>
                <p className="text-gray-400 text-sm">Pilates • Yoga • Bem-estar</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Mais de 10 anos transformando vidas através do movimento consciente 
              e do equilíbrio entre corpo e mente.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins mb-6 text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPinIcon className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-white font-medium text-sm">Rua Alagoas, 137</p>
                <p className="text-gray-400 text-xs">Anita Garibaldi - Joinville/SC</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <PhoneIcon className="w-5 h-5 text-purple-400" />
              <div>
                <a 
                  href="https://wa.me/5547997440932" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors duration-300 font-medium text-sm"
                >
                  (47) 99744-0932
                </a>
                <p className="text-gray-400 text-xs">WhatsApp disponível</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <HeartIcon className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-white font-medium text-sm">Seg-Sex: 06h-21h</p>
                <p className="text-gray-400 text-xs">Sáb: 08h-11h | Dom: Fechado</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>&copy; 2024 Estúdio Ametista. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido com ❤️ para transformar vidas através do movimento.</p>
          </div>
          
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Política de Privacidade
            </button>
            <button className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Termos de Uso
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}