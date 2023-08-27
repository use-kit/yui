<script setup lang="ts">
import type { InputProps } from '@yui/types'

import { ref } from 'vue'
import classNames from 'classnames'
import { getInputSizeClass } from '@yui/shared'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'default',
  disabled: false,
  value: '',
  placeholder: '',
})

const emit = defineEmits(['change'])

defineOptions({
  name: 'LayInput',
  inheritAttrs: false,
})

const sizeClass: string[] = getInputSizeClass(props.size)
const cls: string = classNames(sizeClass)

const defaultValue = ref(props.value)

function handleChange(event: Event) {
  defaultValue.value = (event.target as HTMLInputElement).value
  emit('change', defaultValue.value)
}
</script>

<template>
  <div :class="cls">
    <!-- <label for="input">Input</label> -->
    <input
      :type="type"
      :value="defaultValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @change="handleChange"
    >
  </div>
</template>
