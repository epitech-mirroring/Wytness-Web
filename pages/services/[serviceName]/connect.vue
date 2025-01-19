<script setup lang="ts">
const serviceName = useRoute().params.serviceName;
const query = useRoute().query;
const { user } = useAuthState();
const router = useRouter();
const serviceStore = useServiceStore();
const needRedirect = ref(false);

onMounted(async () => {
  const isMobile = isMobileUserAgent();
  if (isMobile) {
    if (!query.code || !query.state) {
      if (query.error) {
        window.location.href = `area://redirect?error=${query.error}`;
      } else {
        window.location.href = `area://redirect?error=invalid_request`;
      }
    } else {
      window.location.href = `area://redirect?service=${serviceName as string}&code=${query.code}&state=${query.state}`;
    }
  } else {
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
  }
  setTimeout(() => {
    needRedirect.value = true;
  }, 5000);
});

function isMobileUserAgent(): boolean {
  const userAgent = navigator.userAgent || navigator.vendor;
  return /android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
}

async function redirectWeb() {
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
}

async function redirectMobile() {
  if (!query.code || !query.state) {
    if (query.error) {
      window.location.href = `area://redirect?error=${query.error}`;
    } else {
      window.location.href = `area://redirect?error=invalid_request`;
    }
  } else {
    window.location.href = `area://redirect?service=${serviceName as string}&code=${query.code}&state=${query.state}`;
  }
}

</script>

<template>
  <div class="h-screen w-screen flex flex-col gap-8 items-center justify-center">
    <h1 class="text-3xl">You are being redirected</h1>

    <Button
      v-if="needRedirect"
      type="submit"
      class="w-full py-6 px-4 text-sm font-[Inter] rounded-md"
      @click="redirectWeb"
    >Force Refirect to web application</Button>

    <Button
      v-if="needRedirect"
      type="submit"
      class="w-full py-6 px-4 text-sm font-[Inter] rounded-md"
      @click="redirectMobile"
    >Force Refirect to mobile application</Button>
  </div>
</template>

<style scoped></style>
