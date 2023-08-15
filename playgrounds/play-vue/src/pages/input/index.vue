<script setup lang="ts">
import { Input } from '@laybase/vue'

function handleChange(value: string) {
  console.log('value:', value)
}
</script>

<template>
  Default: <input />
  Laybase: <Input placeholder="place input" @change="handleChange" />
</template>
