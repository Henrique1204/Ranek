<template>
  <div>
    <h2>Adicionar Produto</h2>
    <ProdutosAdicionar />

    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos && usuario_produtos.length > 0" mode="out-in" name="lista" tag="ul">
      <ProdutoItem 
        v-for="(produto, index) in usuario_produtos" 
        :key="`${produto.id}_${index}`"
        :produto="produto"
      >
        <p>{{produto.descricao}}</p>
        <button class="deletar" @click="deleter(produto.id)">Deletar</button>
      </ProdutoItem>
    </transition-group>
  </div>
</template>

<script>
  import ProdutosAdicionar from '@/components/ProdutosAdicionar.vue';
  import ProdutoItem from '@/components/ProdutoItem.vue';
  import { mapState, mapActions } from 'vuex';
  import { api } from '@/services.js';

  export default {
    name: 'UsuarioProdutos',
    computed: {
      ...mapState(['login', 'usuario', 'usuario_produtos'])
    },
    methods: {
      ...mapActions(['getUsuarioProdutos']),
      deleter(id) {
        const confirmar = window.confirm('Você deseja remover este produto?');

        if (confirmar) {
          api.delete(`/produto/${id}`).then(() => this.getUsuarioProdutos())
          .catch((e) => console.log(e));

        }
      }
    },
    components: {
      ProdutosAdicionar,
      ProdutoItem
    },
    watch: {
      login() {
        this.getUsuarioProdutos();
      }
    },
    created() {
      if (this.login) {
        this.getUsuarioProdutos();
      }
    }
  };
</script>

<style scoped>
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .lista-enter, .lista-leave-to {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  .lista-enter-active, .lista-leave-active {
    transition: all 0.3s;
  }

  .deletar {
    width: 24px;
    height: 24px;
    border: none;
    text-indent: -140px;
    background: url("../../assets/remove.svg") no-repeat center;
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
    cursor: pointer;
    outline: none;
  }
</style>
