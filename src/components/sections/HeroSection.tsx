import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { cn } from "@/lib/utils";

const stats = [
  { icon: Users, value: "200+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: CheckCircle, value: "100%", label: "Garantia de Qualidade" },
  { icon: Zap, value: "24h", label: "Resposta Rápida" },
];

const benefits = [
  "Limpeza especializada de exaustores industriais",
  "Filtros de alta performance restaurados",
  "Motores industriais com eficiência máxima",
  "Certificação e garantia em todos os serviços",
];

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex items-center min-h-screen mt-16 overflow-hidden lg:mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Headlines */}
            <div className="mt-4 space-y-4">
              <motion.h1
                className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">Limpeza Industrial</span>
                <span className="block text-primary-600">de Excelência</span>
              </motion.h1>

              <motion.p
                className="text-xl font-medium text-gray-600 lg:text-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Nós fazemos o trabalho pesado e você fica com o brilho
              </motion.p>

              <motion.p
                className="max-w-xl text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Especializados em limpeza de exaustores, filtros e motores
                industriais. Garantimos eficiência máxima e durabilidade para
                seus equipamentos.
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="flex-shrink-0 w-5 h-5 text-secondary-500" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons
            <motion.div
              className="flex flex-col gap-4 pt-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={() => handleScrollToSection("#orcamento")}
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 shadow-lg group bg-primary-500 hover:bg-primary-600 rounded-xl hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Orçamento Grátis</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.a
                href="tel:+351929021881"
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-gray-900 transition-all duration-300 bg-white border border-gray-200 shadow-lg group hover:bg-gray-50 rounded-xl hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                <span>+351 929 021 881</span>
              </motion.a>
            </motion.div> */}

            {/* Quick Contact */}
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              📧 geral@puriflow.com • 🇵🇹 Portugal • ⚡ Resposta em 24h
            </motion.p>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Main Visual Card */}
            <div className="relative p-8 bg-white border border-gray-100 shadow-2xl rounded-2xl">
              {/* Decorative Elements */}
              <div className="absolute w-24 h-24 -top-4 -right-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl opacity-10 rotate-12"></div>
              <div className="absolute w-16 h-16 -bottom-4 -left-4 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl opacity-10 -rotate-12"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                {/* <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                </div> */}
                {/* Photo */}
                <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-0.5 mb-6">
                  <motion.div
                    className="w-full h-full overflow-hidden rounded-xl"
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src="/images/slides/gustavo2.png"
                      alt="Gustavo Costa - Fundador PURIFLOW"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    Gustavo Costa
                  </h3>
                  <p className="mb-4 font-semibold text-primary-600">
                    Fundador & Operador
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    "Nossa missão é garantir que seus equipamentos industriais
                    funcionem com máxima eficiência e durabilidade."
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center pt-4 space-x-1 border-t border-gray-100">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 font-medium text-gray-600">
                    5.0 Avaliação
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}

            <div className="absolute -right-8 bottom-1/4">
              <motion.div
                className="p-4 bg-white border border-gray-100 shadow-lg rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg bg-primary-100">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-xs text-gray-600">Anos</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-shadow bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl group-hover:shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center w-6 h-10 border-2 border-gray-300 rounded-full"
            animate={{ borderColor: ["#d1d5db", "#0ea5e9", "#d1d5db"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 mt-2 rounded-full bg-primary-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
