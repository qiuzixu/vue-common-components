<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <search-select v-model="selectValue" :options="businessType" clearable />
  </div>
</template>

<script>
// import SearchSelect from '../../distV2/kSelect.umd.min.js'
// import '../../distV2/kSelect.css'
import SearchSelect from 'kj-component-select'

export default {
  name: 'HelloWorld',
  components: { SearchSelect },
  props: {
    msg: String,
  },
  data() {
    return {
      selectValue: '',
      businessType: [
        {
          label: 'test',
          value: 'test',
        },
        {
          label: 'qiuzixu',
          value: 'qiuzixu',
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import url('../../distV2/kSelect.css');
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
