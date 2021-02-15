<template>
  <div>
    <ul v-if="produtos && produtos.length > 0">
      <li v-for="produto in produtos" :key="produto.id">
        <router-link to="/">
          <img 
            v-if="produto.fotos && produto.fotos.length"
            :src="produto.fotos[0]"
            :alt="produto.fotos[0].titulo"
          >

          <p class="preco">{{produto.preco}}</p>
          <h2>{{produto.nome}}</h2>
          <p>{{produto.descricao}}</p>
        </router-link>
      </li>
    </ul>

      <p v-else-if="produtos && produtos.length === 0" class="sem_resultado">
        Busca sem resultados. Tente buscar outro termo.
      </p>
  </div>
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

<style scoped>
  div {
    max-width: 1000px;
    margin: 0 auto;
  }

  ul {
    width: 100%;
    margin: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  li {
    padding: 10px;
    border-radius: 4px;
    background-color: #FFF;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
  }

  li:hover {
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }

  li img {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  li h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .preco {
    font-weight: bold;
    color: #E80;
  }

  .sem_resultado {
    text-align: center;
  }
</style>
