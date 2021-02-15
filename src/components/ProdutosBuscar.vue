<template>
    <form>
        <input name="busca" id="busca" type="text" v-model="busca" placeholder="Buscar...">
        <button id="lupa" @click.prevent="buscarProdutos">Buscar</button>
    </form>
</template>

<script>
    export default {
        name: 'ProdutosBuscar',
        data: () => ({
            busca: ''
        }),
        methods: {
            buscarProdutos() {
                if (this.busca !== this.$route.query.q) {
                    this.$router.push({ query: { q: this.busca } });
                }
            }
        }
    };
</script>

<style scoped>
    form {
        max-width: 600px;
        margin: 30px auto 60px;
        position: relative;
    }

    #busca {
        width: 100%;
        padding: 20px;
        border: none;
    }

    #busca:hover, #busca:focus {
        transform: scale(1.1);
    }

    #lupa {
        width: 62px;
        height: 62px;
        padding: 15px;
        border: none;
        text-indent: -150px;
        background: url("../assets/search.svg") no-repeat center center;
        position: absolute;
        top: 0px;
        right: 0px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
    }
</style>
