<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import { useBackend } from "~/composables/useBackend";

definePageMeta({
  layout: 'connections'
})

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

// onMounted(() => {
//   if (user) {
//     router.push("/dashboard");
//   }
// });
</script>

<template>

  <Form
    v-slot="{ meta, values, validate, setErrors }"
    as=""
    keep-values
    :validation-schema="toTypedSchema(formSchema)"
  >
    <form
      id="form"
      class="min-w-[450px] w-fit flex flex-col justify-center items-center gap-5"
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
        <svg class="mb-2" xmlns="http://www.w3.org/2000/svg" width="64" height="50" viewBox="0 0 64 50" fill="none">
          <path d="M19.0559 43.3685C18.2882 43.244 17.5007 42.982 16.7794 42.6151C14.7015 41.5539 13.2787 39.6803 12.8154 37.3876C12.6831 36.739 12.6765 36.5163 12.6765 31.1447V25.5699L11.836 24.679C11.3728 24.1877 10.6912 23.4802 10.3272 23.1003C8.81177 21.5281 7.74633 20.3948 7.72647 20.3424C7.71324 20.3096 11.5912 20.2834 16.6735 20.2834H25.6471L25.6338 23.1461L25.614 26.0154L21.9875 26.035L18.3677 26.0481L18.3809 31.2429C18.4007 36.1495 18.4074 36.4443 18.5265 36.6735C18.8309 37.2828 19.539 37.7086 20.2404 37.7086C20.7765 37.7086 21.1669 37.4793 21.7824 36.8111C22.0669 36.4967 22.3978 36.1495 22.5037 36.0381C22.6162 35.9267 22.9537 35.5599 23.2647 35.2193C23.5757 34.8786 23.8735 34.5511 23.9265 34.4987C23.9794 34.4463 24.1713 34.2366 24.35 34.0401C24.5287 33.8436 24.8265 33.516 25.0118 33.3195C25.1971 33.123 25.6934 32.5924 26.1103 32.1404C26.5272 31.6884 26.8846 31.3084 26.9044 31.2888C26.9243 31.2691 27.2221 30.9481 27.5662 30.5682C27.9103 30.1882 28.2081 29.8672 28.2279 29.8476C28.2478 29.8279 28.5721 29.4742 28.9559 29.0615C29.3397 28.6488 29.8294 28.1182 30.0544 27.8824C30.2794 27.6465 30.7956 27.0897 31.2059 26.6377C32.1919 25.5634 33.1184 24.5545 33.6544 23.9846C33.8927 23.7357 34.25 23.3492 34.4485 23.133C34.6404 22.9168 34.9713 22.5631 35.1699 22.3469C35.375 22.1307 35.8515 21.6132 36.2353 21.2005C36.6191 20.7878 36.9963 20.3817 37.089 20.2965L37.2412 20.1459L41.0397 20.159C43.1309 20.1655 44.8581 20.1983 44.8779 20.2245C44.8912 20.2507 44.8382 20.3424 44.7588 20.4275C44.6728 20.5127 44.1037 21.1219 43.4882 21.7901C42.8728 22.4583 42.0787 23.3099 41.7279 23.6898C41.3772 24.0698 40.7221 24.7773 40.2721 25.262C39.8221 25.7468 39.1669 26.4543 38.8162 26.8342C38.4654 27.2142 37.6779 28.0658 37.0625 28.734C36.4471 29.4021 35.7787 30.1227 35.5735 30.3389C34.8985 31.0595 34.4154 31.5836 34.0846 31.9438C33.8993 32.1469 33.4294 32.6579 33.0257 33.0837C32.6287 33.5095 32.2581 33.9222 32.2052 34.0008C32.1257 34.1384 32.1787 34.2301 33.0919 35.4551C34.2235 36.9749 34.4882 37.2565 34.9779 37.4989C35.2956 37.6561 35.4213 37.6758 35.9706 37.6758C36.5463 37.6758 36.6324 37.6562 36.9963 37.4727C37.4265 37.25 37.7243 36.9552 39.0147 35.4813C39.2529 35.2127 39.9081 34.4725 40.4706 33.8436C41.0331 33.2147 41.6882 32.4745 41.9265 32.2059C42.1647 31.9373 42.3699 31.7015 42.3897 31.6818C42.4096 31.6622 42.6743 31.3674 42.9853 31.0267C43.2963 30.6861 43.561 30.3913 43.5809 30.3717C43.6007 30.352 43.8059 30.1162 44.0441 29.8476C44.2824 29.579 44.5669 29.2515 44.6794 29.127C44.7919 29.0025 45.3875 28.3409 45.9963 27.6531C46.6052 26.9718 47.2934 26.2053 47.5184 25.9499C47.7434 25.7009 48.0412 25.3603 48.1868 25.1965C48.3257 25.0328 48.4581 24.8886 48.4779 24.869C48.4978 24.8493 48.961 24.3384 49.5037 23.7226C50.4037 22.7007 51.4427 21.5412 51.5221 21.4626C51.5419 21.4429 51.7471 21.2071 51.9853 20.9385C52.2235 20.6699 52.5147 20.3358 52.6404 20.2048C53.4015 19.3729 53.7257 18.4164 53.5735 17.4469C53.375 16.163 52.5544 15.1672 51.3897 14.7873C50.9728 14.6497 50.9265 14.6497 39.7757 14.6497H28.5787L27.5596 13.582C27.0037 12.9989 26.3353 12.298 26.0772 12.0294C25.8257 11.7608 25.3757 11.2892 25.0846 10.9813C24.1713 10.0249 23.5559 9.38289 23.3375 9.14706L23.1191 8.91778L36.9765 8.89813C47.1478 8.88503 50.986 8.89813 51.4228 8.95053C52.5677 9.1012 53.4147 9.35013 54.4272 9.84799C56.6838 10.9551 58.5169 13.3134 59.0662 15.8289C59.1125 16.0254 59.1787 16.3202 59.2184 16.484C59.2581 16.6477 59.2912 17.2832 59.2912 17.8924C59.2912 18.8029 59.2647 19.1305 59.139 19.6873C58.7816 21.3119 58.1 22.6483 56.9552 23.9519C56.5515 24.417 54.6257 26.5787 54.2419 26.998C54.1096 27.1421 53.5735 27.7448 53.0441 28.3409C52.5213 28.937 52.0713 29.4349 52.0515 29.4545C52.0316 29.4742 51.3765 30.2079 50.5956 31.0857C48.511 33.4309 48.1471 33.8436 47.1147 34.9965C46.5985 35.5664 45.7978 36.4639 45.3346 36.988C44.8713 37.512 44.3949 38.0426 44.2824 38.1671C44.1699 38.2916 43.5478 38.9925 42.9059 39.7131C41.311 41.5146 40.7485 41.9928 39.5706 42.5889C38.5118 43.1261 37.0691 43.4733 35.9177 43.4733C34.3228 43.4733 32.5096 42.8509 31.1463 41.8356C30.3257 41.2198 29.9353 40.7809 28.4927 38.8353C28.1684 38.4029 28.1287 38.3636 28.0493 38.4684C28.0029 38.5274 27.7779 38.7763 27.5529 39.0122C27.3213 39.248 26.825 39.7852 26.4412 40.1979C26.064 40.6106 25.5677 41.1281 25.3493 41.3442C23.7147 42.9754 21.3125 43.7484 19.0559 43.3685Z" fill="#574AE2"/>
        </svg>
        <h1 class="text-2xl font-semibold text-black">Welcome back to Wytness!</h1>
        <p class="text-slate-500">Enter your username and password to continue</p>
      </div>
      <div
        class="w-11/12 px-10 flex flex-col items-center justify-center gap-5"
      >
        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="w-full">
            <FormLabel class="font-[Inter]">Email</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                type="email"
                placeholder="tom1.klein@wytness.fr"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="w-full">
            <FormLabel class="font-[Inter]">Password</FormLabel>
            <FormControl>
              <Input
                v-bind="componentField"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="w-full flex flex-col justify-between items-start gap-3 -mt-1">
          <div class="flex justify-between items-center w-full mb-5">
            <FormField v-slot="{ componentField }" name="remember">
              <FormItem
                class="flex items-center justify-center space-y-0 gap-3"
              >
                <Checkbox v-bind="componentField" />
                <FormLabel class="font-[Inter]">Remember me</FormLabel>
              </FormItem>
            </FormField>
            <a class="cursor-pointer text-slate-400 hover:text-slate-700 font-[Inter]">Forgot password?</a>
          </div>
        </div>
        <Button type="submit" class="w-full py-6 px-4 text-sm font-[Inter] rounded-md"> Sign In </Button>
        <div class="mt-2 flex justify-center font-[Inter]">
          <p class="text-slate-400 me-5">Don't have an account?</p>
          <NuxtLink class="cursor-pointer text-black hover:underline font-bold" to="/auth/register">Register</NuxtLink>
        </div>
      </div>
    </form>
  </Form>
</template>
