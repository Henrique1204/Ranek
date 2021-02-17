<template>
    <div>
        <h2>Endereço de Envio</h2>
        <UsuarioForm>
            <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
        </UsuarioForm>
    </div>
</template>

<script>
    import UsuarioForm from '@/components/UsuarioForm.vue';
    import { api } from '@/services.js';
    import { mapState } from 'vuex';

    export default {
        name: 'FinalizarCompra',
        props: ['produto'],
        computed: {
            ...mapState(['usuario', 'login']),
            compra() {
                return {
                    comprador_id: this.usuario.email,
                    vendedor_id: this.produto.usuario_id,
                    produto: this.produto,
                    endereco: {
                        cep: this.usuario.cep,
                        rua: this.usuario.rua,
                        numero: this.usuario.numero,
                        bairro: this.usuario.bairro,
                        cidade: this.usuario.cidade,
                        estado: this.usuario.estado
                    }
                }
            }
        },
        methods: {
            criarTransacao() {
                return api.post(`/transacao`, this.compra).then(() => {
                    this.$router.push({ name: 'usuario/compras' });
                });
            },
            async criarUsuario() {
                try {
                    await this.$store.dispatch('criarUsuario', this.$store.state.usuario);
                    await this.$store.dispatch('logarUsuario', this.$store.state.usuario);
                    await this.$store.dispatch('getUsuario');
                    await this.criarTransacao();
                } catch (erro) {
                    console.log(erro);
                }
            },
            finalizarCompra() {
                if (this.login) {
                    this.criarTransacao();
                } else {
                    this.criarUsuario();
                }
            }
        },
        components: {
            UsuarioForm
        }
    };
</script>

<style scoped>
    h2 {
        margin: 40px 0 20px;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .btn {
        background-color: #E80;
    }
</style>