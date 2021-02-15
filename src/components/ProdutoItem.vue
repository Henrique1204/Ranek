<template>
    <li v-if="produto" class="produto">
        <router-link :to="{ name: 'produto', params: { id: produto.id } }" class="produto_img">
            <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
            <p>Ver Produto</p>
        </router-link>

        <div class="infos">
            <p class="preco">{{produto.preco | numeroPreco}}</p>
            <h2 class="titulo">{{produto.nome}}</h2>
            <slot></slot>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'ProdutoItem',
        props: ['produto']
    };
</script>

<style scoped>
    .produto {
        margin-bottom: 40px;
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        gap: 20px;
        position: relative;
    }

    .produto_img {
        height: 100px;
        border-radius: 4px;
        overflow: hidden;
    }

    .infos {
        align-self: flex-end;
    }

    .infos h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>