'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { 
  HomeIcon, 
  UserIcon, 
  AcademicCapIcon,
  HeartIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Início', href: 'home', icon: HomeIcon },
  { name: 'Sobre', href: 'about', icon: UserIcon },
  { name: 'Modalidades', href: 'modalities', icon: AcademicCapIcon },
  { name: 'Benefícios', href: 'benefits', icon: HeartIcon },
  { name: 'Estrutura', href: 'structure', icon: BuildingStorefrontIcon },
  { name: 'Horários', href: 'schedule', icon: CalendarDaysIcon },
  { name: 'Contato', href: 'contact', icon: PhoneIcon },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionChange = () => {
      const sections = navItems.map(item => item.href)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-poppins text-gray-800">
                  Estúdio Ametista
                </h1>
                <p className="text-xs text-gray-600">Pilates • Yoga • Bem-estar</p>
              </div>
            </motion.div>

            {/* Desktop Dock */}
            <div className="hidden lg:block">
              <Dock className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg">
                {navItems.map((item) => (
                  <DockIcon key={item.href} className="relative">
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                        activeSection === item.href
                          ? 'bg-purple-100 text-purple-600'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                      title={item.name}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs mt-1">{item.name}</span>
                    </button>
                  </DockIcon>
                ))}
              </Dock>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.href
                          ? 'bg-purple-100 text-purple-600'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}