<template lang='pug'>
#input-output
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 入出力

    p.title printf()
    ul
        li 標準出力関数（読み方は「<span class='marker'>プリントエフ</span>」）
        li 主な形は以下の通り
        highlight-code(lang='cpp').
            printf("XXX\n");
        .exec-result
            | XXX
        li <span class='lookat'>\n</span>については次項に記載
    br

    p.title エスケープシーケンス（特殊文字）
    ul
        li ￥と \ は環境によって表示が異なるが同意（Macでは必ず \ ）
        .table-general.scrollable
            table(border=1)
                tr
                    th コード
                    th 意味
                tr
                    td \n
                    td 改行
                tr
                    td \0
                    td NULL（10進数の「0」と同意）読み方は「ナル / ヌル」
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
        li 主な形は以下の通り
        highlight-code(lang='cpp').
            scanf("%d", &x);
        | &emsp;&emsp;この場合、コンソールが入力待ち状態になり、入力することができる
        | <br><br>

        li <span class='lookat'>char[]</span>型以外は<span class='lookat'>&</span>が必要
        li <span class='lookat'>%d</span>については次項に記載
    br

    p.title 変換指定子
    ul
        li <span class='lookat'>printf</span>や<span class='lookat'>scanf</span>を使うときに用いる
        li 「<span class='marker'>%○</span>」の形
        .table-general.scrollable
            table(border=1)
                tr
                    th 変換指定子
                    th 型・意味
                    th 英語
                tr
                    td %o
                    td int - 8進数
                    td octal
                tr
                    td %d
                    td int - 10進数
                    td decimal
                tr
                    td %x
                    td int - 16進数
                    td hexadecimal
                tr
                    td %f
                    td float
                    td float
                tr
                    td %lf
                    td double
                    td long float
                tr
                    td %c
                    td char
                    td character
                tr
                    td %s
                    td char[] - 文字列（文字配列）
                    td string
        li それぞれ様々なオプションがあるが各オプションについては追記予定（詳しくは「変換指定子 オプション」で検索）
//-
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
@require '~@/components/stylus-pane/table.styl';

#input-output {}
</style>
