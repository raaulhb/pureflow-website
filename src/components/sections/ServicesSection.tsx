import { motion } from "framer-motion";
import {
  Wind,
  Filter,
  Cog,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Phone,
  Wrench,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "exaustores",
    icon: Wind,
    title: "Limpeza de Exaustores",
    subtitle: "Industriais e Comerciais",
    description:
      "Limpeza especializada para sistemas de exaustão, garantindo fluxo de ar otimizado e segurança operacional.",
    image: "🏭", // Placeholder emoji
    benefits: [
      "Remoção completa de gordura e resíduos",
      "Melhoria na eficiência energética",
      "Redução de riscos de incêndio",
      "Conformidade com normas de segurança",
    ],
    process: [
      "Inspeção técnica detalhada",
      "Desmontagem cuidadosa do sistema",
      "Limpeza com produtos especializados",
      "Teste de funcionamento e certificação",
    ],
    features: [
      { icon: Shield, text: "Garantia de 6 meses" },
      { icon: Clock, text: "Serviço em 24-48h" },
      { icon: Award, text: "Certificado de limpeza" },
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    id: "filtros",
    icon: Filter,
    title: "Manutenção de Filtros",
    subtitle: "Alta Performance Industrial",
    description:
      "Restauração e otimização de filtros industriais para máxima eficiência de filtragem e durabilidade.",
    image: "🔧", // Placeholder emoji
    benefits: [
      "Restauração da capacidade de filtragem",
      "Extensão da vida útil do filtro",
      "Melhoria na qualidade do ar",
      "Redução de custos operacionais",
    ],
    process: [
      "Análise do estado do filtro",
      "Limpeza profunda especializada",
      "Teste de eficiência de filtragem",
      "Relatório técnico detalhado",
    ],
    features: [
      { icon: Shield, text: "Garantia de 4 meses" },
      { icon: Clock, text: "Serviço express" },
      { icon: Award, text: "Teste de qualidade" },
    ],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    id: "motores",
    icon: Cog,
    title: "Limpeza de Motores",
    subtitle: "Industriais e Equipamentos",
    description:
      "Limpeza especializada de motores industriais para máximo desempenho e vida útil prolongada.",
    image: "⚙️", // Placeholder emoji
    benefits: [
      "Melhoria no desempenho do motor",
      "Redução do consumo energético",
      "Prevenção de superaquecimento",
      "Diminuição de vibrações e ruídos",
    ],
    process: [
      "Diagnóstico técnico completo",
      "Desmontagem segura do motor",
      "Limpeza com técnicas avançadas",
      "Montagem e teste operacional",
    ],
    features: [
      { icon: Shield, text: "Garantia de 8 meses" },
      { icon: Clock, text: "Serviço especializado" },
      { icon: Award, text: "Relatório técnico" },
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Especialização Técnica",
    description:
      "5+ anos focados exclusivamente em limpeza industrial especializada",
  },
  {
    icon: Sparkles,
    title: "Equipamentos Modernos",
    description:
      "Tecnologia de ponta para resultados superiores e maior eficiência",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Todos os serviços com garantia e certificado de qualidade",
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta em 24h e execução dentro do prazo estabelecido",
  },
];

export function ServicesSection() {
  const handleScrollToQuote = () => {
    const element = document.querySelector("#orcamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCallPhone = () => {
    window.open("tel:+351929021881", "_self");
  };

  return (
    <section
      id="servicos"
      className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
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
            <Wrench className="w-4 h-4" />
            <span>Nossos Serviços</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Serviços <span className="text-primary-600">Especializados</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos soluções completas em limpeza industrial com tecnologia
            avançada e garantia de qualidade em todos os nossos serviços.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Card Header */}
              <div
                className={cn(
                  "relative h-48 flex items-center justify-center",
                  service.bgColor
                )}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                </div>

                {/* Icon and Image */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className={cn(
                      "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                      service.color,
                      "shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                    )}
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-4xl">{service.image}</div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
                    Especializado
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className={cn("text-sm font-medium", service.textColor)}>
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <feature.icon className="w-4 h-4 text-secondary-500" />
                      <span className="text-gray-600 text-sm">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Benefícios:
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                  <motion.button
                    onClick={handleScrollToQuote}
                    className={cn(
                      "w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r",
                      service.color,
                      "hover:shadow-lg group-hover:scale-105"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <button
                    onClick={handleCallPhone}
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Ligar Agora</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a PURIFLOW?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos especialistas com experiência comprovada e compromisso com a
              excelência em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:rotate-3 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            className="text-center mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 mb-6">
              Pronto para melhorar a eficiência dos seus equipamentos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleScrollToQuote}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Orçamento Gratuito</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={handleCallPhone}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-gray-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4 text-primary-500" />
                <span>+351 929 021 881</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
