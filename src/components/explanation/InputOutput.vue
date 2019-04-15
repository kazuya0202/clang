<template lang='pug'>
.input-output
    h1.exp-top 解説ページ
    br
    .unit-title#io
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4 入出力

    p.title printf()
    ul
        li 標準出力関数（読み方は「プリントエフ」）
        li 主な形は<span class='lookat'>printf("XXX\n");</span>
        | &emsp;&emsp;この場合、コンソール画面に<span class='prompt'><samp>XXX</samp></span>と出力される
        li <span class='lookat'>\n</span>については次項に記載
    br

    p.title エスケープシーケンス（特殊文字）
    ul
        li |￥と \ は環境によって表示が異なるが同意（Macでは必ず \ ）
        table(border=1)
            tr
                th コード
                th 意味
            tr
                td \n
                td 改行
            tr
                td \0
                td NULL（数字の「0」と同意）（読み方はナル or ヌル）
            tr
                td \'
                td シングルクォーテーション「'」を表示
            tr
                td \"
                td ダブルクォーテーション「"」を表示
    br

    p.title scanf()
    ul
        li 標準入力関数（読み方は「スキャンエフ」）
        li 主な形は<span class='lookat'>scanf("%d", &x);</span>
        | &emsp;&emsp;この場合、コンソールが入力待ち状態になり、入力することができる
        li <span class='lookat'>%d</span>については次項に記載
    br

    p.title 変換指定子
    ul
        li <span class='lookat'>printf</span>や<span class='lookat'>scanf</span>に用いる
        table(border=1)
            tr
                th 変換指定子
                th 型・意味
            tr
                td %d
                td int - 10進数表示
            tr
                td %f
                td float
            tr
                td %lf
                td double
            tr
                td %c
                td char
            tr
                td %s
                td char[] - 文字列（文字配列）
            tr
                td %o
                td int - 8進数表示
            tr
                td %x
                td int - 16進数表示
        li それぞれ様々なオプションがある（各オプションについては追記予定。詳しくは「変換指定子 オプション」で検索）

    br
    v-divider
    .prev-next-btn
        v-btn(v-scroll-to='"body"' :to='{ name: "operate-exp"}' color='primary' flat) << prev. 演算
        v-btn(v-scroll-to='"body"' :to='{ name: "condition-exp"}' color='primary' flat) next. 条件分岐 >>


</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InputOutput extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.input-output {}
</style>
