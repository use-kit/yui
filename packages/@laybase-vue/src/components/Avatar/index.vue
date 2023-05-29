<script setup lang="ts">
import type { AvatarProps } from '@laybase/types'

import { computed } from 'vue'
import {
  classJoin,
  getAvatarShapeClass,
  getAvatarSizeClass,
} from '@laybase/shared'

import { Icon } from '../index'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  shape: 'circle',
})

const icon = computed(() => 'mdi:account')

const sizeClass: string[] = getAvatarSizeClass(props.size)
const shapeClass: string[] = getAvatarShapeClass(props.shape)
const cls: string = classJoin(sizeClass, shapeClass)
</script>

<template>
  <span :class="cls">
    <img v-if="src" :src="src" alt="Img">

    <Icon v-else :icon="icon" />
  </span>
</template>
