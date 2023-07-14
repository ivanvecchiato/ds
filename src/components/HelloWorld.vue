<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <i-button @click="setIsOpen(true)">ivan</i-button>
    
    <i-table :heads="headers" :data="data"></i-table>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      isOpen: false,
      headers: [
        'colonna 1',
        'colonna 2',
        'colonna 3'
      ],
      data: [
        {
          firstname: 'Ivan',
          lastname: 'Vecchiato',
          city: 'Jesolo'
        },
        {
          firstname: 'Ivan',
          lastname: 'Vecchiato',
          city: 'Jesolo'
        },
        {
          firstname: 'Ivan',
          lastname: 'Vecchiato',
          city: 'Jesolo'
        },
      ]
    }
  },
  methods: {
    setIsOpen: function(value) {
      this.isOpen = value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
