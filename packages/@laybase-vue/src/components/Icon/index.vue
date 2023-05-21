<script setup lang="ts">
defineProps<{
  icon: string
}>()

defineOptions({
  name: 'Icon',
  inheritAttrs: false
})
</script>

<template>
  <div :class="icon" />
  <div class="lay-icon" i-mdi-home />
</template>
