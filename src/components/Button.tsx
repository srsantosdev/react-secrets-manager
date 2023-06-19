import { PropsWithChildren } from "react";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps &
  PropsWithChildren & {
    type?: "button" | "submit" | "reset";
  };

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <motion.button
      whileTap={{ scale: 1.05 }}
      className="bg-indigo-800 text-white text-sm px-4 py-2 rounded-sm mt-4 w-full hover:bg-indigo-700 transition-colors font-semibold"
      {...props}
    >
      {children}
    </motion.button>
  );
};
