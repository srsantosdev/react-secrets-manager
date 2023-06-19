import { useContext } from "react";
import { SecretsContext } from "../providers/SecretsProvider";

export function useSecretsManager() {
  const context = useContext(SecretsContext);

  return context;
}
