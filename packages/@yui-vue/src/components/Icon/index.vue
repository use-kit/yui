<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { IconProps } from '@yui/types'

import { computed } from 'vue'
import { addUnit } from '@yui/shared'
import { isUndefined } from '@use-kit/functions'
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<IconProps>(), { size: '', color: '' })

defineOptions({
  name: 'Icon',
  inheritAttrs: false,
})

const style = computed<CSSProperties>(() => {
  const { size, color } = props

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    color,
  }
})
</script>

<template>
  <div :style="style">
    <Icon :icon="icon" />
  </div>
</template>
