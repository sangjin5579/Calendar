<template>
  <calendar></calendar>
</template>

<script>
import Calendar from '@/components/Calendar.vue'
export default {
  name: 'HelloWorld',
  components: {
    Calendar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
