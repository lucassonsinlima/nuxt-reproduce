<template>
  <section class="foo__bar">
    hello from schedule/index
  </section>
</template>

<script>
export default {
  name: 'Schedule',

  created () {
    return this.$router.push({ path: '/' })
  }
}
</script>

<style lang="scss">
.foo { 
  &__bar {
    background-color: red; 
  }
}
</style>