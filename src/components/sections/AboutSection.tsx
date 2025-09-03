import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  Target,
  Heart,
  Zap,
  ArrowRight,
  Star,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description:
      "100% de garantia em todos os nossos serviços com certificação de qualidade.",
  },
  {
    icon: Clock,
    title: "Rapidez e Eficiência",
    description: "Resposta em 24h e execução ágil sem comprometer a qualidade.",
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Oferecemos soluções sob medida para suas necessidades.",
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description:
      "Nosso objetivo é maximizar a eficiência dos seus equipamentos industriais.",
  },
];

const process = [
  {
    step: "01",
    title: "Avaliação Técnica",
    description:
      "Análise completa dos equipamentos e identificação das necessidades de limpeza.",
    icon: Wrench,
  },
  {
    step: "02",
    title: "Proposta Personalizada",
    description:
      "Orçamento detalhado com cronograma e especificações técnicas do serviço.",
    icon: Target,
  },
  {
    step: "03",
    title: "Execução Especializada",
    description:
      "Limpeza profissional com equipamentos de última geração e técnicas avançadas.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Garantia e Suporte",
    description:
      "Entrega com certificado de qualidade e suporte pós-serviço garantido.",
    icon: ThumbsUp,
  },
];

const achievements = [
  {
    value: "15+",
    label: "Anos de Experiência",
    color: "from-blue-500 to-blue-600",
  },
  {
    value: "500+",
    label: "Projetos Concluídos",
    color: "from-green-500 to-green-600",
  },
  {
    value: "100%",
    label: "Clientes Satisfeitos",
    color: "from-purple-500 to-purple-600",
  },
  {
    value: "24h",
    label: "Tempo de Resposta",
    color: "from-orange-500 to-orange-600",
  },
];

export function AboutSection() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contatos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="empresa"
      className="py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Sobre a PURIFLOW</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Especialistas em{" "}
            <span className="text-primary-600">Limpeza Industrial</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Com mais de 15 anos de experiência, a PURIFLOW é referência em
            limpeza especializada de equipamentos industriais, garantindo
            eficiência máxima e durabilidade para seus sistemas.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Nossa História e Missão
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fundada por <strong>Gustavo Costa</strong>, a PURIFLOW nasceu da
                necessidade de oferecer serviços especializados em limpeza
                industrial com qualidade superior. Nossa experiência abrange
                desde pequenas empresas até grandes complexos industriais.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Nossa missão</strong> é garantir que seus equipamentos
                industriais funcionem com máxima eficiência, reduzindo custos
                operacionais e aumentando a vida útil dos sistemas.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-4 rounded-xl bg-gray-50 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={cn(
                      "text-2xl lg:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      achievement.color
                    )}
                  >
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleScrollToContact}
              className="group bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Conheça Nossos Serviços</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Visual Side - Founder Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-200 shadow-xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <Users className="w-12 h-12 text-white" />
                </div>

                <div className="text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Gustavo Costa
                  </h4>
                  <p className="text-primary-600 font-semibold mb-4">
                    Fundador & Operador Especializado
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    "Com mais de 15 anos de experiência no setor, dedico-me a
                    oferecer soluções de limpeza industrial que superem as
                    expectativas dos nossos clientes."
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Especialidades:
                    </h5>
                    {[
                      "Limpeza de Exaustores Industriais",
                      "Manutenção de Filtros de Alta Performance",
                      "Restauração de Motores Industriais",
                    ].map((specialty, index) => (
                      <motion.div
                        key={specialty}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">
                          {specialty}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios que nos guiam na entrega de serviços de excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada em 4 etapas para garantir resultados
              excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
                )}

                <div className="relative z-10 bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 mt-4 group-hover:bg-primary-100 transition-colors">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
