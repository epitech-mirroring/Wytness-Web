import type { Auth } from "@firebase/auth";
import { onAuthStateChanged } from "@firebase/auth";

export default defineNuxtRouteMiddleware(async () => {
  const { $firebaseAuth }: { $firebaseAuth: Auth } =
    useNuxtApp() as unknown as { $firebaseAuth: Auth };
  const router = useRouter();

  onAuthStateChanged($firebaseAuth, async (user) => {
    if (!user) {
      return router.push("/auth/login");
    }
  });
});
