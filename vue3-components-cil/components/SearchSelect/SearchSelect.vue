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
    :size="$props.size"
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
import { ref, onMounted, watch } from 'vue'
import PinyinMatch from 'pinyin-match'
import { ElSelect, ElOption } from 'element-plus'
import 'element-plus/es/components/select/style/css'
// import { useSelect } from './hook'
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
    default: '240px',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'default',
  },
})
let optionsList = ref([]),
  copyOptionsList = ref([])
/**
 * @Description: 下拉框支持模糊搜索
 * @Author: Lucas
 * @param {*} val
 */
function handleSelectFilter(val) {
  try {
    if (val) {
      optionsList.value = copyOptionsList.value.filter(item =>
        PinyinMatch.match(item.dictLabel || item.label, val),
      )
    } else {
      optionsList.value = copyOptionsList.value
    }
  } catch (error) {
    console.error('模糊音下拉框：', error)
  }
}
/**
 * @Description: 清除筛选恢复options
 * @Author: Lucas
 * @param {*} val 出现则为 true，隐藏则为 false
 */
function handleClearOptions(val) {
  if (!val) return
  optionsList.value = copyOptionsList.value
}

function initOptions() {
  optionsList.value = $props.options
  copyOptionsList.value = JSON.parse(JSON.stringify($props.options))
}

watch(
  () => $props.options,
  () => {
    initOptions()
  },
)

onMounted(() => {
  initOptions()
})
// const { handleSelectFilter, handleClearOptions, optionsList } = useSelect($props)

defineOptions({
  name: 'SearchSelect',
})
</script>
