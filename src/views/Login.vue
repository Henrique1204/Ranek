<template>
  <section>
        <h1>Login</h1>

        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="login.email">

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" v-model="login.senha">

            <button class="btn" @click.prevent="logar">Logar</button>
            <NotificacaoErro :erros="erros" />
        </form>

        <p class="perdeu">
            <a href="http://ranekapi.teste/wp-login.php?action=lostpassword" target="_blank">Perdeu a senha? Clique aqui.</a>
        </p>

        <LoginCriar />
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
            },
            erros: []
        }),
        methods: {
            logar() {
                this.erros = [];

                this.$store.dispatch('logarUsuario', this.login)
                .then(() =>{
                    this.$store.dispatch('getUsuario');
                    if (this.$store.state.login) {
                        this.$router.push({ name: 'usuario' });
                    }
                }).catch((e) => {
                    this.erros.push(e.response.data.message);
                });
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
