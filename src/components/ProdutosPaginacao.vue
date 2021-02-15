<template>
    <ul v-if="totalPaginas > 1">
        <li v-for="pagina in paginas" :key="pagina" >
            <router-link :to="{ query: query(pagina) }">{{pagina}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'ProdutosPaginacao',
        props: {
            produtosPorPagina: {
                type: Number,
                default: 1
            },
            totalProdutos: {
                type: Number,
                default: 1
            }
        },
        computed: {
            paginas() {
                const paginaAtual = Number(this.$route.query._page);
                const range = 9;
                const offset = Math.ceil(range / 2);
                const total = this.totalPaginas;
                const listaPaginas = [];

                for (let i = 1; i <= total; i++) {
                    listaPaginas.push(i);
                }

                listaPaginas.splice(0, paginaAtual - offset);
                listaPaginas.splice(range, total);

                return listaPaginas;
            },
            totalPaginas() {
                const total = this.totalProdutos / this.produtosPorPagina;
                return (total !== Infinity) ? Math.ceil(total) : 0;
            }
        },
        methods: {
            query(pagina) {
                return {
                    ...this.$route.query,
                    _page: pagina
                };
            }
        }
    };
</script>

<style scoped>
    ul {
        margin-top: 2rem;
    }

    li {
        display: inline-block;
    }

    li + li {
        margin-left: 8px;
    }

    li a {
        padding: 2px 8px;
        border-radius: 2px;
    }

    li a.router-link-exact-active, li a:hover {
        color: #FFF;
        background-color: #87F;
    }
</style>
