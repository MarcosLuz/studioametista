'use client'

import { motion } from 'framer-motion'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { MagicCard } from '@/components/magicui/magic-card'
import { BorderBeam } from '@/components/magicui/border-beam'
import { 
  BuildingStorefrontIcon,
  UserGroupIcon,
  SparklesIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline'

const facilities = [
  {
    name: 'Sala de Yoga',
    description: 'Ambiente tranquilo e aconchegante, ideal para práticas contemplativas e meditativas.',
    features: ['Espelhos amplos', 'Iluminação natural', 'Sistema de som', 'Tapetes premium'],
    icon: '🧘',
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Sala de Pilates',
    description: 'Equipamentos modernos Reformer, Cadillac, Chair e Barrel para exercícios personalizados.',
    features: ['Reformer Universal', 'Cadillac Completo', 'Chair & Barrel', 'Acessórios premium'],
    icon: '🏋️',
    color: 'from-pink-500 to-pink-700'
  },
  {
    name: 'Recepção Acolhedora',
    description: 'Espaço de acolhimento onde você será sempre bem-vindo com todo carinho.',
    features: ['Atendimento personalizado', 'Área de espera', 'Consultoria gratuita', 'Ambiente climatizado'],
    icon: '🏠',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    name: 'Estacionamento Amplo',
    description: 'Área de estacionamento gratuita e segura para sua comodidade.',
    features: ['Vagas cobertas', 'Segurança 24h', 'Fácil acesso', 'Sem custo adicional'],
    icon: '🚗',
    color: 'from-violet-500 to-violet-700'
  }
]

export default function Structure() {
  return (
    <section id="structure" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Nossa Estrutura
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Espaço projetado para{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              seu bem-estar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada detalhe do nosso estúdio foi pensado para proporcionar a melhor experiência 
            em sua jornada de saúde e bem-estar.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <MagicCard className="h-full p-8 bg-gradient-to-br from-white to-gray-50 hover:from-purple-50/30 hover:to-purple-100/30 transition-all duration-500 border border-gray-200 hover:border-purple-200 shadow-lg hover:shadow-xl group">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-full flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {facility.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-3">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {facility.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {facility.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${facility.color}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <BorderBeam size={60} duration={12} />
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* Animated Beam Connection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl h-32">
              <div className="absolute top-0 left-1/4 w-4 h-4 bg-purple-500 rounded-full" />
              <div className="absolute top-0 right-1/4 w-4 h-4 bg-pink-500 rounded-full" />
              <div className="absolute bottom-0 left-1/3 w-4 h-4 bg-indigo-500 rounded-full" />
              <div className="absolute bottom-0 right-1/3 w-4 h-4 bg-violet-500 rounded-full" />
              
              <AnimatedBeam
                className="h-32"
                containerRef={{ current: null }}
                fromRef={{ current: null }}
                toRef={{ current: null }}
                curvature={75}
                reverse={false}
                pathColor="#8B5CF6"
                pathWidth={2}
                pathOpacity={0.5}
                gradientStartColor="#8B5CF6"
                gradientStopColor="#EC4899"
                delay={0}
                duration={3}
              />
            </div>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                <BuildingStorefrontIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-light font-poppins text-gray-800 mb-4">
              Localização Privilegiada
            </h3>
            
            <div className="max-w-2xl mx-auto space-y-2 text-lg text-gray-600 mb-8">
              <p><strong>Rua Alagoas, 137</strong></p>
              <p>Anita Garibaldi - Joinville - SC</p>
              <p>Fácil acesso e estacionamento gratuito</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://maps.google.com/maps?q=Rua+Alagoas+137+Joinville+SC', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <span>📍</span>
                <span>Ver no Mapa</span>
              </button>
              <a
                href="https://wa.me/5547997440932"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-lg font-medium text-purple-600 border-2 border-purple-200 rounded-full hover:border-purple-300 transition-all duration-300 flex items-center space-x-2"
              >
                <span>💬</span>
                <span>(47) 99744-0932</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}