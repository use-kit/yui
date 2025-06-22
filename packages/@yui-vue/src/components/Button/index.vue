<script setup lang="ts">
import type { ButtonProps } from '@yui/types'

import classNames from 'classnames'
import { getButtonSizeClass } from '@yui/shared'

defineOptions({ name: 'YButton ' })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  text: '',
})

const emit = defineEmits(['click'])

const sizeClass: string[] = getButtonSizeClass(props.size)
const cls: string = classNames('lay-button', props.type, sizeClass)

function handleClick() {
  emit('click')
}
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    {{ text }}
  </button>
</template>
