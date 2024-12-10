<script setup lang="ts">
import WytnessLogo from "~/components/WytnessLogo.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import zxcvbn from "zxcvbn";
import { useBackend } from "~/composables/useBackend";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  confirmPassword: z.string(),
});

const router = useRouter();
const backend = useBackend();

const onSubmit = async (
  values: Record<string, string | boolean>,
): Promise<undefined | string> => {
  const r = await backend.register(
    values.email as string,
    values.password as string,
    values.firstName as string,
    values.lastName as string,
  );
  if (r) {
    return r.message;
  } else {
    return undefined;
  }
};

const getPasswordStrength = (
  password: string,
): { strength: number; color: string; label: string } => {
  const strength = zxcvbn(password).score;

  return {
    strength,
    color: ["#FF6B6B", "#FFB84D", "#FFD700", "#7CFC00", "#4CAF50"][strength],
    label: ["Weak", "Fair", "Good", "Strong", "Very Strong"][strength],
  };
};
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
        class="z-10 min-w-[33%] w-fit min-h-[66%] h-fit py-5 bg-white border border-gray-300 rounded-lg flex flex-col items-center justify-start backdrop-blur-md bg-opacity-50 gap-3"
      >
        <div class="w-full flex flex-col justify-center items-center py-5">
          <WytnessLogo with-logo size="xl" />
          <span class="text-3xl font-semibold text-black"
            >Create an account</span
          >
          <span class="text-gray-500"
            >Enter your details to create an account</span
          >
        </div>
        <div
          class="w-full px-10 flex flex-col items-center justify-center gap-5"
        >
          <FormField v-slot="{ componentField }" name="email">
            <FormItem class="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  v-bind="componentField"
                  placeholder="e.g. john.doe@wanadoo.fr"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="w-full flex flex-row gap-5">
            <FormField v-slot="{ componentField }" name="firstName">
              <FormItem class="w-full">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="e.g. John" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="lastName">
              <FormItem class="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input v-bind="componentField" placeholder="e.g. Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem class="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="password"
                  placeholder="***********"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem class="w-full">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  v-bind="componentField"
                  type="password"
                  placeholder="***********"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div id="password-strength">
            <span>{{ getPasswordStrength(values.password || "").label }}</span>
            <div id="password-strength-bar">
              <div
                v-for="i in 5"
                :key="i"
                class="w-1/4 h-2 rounded-lg"
                :style="{
                  backgroundColor:
                    i - 1 <= getPasswordStrength(values.password || '').strength
                      ? getPasswordStrength(values.password || '').color
                      : 'rgb(229 231 235)',
                }"
              />
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            class="font-climate-crisis text-lg tracking-wide w-full"
            @click="
              async (e) => {
                e.preventDefault();
                await validate();

                if (meta.valid) {
                  const r = await onSubmit(values);
                  if (r) {
                    setErrors({ email: r });
                  } else {
                    await router.push('/dashboard');
                  }
                }
              }
            "
          >
            Register
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

#password-strength {
  @apply w-full;
  @apply flex flex-col gap-3;

  span {
    @apply text-sm;
  }

  #password-strength-bar {
    @apply flex flex-row gap-1;
  }
}
</style>
