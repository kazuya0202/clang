<template lang='pug'>
v-layout#Home(fill-height column)
    .main-pane.white.elevation-3

        .icons
            v-icon(color='red' large) mdi-language-c
            v-icon(color='red' large) mdi-language-cpp
            v-icon(color='red' large) mdi-language-csharp
        h3(class='text-sm-center' style='text-decoration: underline') C言語学習サイト（仮） ｜ C言語復讐サイト（決定）
        v-card(class='text-sm-center' color='#8bc440').pa-4.ma-3.font-weight-black.headline
            | C言語 <きほんのきほん>

        .icon-elem
            v-icon(:size='20') mdi-pencil-plus
            h4 一本の矢は折れやすい

        br
        v-card(class='text-sm-center' color='#a8e0d7' style='width: fit-content; margin: auto').px-4.py-2.font-weight-bold.my-2
            | 本サイトに書かれていることは<br>筆者の感じたように書いているので<br>厳密な意味では異なる場合があります
        v-card(class='text-sm-center' color='#FFCDD2' style='width: fit-content; margin: auto').pa-2.font-weight-bold
            | スマートフォンは横画面がおすすめ

        br
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4 Home

        v-list
            v-list-group(v-for='item in $store.state.comment' :key='item.title'
                        v-model='item.active' :prepend-icon='item.action' no-action)
                template(v-slot:activator)
                    v-list-tile(color='green' dark)
                        v-list-tile-content
                            v-list-tile-title.font-weight-black {{ item.title }}ページ

                v-list-tile(v-for='subItem in item.items' :key='subItem.title'
                            v-scroll-to='"body"' :to='{name: subItem.name}')
                    v-list-tile-action
                        v-icon mdi-rhombus-medium
                    v-list-tile-content
                        v-list-tile-title {{ subItem.title }}

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

</style>
