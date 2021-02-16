<template>
  <div>
      <h2>Vendas</h2>

      <p v-if="vendas && vendas.length === 0">
        Você ainda não realizou nenhuma venda no nosso site.
      </p>
  
      <ul v-if="vendas">
        <li
          class="produtos-wrapper"
          v-for="({produto, comprador_id, endereco}, index) in vendas"
          :key="`${index}`"
        >
          <ProdutoItem v-if="produto" :produto="produto">
            <p class="comprador"><span>Comprador:</span> {{comprador_id}}</p>
          </ProdutoItem>

          <div class="entrega">
            <h3>Entrega:</h3>
            <ul v-if="endereco">
              <li
                v-for="(value, key) in endereco"
                :key="key"
              >
                {{key}}: {{value}}
              </li>
            </ul>
          </div>
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
    name: 'UsuarioVendas',
    data: () => ({
      vendas: null,
    }),
    computed: {
      ...mapState(['usuario', 'login'])
    },
    methods: {
      getVendas() {
        api.get(`/transacao?vendedor_id=${this.usuario.id}`)
        .then((res) => {
          this.vendas = res.data;
          console.log(res.data);
        });
      }
    },
    components: {
      ProdutoItem
    },
    watch: {
      login() {
        this.getVendas();
      }
    },
    created() {
      if (this.login) {
        this.getVendas();
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

  .comprador span {
    color: #E80;
  }

  .entrega {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    gap: 20px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    justify-self: end;
  }
</style>
