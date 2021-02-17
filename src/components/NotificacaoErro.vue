<template>
  <transition>
      <ul class="erro" v-if="erros.length > 0">
          <li v-for="(erro, index) in erros" :key="`${erro}_${index}`" v-html="erro">
          </li>
      </ul>
  </transition>
</template>

<script>
    export default {
        name: 'NotificacaoErro',
        props: {
            erros: Array
        }
    }
</script>

<style scoped>
    .erro {
        margin: 20px auto;
    }

    .erro li {
        text-align: center;
        color: #E80;
    }
</style>