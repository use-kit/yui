<script setup lang="ts">
import type { TagProps } from '@yui/types'

import classNames from 'classnames'
import { getTagSizeClass } from '@yui/shared'

const props = withDefaults(defineProps<TagProps>(), {
  text: '',
  color: 'default',
  size: 'default',
  shape: 'default',
  outline: false,
})

const emit = defineEmits(['click'])

const sizeClass: string[] = getTagSizeClass(props.size)
const cls: string = classNames('tag', {
  [`tag--${props.color}`]: props.color !== 'default',
  [`tag--${props.shape}`]: props.shape !== 'default',
  'tag--outline': props.outline,
}, sizeClass)

function handleClick() {
  emit('click')
}
</script>

<template>
  <span :class="cls" @click="handleClick">
    {{ props.text }}
  </span>
</template>
