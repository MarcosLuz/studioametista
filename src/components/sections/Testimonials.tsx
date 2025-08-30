'use client'

import { motion } from 'framer-motion'
import { Marquee } from '@/components/magicui/marquee'
import { AvatarCircles } from '@/components/magicui/avatar-circles'

const testimonials = [
  {
    name: 'Ana Maria Silva',
    age: 45,
    profession: 'Advogada',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?w=100&h=100&fit=crop&crop=face',
    content: 'Depois de anos com dores na coluna, o Pilates no Estúdio Ametista transformou minha vida. As professoras são excepcionais e o atendimento é sempre personalizado.',
    rating: 5,
    modality: 'Pilates'
  },
  {
    name: 'Carlos Eduardo',
    age: 52,
    profession: 'Empresário',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'O Yoga me trouxe o equilíbrio que eu precisava. Reduzi significativamente meu estresse e melhorei minha qualidade de vida. Ambiente acolhedor e profissionais qualificados.',
    rating: 5,
    modality: 'Yoga'
  },
  {
    name: 'Mariana Costa',
    age: 32,
    profession: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'O Pilates Suspenso é incrível! Nunca pensei que poderia me sentir tão forte e flexível. As aulas são desafiadoras mas sempre seguras. Super recomendo!',
    rating: 5,
    modality: 'Aerial Pilates'
  },
  {
    name: 'Roberto Santos',
    age: 60,
    profession: 'Aposentado',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Comecei com muitas limitações físicas e hoje me sinto renovado. O cuidado individual e a atenção às minhas necessidades fazem toda a diferença.',
    rating: 5,
    modality: 'Pilates'
  },
  {
    name: 'Juliana Ferreira',
    age: 38,
    profession: 'Fisioterapeuta',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    content: 'Como profissional da saúde, posso afirmar que o trabalho desenvolvido no Estúdio Ametista é de excelência. Técnicas corretas e ambiente seguro.',
    rating: 5,
    modality: 'Pilates'
  },
  {
    name: 'Pedro Oliveira',
    age: 29,
    profession: 'Programador',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    content: 'Trabalho muitas horas sentado e tinha muitas dores. Com as aulas regulares de Pilates, minha postura melhorou muito e as dores desapareceram.',
    rating: 5,
    modality: 'Pilates'
  }
]

const modalityColors = {
  'Pilates': 'from-purple-500 to-purple-700',
  'Yoga': 'from-pink-500 to-pink-700',
  'Aerial Pilates': 'from-indigo-500 to-indigo-700'
}

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="relative w-80 mx-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.profession}</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${modalityColors[testimonial.modality as keyof typeof modalityColors]}`}>
            {testimonial.modality}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">⭐</span>
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-600 leading-relaxed text-sm mb-4">
          "{testimonial.content}"
        </p>

        {/* Age */}
        <div className="text-xs text-gray-500">
          {testimonial.age} anos
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 3)
  const secondRow = testimonials.slice(3, 6)

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Histórias de{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              transformação real
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as experiências de quem já faz parte da família Ametista e 
            descobriu uma nova forma de viver com mais saúde e bem-estar.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Avaliação média</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Alunos satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Taxa de retenção</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
          </div>
        </motion.div>

        {/* Avatar Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <AvatarCircles 
            numPeople={500}
            avatarUrls={testimonials.map(t => t.avatar)}
          />
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondRow.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Marquee>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-100">
            <h3 className="text-3xl md:text-4xl font-light font-poppins text-gray-800 mb-4">
              Seja o próximo a transformar sua vida
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se às centenas de pessoas que já descobriram os benefícios 
              de uma vida mais equilibrada e saudável.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Comece Sua Transformação
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}