<script setup lang="ts">
const serviceName = useRoute().params.serviceName;
const { code } = useRoute().query;
const { user } = useAuthState();
const router = useRouter();
const serviceStore = useServiceStore();

onMounted(async() => {
  if (!user) {
    router.push("/");
  } else if (!code || typeof code !== "string") {
    router.push("/connections");
  } else {
    await serviceStore.postConnection(serviceName as string, code);
    router.push("/connections");
  }
});
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <h1 class="text-3xl">You are being redirected</h1>
  </div>
</template>

<style scoped></style>
