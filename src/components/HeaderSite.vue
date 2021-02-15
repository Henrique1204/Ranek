<template>
  <header>
      <nav>
            <router-link to="/" class="logo">
                <img src="@/assets/ranek.svg" alt="Ranek">
            </router-link>

            <router-link v-if="isLogado" to="/usuario" class="btn">{{nome}}</router-link>
            <router-link v-else to="/login" class="btn">Vender / Login</router-link>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderSite',
        computed: {
            nome() {
                return this.$store.state.usuario.nome.replace(/ .*/, '');
            },
            isLogado() {
                return this.$store.state.login;
            }
        }
    }
</script>

<style scoped>
    nav {
        padding: 15px 20px;
        box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        padding: 10px 0;
    }

    .logo img {
        width: 90px;
    }
</style>
