<template>
  <div id="App">
    <HeaderSite />

    <main id="main">
      <router-view />
    </main>

    <FooterSite />
  </div>
</template>

<script>
  import HeaderSite from '@/components/HeaderSite.vue';
  import FooterSite from '@/components/FooterSite.vue';

  export default {
    name: 'App',
    components: {
      HeaderSite,
      FooterSite
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
  }

  .btn:hover {
    background-color: #65D;
    transform: scale(1.1);
  }
</style>
