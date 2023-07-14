<template>
  <button class="button">
    <slot>button</slot>
  </button>
</template>

<script>
export default {
  name: 'IButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  border-radius: 4px;
  padding: 5px 10px;
  min-width: 80px;
}
</style>
