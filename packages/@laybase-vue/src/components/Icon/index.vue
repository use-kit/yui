<script setup lang="ts">
defineProps<{
  icon: string
}>()
</script>

<template>
  <span :class="icon" />
</template>
