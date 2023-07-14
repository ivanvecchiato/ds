<template>
  <div class="table">
    <table>
      <tr>
        <th v-for="h in heads" :key="h">{{h}}</th>
      </tr>
      <tr v-for="item in data" :key="item">
        <td v-for="field in item" :key="field">{{ field }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ITable',
  props: {
    heads: Array,
    data: Array,
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  padding: 10px;
  text-align: left;
}
th {
  text-align: left;
}
tr {
  text-align: left;
}
</style>
