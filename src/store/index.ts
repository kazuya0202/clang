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
                    { title: 'C言語のきほん', name: 'exp-frame' },
                    { title: '変数と型', name: 'exp-frame' },
                    { title: '演算', name: 'exp-frame' },
                    { title: '入出力', name: 'exp-frame'},
                    { title: '条件分岐', name: 'exp-frame'},
                    { title: '繰り返し', name: 'exp-frame' },
                    { title: '配列', name: 'exp-frame' },
                ],
                // items: [
                //     { title: 'C言語のきほん', name: 'standard-exp' },
                //     { title: '変数と型', name: 'type-exp' },
                //     { title: '演算', name: 'operate-exp' },
                //     { title: '入出力', name: 'io-exp'},
                //     { title: '条件分岐', name: 'condition-exp'},
                //     { title: '繰り返し', name: 'loop-exp' },
                //     { title: '配列', name: 'array-exp' },
                // ],
            },
            {
                title: '練習問題',
                action: 'mdi-view-grid',
                items: [
                    { title: '入出力', name: 'io-ques' },
                ],
            },
        ],

        expElements: [
            { title: 'C言語のきほん', name: 'exp-frame', id: 'standard' },
            { title: '変数と型', name: 'exp-frame', id: 'type' },
            { title: '演算', name: 'exp-frame', id: 'operate' },
            { title: '入出力', name: 'exp-frame', id: 'io' },
            { title: '条件分岐', name: 'exp-frame', id: 'condition' },
            { title: '繰り返し', name: 'exp-frame', id: 'loop' },
            { title: '配列', name: 'exp-frame', id: 'array' },
        ],
        // expElements: [
        //     { title: 'C言語のきほん', name: 'standard-exp', id: 'standard' },
        //     { title: '変数と型', name: 'type-exp', id: 'type' },
        //     { title: '演算', name: 'operate-exp', id: 'operate' },
        //     { title: '入出力', name: 'io-exp', id: 'io' },
        //     { title: '条件分岐', name: 'condition-exp', id: 'condition' },
        //     { title: '繰り返し', name: 'loop-exp', id: 'loop' },
        //     { title: '配列', name: 'array-exp', id: 'array' },
        // ],
        quesElements: [
            { title: '入出力', name: 'io-ques', id: 'io-ques' },
        ],

        items: [
            {
                title: '解説',
                name: 'exp-frame',
            },
        ],
    },
    mutations: {

    },
    actions: {

    },
});
