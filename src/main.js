// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import MuseUI from 'muse-ui';
import Toast from 'muse-ui-toast';

import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';

import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';

import 'amfe-flexible/index.js'

Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(Toast);
Vue.use(NProgress);
Vue.use(Message);

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
