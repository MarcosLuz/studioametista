'use client'

import { motion } from 'framer-motion'
import { AnimatedList } from '@/components/magicui/animated-list'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

const pilatesBenefits = [
  'Fortalecimento do core e músculos profundos',
  'Melhora significativa da postura corporal',
  'Aumento da flexibilidade e mobilidade',
  'Alívio de dores nas costas e articulações',
  'Exercícios de baixo impacto para todas as idades',
  'Desenvolvimento da consciência corporal',
  'Reabilitação e prevenção de lesões'
]

const yogaBenefits = [
  'Redução significativa do estresse e ansiedade',
  'Melhora da qualidade do sono',
  'Aumento do foco e concentração mental',
  'Desenvolvimento da paz interior',
  'Fortalecimento do sistema imunológico',
  'Equilíbrio entre mente, corpo e espírito',
  'Maior autoconhecimento e bem-estar'
]

const healthStats = [
  {
    number: 89,
    suffix: '%',
    label: 'Redução de Dores',
    description: 'dos alunos relatam diminuição de dores crônicas'
  },
  {
    number: 94,
    suffix: '%',
    label: 'Melhora do Bem-estar',
    description: 'se sentem mais equilibrados mentalmente'
  },
  {
    number: 76,
    suffix: '%',
    label: 'Mais Flexibilidade',
    description: 'aumentaram significativamente a flexibilidade'
  }
]

export default function Benefits() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
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
            Benefícios Comprovados
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Transforme sua vida com{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              resultados reais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais que exercícios, oferecemos uma jornada completa de transformação física e mental 
            com benefícios cientificamente comprovados.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {healthStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                  <NumberTicker value={stat.number} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Comparison */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pilates Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h3 className="text-3xl font-semibold font-poppins text-gray-800 mb-4">
                Benefícios do Pilates
              </h3>
              <p className="text-gray-600 mb-8">
                O Pilates fortalece o corpo de dentro para fora, criando uma base sólida 
                para uma vida mais saudável e sem dores.
              </p>
            </div>

            <AnimatedList className="space-y-4">
              {pilatesBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </AnimatedList>
          </motion.div>

          {/* Yoga Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full mb-6">
                <span className="text-2xl">🕉️</span>
              </div>
              <h3 className="text-3xl font-semibold font-poppins text-gray-800 mb-4">
                Benefícios do Yoga
              </h3>
              <p className="text-gray-600 mb-8">
                O Yoga conecta mente, corpo e espírito, promovendo equilíbrio interno 
                e bem-estar duradouro em todas as áreas da vida.
              </p>
            </div>

            <AnimatedList className="space-y-4">
              {yogaBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-pink-100 hover:border-pink-200 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </AnimatedList>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-light font-poppins mb-4">
              Comece sua jornada de transformação hoje
            </h3>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Não deixe para amanhã o cuidado que seu corpo e mente merecem. 
              Agende sua aula experimental e sinta a diferença na primeira sessão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShimmerButton 
                onClick={scrollToContact}
                className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
                shimmerColor="#8B5CF6"
                shimmerSize="0.1em"
              >
                Invista em Sua Saúde
              </ShimmerButton>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 text-lg font-medium text-white border-2 border-white/30 rounded-full hover:border-white/50 transition-all duration-300"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}