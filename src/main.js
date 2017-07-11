// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import Modal from './components/Modal';
import BigRadio from './components/BigRadio';

Vue.config.productionTip = false;

Vue.component('v-modal', Modal);
Vue.component('v-big-radio', BigRadio);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
