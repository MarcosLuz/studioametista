'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShineBorder } from '@/components/magicui/shine-border'
import { RainbowButton } from '@/components/magicui/rainbow-button'
import { Confetti } from '@/components/magicui/confetti'
import { CheckIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Básico',
    price: 180,
    originalPrice: 220,
    description: 'Perfeito para iniciantes que querem experimentar o Pilates ou Yoga',
    features: [
      '8 aulas por mês',
      'Acesso a Mat Pilates ou Yoga',
      'Turmas de até 6 alunos',
      'Orientação profissional',
      'Flexibilidade de horários'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-700'
  },
  {
    name: 'Completo',
    price: 280,
    originalPrice: 350,
    description: 'Nossa opção mais popular com acesso completo às modalidades',
    features: [
      'Aulas ilimitadas',
      'Todas as modalidades incluídas',
      'Mat Pilates + Equipment Pilates',
      'Hatha Yoga + Aerial Pilates',
      'Atendimento personalizado',
      'Avaliação física gratuita',
      'Plano alimentar básico'
    ],
    popular: true,
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Premium',
    price: 450,
    originalPrice: 550,
    description: 'Experiência completa com atendimento VIP e aulas particulares',
    features: [
      'Tudo do plano Completo',
      '4 aulas particulares/mês',
      'Atendimento VIP prioritário',
      'Avaliação física completa',
      'Plano nutricional personalizado',
      'Acompanhamento mensal',
      'Acesso aos finais de semana'
    ],
    popular: false,
    color: 'from-violet-500 to-violet-700'
  }
]

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    
    // Open WhatsApp
    const message = `Olá! Gostaria de contratar o plano ${planName} do Estúdio Ametista. Poderia me fornecer mais informações?`
    window.open(`https://wa.me/5547997440932?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
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
            Planos e Preços
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Escolha o plano{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              ideal para você
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparência total nos preços. Escolha o plano que melhor se adequa aos seus 
            objetivos e comece sua jornada de transformação hoje mesmo.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Mais Popular ⭐
                  </span>
                </div>
              )}

              <ShineBorder
                className="relative overflow-hidden bg-white rounded-2xl"
                shineColor={plan.popular ? ["#8B5CF6", "#EC4899", "#8B5CF6"] : ["#E5E7EB", "#9CA3AF"]}
                borderWidth={plan.popular ? 2 : 1}
              >
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-800">
                          R$ {plan.price}
                        </span>
                        <div className="text-left">
                          <div className="text-lg text-gray-500 line-through">
                            R$ {plan.originalPrice}
                          </div>
                          <div className="text-sm text-gray-600">/mês</div>
                        </div>
                      </div>
                      <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Economia de R$ {plan.originalPrice - plan.price}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    {plan.popular ? (
                      <RainbowButton
                        onClick={() => handlePlanSelection(plan.name)}
                        className="w-full py-4 text-lg font-medium rounded-xl"
                      >
                        Escolher {plan.name}
                      </RainbowButton>
                    ) : (
                      <button
                        onClick={() => handlePlanSelection(plan.name)}
                        className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-4 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105`}
                      >
                        Escolher {plan.name}
                      </button>
                    )}
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          ))}</div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light font-poppins text-gray-800 mb-4">
              Benefícios Exclusivos em Todos os Planos
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Aula Experimental</h4>
                <p className="text-sm text-gray-600">Primeira aula gratuita para conhecer nosso método</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-gray-800 mb-2">App Exclusivo</h4>
                <p className="text-sm text-gray-600">Agendamento fácil e acompanhamento de progresso</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-gray-800 mb-2">Garantia 30 Dias</h4>
                <p className="text-sm text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <p>✅ Sem taxa de matrícula</p>
              <p>✅ Cancelamento sem multa após 3 meses</p>
              <p>✅ Reposição de aulas perdidas</p>
              <p>✅ Desconto familiar (10% para o segundo membro)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          manualstart
          options={{
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          }}
        />
      )}
    </section>
  )
}