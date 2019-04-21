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
                    { title: 'C言語のきほん', name: 'exp-frame1', id: '#standard' },
                    { title: '変数と型', name: 'exp-frame1', id: '#variable-type' },
                    { title: '演算', name: 'exp-frame1', id: '#operate' },
                    { title: '入出力', name: 'exp-frame1', id: '#input-output' },
                    { title: '条件', name: 'exp-frame2', id: '#condition'},
                    { title: '繰り返し', name: 'exp-frame2', id: '#loop' },
                    { title: '配列', name: 'exp-frame2', id: '#array' },
                    { title: '文字', name: 'exp-frame3', id: '#character-type' },
                    { title: '構造体', name: 'exp-frame4', id: '#structure' },
                ],
            },

            {
                title: '練習問題',
                action: 'mdi-view-grid',
                items: [
                    { title: '入出力', name: 'ques-frame1', id: '#io-ques' },
                ],
            },
        ],

    },
    mutations: {

    },
    actions: {

    },
});
