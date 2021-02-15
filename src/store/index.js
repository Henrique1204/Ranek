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
  }
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
    }
  },
  modules: {
  }
});
