import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-12 w-auto",
  };

  return (
    <motion.div
      className={cn("flex items-center space-x-3", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Icon - Baseado no design PURIFLOW */}
      <div className="relative">
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Símbolo de fluxo/ar baseado no logo original */}
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12C3 12 5.5 8 12 8C18.5 8 21 12 21 12C21 12 18.5 16 12 16C5.5 16 3 12 3 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="currentColor"
            />
            {/* Linhas de fluxo */}
            <path
              d="M2 8L4 6M2 16L4 18M22 8L20 6M22 16L20 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Nome da empresa */}
      <div className="flex flex-col">
        <motion.h1
          className={cn(
            "font-bold text-gray-900 tracking-tight leading-none",
            size === "sm" && "text-lg",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl"
          )}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          PURIFLOW
        </motion.h1>
        <motion.p
          className={cn(
            "text-gray-500 font-medium leading-none",
            size === "sm" && "text-xs",
            size === "md" && "text-sm",
            size === "lg" && "text-base"
          )}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Clean Excellence
        </motion.p>
      </div>
    </motion.div>
  );
}
