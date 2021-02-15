<template>
  <form>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" v-model="nome">

        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" v-model="email">

        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha" v-model="senha">

        <label for="cep">CEP</label>
        <input type="text" id="cep" name="cep" v-model="cep">

        <label for="rua">Rua</label>
        <input type="text" id="rua" name="rua" v-model="rua">

        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" name="bairro" v-model="bairro">

        <label for="cidade">Cidade</label>
        <input type="text" id="cidade" name="cidade" v-model="cidade">

        <label for="estado">Estado</label>
        <input type="text" id="estado" name="estado" v-model="estado">

        <div class="button">
            <slot />
        </div>
  </form>
</template>

<script>
    export default {
        name: 'UsuarioForm'
    }
</script>

<style scoped>
    form {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: center;
    }

    .button {
        grid-column: 2;
    }

    .button .btn {
        max-width: 100%;
    }
</style>
