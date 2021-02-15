<template>
  <section>
    <h2>Crie a Sua Conta</h2>

    <transition mode="out-in">
      <button v-if="!isCriar" @click="isCriar = true" class="btn">Criar Conta</button>
      <UsuarioForm v-else >
        <button class="btn">Criar Usuário</button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
  import UsuarioForm from '@/components/UsuarioForm.vue';

  export default {
    name: 'LoginCriar',
    data: () => ({
      isCriar: false
    }),
    components: {
      UsuarioForm
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
