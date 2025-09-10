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
    title: "5+ Anos de Experiência",
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

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData?.company,
          location: formData?.location,
          serviceType: formData.serviceType,
          equipmentDetails: formData?.equipmentDetails,
          urgency: formData?.urgency,
          description: formData.description,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro desconhecido");

      console.log("Formulário enviado:", data.message);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Erro ao enviar:", error.message);
      alert("Ocorreu um erro ao enviar o orçamento. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = services.find((s) => s.id === formData.serviceType);

  if (isSubmitted) {
    return (
      <section
        id="orcamento"
        className="relative py-20 overflow-hidden lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50"
      >
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl lg:p-12">
              <motion.div
                className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                Orçamento Enviado com Sucesso!
              </h3>

              <p className="mb-8 text-xl text-gray-600">
                Recebemos sua solicitação e entraremos em contato em até 24
                horas com uma proposta personalizada.
              </p>

              <div className="p-6 mb-8 bg-gray-50 rounded-xl">
                <h4 className="mb-4 font-semibold text-gray-900">
                  Próximos Passos:
                </h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white rounded-full bg-primary-500">
                      1
                    </div>
                    <span className="text-gray-700">
                      Análise técnica da sua solicitação
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white rounded-full bg-primary-500">
                      2
                    </div>
                    <span className="text-gray-700">
                      Elaboração de proposta detalhada
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white rounded-full bg-primary-500">
                      3
                    </div>
                    <span className="text-gray-700">
                      Contato em até 24 horas
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+351929021881"
                  className="flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-white transition-colors rounded-lg bg-primary-500 hover:bg-primary-600"
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
                  className="flex items-center justify-center px-6 py-3 space-x-2 font-semibold text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
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
      className="relative py-20 overflow-hidden lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 rounded-full top-1/4 -left-32 bg-primary-200 opacity-30 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full bottom-1/4 -right-32 bg-secondary-200 opacity-30 blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-sm font-medium border rounded-full bg-white/80 backdrop-blur-sm text-primary-700 border-primary-200"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Calculator className="w-4 h-4" />
            <span>Orçamento Gratuito</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Solicite seu <span className="text-primary-600">Orçamento</span>
          </h2>

          <p className="text-xl leading-relaxed text-gray-600">
            Receba uma proposta personalizada para seus equipamentos
            industriais. Análise gratuita e resposta garantida em 24 horas.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Form Side */}
          <motion.div
            className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl"
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
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                  <User className="w-5 h-5 text-primary-500" />
                  <span>Informações de Contato</span>
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
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
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
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
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
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
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Localização
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Cidade, Portugal"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                  <FileText className="w-5 h-5 text-primary-500" />
                  <span>Tipo de Serviço</span>
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
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
                  <p className="text-sm text-red-500">{errors.serviceType}</p>
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
                  <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900">
                    {selectedService && (
                      <selectedService.icon className="w-5 h-5 text-primary-500" />
                    )}
                    <span>Detalhes do Equipamento</span>
                  </h3>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Informações Técnicas
                    </label>
                    <input
                      type="text"
                      value={formData.equipmentDetails}
                      onChange={(e) =>
                        handleInputChange("equipmentDetails", e.target.value)
                      }
                      className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Ex: Motor 500HP, Exaustor industrial 15m, etc."
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
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
                <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <p className="mt-1 text-sm text-red-500">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 hover:shadow-xl"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Solicitar Orçamento Grátis</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-center text-gray-500">
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
            <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
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
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-gray-900">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Alternative */}
            <div className="p-8 text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl">
              <h3 className="mb-4 text-xl font-bold">
                Prefere falar diretamente?
              </h3>
              <p className="mb-6 text-white/90">
                Nossa equipe está disponível para atendimento personalizado.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+351929021881"
                  className="flex items-center p-4 space-x-3 transition-colors rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">+351 929 021 881</div>
                    <div className="text-sm text-white/80">Ligar agora</div>
                  </div>
                </a>

                {/* <a
                  href="mailto:puriflowclean@gmail.com"
                  className="flex items-center p-4 space-x-3 transition-colors rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">puriflowclean@gmail.com</div>
                    <div className="text-sm text-white/80">Enviar email</div>
                  </div>
                </a> */}
              </div>
            </div>

            {/* Guarantee */}
            <div className="p-8 text-center bg-white border border-gray-100 shadow-xl rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
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
