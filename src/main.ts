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
import VueHighlightJS from 'vue-highlight.js';

// vs2015 dark (some change)
import '@/assets/vs2015-deco.css';
const cpp = require('highlight.js/lib/languages/cpp.js');
Vue.use(VueHighlightJS, { languages: { cpp } });

// styles
import './components/stylus-pane/main.styl';

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
