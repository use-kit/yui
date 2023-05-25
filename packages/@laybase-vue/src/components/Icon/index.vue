<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  icon: string
}>()

defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})
</script>

<template>
  <div>
    <Icon :icon="icon" />
  </div>
</template>
