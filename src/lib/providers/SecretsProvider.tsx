import {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export type Secrets = Record<string, string>;

export interface SecretsProviderData {
  secrets: Secrets;
  error: Error | null;
  loading: boolean;
  getSecretValue: (secret: string) => string | undefined;
}

export interface SecretsProviderProps extends PropsWithChildren {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  secretId: string;
}

export const SecretsContext = createContext({} as SecretsProviderData);

export function SecretsProvider({
  children,
  accessKeyId,
  region,
  secretAccessKey,
  secretId,
}: SecretsProviderProps) {
  const [error, setError] = useState<Error | null>(null);
  const [secrets, setSecrets] = useState({} as Secrets);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const client = new SecretsManagerClient({
        region,
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
      });

      const command = new GetSecretValueCommand({
        SecretId: secretId,
      });

      try {
        const data = await client.send(command);

        if (!data.SecretString) {
          return;
        }

        setSecrets(JSON.parse(data.SecretString));
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e as any);
      } finally {
        setLoading(false);
      }
    })();
  }, [accessKeyId, region, secretAccessKey, secretId]);

  const getSecretValue = useCallback(
    (secret: string) => {
      return secrets[secret];
    },
    [secrets]
  );

  return (
    <SecretsContext.Provider
      value={{ secrets, error, loading, getSecretValue }}
      children={children}
    />
  );
}
