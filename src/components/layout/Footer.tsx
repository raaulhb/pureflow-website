import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Wind,
  Filter,
  Cog,
  Shield,
  Star,
  Heart,
} from "lucide-react";
import { Logo } from "./Logo";

const navigationLinks = [
  { name: "Empresa", href: "#empresa" },
  { name: "Serviços", href: "#servicos" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Orçamento", href: "#orcamento" },
  { name: "Dúvidas", href: "#duvidas" },
  { name: "Contatos", href: "#contatos" },
];

const services = [
  { name: "Limpeza de Exaustores", icon: Wind },
  { name: "Manutenção de Filtros", icon: Filter },
  { name: "Limpeza de Motores", icon: Cog },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 929 021 881",
    href: "tel:+351929021881",
  },
  {
    icon: Mail,
    label: "Email",
    value: "puriflowclean@gmail.com",
    href: "mailto:puriflowclean@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Portugal",
    href: null,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <Logo
                  size="lg"
                  className="mb-4"
                />
                <p className="text-gray-400 leading-relaxed">
                  Especialistas em limpeza industrial com mais de 15 anos de
                  experiência. Transformamos a eficiência dos seus equipamentos.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                  />
                ))}
                <span className="text-gray-300 ml-2">
                  500+ Clientes Satisfeitos
                </span>
              </div>

              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-gray-300">Garantia até 8 meses</span>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Navegação</h3>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Nossos Serviços
              </h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <service.icon className="w-5 h-5" />
                    <span>{service.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">
                  Atendimento 24/7
                </h4>
                <p className="text-gray-400 text-sm">
                  Emergências e urgências atendidas a qualquer hora
                </p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-start space-x-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-white hover:text-primary-400 transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg border border-primary-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-white mb-2">Gustavo Costa</h4>
                <p className="text-gray-400 text-sm mb-3">
                  Fundador & Especialista Técnico
                </p>
                <a
                  href="tel:+351929021881"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Falar Diretamente</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span>&copy; 2024 PURIFLOW. Todos os direitos reservados.</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>Feito com dedicação em Portugal</span>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Legal Links */}
          <motion.div
            className="mt-6 pt-6 border-t border-gray-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-400">
              <span>Política de Privacidade</span>
              <span>•</span>
              <span>Termos de Serviço</span>
              <span>•</span>
              <span>Certificações ISO</span>
              <span>•</span>
              <span>NIPC: [Número fictício]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
