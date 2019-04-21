import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {   // Home
            path: '/', name: 'Home',
            component: () => import('@/views/Home.vue'),
        },


        {   // Explanation
            path: '/exp1', name: 'exp-frame1',
            component: () => import(`@/views/pages/ExpFrame1.vue`),
        },
        {
            path: `/exp2`, name: 'exp-frame2',
            component: () => import(`@/views/pages/ExpFrame2.vue`),
        },
        {
            path: '/exp3', name: 'exp-frame3',
            component: () => import('@/views/pages/ExpFrame3.vue'),
        },
        {
            path: '/exp4', name: 'exp-frame4',
            component: () => import('@/views/pages/ExpFrame4.vue'),
        },



        {   // Question
            path: `/ques1`, name: 'ques-frame1',
            component: () => import(`@/views/pages/QuesFrame1.vue`),
        },
    ],
});
