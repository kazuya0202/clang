import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comment: [
            {
                title: '解説',
                action: 'mdi-view-grid',
                items: [
                    { title: 'C言語のきほん', name: 'standard-exp' },
                    { title: '変数と型', name: 'type-exp' },
                    { title: '演算', name: 'operate-exp' },
                    { title: '入出力', name: 'io-exp'},
                    { title: '条件分岐', name: 'condition-exp'},
                    { title: '繰り返し', name: 'loop-exp' },
                    { title: '配列', name: 'array-exp' },
                ],
            },
            {
                title: '練習問題',
                action: 'mdi-view-grid',
                items: [
                    { title: '入出力', name: 'io-ques' },
                ],
            },
        ],

        exp: [
            {
                title: 'C言語のきほん',
                name: 'standard-exp',
            },
            {
                title: '変数と型',
                name: 'type-exp',
            },
        ],
        ques: [
            {
                title: '変数と型',
                name: 'type-ques',
            },
        ],

        items: [
            {
                title: 'もくじ',
                name: 'Home',
            },
        ],
    },
    mutations: {

    },
    actions: {

    },
});
