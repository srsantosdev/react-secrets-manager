import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { SecretsProvider } from "./lib";

const region = import.meta.env.VITE_AWS_SECRETS_MANAGER_REGION;
const accessKeyId = import.meta.env.VITE_AWS_SECRETS_MANAGER_ACCESS_KEY_ID;
const secretAccessKey = import.meta.env
  .VITE_AWS_SECRETS_MANAGER_SECRET_ACCESS_KEY;
const secretId = import.meta.env.VITE_AWS_SECRETS_MANAGER_SECRET_NAME;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SecretsProvider
      {...{
        region,
        accessKeyId,
        secretAccessKey,
        secretId,
      }}
    >
      <App />
    </SecretsProvider>
  </React.StrictMode>
);
