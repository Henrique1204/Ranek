<template>
    <form>
        <input name="busca" id="busca" type="text" v-model="busca">
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
                this.$router.push({ query: { q: this.busca } });
            }
        }
    };
</script>

<style>
</style>
