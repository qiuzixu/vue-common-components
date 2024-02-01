<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <SearchSelect v-model="count" :options="businessType" clearable></SearchSelect>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import SearchSelect from '../../components/SearchSelect'
import SearchSelect from '../../distV3/kSelect.umd.min.js'
import '../../distV3/kSelect.css'
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
defineProps({
  msg: String,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
