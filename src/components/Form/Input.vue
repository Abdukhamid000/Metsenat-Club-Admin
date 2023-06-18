<template>
  <input
    :value="modelValue"
    @input="handleInput"
    class="border border-dark-gray py-3 px-3.5 userInput max-w-[315px] w-full transition duration-300 hover:border-silver rounded-md outline-none text-15p leading-[18px]"
    type="text"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: number | string
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

withDefaults(defineProps<Props>(), {})

const handleInput = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    emit('update:modelValue', e.target.value)
  }
}
</script>

<style scoped>
.userInput {
  background: rgba(224, 231, 255, 0.2);
  color: rgba(46, 56, 77, 0.35);
}
</style>
