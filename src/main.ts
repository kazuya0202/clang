import Vue from 'vue';
import '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// tslint:disable
// Scroll
const scrollTo = require('vue-scrollto');
Vue.use(scrollTo);

// Syntax Highlight
// vs dark-mode (some change)
import VueHighlightJS from 'vue-highlight.js';

import 'highlight.js/styles/vs2015-decoration.css';
const cpp = require('highlight.js/lib/languages/cpp.js');
const javascript = require('highlight.js/lib/languages/javascript.js');
Vue.use(VueHighlightJS, { languages: { cpp, javascript } });

// styles
import './components/stylus-pane/main.styl';

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
