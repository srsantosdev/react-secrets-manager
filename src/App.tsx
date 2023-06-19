import "./global.css";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";

import { Header } from "./components/Header";
import { RegisterForm } from "./components/RegisterForm";
import { useSecretsManager } from "./lib";

export function App() {
  const { getSecretValue } = useSecretsManager();

  const requestExample = useCallback(() => {
    const API_URL = getSecretValue("API_URL");

    console.log({ API_URL });
  }, [getSecretValue]);

  return (
    <ErrorBoundary fallback={<p>Algo deu errado</p>}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          translateY: "-30%",
          translateX: "-100%",
        }}
        animate={{ opacity: 1, scale: 1, translateY: "0%", translateX: "0%" }}
        exit={{
          opacity: 0,
          scale: 0.7,
          translateY: "-30%",
          translateX: "100%",
        }}
        transition={{ duration: 1 }}
        className="h-screen flex flex-col justify-center items-center select-none"
      >
        <Header />
        <RegisterForm onSubmit={requestExample} />
      </motion.div>
    </ErrorBoundary>
  );
}
