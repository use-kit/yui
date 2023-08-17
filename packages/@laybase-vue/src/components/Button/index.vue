<script setup lang="ts">
import type { ButtonProps } from '@laybase/types'

import classNames from 'classnames'
import { getButtonSizeClass } from '@laybase/shared'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  text: '',
})

const emit = defineEmits(['click'])

defineOptions({ name: 'LayButton ' })

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
