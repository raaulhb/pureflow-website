import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "EMPRESA", href: "#empresa" },
  // { name: "SERVIÇOS", href: "#servicos" },
  { name: "ORÇAMENTO", href: "#orcamento" },
  { name: "DÚVIDAS", href: "#duvidas" },
  { name: "CONTATOS", href: "#contatos" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detectar scroll para aplicar backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy para destacar seção ativa
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navigationItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section instanceof Element) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // Smooth scroll para a seção
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Logo size="md" />
            </motion.div>

            {/* Navigation Desktop */}
            <nav className="items-center hidden space-x-8 lg:flex">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === item.href
                      ? "text-primary-600"
                      : "text-gray-700 hover:text-primary-600"
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}

                  {/* Indicator ativo */}
                  {activeSection === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Contact Info Desktop */}
            <div className="items-center hidden space-x-4 lg:flex">
              <a
                href="tel:+351929021881"
                className="flex items-center space-x-2 text-sm text-gray-600 transition-colors hover:text-primary-600"
              >
                <Phone className="w-4 h-4" />
                <span>+351 929 021 881</span>
              </a>

              <div className="w-px h-6 bg-gray-300" />

              <motion.button
                onClick={() => handleNavClick("#orcamento")}
                className="px-6 py-2 font-medium text-white transition-colors duration-200 rounded-lg shadow-md bg-primary-500 hover:bg-primary-600 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Orçamento Grátis
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="p-2 text-gray-700 transition-colors rounded-md lg:hidden hover:text-primary-600 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed left-0 right-0 z-40 bg-white border-b shadow-xl top-16 lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="container px-4 py-4 mx-auto">
                <nav className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors",
                        activeSection === item.href
                          ? "bg-primary-50 text-primary-600 border border-primary-200"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      )}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile Contact */}
                <div className="pt-6 mt-6 space-y-3 border-t border-gray-200">
                  <a
                    href="tel:+351929021881"
                    className="flex items-center p-3 space-x-3 text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <Phone className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">+351 929 021 881</span>
                  </a>

                  <a
                    href="mailto:puriflowclean@gmail.com"
                    className="flex items-center p-3 space-x-3 text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <Mail className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">puriflowclean@gmail.com</span>
                  </a>

                  <motion.button
                    onClick={() => handleNavClick("#orcamento")}
                    className="w-full px-6 py-3 font-medium text-white transition-colors rounded-lg shadow-md bg-primary-500 hover:bg-primary-600"
                    whileTap={{ scale: 0.98 }}
                  >
                    Orçamento Grátis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
