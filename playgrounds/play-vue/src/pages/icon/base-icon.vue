<script setup lang="ts">
import { Icon } from '@yui/vue'
import { Home } from 'lucide-vue-next'

console.log("home", typeof Home)
</script>

<template>
  <div>Icon</div>
  <Icon icon="mdi-home" color="orange" size="20" />
  <Icon icon="carbon-home" />
  <Icon :icon="Home" color="purple" size="20" />
  <Home :color="'red'" :size="20" />
</template>
