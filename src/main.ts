import Vue from 'vue';
import '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// tslint:disable-next-line:no-var-requires
const scrollTo = require('vue-scrollto');
Vue.use(scrollTo);

// vs dark-mode (some change)
import 'highlight.js/styles/vs2015-decoration.css';
// tslint:disable-next-line:no-var-requires
const cpp = require('highlight.js/lib/languages/cpp.js');
// tslint:disable-next-line:no-var-requires
const javascript = require('highlight.js/lib/languages/javascript.js');

import VueHighlightJS from 'vue-highlight.js';
Vue.use(VueHighlightJS, { languages: { cpp, javascript } });

import './components/stylus-pane/main.styl';

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
