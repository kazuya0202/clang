import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const exp = '/exp';
const ques = '/ques';
const path = {
    exp: 'explanation',
    ques: 'question',
};

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        },
        // explanation
        {
            // C言語のきほん
            path: `${exp}/C言語のきほん`,
            name: 'standard-exp',
            component: () => import(`@/components/${path.exp}/Standard.vue`),
        },
        {
            // 変数と型
            path: `${exp}/変数と型`,
            name: 'type-exp',
            component: () => import(`@/components/${path.exp}/VariableType.vue`),
        },
        {
            // 演算
            path: `${exp}/演算`,
            name: 'operate-exp',
            component: () => import(`@/components/${path.exp}/Operate.vue`),
        },
        {
            path: `${exp}/入出力`,
            name: 'io-exp',
            component: () => import(`@/components/${path.exp}/InputOutput.vue`),
        },
        {
            path: `${exp}/条件分岐`,
            name: 'condition-exp',
            component: () => import(`@/components/${path.exp}/Condition.vue`),
        },
        {
            path: `${exp}/繰り返し`,
            name: 'loop-exp',
            component: () => import(`@/components/${path.exp}/Loop.vue`),
        },



        // questions
        {
            // 変数と型
            path: `${ques}/入出力`,
            name: 'io-ques',
            component: () => import(`@/components/${path.ques}/InputOutput-ques.vue`),
        },
    ],
});
