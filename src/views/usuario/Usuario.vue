<template>
  <section>
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{ name: 'usuario' }">Produtos</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'usuario/compras' }">Compras</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'usuario/vendas' }">Vendas</router-link>
        </li>

        <li>
          <router-link :to="{ name: 'usuario/editar' }">Editar Usuário</router-link>
        </li>

        <li>
          <button @click.prevent="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>

    <transition mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'Usuario',
    methods: {
      deslogar() {
        this.$store.dispatch('deslogarUsuario');
        this.$router.push('/login');
      }
    }
  };
</script>

<style scoped>
  section {
    max-width: 900px;
    padding: 20px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    section {
      margin: 0 auto;
      grid-template-columns: 1fr;
    }
  }

  .sidenav li + li {
    margin-top: 10px;
  }

  .sidenav a, .sidenav button {
    padding: 10px;
    border-radius: 4px;
    background-color: #F4F7FC;
    display: block;
    outline: none;
  }

  .sidenav a.router-link-exact-active,
  .sidenav a:hover,
  .sidenav button:hover {
    color: #FFF;
    background-color: #87F;
  }

  .sidenav button {
    width: 100%;
    border: none;
    text-align: left;
    cursor: pointer;
  }
</style>
