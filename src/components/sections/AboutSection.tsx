import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Target,
  Heart,
  Zap,
  ArrowRight,
  Star,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageSlider } from "../ui/ImageSlider";
import { portfolioImages } from "../ui/portfolioImages";
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
      "Análise completa dos equipamentos e identificação das necessidades.",
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
    value: "5+",
    label: "Anos de Experiência",
    color: "from-blue-500 to-blue-600",
  },
  {
    value: "200+",
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
      className="relative py-20 overflow-hidden bg-white lg:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full top-1/4 -left-32 bg-primary-100 opacity-30 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full bottom-1/4 -right-32 bg-secondary-100 opacity-30 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium border rounded-full bg-primary-50 text-primary-700 border-primary-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Sobre a PURIFLOW</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Especialistas em{" "}
            <span className="text-primary-600">Limpeza Industrial</span>
          </h2>

          <p className="text-xl leading-relaxed text-gray-600">
            Com mais de 5 anos de experiência, a PURIFLOW é referência em
            limpeza especializada de equipamentos industriais, garantindo
            eficiência máxima e durabilidade para seus sistemas.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid items-center gap-16 mb-20 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                Nossa História e Missão
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Fundada por <strong>Gustavo Costa</strong>, a PURIFLOW nasceu da
                necessidade de oferecer serviços especializados em limpeza
                industrial com qualidade superior. Nossa experiência abrange
                desde pequenas empresas até grandes complexos industriais.
              </p>
              <p className="leading-relaxed text-gray-600">
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
                  className="p-4 text-center border border-gray-200 rounded-xl bg-gray-50"
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
                  <div className="text-sm font-medium text-gray-600">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleScrollToContact}
              className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 rounded-lg shadow-lg group bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Conheça Nossos Serviços</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
            {/* Main Visual Card */}
            <div className="relative p-8 bg-white border border-gray-100 shadow-2xl rounded-2xl">
              {/* Decorative Elements */}
              <div className="absolute w-24 h-24 -top-4 -right-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl opacity-10 rotate-12"></div>
              <div className="absolute w-16 h-16 -bottom-4 -left-4 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl opacity-10 -rotate-12"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-bold text-center text-gray-900">
                  Nossos Trabalhos
                </h3>
                <ImageSlider
                  images={portfolioImages}
                  autoPlay={true}
                  autoPlayInterval={3000}
                  showControls={true}
                  showIndicators={true}
                  height="h-64 lg:h-80"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Nossos Valores
            </h3>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Princípios que nos guiam na entrega de serviços de excelência
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-lg group rounded-xl hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-transform bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl group-hover:scale-110">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Nosso Processo de Trabalho
            </h3>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Metodologia comprovada em 4 etapas para garantir resultados
              excepcionais
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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

                <div className="relative z-10 p-6 transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full -top-4 left-6 bg-gradient-to-br from-primary-500 to-secondary-500">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 mt-4 mb-4 transition-colors bg-primary-50 rounded-xl group-hover:bg-primary-100">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  <h4 className="mb-3 text-lg font-bold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600">
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
