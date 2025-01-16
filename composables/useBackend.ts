import type { Auth } from "@firebase/auth";
import { signInWithCustomToken } from "@firebase/auth";

export const useBackend = () => {
  const { $firebaseAuth }: { $firebaseAuth: Auth } =
    useNuxtApp() as unknown as { $firebaseAuth: Auth };

  const authFetch = async (
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<Response> => {
    if (!init) {
      init = {};
    }
    if (typeof input === "string") {
      if (!input.startsWith("http")) {
        const config = useRuntimeConfig();
        input = config.public["apiBaseUrl"] + input;
      }
    }
    if (!init.headers) {
      init.headers = {};
    }

    const user = $firebaseAuth.currentUser;

    if (user) {
      (init.headers as Record<string, string>)["Authorization"] =
        `Bearer ${await user.getIdToken()}`;
    }
    return await fetch(input, init);
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<
    | undefined
    | {
        error: string;
        message: string;
        statusCode: number;
      }
  > => {
    const config = useRuntimeConfig();
    const endpoint = config.public["apiBaseUrl"] + "/auth/login";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const data = (await response.json()) as {
        message: string;
        error: string;
        statusCode: number;
      };
      if (data.message.indexOf("auth/invalid-credential") !== -1) {
        return {
          error: "invalid_credential",
          message: "Invalid email or password",
          statusCode: 400,
        };
      }
      return data;
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error("Invalid response");
    }

    await signInWithCustomToken($firebaseAuth, data.token);
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    surname: string,
  ): Promise<
    | undefined
    | {
        error: string;
        message: string;
        statusCode: number;
      }
  > => {
    const config = useRuntimeConfig();
    const endpoint = config.public["apiBaseUrl"] + "/auth/register";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, surname }),
    });

    if (!response.ok) {
      const data = (await response.json()) as {
        message: string;
        error: string;
        statusCode: number;
      };
      if (data.message.indexOf("auth/email-already-in-use") !== -1) {
        return {
          error: "email_already_in_use",
          message: "Email already in use",
          statusCode: 400,
        };
      }
      return data;
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error("Invalid response");
    }

    await signInWithCustomToken($firebaseAuth, data.token);
  };

  return {
    authFetch,
    login,
    register,
  };
};
