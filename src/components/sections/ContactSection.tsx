import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Star,
  Shield,
  Zap,
  CheckCircle,
  Award,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Phone,
    title: "Telefone",
    primary: "+351 929 021 881",
    secondary: "Ligação direta",
    description: "Atendimento personalizado com Gustavo Costa",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    action: "tel:+351929021881",
  },
  {
    icon: Mail,
    title: "Email",
    primary: "puriflowclean@gmail.com",
    secondary: "Resposta em 24h",
    description: "Envie detalhes do seu projeto por email",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    action: "mailto:puriflowclean@gmail.com",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    primary: "+351 929 021 881",
    secondary: "Chat direto",
    description: "Conversação rápida e prática",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    action: "https://wa.me/351929021881",
  },
];

const businessInfo = [
  {
    icon: Clock,
    title: "Horário de Atendimento",
    details: [
      "Segunda a Sexta: 8h às 18h",
      "Sábado: 9h às 14h",
      "Emergências: 24h/7 dias",
    ],
  },
  {
    icon: MapPin,
    title: "Área de Cobertura",
    details: [
      "Todo território português",
      "Atendimento prioritário: Grande Lisboa/Porto",
      "Deslocamentos para projetos especiais",
    ],
  },
  {
    icon: User,
    title: "Responsável Técnico",
    details: [
      "Gustavo Costa - Fundador",
      "15+ anos de experiência",
      "Especialista certificado",
    ],
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Até 8 meses de garantia em todos os serviços",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Atendimento em até 24h, emergências em 4h",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Certificado técnico e relatório completo",
  },
  {
    icon: CheckCircle,
    title: "Satisfação 100%",
    description: "500+ clientes satisfeitos em 15 anos",
  },
];

export function ContactSection() {
  const handleScrollToQuote = () => {
    const element = document.querySelector("#orcamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="contatos"
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
            <Phone className="w-4 h-4" />
            <span>Entre em Contato</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vamos <span className="text-primary-600">Conversar</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Entre em contato conosco para discutir seu projeto. Estamos prontos
            para oferecer a melhor solução em limpeza industrial.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : "_self"}
              rel={
                method.action.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Header */}
              <div
                className={cn(
                  "relative h-32 flex items-center justify-center",
                  method.bgColor
                )}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                </div>

                <motion.div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300",
                    method.color
                  )}
                  whileHover={{ rotate: 5 }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-1">
                  {method.primary}
                </p>
                <p className="text-gray-500 text-sm mb-3">{method.secondary}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>

                <div className="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Business Information */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {businessInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {info.title}
                </h3>
              </div>

              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 text-sm flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          className="bg-gray-100 rounded-2xl p-8 lg:p-12 mb-16 text-center border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Atendemos Todo Portugal
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Nossa equipe móvel atende projetos em todo o território português.
              Conte conosco onde você estiver localizado.
            </p>
            <div className="bg-white rounded-xl p-6 inline-block">
              <p className="text-gray-700 font-medium">
                🇵🇹 Portugal • 📍 Cobertura Nacional
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Por que Escolher a PURIFLOW?
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Compromisso com excelência, qualidade garantida e atendimento
              personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3">{guarantee.title}</h4>
                <p className="text-white/80 leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-white/90 mb-8 text-lg">
              Pronto para transformar a eficiência dos seus equipamentos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleScrollToQuote}
                className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </motion.button>

              <motion.a
                href="tel:+351929021881"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                <span>+351 929 021 881</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
