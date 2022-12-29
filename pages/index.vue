<template>
  <div class="container">
    <div class="full-page">
      <h1 class="title main-title">Welcome to Nuxt - Bulma - Boilerplate</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
.full-page {
  // full page height - header height - footer height
  height: calc(100vh - 7rem - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-title {
  font-family: 'ClashDisplay-Bold';
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}
</style>
