<template>
    <ul v-if="totalPaginas > 1">
        <li v-for="pagina in totalPaginas" :key="pagina" >
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
