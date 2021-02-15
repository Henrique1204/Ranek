<template>
  <div class="ProdutosLista">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length > 0" class="container_lista" key="produtos">
        <ul class="produtos">
          <li v-for="(produto, index) in produtos" :key="`${produto.id}_${index}`" class="produto">
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

        <ProdutosPaginacao :totalProdutos="totalProdutos" :produtosPorPagina="produtosPorPagina" />
      </div>

      <p v-else-if="produtos && produtos.length === 0" class="sem_resultado" key="sem_resultada">
        Busca sem resultados. Tente buscar outro termo.
      </p>

      <PaginaCarregando v-else key="carregando" />
    </transition>
  </div>
</template>

<script>
  import ProdutosPaginacao from './ProdutosPaginacao.vue';
  import { api } from '@/services.js';
  import { serialize } from '@/helpers.js';

  export default {
    name: 'ProdutosLista',
    data() {
      return {
        produtos: null,
        produtosPorPagina: 9,
        totalProdutos: null
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
        this.produtos = null;

        api.get(this.url).then((res) => {
          this.totalProdutos = Number(res.headers['x-total-count']);
          this.produtos = res.data;
        });
      }
    },
    components: {
      ProdutosPaginacao
    },
    created() {
      this.getProdutos();
    }
  };
</script>

<style scoped>
  .ProdutosLista {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container_lista {
    width: 100%;
    margin: 30px;
  }

  .produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .produto {
    padding: 10px;
    border-radius: 4px;
    background-color: #FFF;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
  }

  .produto:hover {
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
  }

  .produto img {
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .produto h2 {
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
