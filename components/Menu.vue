<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <nuxt-link to="/#">
          <img src="" />
        </nuxt-link>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        v-on:click="openSubmenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" v-on:click="closeSubmenu()"
          ><nuxt-link to="/#">ACCUEIL</nuxt-link></a
        >
        <a class="navbar-item" v-on:click="closeSubmenu()"
          ><nuxt-link to="/contact">CONTACT</nuxt-link></a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openSubmenu: function () {
      const doc = document.getElementById("navbarBasic");
      if (doc.classList.contains("is-active")) {
        doc.classList.remove("is-active");
      } else {
        doc.classList.add("is-active");
      }
    },
    closeSubmenu: function () {
      const doc = document.getElementById("navbarBasic");
      if (doc.classList.contains("is-active")) {
        doc.classList.remove("is-active");
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0;
  font-family: 'ClashDisplay-Medium' !important;
  font-size: 1.5rem;
  height: 7rem;
}

.navbar-brand {
  height: 100%;
}

@media (max-width: 570px) {
  .navbar-item {
    text-align: center;
    font-size: 3rem;
  }
}
</style>