import { ref, onMounted, watch } from "vue";
import PinyinMatch from 'pinyin-match'

export function useSelect($props) {
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


    watch(() => $props.options, () => {
        initOptions()
    })

    onMounted(() => {
        initOptions()
    })

    return {
        handleSelectFilter, handleClearOptions, initOptions, optionsList
    };
}

