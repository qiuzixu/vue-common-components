<template>
  <el-select
    :style="`width: ${$props.width}`"
    :value="value"
    :filterable="$props.filterable"
    v-bind="$attrs"
    :clearable="$props.clearable"
    @visible-change="handleClearOptions"
    :filter-method="handleSelectFilter"
    :placeholder="$props.placeholder"
    :disabled="$props.disabled"
  >
    <!-- v-on="$listeners" -->
    <el-option
      v-for="opt in optionsList"
      :key="`${opt.dictValue || opt.value}-${opt.dictLabel || opt.label} `"
      :label="opt.dictLabel || opt.label"
      :value="opt.dictValue || opt.value"
      :disabled="opt.disabled"
    />
  </el-select>
</template>

<script setup>
import { useAttrs } from 'vue'
console.log('useAttrs', useAttrs())
import { ElSelect, ElOption } from 'element-plus'
import 'element-plus/es/components/select/style/css'

import { useSelect } from './hook'
const $props = defineProps({
  value: [String, Number, Array, Boolean],
  filterable: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default() {
      return []
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  width: {
    type: String,
    default: '220px',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const { handleSelectFilter, handleClearOptions, optionsList } = useSelect($props)

defineOptions({
  name: 'SearchSelect',
})
</script>
