import type { Auth } from "@firebase/auth";
import { onAuthStateChanged } from "@firebase/auth";

export default defineNuxtRouteMiddleware(async () => {
  const { $firebaseAuth }: { $firebaseAuth: Auth } =
    useNuxtApp() as unknown as { $firebaseAuth: Auth };
  const user = $firebaseAuth.currentUser;

  if (!user) {
    return navigateTo("/auth/login");
  }
});
