<template lang='pug'>
#condition
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 条件分岐

    p.title 条件
    ul
        li <span class='lookat'>if</span>（もしも～なら）を用いる
        li 主な書き方は以下の通り
        code.code
            | if ( 条件式 ) {   // 条件式が<span class='lookat' style='color: black'>true (真)</span>なら
            |     // 処理1;
            | } else {          // 条件式が<span class='lookat' style='color: black'>false (偽)</span>なら
            |     // 処理2;
            | }
        li [ 処理1 ], [ 処理2 ]それぞれ処理が1文なら<span class='lookat'>{ }</span>を省略可能
        li また、<span class='lookat'>else</span>も使わない場合は省略する
    br

    p.title 条件式
    ul
        li 条件式には、<span class='keyword'>比較演算子</span>と<span class='keyword'>論理演算子</span>が使われる
        li 条件式の結果は<span class='lookat'>true (真)</span>、または<span class='lookat'>false (偽)</span>が返される
        li <span class='marker'>bool</span>型の変数に条件式の結果を記憶することができる
    br

    p.title 比較演算子
    ul
        li 基本的に数学の記号と意味は同じだが、プログラムの等価演算子は数学の<span class='lookat'>=</span>とは異なるため注意する
        .table-general.scrollable
            table(border=1)
                tr
                    th 記号
                    th 意味
                    th 記号
                    th 意味
                tr
                    td &gt;
                    td より大きい
                    td &gt;=
                    td 以上
                tr
                    td &lt;
                    td より小さい
                    td &lt;=
                    td 以下
                tr
                    td &#61;=
                    td 等しい
                    td !=
                    td 等しくない
    br

    p.title 論理演算子
    ul
        li <span class='lookat'>&&, ||</span>は左側の式がまず評価され、右側の式が評価される
            | <br>&emsp;&emsp;そのため、<span class='lookat'>&&</span>は左側の式が<span class='marker'>false</span>であれば右側の式を評価しない
        .table-general.scrollable
            table(border=1)
                tr
                    th 演算子
                    th 意味
                    th 例
                tr
                    td &&
                    td 論理積 (AND)
                    td (true && false) → false
                tr
                    td ||
                    td 論理和 (OR)
                    td (true || false) → true
                tr
                    td !
                    td 論理否定 (NOT)
                    td (!true) → false
    br

    p.title 比較演算子と論理演算子の組み合わせ
    ul
        li 論理演算子を用いることで複雑な条件式を作ることができる
        code.code
            | // n が0より小さい、または10以上なら
            | if (n < 0 || n >= 10) ...
            |
            | // n が65以上、かつ80以下なら
            | if (n >= 65 && n <= 80) ...
//-
    br
    v-divider
    .prev-next-btn
        v-btn(v-scroll-to='"body"' :to='{ name: "io-exp"}' color='primary' flat) << prev. 入出力
        v-btn(v-scroll-to='"body"' :to='{ name: "loop-exp"}' color='primary' flat) next. 繰り返し >>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Condition extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#condition {}
</style>
