<template>
  <div class="container">
    <img src="~/assets/images/404-picture.svg" alt="404 image" />

    <p>Cette url n'existe pas : {{ path }}</p>
    <nuxt-link to="/#">Retourner sur la page d'accueil</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  middleware: 'validateRoute',
  mounted(this: RedirectPage) {
    this.path = this.$route.path
  },
})
export default class RedirectPage extends Vue {
  path: string = ''
}
</script>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 7rem - 7rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>