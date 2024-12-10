import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";

export default defineNuxtPlugin(async (_nuxtApp) => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    appId: config.firebaseAppId,
  } as FirebaseOptions;

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  await setPersistence(auth, browserLocalPersistence);

  _nuxtApp.provide("firebaseAuth", auth);
  _nuxtApp.vueApp.provide("firebaseAuth", auth);
});
