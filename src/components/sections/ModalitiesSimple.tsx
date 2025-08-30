'use client'

import { motion } from 'framer-motion'
import { BorderBeam } from '@/components/magicui/border-beam'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

const modalities = [
  {
    name: 'MAT PILATES',
    description: 'Fortalecimento do core, melhora da postura, flexibilidade e consciência corporal em grupos pequenos.',
    features: ['Turmas de até 6 alunos', 'Exercícios no solo', 'Fortalecimento do core', 'Melhora da postura'],
    icon: '🧘‍♀️',
    gradient: 'from-purple-500 to-purple-700',
    className: 'md:col-span-2'
  },
  {
    name: 'EQUIPMENT PILATES',
    description: 'Aparelhos especializados como Reformer, Cadillac, Chair e Barrel para exercícios personalizados.',
    features: ['Reformer & Cadillac', 'Exercícios personalizados', 'Reabilitação', 'Atendimento individual'],
    icon: '🏋️‍♀️',
    gradient: 'from-pink-500 to-pink-700',
    className: 'md:col-span-1'
  },
  {
    name: 'HATHA YOGA',
    description: 'Asanas, pranayama, meditação e relaxamento profundo para equilíbrio entre mente e corpo.',
    features: ['Asanas tradicionais', 'Técnicas de respiração', 'Meditação', 'Relaxamento profundo'],
    icon: '🕉️',
    gradient: 'from-indigo-500 to-indigo-700',
    className: 'md:col-span-1'
  },
  {
    name: 'AERIAL PILATES',
    description: 'Exercícios suspensos que desafiam a gravidade, proporcionando fortalecimento intenso.',
    features: ['Exercícios suspensos', 'Desafio da gravidade', 'Fortalecimento intenso', 'Melhora da coordenação'],
    icon: '🎪',
    gradient: 'from-violet-500 to-violet-700',
    className: 'md:col-span-2'
  }
]

export default function ModalitiesSimple() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="modalities" className="py-24 bg-white">
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
            Nossas Modalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Encontre a prática{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              perfeita para você
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos modalidades cuidadosamente selecionadas para atender diferentes necessidades, 
            objetivos e níveis de condicionamento físico.
          </p>
        </motion.div>

        {/* Modalities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {modalities.map((modality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={modality.className}
            >
              <div className="relative group h-full">
                <div className="bg-white rounded-xl border border-gray-200 hover:border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center">
                    {modality.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-semibold font-poppins text-gray-800">
                      {modality.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {modality.description}
                    </p>
                    
                    <div className="space-y-2">
                      {modality.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${modality.gradient}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 mt-auto">
                    <ShimmerButton
                      onClick={scrollToContact}
                      className={`w-full bg-gradient-to-r ${modality.gradient} hover:opacity-90 text-white py-3 text-sm font-medium rounded-full transition-all duration-300`}
                      shimmerColor="#ffffff"
                      shimmerSize="0.05em"
                    >
                      Agendar Aula
                    </ShimmerButton>
                  </div>
                </div>
                
                {/* Border Beam Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <BorderBeam size={60} duration={15} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-light font-poppins text-gray-800 mb-4">
              Não sabe qual modalidade escolher?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar você a encontrar a prática 
              ideal para seus objetivos e necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShimmerButton 
                onClick={scrollToContact}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
                shimmerColor="#A78BFA"
                shimmerSize="0.1em"
              >
                Fale com um Especialista
              </ShimmerButton>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 text-lg font-medium text-purple-600 border-2 border-purple-200 rounded-full hover:border-purple-300 transition-all duration-300"
              >
                Aula Experimental Grátis
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}