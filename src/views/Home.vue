<template lang='pug'>
v-layout#Home(fill-height column)
    .main-pane.white.elevation-3

        .icons
            v-icon(color='red' large) mdi-language-c
            v-icon(color='red' large) mdi-language-cpp
            v-icon(color='red' large) mdi-language-csharp

        h3(class='text-sm-center' style='text-decoration: underline') C言語復習サイト（仮）

        v-card(class='text-sm-center' color='#8bc440' ).pa-4.ma-3.font-weight-black.headline
            v-icon(color='#7E57C2').mx-2 mdi-visual-studio-code
            | C言語 <きほんのきほん>

        .icon-elem
            v-icon(:size='20') mdi-pencil-plus
            h4 一本の矢は折れやすい

        br
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4 ほーむ

        v-card(class='text-sm-center' color='#80DEEA' style='width: 70%; margin: auto' flat).pa-2.font-weight-bold.my-3
            | スマートフォンは横画面がおすすめ
        v-card(class='text-sm-center' color='#B3E5FC' style='width: 65%; margin: auto' flat).pa-2.font-weight-bold
            | ページ遷移は左上のボタン or 下のボタンから

        .to-btn.my-3
            v-btn(:to='{ name: "exp-frame1" }' color='success' flat).mx-2.font-weight-bold 解説ページ >>
            v-btn(:to='{ name: "ques-frame1" }' color='success' flat).mx-2.font-weight-bold 練習問題ページ >>
            v-btn(:to='{ name: "topics-frame1" }' color='success' flat).mx-2.font-weight-bold Topics >>

        v-divider
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4.my-3 べんきょうのしかた（？）
        .frame.mb-3
            ul
                li これで合ってる？ の疑問は質問OK
                li なんで？ の疑問は他人に聞かない
                | &emsp;&emsp;→ 全て他人に教えてもらわない！ <br>
                | &emsp;&emsp;→ 聞くより先に自分で調べる <br>
                | &emsp;&emsp;→ <span class='marker'>自分で考えて理解する</span>ことが大切！ <br>
                br

                li わからないことは「参考書・ネット」ですぐに調べる
                li 例）for文の書き方がわからない！
                | &emsp;&emsp;→ 「for　c言語」などで検索 <br>
                br

                li 参考書を見る・紙に書くだけじゃダメ！
                | &emsp;&emsp;→ プログラムはコンピュータでしか動かない <br>
                br

                li <span class='marker'>実際に書いて動かしてみる</span>
                | &emsp;&emsp; 1. まずは参考書の例を写して実行する <br>
                | &emsp;&emsp; 2. 実行結果とプログラムを見て仕組みを理解する <br>
                | &emsp;&emsp; 3. プログラムを少し変えてその時の挙動を確かめてみる <br>
                br

                li 授業のスピードに合わせる必要はない！
                | &emsp;&emsp;→ 参考書を見て自分で先に進もう！ <br>


        v-divider
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4.my-3 こめんと
        v-card(class='text-sm-center' color='#80DEEA' style='width: 70%; margin: auto' flat).pa-2.font-weight-bold
            | <span class='marker'>C言語をやったことがあるけどよくわからない人</span>向けのため、理解を深める程度に考えてください
        v-card(class='text-sm-center' color='#B3E5FC' style='width: 65%; margin: auto' flat).pa-2.font-weight-bold.my-3
            | 「C言語教えて！」の言葉を断れない人！そのことなら"このサイトに書いてあるよ"で終わらせてしまえ！！という思いで書いてます
        v-card(class='text-sm-center' color='#80DEEA' style='width: 70%; margin: auto' flat).pa-2.font-weight-bold
            | 追記はある程度全体が完成したら書き始める予定


</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Home extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;


#Home
    .main-pane
        *
            margin: .2rem 0
        min-height: 100%
        width: 80%
        max-width: 800px
        margin-left: auto
        margin-right: auto
        padding: 3rem 2rem

    .icons
        *
            margin: 0 .5rem
        display: flex
        // justify-content: space-around
        align-items: center
        text-align: center
        margin: auto

    .icon-elem
        *
            margin: 0 .2rem
        display: flex
        justify-content: flex-end

    .icons::before, .icons::after
        display: block
        content: ''
        flex-grow: 1
        height: 1px
    .icons::before
        margin-right: 1rem
        background: linear-gradient(-90deg, red, rgba(255, 0, 0, 0))
    .icons::after
        margin-left: 1rem
        background: linear-gradient(90deg, red, rgba(255, 0, 0, 0))

    .main-title
        margin: auto
        text-align: center
        background: lightgreen
        background: linear-gradient(25deg, rgba(241, 63, 121, 0) 3%, #FFC778)
        // width: fit-content
        padding: 1rem
        border-radius: 20px

    .unit-title
        text-align: center
        font-weight: bold

    ul > li
        list-style: none
    ul > li::before
        content: '★ '

    .marker
        background: linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%)
        background: -moz-linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%)
        background: -webkit-linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%)
        width: fit-content
        margin: .2rem 0

    .to-btn
        display: flex
        justify-content: center
        margin: auto
        width: 100%
        background: #FFE0B2
        border-radius: 20px

    .frame
        // margin: 2rem
        width: fit-content
        margin: auto
        padding: 1rem 1.2rem 1rem 0
        border: solid 3px pink

</style>
