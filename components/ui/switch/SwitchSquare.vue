<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function interract(event: MouseEvent) {
  event.stopPropagation();
}
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#574AE2] data-[state=unchecked]:bg-[#E76E50]',
      props.class,
    )"
    @click="interract"
  >
    <SwitchThumb
      :class="cn('pointer-events-none block h-5 w-5 bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-[#EAE8FF] data-[state=unchecked]:bg-[#FFCBBE]')"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
