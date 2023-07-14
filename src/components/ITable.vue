<template>
  <div class="table">
    <table cellspacing="0" cellpadding="0">
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
  border: none,
}
tr:first-child {
  background-color: rgb(236, 236, 236);
 
}
th {
  text-align: left;
  padding: 10px;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
}
td {
  text-align: left;
  padding: 10px;
}
</style>
