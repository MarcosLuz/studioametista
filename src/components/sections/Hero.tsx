'use client'

import { motion } from 'framer-motion'
import { Particles } from '@/components/magicui/particles'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { BorderBeam } from '@/components/magicui/border-beam'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        <Particles 
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#8B5CF6"
          refresh={false}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-white/90 to-purple-100/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-fit">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Mais de 10 anos transformando vidas</span>
            </AnimatedShinyText>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Transforme seu Corpo,
            </span>
            <br />
            <span className="text-gray-800">
              Equilibre sua Mente
            </span>
          </h1>
        </motion.div>

        {/* Typing Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <TypingAnimation
            className="text-xl md:text-2xl text-gray-600 font-medium"
            duration={100}
          >
            Pilates • Yoga • Bem-estar • Transformação
          </TypingAnimation>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ShimmerButton 
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            shimmerColor="#A78BFA"
            shimmerSize="0.1em"
          >
            Aula Experimental Grátis
          </ShimmerButton>

          <div className="relative">
            <button
              onClick={() => scrollToSection('about')}
              className="relative px-8 py-4 text-lg font-medium text-purple-600 border-2 border-purple-200 rounded-full hover:border-purple-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              Conheça o Estúdio
            </button>
            <BorderBeam size={60} duration={15} colorFrom="#8B5CF6" colorTo="#A78BFA" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Role para descobrir</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Breathing Animation Circle */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/30 to-purple-600/30 blur-xl"
        />
      </div>
    </section>
  )
}