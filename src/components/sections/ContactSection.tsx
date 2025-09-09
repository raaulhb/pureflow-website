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

export const contactMethods = [
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
      "5+ anos de experiência",
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
    description: "200+ clientes satisfeitos em 5 anos",
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
            <Phone className="w-4 h-4" />
            <span>Entre em Contato</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Vamos <span className="text-primary-600">Conversar</span>
          </h2>

          <p className="text-xl leading-relaxed text-gray-600">
            Entre em contato conosco para discutir seu projeto. Estamos prontos
            para oferecer a melhor solução em limpeza industrial.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid gap-8 mb-16 md:grid-cols-3"
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
              className="overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl"
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
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-600">
                  {method.title}
                </h3>
                <p className="mb-1 font-semibold text-primary-600">
                  {method.primary}
                </p>
                <p className="mb-3 text-sm text-gray-500">{method.secondary}</p>
                <p className="text-sm text-gray-600">{method.description}</p>

                <div className="flex items-center mt-4 text-sm font-medium transition-transform text-primary-600 group-hover:translate-x-1">
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Business Information */}
        <motion.div
          className="grid gap-8 mb-16 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {businessInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="p-6 border border-gray-200 bg-gray-50 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-xl">
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
                    className="flex items-center space-x-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="flex-shrink-0 w-4 h-4 text-secondary-500" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          className="p-8 mb-16 text-center bg-gray-100 border border-gray-200 rounded-2xl lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary-500">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Atendemos Todo Portugal
            </h3>
            <p className="mb-6 text-lg text-gray-600">
              Nossa equipe móvel atende projetos em todo o território português.
              Conte conosco onde você estiver localizado.
            </p>
            <div className="inline-block p-6 bg-white rounded-xl">
              <p className="font-medium text-gray-700">
                🇵🇹 Portugal • 📍 Cobertura Nacional
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
      </div>
    </section>
  );
}
