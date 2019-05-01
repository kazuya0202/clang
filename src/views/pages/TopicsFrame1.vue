<template lang='pug'>
v-layout.topics-frame1(fill-height column)
    .main-pane.white.elevation-3
        h2 ここtopicsかく
        br
        h4 今のところの予定
        ul
            li How to use Visual Studio
            li How to compile with GCC
            li ソート
            li 変数のスコープ
            li stdlib.h / math.h ...
            li scanf()の＆の有無
            li アスキーコード(?)
            li .....................

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class TopicsFrame1 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

.topics-frame1 {}
</style>
