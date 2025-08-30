export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-poppins font-bold text-xl text-purple-600">
              Estúdio Ametista
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-purple-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
            Estúdio <span className="text-purple-600">Ametista</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transforme seu corpo e mente através do movimento
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            Descubra o poder do Pilates, Yoga e Pilates Suspenso em um ambiente acolhedor 
            e profissional. Aulas personalizadas para todos os níveis em Joinville-SC.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Agende sua Aula Experimental Grátis
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Modalidades pensadas para seu bem-estar completo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform">
                🧘‍♀️
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Mat Pilates</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fortaleça seu core, melhore sua postura e desenvolva flexibilidade através de exercícios 
                precisos e controlados no solo.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Fortalecimento muscular</li>
                <li>• Melhoria da postura</li>
                <li>• Flexibilidade e equilíbrio</li>
                <li>• Alívio de dores nas costas</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform">
                🧘
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Yoga</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Encontre o equilíbrio perfeito entre mente e corpo através de práticas ancestrais 
                adaptadas para o mundo moderno.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Redução do stress</li>
                <li>• Maior flexibilidade</li>
                <li>• Conexão mente-corpo</li>
                <li>• Melhoria do sono</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6 text-white text-2xl group-hover:scale-110 transition-transform">
                🤸‍♀️
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">Aerial Pilates</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desafie a gravidade com exercícios suspensos que trabalham força, flexibilidade 
                e coordenação de forma divertida e inovadora.
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Descompressão da coluna</li>
                <li>• Força e resistência</li>
                <li>• Exercícios divertidos</li>
                <li>• Melhoria da coordenação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Sobre o Estúdio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 10 anos dedicados ao seu bem-estar, oferecendo um ambiente acolhedor 
              e profissional para sua jornada de transformação.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">
                Nossa Missão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Proporcionar um espaço único onde cada aluno pode descobrir seu potencial através 
                do movimento consciente. Acreditamos que o corpo é nosso templo e merece cuidado 
                especializado e atenção individual.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professores Qualificados</h4>
                    <p className="text-gray-600 text-sm">Equipe formada por profissionais certificados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Turmas Reduzidas</h4>
                    <p className="text-gray-600 text-sm">Máximo 6 alunos para atendimento personalizado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ambiente Acolhedor</h4>
                    <p className="text-gray-600 text-sm">Espaço pensado para seu conforto e bem-estar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">
                Por que escolher o Estúdio Ametista?
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <p className="text-gray-600">Alunos transformados</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <p className="text-gray-600">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <p className="text-gray-600">Taxa de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Entre em Contato</h2>
            <p className="text-xl text-gray-600">Estamos aqui para ajudar você a começar sua jornada</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Joinville - Santa Catarina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">Entre em contato para agendamentos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horários</h4>
                    <p className="text-gray-600">Segunda a Sexta: 6h às 21h</p>
                    <p className="text-gray-600">Sábado: 7h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-poppins">
                Aula Experimental Gratuita
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Experimente nossos serviços sem compromisso. Venha conhecer nosso espaço, 
                nossa metodologia e sinta na prática os benefícios das nossas aulas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Avaliação postural gratuita</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Aula experimental personalizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Orientação profissional</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-purple-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Agendar Aula Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-poppins font-bold text-2xl text-purple-400 mb-4">
              Estúdio Ametista
            </div>
            <p className="text-gray-400 mb-6">
              Transformando vidas através do movimento consciente
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Estúdio Ametista. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}