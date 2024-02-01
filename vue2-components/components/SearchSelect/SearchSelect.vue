<template>
  <div>
    <el-select
      :style="`width: ${$props.width}`"
      :value="value"
      :filterable="$props.filterable"
      v-bind="$attrs"
      v-on="$listeners"
      :clearable="$props.clearable"
      @visible-change="handleClearOptions"
      :filter-method="handleSelectFilter"
      size="small"
      :placeholder="$props.placeholder"
      :disabled="$props.disabled"
    >
      <el-option
        v-for="opt in optionsList"
        :key="`${opt.dictValue || opt.value}-${opt.dictLabel || opt.label} `"
        :label="opt.dictLabel || opt.label"
        :value="opt.dictValue || opt.value"
        :disabled="opt.disabled"
      />
    </el-select>
  </div>
</template>

<script>
import PinyinMatch from 'pinyin-match'
import { Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/select.css'
// import 'element-ui/lib/theme-chalk/select-dropdown.css'
import 'element-ui/lib/theme-chalk/icon.css'
export default {
  name: 'SearchSelect',
  components: { elSelect: Select, elOption: Option },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
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
  },
  data() {
    return {
      optionsList: [],
      copyOptionsList: [],
    }
  },
  watch: {
    options() {
      this.initOptions()
    },
  },
  created() {
    this.initOptions()
  },
  methods: {
    /**
     * @Description: 下拉框支持模糊搜索
     * @Author: Lucas
     * @param {*} val
     */
    handleSelectFilter(val) {
      try {
        if (val) {
          this.optionsList = this.copyOptionsList.filter(item =>
            PinyinMatch.match(item.dictLabel || item.label, val),
          )
        } else {
          this.optionsList = this.copyOptionsList
        }
      } catch (error) {
        console.error('模糊音下拉框：', error)
      }
    },
    /**
     * @Description: 清除筛选恢复options
     * @Author: Lucas
     * @param {*} val 出现则为 true，隐藏则为 false
     */
    handleClearOptions(val) {
      if (!val) return
      this.optionsList = this.copyOptionsList
    },
    initOptions() {
      this.optionsList = this.$props.options
      this.copyOptionsList = JSON.parse(JSON.stringify(this.$props.options))
    },
  },
}
</script>
