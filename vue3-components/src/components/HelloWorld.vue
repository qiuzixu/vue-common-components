<script setup>
import { ref } from 'vue'
import SearchSelect from '../../components/SearchSelect/index.js'
defineProps({
  msg: String,
})

const count = ref('')
const businessType = [
  {
    label: 'qzx',
    value: 'qzx',
  },
  {
    label: 'liu',
    value: 'liu',
  },
]
</script>

<template>
  <h1>{{ msg }}</h1>
  <SearchSelect v-model="count" :options="businessType" clearable></SearchSelect>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
