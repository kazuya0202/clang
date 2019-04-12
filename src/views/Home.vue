<template lang='pug'>
v-layout#Home.grey.lighten-4(fill-height column)
    .main-pane.white.elevation-3
        h1(style='text-align: center') C言語 <きほんのきほん>
        h4(style='background: #FFCDD2; border-radius: 5px; width: fit-content; margin: auto; padding: .4rem')
            | スマートフォンは横画面がおすすめ
        br
        //- v-chip.unit-title(dark color='#BA68C8' text-color='black') 標準入出力 (stdio)
        //- h4(style='text-align: right') 編集: 一本の矢
        //-
            v-btn(color='#1976D2' dark style='padding: 0 20px') 解説ページへ
                router-link(to='StandardExp')
            br
        //- br

        standard-exp

        br
        v-divider
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import StandardExp from '@/components/Standard-exp.vue';

@Component({
    components: {
        StandardExp,
    },
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
        min-height: 100%
        width: 100%
        max-width: 600px
        margin-left: auto
        margin-right: auto
        padding: 3rem 2rem

</style>
