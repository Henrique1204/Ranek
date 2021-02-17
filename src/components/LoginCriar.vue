<template>
  <div>
    <h2>Crie a Sua Conta</h2>

    <transition mode="out-in">
      <button v-if="!isCriar" @click="isCriar = true" class="btn">Criar Conta</button>
      <div v-else>
        <UsuarioForm >
          <NotificacaoErro :erros="erros" />
          <button class="btn" @click.prevent="criarUsuario">Criar Usuário</button>
        </UsuarioForm>
      </div>
    </transition>
  </div>
</template>

<script>
  import UsuarioForm from '@/components/UsuarioForm.vue';

  export default {
    name: 'LoginCriar',
    data: () => ({
      isCriar: false,
      erros: []
    }),
    components: {
      UsuarioForm
    },
    methods: {
      async criarUsuario() {
        try {
          await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
          await this.$store.dispatch('logarUsuario', this.$store.state.usuario);
          await this.$store.dispatch('getUsuario');
          this.$router.push({ name: 'usuario' });
        } catch (e) {
          this.erros.push(e.response.data.message);
        }
      }
    }
  };
</script>

<style scoped>
  h2 {
    margin: 40px 0 10px;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
</style>
