import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Filter,
  Wind,
  Cog,
  Star,
  Calendar,
  MapPin,
  Quote,
  Award,
  CheckCircle,
  Camera,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Dados dos projetos do portfólio
const portfolioItems = [
  {
    id: 1,
    category: "exaustores",
    title: "Sistema de Exaustão Industrial",
    client: "Fábrica de Alimentos Portugal",
    location: "Lisboa, Portugal",
    date: "Dezembro 2024",
    beforeImage: "🏭",
    afterImage: "✨🏭",
    description:
      "Limpeza completa de sistema de exaustão com 15 metros de dutos e 8 exaustores industriais.",
    results: [
      "Melhoria de 40% na eficiência energética",
      "Redução de 85% na acumulação de gordura",
      "Eliminação total de riscos de incêndio",
    ],
    testimonial: {
      text: "O trabalho da PURIFLOW superou nossas expectativas. Sistema funcionando perfeitamente há 6 meses.",
      author: "João Silva",
      position: "Gerente de Manutenção",
    },
  },
  {
    id: 2,
    category: "filtros",
    title: "Filtros de Alta Performance",
    client: "Indústria Química PT",
    location: "Porto, Portugal",
    date: "Novembro 2024",
    beforeImage: "🔧",
    afterImage: "✨🔧",
    description:
      "Restauração completa de 12 filtros industriais de alta capacidade para indústria química.",
    results: [
      "Restauração de 95% da capacidade original",
      "Extensão da vida útil em 3 anos",
      "Melhoria na qualidade do ar em 80%",
    ],
    testimonial: {
      text: "Profissionalismo exemplar. Os filtros estão funcionando como novos após o serviço.",
      author: "Maria Santos",
      position: "Diretora de Operações",
    },
  },
  {
    id: 3,
    category: "motores",
    title: "Motor Industrial 500HP",
    client: "Metalúrgica Norte",
    location: "Braga, Portugal",
    date: "Outubro 2024",
    beforeImage: "⚙️",
    afterImage: "✨⚙️",
    description:
      "Limpeza especializada de motor industrial de 500HP com técnicas avançadas de descontaminação.",
    results: [
      "Redução de 30% no consumo energético",
      "Eliminação de 100% das vibrações",
      "Aumento de 25% na vida útil estimada",
    ],
    testimonial: {
      text: "Resultado fantástico! O motor está funcionando melhor que quando era novo.",
      author: "Carlos Ferreira",
      position: "Engenheiro Chefe",
    },
  },
  {
    id: 4,
    category: "exaustores",
    title: "Cozinha Industrial Completa",
    client: "Hotel Resort Algarve",
    location: "Faro, Portugal",
    date: "Setembro 2024",
    beforeImage: "🏭",
    afterImage: "✨🏭",
    description:
      "Sistema completo de exaustão para cozinha industrial de grande porte com 20 pontos de captação.",
    results: [
      "100% de conformidade com normas",
      "Redução de odores em 95%",
      "Melhoria na segurança operacional",
    ],
    testimonial: {
      text: "Trabalho impecável. Nossa cozinha nunca funcionou tão bem.",
      author: "Ana Costa",
      position: "Chef Executiva",
    },
  },
  {
    id: 5,
    category: "filtros",
    title: "Sistema de Filtração Hospitalar",
    client: "Hospital Central Lisboa",
    location: "Lisboa, Portugal",
    date: "Agosto 2024",
    beforeImage: "🔧",
    afterImage: "✨🔧",
    description:
      "Manutenção especializada de filtros HEPA para ambiente hospitalar crítico.",
    results: [
      "Pureza do ar 99.97% garantida",
      "Conformidade total com normas de saúde",
      "Zero contaminação cruzada",
    ],
    testimonial: {
      text: "Confiamos na PURIFLOW para manter nossos padrões de qualidade hospitalar.",
      author: "Dr. Pedro Oliveira",
      position: "Diretor Técnico",
    },
  },
  {
    id: 6,
    category: "motores",
    title: "Frota de Motores Industriais",
    client: "Fábrica Têxtil Minho",
    location: "Guimarães, Portugal",
    date: "Julho 2024",
    beforeImage: "⚙️",
    afterImage: "✨⚙️",
    description:
      "Manutenção preventiva de 25 motores industriais para linha de produção têxtil.",
    results: [
      "Zero paradas não programadas",
      "Redução de 35% nos custos de energia",
      "Aumento de 20% na produtividade",
    ],
    testimonial: {
      text: "A PURIFLOW é nossa parceira estratégica na manutenção preventiva.",
      author: "Ricardo Mendes",
      position: "Diretor Industrial",
    },
  },
];

const categories = [
  { id: "all", name: "Todos os Projetos", icon: Award },
  { id: "exaustores", name: "Exaustores", icon: Wind },
  { id: "filtros", name: "Filtros", icon: Filter },
  { id: "motores", name: "Motores", icon: Cog },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const [imageView, setImageView] = useState<"before" | "after">("before");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openModal = (project: (typeof portfolioItems)[0]) => {
    setSelectedProject(project);
    setImageView("before");
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const toggleImageView = () => {
    setImageView((prev) => (prev === "before" ? "after" : "before"));
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-100 rounded-full opacity-20 blur-3xl"></div>
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
            <Camera className="w-4 h-4" />
            <span>Nosso Portfólio</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projetos <span className="text-primary-600">Realizados</span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Conheça alguns dos projetos que realizamos com excelência,
            transformando equipamentos industriais e superando expectativas.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{ y: -5 }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.beforeImage}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Eye className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {project.client}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Resultados que Falam por Si
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projetos Concluídos" },
              { value: "100%", label: "Taxa de Satisfação" },
              { value: "40%", label: "Melhoria Média na Eficiência" },
              { value: "5+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <p className="text-primary-600 font-medium">
                  {selectedProject.client}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Before/After Images */}
              <div className="relative">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <button
                    onClick={() => setImageView("before")}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-colors",
                      imageView === "before"
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Antes
                  </button>
                  <button
                    onClick={() => setImageView("after")}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-colors",
                      imageView === "after"
                        ? "bg-primary-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    Depois
                  </button>
                </div>

                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-8xl">
                    {imageView === "before"
                      ? selectedProject.beforeImage
                      : selectedProject.afterImage}
                  </div>
                  <button
                    onClick={toggleImageView}
                    className="absolute right-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    {imageView === "before" ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <ChevronLeft className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    Descrição do Projeto
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.date}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    Resultados Alcançados
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 italic mb-4">
                      "{selectedProject.testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {selectedProject.testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {selectedProject.testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
