<template>
    <form>
        <label for="nome">Nome</label>
        <input name="nome" id="nome" type="text" v-model="produto.nome" />

        <label for="preco">Preço (R$)</label>
        <input name="preco" id="preco" type="number" v-model="produto.preco" />

        <label for="fotos">Fotos</label>
        <input name="fotos" id="fotos" type="file" multiple ref="fotos" />

        <label for="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" v-model="produto.descricao"></textarea>

        <button class="btn" @click.prevent="adicionarProduto">Adicionar Produto</button>
    </form>
</template>

<script>
    import { api } from '@/services.js';

    export default {
        name: 'ProdutosAdicionar',
        data: () => ({
            produto: {
                nome: '',
                preco: '',
                descricao: '',
                fotos: null,
                vendido: 'false'
            }
        }),
        methods: {
            formatarDadosProdutos() {
                const form = new FormData();

                this.$refs.fotos.files.forEach((file) => {
                    form.append(file.name, file);
                });

                form.append('nome', this.produto.nome);
                form.append('preco', this.produto.preco);
                form.append('descricao', this.produto.descricao);
                form.append('vendido', this.produto.vendido);
                form.append('usuario_id', this.$store.state.usuario.id);

                return form;
            },
            adicionarProduto() {
                const dados = this.formatarDadosProdutos();
                api.post("/produto", dados).then(() => this.$store.dispatch("getUsuarioProdutos"));
            }
        }
    }
</script>

<style scoped>
    form {
        display: grid;
        grid-template-columns: 100px 1fr;
        align-items: center;
        margin-bottom: 60px;
    }

    .btn {
        grid-column: 2;
    }
</style>