<template>
  <div>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atuaizar Usuário</button>
    </UsuarioForm>
  </div>
</template>

<script>
  import UsuarioForm from '@/components/UsuarioForm.vue';
  import { api } from '@/services.js';

  export default {
    name: 'UsuarioEditar',
    methods: {
      atualizarUsuario() {
        const user = this.$store.state.usuario;
        api.put(`/usuario/${user.id}`, user).then(() => {
          this.$store.dispatch('getUsuario');
          this.$router.push({ name: 'usuario' });
        }).catch((e) => console.log(e));
      }
    },
    components: {
      UsuarioForm
    }
  };
</script>

<style>
</style>
