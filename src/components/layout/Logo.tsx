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
      {/* Logo em PNG */}
      <motion.img
        src="/logo.png"
        alt="Puriflow Logo"
        className={cn(sizeClasses[size], "rounded-full")}
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

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
          Especialistas em Limpeza Industrial
        </motion.p>
      </div>
    </motion.div>
  );
}
