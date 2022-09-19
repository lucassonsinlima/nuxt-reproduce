<template>
  <section>
    hello from get-started/index
  </section>
</template>

<script>
export default {
  name: 'GetStarted',

  created () {
    // return navigateTo({ path: '/' })
    return this.$router.push({ path: '/' })
  }
}
</script>
