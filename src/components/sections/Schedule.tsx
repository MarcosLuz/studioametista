'use client'

import { motion } from 'framer-motion'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'
import { MagicCard } from '@/components/magicui/magic-card'

const schedule = {
  'Segunda': [
    { time: '06:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '07:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '08:00', class: 'Equipment Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '18:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' },
    { time: '19:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '20:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' }
  ],
  'Terça': [
    { time: '06:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' },
    { time: '07:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '08:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '18:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '19:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' },
    { time: '20:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' }
  ],
  'Quarta': [
    { time: '06:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '07:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '08:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' },
    { time: '18:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '19:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '20:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' }
  ],
  'Quinta': [
    { time: '06:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' },
    { time: '07:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '08:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '18:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '19:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' },
    { time: '20:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' }
  ],
  'Sexta': [
    { time: '06:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '07:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '08:00', class: 'Equipment Pilates', instructor: 'Carol', type: 'pilates' },
    { time: '18:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' },
    { time: '19:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '20:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' }
  ],
  'Sábado': [
    { time: '08:00', class: 'Mat Pilates', instructor: 'Ana', type: 'pilates' },
    { time: '09:00', class: 'Hatha Yoga', instructor: 'Maria', type: 'yoga' },
    { time: '10:00', class: 'Aerial Pilates', instructor: 'Carol', type: 'aerial' }
  ]
}

const typeColors = {
  pilates: 'from-purple-500 to-purple-700',
  yoga: 'from-pink-500 to-pink-700',
  aerial: 'from-indigo-500 to-indigo-700'
}

const typeIcons = {
  pilates: '🧘‍♀️',
  yoga: '🥱',
  aerial: '🎪'
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatedGridPattern 
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        />
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
            Horários das Aulas
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Encontre o horário{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              perfeito para você
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos horários flexíveis de segunda a sábado para que você possa 
            encaixar o cuidado com seu bem-estar na sua rotina.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${typeColors.pilates}`} />
            <span className="text-sm text-gray-700">Mat/Equipment Pilates</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${typeColors.yoga}`} />
            <span className="text-sm text-gray-700">Hatha Yoga</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${typeColors.aerial}`} />
            <span className="text-sm text-gray-700">Aerial Pilates</span>
          </div>
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(schedule).map(([day, classes], dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <MagicCard className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-6 text-center">
                    {day}
                  </h3>
                  
                  <div className="space-y-4">
                    {classes.map((classItem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${typeColors[classItem.type as keyof typeof typeColors]} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 border border-purple-100 hover:border-purple-200`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{typeIcons[classItem.type as keyof typeof typeIcons]}</span>
                          <div>
                            <div className="font-medium text-gray-800 text-sm">
                              {classItem.class}
                            </div>
                            <div className="text-xs text-gray-600">
                              Prof. {classItem.instructor}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-700">
                          {classItem.time}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-light font-poppins text-gray-800 mb-4">
              Reserve sua aula agora
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              As vagas são limitadas para garantir atendimento personalizado. 
              Reserve com antecedência e garante seu horário preferido.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => window.open('https://wa.me/5547997440932?text=Olá! Gostaria de agendar uma aula no Estúdiol Ametista.', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>💬</span>
                <span>Agendar via WhatsApp</span>
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 text-lg font-medium text-purple-600 border-2 border-purple-200 rounded-full hover:border-purple-300 transition-all duration-300 flex items-center space-x-2"
              >
                <span>📞</span>
                <span>(47) 99744-0932</span>
              </button>
            </div>
            
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>✨ Primeira aula experimental grátis</p>
              <p>💳 Parcelamento em até 12x sem juros</p>
              <p>🎯 Reposição de aulas perdidas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}