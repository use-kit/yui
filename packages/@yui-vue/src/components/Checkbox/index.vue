<script setup lang="ts">
import type { CheckboxProps } from '@yui/types'

import { ref } from 'vue'
import classNames from 'classnames'

defineOptions({
  name: 'YCheckbox',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  checked: false,
  disabled: false,
  label: '',
})

const emit = defineEmits(['change'])

const cls: string = classNames({
  'lay-checkbox': true,
  'lay-checkbox-checked': props.checked,
  'lay-checkbox-disabled': props.disabled,
})

const checkedValue = ref(props.checked)

function handleChange() {
  checkedValue.value = !checkedValue.value
  emit('change', checkedValue.value)
}
</script>

<template>
  <div :class="cls" @click="handleChange">
    <span v-if="checkedValue" class="lay-checkbox-icon">
      <svg class="lay-checkbox-checked-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19.07 5.03L7.5 16.59l-4.59-4.59L1 14l6 6 12-12-2.54-2.54z"
        />
      </svg>
    </span>
    <span class="lay-checkbox-label">{{ props.label }}</span>
  </div>
</template>
