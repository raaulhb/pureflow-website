import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  CheckCircle,
  Wind,
  Filter,
  Cog,
  Clock,
  Shield,
  Award,
  Star,
  MapPin,
  Building,
  User,
  MessageSquare,
  Calculator,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  serviceType: string;
  equipmentDetails: string;
  urgency: string;
  description: string;
}

const services = [
  {
    id: "exaustores",
    name: "Limpeza de Exaustores",
    icon: Wind,
    color: "text-blue-600",
  },
  {
    id: "filtros",
    name: "Manutenção de Filtros",
    icon: Filter,
    color: "text-green-600",
  },
  {
    id: "motores",
    name: "Limpeza de Motores",
    icon: Cog,
    color: "text-purple-600",
  },
  {
    id: "completo",
    name: "Serviço Completo",
    icon: Sparkles,
    color: "text-primary-600",
  },
];

const urgencyOptions = [
  { id: "normal", name: "Normal (5-7 dias)", icon: Clock },
  { id: "urgente", name: "Urgente (2-3 dias)", icon: AlertCircle },
  { id: "emergencia", name: "Emergência (24h)", icon: Shield },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Orçamento Gratuito",
    description: "Análise completa sem custo",
  },
  {
    icon: Clock,
    title: "Resposta em 24h",
    description: "Retorno garantido no mesmo dia",
  },
  {
    icon: Shield,
    title: "Sem Compromisso",
    description: "Proposta sem obrigações",
  },
  {
    icon: Award,
    title: "15+ Anos de Experiência",
    description: "Expertise comprovada",
  },
];

export function QuoteSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    serviceType: "",
    equipmentDetails: "",
    urgency: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    if (!formData.serviceType) newErrors.serviceType = "Selecione um serviço";
    if (!formData.description.trim())
      newErrors.description = "Descrição é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      console.log("Formulário enviado:", formData);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = services.find((s) => s.id === formData.serviceType);

  if (isSubmitted) {
    return (
      <section
        id="orcamento"
        className="py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Orçamento Enviado com Sucesso!
              </h3>

              <p className="text-xl text-gray-600 mb-8">
                Recebemos sua solicitação e entraremos em contato em até 24
                horas com uma proposta personalizada.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Próximos Passos:
                </h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-700">
                      Análise técnica da sua solicitação
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-700">
                      Elaboração de proposta detalhada
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-700">
                      Contato em até 24 horas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+351929021881"
                  className="flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Agora</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      location: "",
                      serviceType: "",
                      equipmentDetails: "",
                      urgency: "",
                      description: "",
                    });
                  }}
                  className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors border border-gray-300"
                >
                  <span>Novo Orçamento</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="orcamento"
      className="py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary-200 rounded-full opacity-30 blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Calculator className="w-4 h-4" />
            <span>Orçamento Gratuito</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solicite seu <span className="text-primary-600">Orçamento</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Receba uma proposta personalizada para seus equipamentos
            industriais. Análise gratuita e resposta garantida em 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <User className="w-5 h-5 text-primary-500" />
                  <span>Informações de Contato</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors",
                        errors.name ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors",
                        errors.email ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors",
                        errors.phone ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="+351 XXX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Localização
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Cidade, Portugal"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <span>Tipo de Serviço</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <motion.button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        handleInputChange("serviceType", service.id)
                      }
                      className={cn(
                        "flex items-center space-x-3 p-4 border rounded-lg transition-all duration-200",
                        formData.serviceType === service.id
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-300 hover:border-gray-400"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <service.icon className={cn("w-5 h-5", service.color)} />
                      <span className="font-medium">{service.name}</span>
                    </motion.button>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm">{errors.serviceType}</p>
                )}
              </div>

              {/* Equipment Details */}
              {formData.serviceType && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    {selectedService && (
                      <selectedService.icon className="w-5 h-5 text-primary-500" />
                    )}
                    <span>Detalhes do Equipamento</span>
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Informações Técnicas
                    </label>
                    <input
                      type="text"
                      value={formData.equipmentDetails}
                      onChange={(e) =>
                        handleInputChange("equipmentDetails", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Ex: Motor 500HP, Exaustor industrial 15m, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgência do Serviço
                    </label>
                    <div className="space-y-2">
                      {urgencyOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          type="button"
                          onClick={() =>
                            handleInputChange("urgency", option.id)
                          }
                          className={cn(
                            "w-full flex items-center space-x-3 p-3 border rounded-lg transition-all duration-200",
                            formData.urgency === option.id
                              ? "border-primary-500 bg-primary-50 text-primary-700"
                              : "border-gray-300 hover:border-gray-400"
                          )}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <option.icon className="w-4 h-4" />
                          <span>{option.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Problema/Necessidade *
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className={cn(
                    "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none",
                    errors.description ? "border-red-500" : "border-gray-300"
                  )}
                  placeholder="Descreva detalhes sobre o problema, quando foi a última manutenção, condições atuais, etc."
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Solicitar Orçamento Grátis</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você concorda em receber contato da PURIFLOW sobre
                seu orçamento.
              </p>
            </form>
          </motion.div>

          {/* Benefits Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Por que solicitar seu orçamento?
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Alternative */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Prefere falar diretamente?
              </h3>
              <p className="mb-6 text-white/90">
                Nossa equipe está disponível para atendimento personalizado.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+351929021881"
                  className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">+351 929 021 881</div>
                    <div className="text-sm text-white/80">Ligar agora</div>
                  </div>
                </a>

                <a
                  href="mailto:puriflowclean@gmail.com"
                  className="flex items-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">puriflowclean@gmail.com</div>
                    <div className="text-sm text-white/80">Enviar email</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Garantia de Qualidade
              </h3>
              <p className="text-gray-600">
                Todos os nossos serviços incluem garantia e certificado de
                qualidade. Sua satisfação é nossa prioridade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
