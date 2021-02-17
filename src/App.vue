<template>
  <div id="App">
    <HeaderSite />

    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>

    <FooterSite />
  </div>
</template>

<script>
  import HeaderSite from '@/components/HeaderSite.vue';
  import FooterSite from '@/components/FooterSite.vue';
  import { api } from '@/services.js';

  export default {
    name: 'App',
    components: {
      HeaderSite,
      FooterSite
    },
    created() {
      if (window.localStorage.token) {
        api.validarToken().then(() => this.$store.dispatch('getUsuario'))
        .catch(() => window.localStorage.removeItem('token'));

      }
    }
  };
</script>

<style>
  /* Reset */
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-weight: normal;
    font-size: 1rem;
    list-style: none;
    color: inherit;
    text-decoration: none;
  }

  /* Gerais */
  body {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
  }

  img {
    max-width: 100%;
    display: block;
  }

  #App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #main {
    flex: 1;
  }

  .btn {
    padding: 10px 30px;
    border: none;
    border-radius: 4px;
    text-align: center;
    color: #FFF;
    background-color: #87F;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    display: block;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .btn:hover {
    background-color: #65D;
    transform: scale(1.1);
  }

  label {
    margin-bottom: 5px;
    cursor: pointer;
  }

  input, textarea {
    border: 1px solid #FFF;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
  }

  input:hover, textarea:hover,
  input:focus, textarea:focus {
    border-color: #87F;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    outline: none;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

  .v-enter {
    transform: translate3d(0, -20px, 0);
  }

    .v-leave-to {
    transform: translate3d(0, 20px, 0);
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.3s;
  }
</style>
