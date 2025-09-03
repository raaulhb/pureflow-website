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
    question: "Que tipos de equipamentos vocês limpam?",
    answer:
      "Especializamo-nos na limpeza de exaustores industriais, filtros de alta performance e motores industriais. Atendemos desde pequenas empresas até grandes complexos industriais, incluindo cozinhas comerciais, fábricas, hospitais e indústrias químicas.",
    popular: true,
  },
  {
    id: "2",
    category: "Preços",
    question: "Quanto custa o serviço de limpeza?",
    answer:
      "O preço varia conforme o tipo de equipamento, tamanho, complexidade e urgência do serviço. Oferecemos orçamentos gratuitos personalizados. Em média, nossos serviços variam entre €200-€2000 dependendo do projeto. Entre em contato para uma avaliação precisa.",
    popular: true,
  },
  {
    id: "3",
    category: "Garantia",
    question: "Qual é a garantia dos serviços?",
    answer:
      "Oferecemos garantias diferenciadas: 6 meses para exaustores, 4 meses para filtros e 8 meses para motores industriais. Todos os serviços incluem certificado de qualidade e suporte pós-serviço. Se houver qualquer problema no período de garantia, retornamos sem custo adicional.",
  },
  {
    id: "4",
    category: "Serviços",
    question: "Vocês atendem em todo Portugal?",
    answer:
      "Sim, atendemos em todo o território português. Temos base em várias regiões e nossa equipe móvel pode se deslocar para qualquer localização. Para projetos fora da região metropolitana, pode haver custo adicional de deslocamento, que será informado no orçamento.",
  },
  {
    id: "5",
    category: "Processo",
    question: "Quanto tempo demora o serviço?",
    answer:
      "O tempo varia conforme o tipo de equipamento: exaustores simples (4-8 horas), sistemas complexos (1-3 dias), filtros industriais (6-12 horas), motores (1-2 dias). Oferecemos serviços urgentes em 24h e emergenciais no mesmo dia com sobretaxa.",
  },
  {
    id: "6",
    category: "Processo",
    question: "É necessário parar a produção durante o serviço?",
    answer:
      "Na maioria dos casos, sim, para garantir segurança e qualidade. Planejamos o serviço conforme seu cronograma produtivo, oferecendo trabalho noturno, fins de semana ou períodos de menor atividade. Para sistemas críticos, avaliamos alternativas de limpeza parcial.",
  },
  {
    id: "7",
    category: "Serviços",
    question: "Vocês fornecem certificado após o serviço?",
    answer:
      "Sim, todos os serviços incluem certificado técnico de qualidade com fotos antes/depois, relatório técnico detalhado, especificações dos produtos utilizados e assinatura do responsável técnico. Este documento é válido para auditorias e inspeções.",
  },
  {
    id: "8",
    category: "Preços",
    question: "Existe desconto para contratos de manutenção?",
    answer:
      "Sim! Oferecemos até 25% de desconto para contratos anuais de manutenção preventiva. Incluimos 2-4 limpezas por ano (conforme necessidade), atendimento prioritário, garantia estendida e relatórios técnicos trimestrais. Ideal para grandes empresas.",
  },
  {
    id: "9",
    category: "Processo",
    question: "Que produtos vocês utilizam na limpeza?",
    answer:
      "Utilizamos produtos biodegradáveis e aprovados para uso industrial, específicos para cada tipo de equipamento. Nossos desengordurantes e solventes são importados e atendem normas europeias de segurança. Fornecemos FISPQ de todos os produtos utilizados.",
  },
  {
    id: "10",
    category: "Urgência",
    question: "Vocês atendem emergências?",
    answer:
      "Sim, temos serviço de emergência 24/7 para situações críticas como risco de incêndio, falhas de equipamentos ou auditorias urgentes. Atendimento em até 4 horas na região metropolitana e 24h nas demais regiões. Cobramos sobretaxa de 50% para emergências.",
  },
  {
    id: "11",
    category: "Garantia",
    question:
      "O que acontece se o equipamento apresentar problema após a limpeza?",
    answer:
      "Se houver qualquer problema relacionado ao nosso serviço durante o período de garantia, retornamos imediatamente sem custo. Temos seguro de responsabilidade civil e cobrimos eventuais danos causados por negligência. Mantemos registro técnico de todos os serviços.",
  },
  {
    id: "12",
    category: "Preços",
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos dinheiro, transferência bancária, cartão de débito/crédito e boleto bancário. Para empresas, oferecemos pagamento em até 30 dias. Contratos anuais podem ser parcelados em até 12x. Não cobramos taxa adicional para pagamentos à vista.",
  },
];

const categories = [
  { id: "all", name: "Todas", icon: HelpCircle, color: "text-gray-600" },
  { id: "Serviços", name: "Serviços", icon: Wind, color: "text-blue-600" },
  { id: "Preços", name: "Preços", icon: Euro, color: "text-green-600" },
  { id: "Garantia", name: "Garantia", icon: Shield, color: "text-purple-600" },
  { id: "Processo", name: "Processo", icon: Cog, color: "text-orange-600" },
  { id: "Urgência", name: "Urgência", icon: Clock, color: "text-red-600" },
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
      className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
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
            <HelpCircle className="w-4 h-4" />
            <span>Dúvidas Frequentes</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span>Mais Perguntadas</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {popularFAQs.map((faq) => (
                <motion.button
                  key={faq.id}
                  onClick={() => toggleItem(faq.id)}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-left group"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors ml-4 flex-shrink-0" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                      {faq.popular && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-yellow-600 font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
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
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhuma pergunta encontrada
            </h3>
            <p className="text-gray-600 mb-6">
              Não encontramos perguntas que correspondam à sua busca.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Limpar filtros
            </button>
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
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer dúvida
              específica sobre seu projeto ou necessidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleScrollToContact}
                className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Entre em Contato</span>
              </motion.button>

              <motion.a
                href="tel:+351929021881"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
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
