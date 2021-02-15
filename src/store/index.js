import Vue from 'vue';
import Vuex from 'vuex';
import { api } from '@/services.js';

Vue.use(Vuex);

const initialState = {
  login: false,
  usuario: {
    id: '',
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  },
  usuario_produtos: null
};

export default new Vuex.Store({
  strict: true,
  state: { ...initialState },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = { ...state.usuario, ...payload };
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      if (state.usuario_produtos) {
        state.usuario_produtos.unshift(payload);
      } else {
        state.usuario_produtos = payload;
      }
    }
  },
  actions: {
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then((res) => {
        context.commit('UPDATE_USUARIO', res.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    criarUsuario(context, payload) {
      return api.post('/usuario', { ...payload, id: payload.email });
    },
    deslogarUsuario(context) {
      context.commit('UPDATE_USUARIO', initialState.usuario);
      context.commit('UPDATE_LOGIN', false);
    },
    getUsuarioProdutos(context) {
      api.get(`/produto?usuario_id=${context.state.usuario.id}`)
      .then((res) => context.commit('UPDATE_USUARIO_PRODUTOS', res.data));
    }
  },
  modules: {
  }
});
