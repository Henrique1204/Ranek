<template>
  <section>
        <h1>Login</h1>

        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="login.email">

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.senha">

            <button class="btn" @click.prevent="logar">Logar</button>
        </form>

        <p class="perdeu"><a href="/" target="_blank">Perdeu a senha? Clique aqui.</a></p>

        <LoginCriar />

        <pre>{{$store.state.usuario}}</pre>
  </section>
</template>

<script>
    import LoginCriar from '@/components/LoginCriar.vue';

    export default {
        name: 'Login',
        data: () => ({
            login: {
                email: '',
                senha: '',
            }
        }),
        methods: {
            logar() {
                this.$store.dispatch('getUsuario', this.login.email);
                this.$router.push({ name: 'usuario' });
            }
        },
        components: {
            LoginCriar
        }
    }
</script>

<style scoped>
    section {
        max-width: 500px;
        padding: 0 20px;
        margin: 0 auto;
    }

    h1 {
        margin-top: 40px;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        color: #87F;
    }

    form {
        display: grid;
    }

    .btn {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }

    .perdeu {
        margin: 20px auto 0;
        text-align: center;
    }

    .perdeu a {
        transition: 0.3s ease;
    }

    .perdeu a:hover {
        text-decoration: underline;
        color: #87F;
    }
</style>
