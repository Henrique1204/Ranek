<template>
  <div>
      <h2>Compras</h2>
  
      <p v-if="compras && compras.length === 0" class="msg">
        Você ainda não realizou nenhuma compra no nosso site.
      </p>

      <ul v-if="compras">
        <li
          class="produtos-wrapper"
          v-for="({produto, vendedor_id}, index) in compras"
          :key="`${index}`"
        >
          <ProdutoItem v-if="produto" :produto="produto">
            <p class="vendedor"><span>Vendedor:</span> {{vendedor_id}}</p>
          </ProdutoItem>
        </li>
      </ul>
  
      <PaginaCarregando v-else />
  </div>
</template>

<script>
  import ProdutoItem from '@/components/ProdutoItem.vue';
  import { api } from '@/services.js';
  import { mapState } from 'vuex';

  export default {
    name: 'UsuarioCompras',
    data: () => ({
      compras: null,
    }),
    computed: {
      ...mapState(['usuario', 'login'])
    },
    methods: {
      getCompras() {
        api.get(`/transacao?comprador_id=${this.usuario.id}`)
        .then((res) => this.compras = res.data);
      }
    },
    components: {
      ProdutoItem
    },
    watch: {
      login() {
        this.getCompras();
      }
    },
    created() {
      if (this.login) {
        this.getCompras();
      }
    }
  };
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .produto-wrapper {
    margin-bottom: 40px;
  }

  .vendedor span {
    color: #E80;
  }
</style>
