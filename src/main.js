import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/scss/init.scss';
import { supabase } from './supabase';

Vue.config.productionTip = false;
Vue.prototype.$supabase = supabase;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
