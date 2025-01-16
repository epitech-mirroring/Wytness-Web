<script setup lang="ts">
const serviceName = useRoute().params.serviceName;
const query = useRoute().query;
const { user } = useAuthState();
const router = useRouter();
const serviceStore = useServiceStore();

onMounted(async () => {
  if (!user) {
    await router.push("/");
  } else if (
    !query.code ||
    typeof query.code !== "string" ||
    !query.state ||
    typeof query.state !== "string"
  ) {
    await router.push("/connections");
  } else {
    await serviceStore.postConnection(
      serviceName as string,
      query.code,
      query.state,
    );
    await router.push("/connections");
  }
});
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <h1 class="text-3xl">You are being redirected</h1>
  </div>
</template>

<style scoped></style>
