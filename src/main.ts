import '@/plugins/registerServiceWorker';

import Vue from 'vue';
import '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// import scrollTo from 'vue-scrollto';
const scrollTo = require('vue-scrollto');
Vue.use(scrollTo);


Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
