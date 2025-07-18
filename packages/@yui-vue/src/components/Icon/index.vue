<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { IconProps } from '@yui/types'
import type { IconifyIcon } from '@iconify/vue'
import type { LucideIcon } from 'lucide-vue-next'

import { computed } from 'vue'
import { addCSSUnit } from '@yui/shared'
import { isFunction, isUndefined } from '@use-kit/functions'
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<IconComponentProps>(), { size: '', color: '' })

export type IconComponentProps = IconProps<IconifyIcon | LucideIcon | string>

const { size, color, icon, className } = props
const style = computed<CSSProperties>(() => {
  return {
    fontSize: isUndefined(size) ? undefined : addCSSUnit(size),
    color,
  }
})

const Lucide = icon as LucideIcon
const Iconify = icon as IconifyIcon
</script>

<template>
  <Lucide v-if="isFunction(icon)" :size="Number(size)" :color="color" :class="className" />
  <Icon v-else :icon="Iconify" :style="style" :class="className" />
</template>
