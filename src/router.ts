import Vue from 'vue';
import Router from 'vue-router';
import smoothScroll from 'vue-smoothscroll';

Vue.use(Router);
Vue.use(smoothScroll);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        {
            // C言語のきほん
            path: '/standard-exp',
            name: 'standard-exp',
            component: () => import('@/components/Standard-exp.vue'),
        },
        {
            // 変数と型
            path: '/type-exp',
            name: 'type-exp',
            component: () => import('@/components/VariableType-exp.vue'),
        },
        {
            // 変数と型
            path: '/type-ques',
            name: 'type-ques',
            component: () => import('@/components/VariableType-ques.vue'),
        },
        {
                // 演算
            path: '/operate-exp',
            name: 'operate-exp',
            component: () => import('@/components/Operate-exp.vue'),
        },
        {
            path: '/io-exp',
            name: 'io-exp',
            component: () => import('@/components/InputOutput-exp.vue'),
        },
    ],
});
