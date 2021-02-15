import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PaginaCarregando from './components/PaginaCarregando.vue';

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando);

Vue.filter('numeroPreco', (valor) => {
  const config = {
    style: 'currency',
    currency: 'BRL'
  };

  return (!isNaN(Number(valor))) ? Number(valor).toLocaleString('pt-BR', config) : '';
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
