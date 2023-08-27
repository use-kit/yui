<script setup lang="ts">
import { Input } from '@yui/vue'

function handleChange(value: string) {
  console.log('value:', value)
}
</script>

<template>
  Default: <input />
  YUI: <Input placeholder="place input" @change="handleChange" />
</template>
