<script setup lang="ts">
interface LogoSquareProps {
  serviceName: string;
  logoUrl: string;
  color: string;
  width: number;
  height: number;
}

const props = withDefaults(defineProps<LogoSquareProps>(), {
  serviceName: "",
  logoUrl: "",
  color: "#FFFFFF",
  width: 32,
  height: 32,
});

  const serviceStore = useServiceStore();
  const logoResponse = ref();

  onMounted(async () => {
    if (props.serviceName === '') {
      return;
    }
    const params = new URLSearchParams();
    if (props.color !== "#FFFFFF") {
      params.append('color', props.color);
    }
    params.append('width', props.width.toString());
    params.append('height', props.height.toString());
    logoResponse.value = await (await fetch(props.logoUrl + "?" + params.toString())).text();
  });

  watch(() => props.serviceName, async () => {
    if (props.serviceName === '') {
      return;
    }
    const params = new URLSearchParams();
    if (props.color !== "#FFFFFF") {
      params.append('color', props.color);
    }
    params.append('width', props.width.toString());
    params.append('height', props.height.toString());
    logoResponse.value = await (await fetch(props.logoUrl + "?" + params.toString())).text();
  });

</script>

<template>
  <div
    v-if="logoResponse"
    v-html="logoResponse"
    class="w-full h-full flex justify-center items-center"
    :alt="serviceStore.getServiceWithId(props.serviceName).name + ' logo'"
  ></div>

  <span
    v-else
    class="w-full h-full flex justify-center items-center"
  >?</span>
</template>
