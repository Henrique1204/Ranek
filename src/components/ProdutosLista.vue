<template>
  <section>
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <img 
          v-if="produto.fotos && produto.fotos.length"
          :src="produto.fotos[0]"
          :alt="produto.fotos[0].titulo"
        >

        <p class="preco">{{produto.preco}}</p>
        <h2 class="titulo">{{produto.nome}}</h2>
        <p>{{produto.descricao}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  import { api } from '@/services.js';
  import { serialize } from '@/helpers.js';

  export default {
    name: 'ProdutosLista',
    data() {
      return {
        produtos: null,
        produtosPorPagina: 9
      }
    },
    computed: {
      url() {
        const query = serialize(this.$route.query);
        return `/produto?_limit=${this.produtosPorPagina}${query}`;
      }
    },
    watch: {
      url() {
        this.getProdutos();
      }
    },
    methods: {
      getProdutos() {
        api.get(this.url).then((res) => this.produtos = res.data);
      }
    },
    created() {
      this.getProdutos();
    }
  };
</script>

<style>
</style>
