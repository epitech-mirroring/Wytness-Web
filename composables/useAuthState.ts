import type { Auth } from "@firebase/auth";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { useBackend } from "#imports";

export type User = {
  id: number;
  email: string;
  name: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date;
};

export const useAuthState = () => {
  const user = ref<User | null>(null);
  const isAlreadyListening = ref(false);

  const { $firebaseAuth }: { $firebaseAuth: Auth } =
    useNuxtApp() as unknown as { $firebaseAuth: Auth };

  onMounted(() => {
    if (isAlreadyListening.value) {
      return;
    }
    onAuthStateChanged($firebaseAuth, async (firebaseUser) => {
      if (firebaseUser) {
        const backend = useBackend();
        await backend.synchronize();
        user.value = await backend
          .authFetch("/users/me", {
            method: "GET",
          })
          .then((response) => response.json() as unknown as User)
          .catch(() => {
            return null;
          });
      } else {
        user.value = null;
      }
    });
    isAlreadyListening.value = true;
  });

  const logout = async () => {
    await $firebaseAuth.signOut();

    const router = useRouter();
    const servicesStore = useServiceStore();
    const workflowsStore = useWorkflowStore();
    const statisticStore = useStatisticStore();

    await router.push("/");

    servicesStore.clear();
    workflowsStore.clear();
    statisticStore.clear();
  };

  async function googleAuth() {
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup($firebaseAuth, googleProvider)
      .then(async (result) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    user,
    logout,
    googleAuth,
  };
};
