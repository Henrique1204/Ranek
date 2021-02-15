<template>
  <div>
    <h2>Adicionar Produto</h2>
    <ProdutosAdicionar />

    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos.length > 0" name="lista" tag="ul">
      <ProdutoItem 
        v-for="(produto, index) in usuario_produtos" 
        :key="`${produto.id}_${index}`"
        :produto="produto"
      />
    </transition-group>
  </div>
</template>

<script>
  import ProdutosAdicionar from '@/components/ProdutosAdicionar.vue';
  import ProdutoItem from '@/components/ProdutoItem.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'UsuarioProdutos',
    computed: {
      ...mapState(['login', 'usuario', 'usuario_produtos'])
    },
    methods: {
      ...mapActions(['getUsuarioProdutos'])
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
    margin-bottom: 20px;
  }
</style>
