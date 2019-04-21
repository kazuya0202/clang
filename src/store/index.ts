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
                    { name: 'exp-frame1', id: '#standard',       title: 'C言語のきほん' },
                    { name: 'exp-frame1', id: '#variable-type',  title: '変数と型' },
                    { name: 'exp-frame1', id: '#operate',        title: '演算' },
                    { name: 'exp-frame1', id: '#input-output',   title: '入出力' },
                    { name: 'exp-frame2', id: '#condition',      title: '条件' },
                    { name: 'exp-frame2', id: '#loop',           title: '繰り返し' },
                    { name: 'exp-frame2', id: '#array',          title: '配列' },
                    { name: 'exp-frame3', id: '#character-type', title: '文字' },
                    // { name: 'exp-frame3', id: '#method',         title: '関数' },

                    { name: 'exp-frame4', id: '#structure',      title: '構造体' },
                ],
            },

            {
                title: '練習問題',
                action: 'mdi-view-grid',
                items: [
                    { name: 'ques-frame1', id: '#io-ques', title: '入出力' },
                ],
            },
        ],

    },
    mutations: {

    },
    actions: {

    },
});
