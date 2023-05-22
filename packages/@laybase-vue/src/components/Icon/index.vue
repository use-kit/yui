<script setup lang="ts">
defineProps<{
  icon: string
}>()

defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})
</script>

<template>
  <div :class="icon" />
</template>
