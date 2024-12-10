<script setup lang="ts">
import WytnessLogo from "~/components/WytnessLogo.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { useBackend } from "~/composables/useBackend";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

const backend = useBackend();
const router = useRouter();
const { user } = useAuthState();

const onSubmit = async (
  values: Record<string, string | boolean>,
): Promise<undefined | string> => {
  const r = await backend.login(
    values.email as string,
    values.password as string,
  );
  if (r) {
    return r.message;
  } else {
    return undefined;
  }
};

onMounted(() => {
  if (user) {
    router.push("/dashboard");
  }
});
</script>

<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-gray-100 relative overflow-hidden"
  >
    <div
      id="animated-bg"
      class="absolute w-[120vw] h-[200vh] overflow-hidden z-0"
    >
      <div
        v-for="y in 11"
        :key="y"
        class="w-[200vw] flex flex-row justify-start items-center gap-10 bg-row transform"
        :style="{
          '--width': `calc(calc(10rem * 10) + calc(2.5rem * 9))`,
          '--start': `calc(-100vw + calc(calc(10rem / 2) * ${y}))`,
        }"
      >
        <WytnessLogo
          v-for="x in 40"
          :key="x"
          with-logo
          no-text
          disable-link
          size="w-40 h-40"
        />
      </div>
    </div>
    <Form
      v-slot="{ meta, values, validate, setErrors }"
      as=""
      keep-values
      :validation-schema="toTypedSchema(formSchema)"
    >
      <form
        id="form"
        class="z-10 min-w-[33%] w-fit h-2/3 bg-white border border-gray-300 rounded-lg flex flex-col items-center justify-start backdrop-blur-md bg-opacity-50 gap-3"
        @submit="
          async (e) => {
            e.preventDefault();
            await validate();
            if (meta.valid) {
              const r = await onSubmit(values);
              if (r) {
                setErrors({ password: r });
              } else {
                await router.push('/dashboard');
              }
            }
          }
        "
      >
        <div class="w-full flex flex-col justify-center items-center py-5">
          <WytnessLogo with-logo size="xl" />
          <h1 class="text-2xl font-semibold text-black">Welcome back!</h1>
          <p class="text-gray-500">Enter your email and password to continue</p>
        </div>
        <div
          class="w-full px-10 flex flex-col items-center justify-center gap-5"
        >
          <FormField v-slot="{ componentField }" name="email">
            <FormItem class="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="email"
                  placeholder="e.g. tom1.klein@epitech.eu"
                />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem class="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="password"
                  placeholder="********************"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div
            class="w-full flex flex-col justify-between items-start gap-3 -mt-1"
          >
            <FormField v-slot="{ componentField }" name="remember">
              <FormItem
                class="flex items-center justify-center space-y-0 gap-3"
              >
                <Checkbox v-bind="componentField" />
                <FormLabel>Remember me</FormLabel>
              </FormItem>
            </FormField>
            <Button type="submit" class="w-full"> Login </Button>
          </div>
          <Separator class="my-2" />
          <div class="w-full flex flex-row items-center justify-center gap-3">
            <Button variant="outline" size="lg">
              <span
                class="flex items-center justify-center gap-2 px-3 py-2 w-full h-full"
              >
                <img
                  src="~/assets/images/oauth/google.svg"
                  alt="Google"
                  class="h-full aspect-square"
                />
                <span class="text-sm font-medium">Google</span>
              </span>
            </Button>
            <Button variant="outline" size="lg">
              <span
                class="flex items-center justify-center gap-2 px-3 py-2 w-full h-full"
              >
                <img
                  src="~/assets/images/oauth/apple.svg"
                  alt="GitHub"
                  class="h-full aspect-square"
                />
                <span class="text-sm font-medium">Apple</span>
              </span>
            </Button>
          </div>
        </div>
        <div class="w-full flex justify-center items-center gap-3 -mt-1">
          <Button
            type="button"
            variant="link"
            class="text-sm"
            @click="router.push('/auth/register')"
          >
            Create an account
          </Button>
        </div>
      </form>
    </Form>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(var(--start));
  }
  100% {
    transform: translateX(calc(var(--start) - var(--width)));
  }
}

#animated-bg {
  @apply transform -rotate-[25deg];

  .bg-row {
    --start: 0;
    --width: 0;
    animation: scroll 30s linear infinite reverse;
    @apply opacity-50;

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    & > * {
      --speed: 5s;

      &:nth-child(odd) {
        animation: pulse var(--speed) cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      &:nth-child(even) {
        opacity: 0.5;
        animation: pulse var(--speed) cubic-bezier(0.4, 0, 0.6, 1) infinite;
        animation-delay: calc(var(--speed) / 2);
      }
    }
  }
}
</style>
