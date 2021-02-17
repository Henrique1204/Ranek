<template>
  <div>
    <UsuarioForm>
      <NotificacaoErro :erros="erros" />
      <button class="btn" @click.prevent="atualizarUsuario">Atuaizar Usuário</button>
    </UsuarioForm>
  </div>
</template>

<script>
  import UsuarioForm from '@/components/UsuarioForm.vue';
  import { api } from '@/services.js';

  export default {
    name: 'UsuarioEditar',
    data: () => ({
      erros: []
    }),
    methods: {
      atualizarUsuario() {
        this.erros = [];
        const user = this.$store.state.usuario;
        api.put(`/usuario`, user).then(() => {
          this.$store.dispatch('getUsuario');
          this.$router.push({ name: 'usuario' });
        }).catch((e) => this.erros.push(e.response.data.message));
      }
    },
    components: {
      UsuarioForm
    }
  };
</script>

<style>
</style>
