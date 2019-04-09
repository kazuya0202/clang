import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/standard-exp',
            name: 'standard-exp',
            component: () => import('@/components/StandardExp.vue'),
        },
    ],
});
