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
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const serviceComponents = [
  {
    id: "exaustores",
    icon: Wind,
    title: "Exaustores e Condutas",
    description: "Limpeza completa de sistemas de exaustão",
    color: "text-blue-600",
  },
  {
    id: "filtros",
    icon: Filter,
    title: "Filtros Industriais",
    description: "Manutenção e limpeza especializada",
    color: "text-green-600",
  },
  {
    id: "motores",
    icon: Cog,
    title: "Motores e Equipamentos",
    description: "Desmontagem, limpeza e montagem",
    color: "text-purple-600",
  },
];

const serviceFeatures = [
  {
    icon: FileCheck2,
    title: "Certificado Oficial",
    description: "Documento que comprova conformidade com normas HACCP",
  },
  {
    icon: Shield,
    title: "Fotos Antes/Depois",
    description: "Registro completo do trabalho realizado",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Serviços noturnos e fins de semana disponíveis",
  },
  {
    icon: Award,
    title: "5+ Anos Experiência",
    description: "Especialistas em normas de higiene alimentar",
  },
];

const benefits = [
  "Conformidade total com normas HACCP",
  "Certificado oficial após cada intervenção",
  "Fotos antes e depois do serviço",
  "Desmontagem e montagem especializada",
  "Substituição de peças quando necessário",
  "Trabalho discreto e eficiente",
];

export function CompleteServiceSection() {
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
      className="relative py-20 overflow-hidden lg:py-24 bg-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/3 -right-40 w-80 h-80 bg-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/3 -left-40 w-80 h-80 bg-secondary-100 opacity-20 blur-3xl"></div>
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
            <Sparkles className="w-4 h-4" />
            <span>Serviço Completo</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Limpeza Industrial{" "}
            <span className="text-primary-600">Completa</span>
          </h2>

          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            A PURIFLOW oferece um serviço completo e integrado. Fazemos a
            limpeza completa de todo o sistema em uma única intervenção.
          </p>

          <div className="inline-block p-6 border bg-primary-50 border-primary-200 rounded-xl">
            <p className="text-lg font-semibold text-primary-800">
              ✅ Exaustores + Condutas + Filtros + Motores
            </p>
            <p className="mt-2 text-primary-700">
              Tudo em uma única intervenção com certificado HACCP
            </p>
          </div>
        </motion.div>

        {/* Service Components */}
        <motion.div
          className="grid gap-8 mb-16 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {serviceComponents.map((component, index) => (
            <motion.div
              key={component.id}
              className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                <component.icon className={cn("w-8 h-8", component.color)} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {component.title}
              </h3>
              <p className="text-gray-600">{component.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-16 mb-16 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 lg:text-3xl">
                O que está incluído no nosso serviço:
              </h3>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <motion.button
                onClick={handleScrollToQuote}
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="tel:+351929021881"
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-gray-900 transition-all duration-300 bg-white border border-gray-300 rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5 text-primary-500" />
                <span>+351 929 021 881</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Features Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Garantias e Diferenciais:
            </h3>

            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start p-4 space-x-4 transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="p-8 text-center text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
            Pronto para garantir a conformidade da sua cozinha?
          </h3>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-white/90">
            Entre em contato conosco para uma avaliação gratuita e orçamento
            personalizado. Atendemos em horários flexíveis para não interferir
            na sua operação.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.button
              onClick={handleScrollToQuote}
              className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 text-primary-600 hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Solicitar Orçamento Grátis</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="tel:+351929021881"
              className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
