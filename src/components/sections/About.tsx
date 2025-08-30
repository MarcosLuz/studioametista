'use client'

import { motion } from 'framer-motion'
import { MagicCard } from '@/components/magicui/magic-card'
import { AnimatedList } from '@/components/magicui/animated-list'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { BorderBeam } from '@/components/magicui/border-beam'
import { 
  HeartIcon, 
  EyeIcon, 
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const stats = [
  {
    number: 10,
    suffix: '+',
    label: 'Anos',
    description: 'de experiência',
    icon: ClockIcon,
    color: 'from-purple-500 to-purple-700'
  },
  {
    number: 500,
    suffix: '+',
    label: 'Alunos',
    description: 'transformados',
    icon: UserGroupIcon,
    color: 'from-pink-500 to-pink-700'
  },
  {
    number: 4,
    suffix: '',
    label: 'Modalidades',
    description: 'especializadas',
    icon: AcademicCapIcon,
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    number: 2,
    suffix: '',
    label: 'Salas',
    description: 'equipadas',
    icon: BuildingStorefrontIcon,
    color: 'from-violet-500 to-violet-700'
  }
]

const differentials = [
  {
    title: 'Atendimento personalizado',
    description: 'Cada aluno recebe atenção individual respeitando suas limitações e objetivos'
  },
  {
    title: 'Turmas reduzidas',
    description: 'Máximo 6 alunos por turma para garantir qualidade e segurança'
  },
  {
    title: 'Profissionais qualificados',
    description: 'Equipe especializada em Pilates, Yoga e reabilitação física'
  },
  {
    title: 'Equipamentos modernos',
    description: 'Aparelhos de última geração para potencializar seus resultados'
  },
  {
    title: 'Ambiente acolhedor',
    description: 'Espaço projetado para proporcionar bem-estar e tranquilidade'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
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
            Sobre Nós
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-poppins text-gray-800 mb-6">
            Mais que um estúdio,<br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              uma jornada de transformação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No Estúdio Ametista, acreditamos que cada pessoa é única e merece um cuidado especial. 
            Há mais de 10 anos, transformamos vidas através do movimento consciente e do equilíbrio interior.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MagicCard className="h-full p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mr-4">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins text-gray-800">Missão</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Criar e entregar programas de exercícios de reabilitação e condicionamento físico 
                com segurança e eficiência, buscando a saúde física e mental respeitando a 
                individualidade de cada aluno.
              </p>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full">
              <MagicCard className="h-full p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full flex items-center justify-center mr-4">
                    <EyeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold font-poppins text-gray-800">Visão</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ser empresa referência no desenvolvimento de exercícios físicos personalizados 
                  em aulas coletivas com qualidade, segurança e eficiência.
                </p>
              </MagicCard>
              <BorderBeam size={60} duration={12} colorFrom="#EC4899" colorTo="#F97316" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MagicCard className="h-full p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center mr-4">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins text-gray-800">Valores</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>• Qualidade superior no atendimento</p>
                <p>• Respeito à individualidade</p>
                <p>• Atendimento personalizado</p>
                <p>• Dedicação e comprometimento</p>
              </div>
            </MagicCard>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-2">
                  <NumberTicker value={stat.number} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentials */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-light font-poppins text-gray-800 mb-6">
              Por que escolher o{' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Estúdio Ametista?
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa abordagem única combina técnicas tradicionais com inovação, 
              criando um ambiente onde cada aluno pode alcançar seus objetivos com segurança e eficiência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedList className="space-y-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedList>
          </motion.div>
        </div>
      </div>
    </section>
  )
}