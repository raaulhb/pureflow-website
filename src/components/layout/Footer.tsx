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
  // { name: "Serviços", href: "#servicos" },
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
    <footer className="relative overflow-hidden text-white bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-4">
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
                <p className="leading-relaxed text-gray-400">
                  Especialistas em limpeza industrial com mais de 5 anos de
                  experiência. Transformamos a eficiência dos seus equipamentos.
                </p>
              </div>

              <div className="flex items-center mb-4 space-x-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-300">
                  200+ Clientes Satisfeitos
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
              <h3 className="mb-6 text-xl font-bold text-white">Navegação</h3>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-gray-400 transition-colors duration-200 hover:text-primary-400"
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
              <h3 className="mb-6 text-xl font-bold text-white">
                Nossos Serviços
              </h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    className="flex items-center space-x-3 text-gray-400 transition-colors duration-200 cursor-pointer hover:text-primary-400"
                    whileHover={{ x: 5 }}
                  >
                    <service.icon className="w-5 h-5" />
                    <span>{service.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 mt-8 bg-gray-800 border border-gray-700 rounded-lg">
                <h4 className="mb-2 font-semibold text-white">
                  Atendimento 24/7
                </h4>
                <p className="text-sm text-gray-400">
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
              <h3 className="mb-6 text-xl font-bold text-white">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-start space-x-3"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/20">
                      <contact.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="font-medium text-white transition-colors hover:text-primary-400"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="p-4 mt-8 border rounded-lg bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-primary-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="mb-2 font-semibold text-white">Gustavo Costa</h4>
                <p className="mb-3 text-sm text-gray-400">
                  Fundador & Especialista Técnico
                </p>
                <a
                  href="tel:+351929021881"
                  className="inline-flex items-center space-x-2 transition-colors text-primary-400 hover:text-primary-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Falar Diretamente</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
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
              className="flex items-center px-6 py-3 space-x-2 font-medium text-white transition-all duration-300 rounded-lg shadow-lg group bg-primary-500 hover:bg-primary-600 hover:shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </motion.button>
          </div>

          {/* Legal Links */}
          <motion.div
            className="pt-6 mt-6 text-center border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm text-gray-400">
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
