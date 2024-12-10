<script setup lang="ts">
const serviceName = useRoute().params.serviceName;
const { code } = useRoute().query;
const { user } = useAuthState();
const router = useRouter();
const serviceStore = useServiceStore();

onMounted(() => {
  if (!user) {
    router.push("/");
  } else if (!code || typeof code !== "string") {
    router.push("/dashboard/settings/connections");
  } else {
    serviceStore.postConnection(serviceName as string, code);
  }
});
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <h1 class="text-3xl">You are being redirected</h1>
  </div>
</template>

<style scoped></style>
