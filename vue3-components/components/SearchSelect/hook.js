import { ref, onMounted, watch } from "vue";
import PinyinMatch from 'pinyin-match'

export function useSelect($props) {


    return {
        handleSelectFilter, handleClearOptions, initOptions, optionsList
    };
}

