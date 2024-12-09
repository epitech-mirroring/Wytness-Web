import { defineStore } from "pinia";

export interface User {
  name: string;
}

export const useUserStore = defineStore(
  "user",
  () => {
    const _accessToken = ref<string | null>(null);
    const me = ref<User | null>(null);
    const _rememberMe = ref<boolean>(false);

    const getAccessTokenContent = computed(() => {
      if (!_accessToken.value) return null;
      const payload = _accessToken.value.split(".")[1];
      return JSON.parse(atob(payload));
    });

    const isAccessTokenExpired = computed(() => {
      const content = getAccessTokenContent.value;
      if (!content) return true;
      return content.exp * 1000 < Date.now();
    });

    const isLoggedIn = computed(
      () => !!_accessToken.value && !isAccessTokenExpired.value,
    );

    function setTokens(tokens: Partial<{ token: string }>) {
      if (tokens.token) {
        _accessToken.value = tokens.token;
        me.value = null;
      }
    }

    async function login(
      email: string,
      password: string,
    ): Promise<
      | undefined
      | {
          error: string;
          message: string;
          statusCode: number;
        }
    > {
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

      setTokens(data);
    }

    async function register(
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
    > {
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

      setTokens(data);
    }

    async function logout() {
      _accessToken.value = null;

      const router = useRouter();
      await router.push("/");
    }

    async function updateMe() {
      if (!isLoggedIn.value) {
        me.value = null;
        return;
      }

      me.value = { name: "John Doe" };
    }

    function setRememberMe(value: boolean) {
      _rememberMe.value = value;
    }

    function authFetch(
      input: RequestInfo,
      init?: RequestInit,
    ): Promise<Response> {
      if (!init) {
        init = {};
      }
      if (!init.headers) {
        init.headers = {};
      }
      if (_accessToken.value) {
        (init.headers as Record<string, string>)["Authorization"] =
          `Bearer ${_accessToken.value}`;
      }
      return fetch(input, init);
    }

    return {
      accessToken: _accessToken,
      isLoggedIn,
      setTokens,
      isAccessTokenExpired,
      login,
      logout,
      setRememberMe,
      updateMe,
      fetch: authFetch,
      register,
      me,
    };
  },
  {
    persist: true,
  },
);
