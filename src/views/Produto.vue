<template>
    <section>
        <transition mode="out-in">
            <div v-if="produto" class="produto">
                <ul class="fotos" v-if="produto.fotos">
                    <li
                        v-for="({src, titulo}, index) in produto.fotos"
                        :key="`${titulo}_${index}`"
                    >
                        <img :src="src" :alt="titulo">
                    </li>
                </ul>

                <div class="info">
                    <h1>{{produto.nome}}</h1>
                    <p class="preco">{{produto.preco | numeroPreco}}</p>
                    <p class="descricao">{{produto.descricao}}</p>

                    <transition v-if="produto.vendido === 'false'" mode="out-in">
                        <button class="btn" v-if="!finalizar" @click="finalizar = true">Comprar</button>
                        <FinalizarCompra v-else :produto="produto" />
                    </transition>

                    <button class="btn" disabled v-else>Produto Vendido</button>
                </div>
            </div>

            <PaginaCarregando v-else />
        </transition>
    </section>
</template>

<script>
    import { api } from '@/services.js';
    import FinalizarCompra from '@/components/FinalizarCompra.vue';

    export default {
        name: 'Produto',
        data: () => ({
            produto: null,
            finalizar: false
        }),
        props: ['id'],
        methods: {
            getProduto() {
                this.produto = null;
                api.get(`/produto/${this.id}`).then((res) => this.produto = res.data);
            }
        },
        components: {
            FinalizarCompra
        },
        created() {
            this.getProduto();
        }
    };
</script>

<style scoped>
    section {
        padding: 60px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .produto {
        width: 100%;
        max-width: 900px;
        padding: 0 20px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    .preco {
        margin-bottom: 40px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #E80;
    }

    .descricao {
        font-size: 1.2rem;
    }

    .btn {
        width: 200px;
        margin-top: 60px;
    }

    .btn[disabled]:hover {
        background-color: #87F;
        transform: initial;
        cursor: not-allowed;
    }
</style>