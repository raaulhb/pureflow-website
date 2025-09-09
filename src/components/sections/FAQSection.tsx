import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Wind,
  Filter,
  Cog,
  Shield,
  Clock,
  Euro,
  Phone,
  MessageCircle,
  CheckCircle,
  Star,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  popular?: boolean;
}

const faqs: FAQ[] = [
  {
    id: "1",
    category: "Serviços",
    question: "Que tipo de serviços a PURIFLOW realiza?",
    answer:
      "A PURIFLOW é especializada em limpeza profissional de exaustores, condutas, filtros, motores, desmontagem e montagem para limpeza geral de todas as peças e substituições se necessário. Garantimos eficiência, segurança e conformidade com as normas HACCP.",
    popular: true,
  },
  {
    id: "2",
    category: "Processo",
    question:
      "Com que frequência devo limpar os exaustores e condutas da minha cozinha?",
    answer:
      "A recomendação geral é realizar a limpeza a cada seis meses. Em alguns casos, consoante a intensidade de utilização, a periodicidade pode ser anual. A PURIFLOW avalia cada situação e propõe o plano de manutenção mais adequado.",
    popular: true,
  },
  {
    id: "3",
    category: "Garantia",
    question: "Recebo algum certificado após a limpeza?",
    answer:
      "Sim. Após cada intervenção, a PURIFLOW emite um certificado oficial que comprova a execução do serviço e a conformidade com as normas de higiene e segurança alimentar.",
  },
  {
    id: "4",
    category: "Processo",
    question: "Quanto tempo demora o serviço?",
    answer:
      "A maioria dos serviços demora entre 6 a 12 horas, dependendo da dimensão e complexidade do sistema. Trabalhamos de forma rápida e discreta, adaptando-nos ao cronograma de cada cliente.",
  },
  {
    id: "5",
    category: "Serviços",
    question: "Em que horários a PURIFLOW pode realizar o serviço?",
    answer:
      "Adaptamo-nos à realidade de cada cliente. Realizamos os serviços em horário noturno, fins de semana ou períodos de menor atividade, garantindo sempre segurança, qualidade e mínima interferência na operação da cozinha.",
  },
];

const categories = [
  { id: "all", name: "Todas", icon: HelpCircle, color: "text-gray-600" },
  { id: "Serviços", name: "Serviços", icon: Wind, color: "text-blue-600" },
  { id: "Processo", name: "Processo", icon: Cog, color: "text-orange-600" },
  { id: "Garantia", name: "Garantia", icon: Shield, color: "text-purple-600" },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter((faq) => faq.popular);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contatos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="duvidas"
      className="relative py-20 overflow-hidden lg:py-24 bg-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full top-1/4 -right-40 w-80 h-80 bg-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 -left-40 w-80 h-80 bg-secondary-100 opacity-20 blur-3xl"></div>
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
            <HelpCircle className="w-4 h-4" />
            <span>Dúvidas Frequentes</span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>

          <p className="text-xl leading-relaxed text-gray-600">
            Encontre respostas para as principais dúvidas sobre nossos serviços,
            garantias, preços e processos de limpeza industrial.
          </p>
        </motion.div>
        {/* Search and Filters */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-4 top-1/2" />
            <input
              type="text"
              placeholder="Buscar por palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 text-lg transition-colors border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon
                  className={cn(
                    "w-4 h-4",
                    activeCategory === category.id
                      ? "text-white"
                      : category.color
                  )}
                />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        {/* Popular Questions */}
        {searchTerm === "" && activeCategory === "all" && (
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="flex items-center mb-6 space-x-2 text-2xl font-bold text-gray-900">
              <Star className="w-6 h-6 text-yellow-500" />
              <span>Mais Perguntadas</span>
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {popularFAQs.map((faq) => (
                <motion.button
                  key={faq.id}
                  onClick={() => toggleItem(faq.id)}
                  className="p-6 text-left transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-lg group"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2 space-x-2">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full text-primary-600 bg-primary-50">
                          {faq.category}
                        </span>
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
                      <h4 className="font-semibold text-gray-900 transition-colors group-hover:text-primary-600">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown className="flex-shrink-0 w-5 h-5 ml-4 text-gray-400 transition-colors group-hover:text-primary-500" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
        {/* FAQ Container com altura limitada */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Header do Container com contador */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <h3 className="font-semibold text-gray-900">
                Perguntas e Respostas
              </h3>
              <span className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "pergunta" : "perguntas"}
              </span>
            </div>

            {/* Indicador de scroll */}
            {filteredFAQs.length > 3 && (
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <ArrowDown className="w-4 h-4" />
                <span>Role para ver mais</span>
              </div>
            )}
          </div>

          {/* Container scrollável das perguntas */}
          <div className="overflow-hidden bg-white border border-t-0 border-gray-200 shadow-lg rounded-b-xl">
            <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="space-y-0">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="border-b border-gray-100 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left transition-colors hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2 space-x-3">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full text-primary-600 bg-primary-50">
                              {faq.category}
                            </span>
                            {faq.popular && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span className="text-xs font-medium text-yellow-600">
                                  Popular
                                </span>
                              </div>
                            )}
                          </div>
                          <h3 className="pr-8 text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{
                            rotate: openItems.includes(faq.id) ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        </motion.div>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                            <p className="pt-4 leading-relaxed text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer do container */}
            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                  {openItems.length > 0
                    ? `${openItems.length} resposta(s) expandida(s)`
                    : "Clique nas perguntas para ver as respostas"}
                </span>
                {openItems.length > 0 && (
                  <button
                    onClick={() => setOpenItems([])}
                    className="font-medium text-primary-600 hover:text-primary-700"
                  >
                    Fechar todas
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            className="max-w-4xl py-12 mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-12 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nenhuma pergunta encontrada
              </h3>
              <p className="mb-6 text-gray-600">
                Não encontramos perguntas que correspondam à sua busca.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="font-medium text-primary-600 hover:text-primary-700"
              >
                Limpar filtros
              </button>
            </div>
          </motion.div>
        )}
        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 text-center text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl lg:p-12">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
              Não encontrou sua resposta?
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-white/90">
              Nossa equipe está pronta para esclarecer qualquer dúvida
              específica sobre seu projeto ou necessidade.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.button
                onClick={handleScrollToContact}
                className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold transition-all duration-300 bg-white rounded-lg shadow-lg hover:bg-gray-100 text-primary-600 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Entre em Contato</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
