<template lang='pug'>
#variable-type
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 変数と型

    p.title 変数
    ul
        li <span class='marker'>データ値を記憶できる領域（箱）</span>のこと
        li 宣言時の型に応じて記憶できるデータ値は異なる
        li <span class='marker'>変数名の先頭に数字</span>を使うことはできない
    br

    p.title 型
    ul
        li 変数が記憶できるデータ値を決めるもの
        li 浮動小数点型はコンピュータの特性上誤差が生じることがある
        .table-general.scrollable
            table(border=1)
                tr
                    th 型
                    th 意味
                tr
                    td int
                    td 整数型
                tr
                    td float
                    td 浮動小数点型（単精度）
                tr
                    td double
                    td 浮動小数点型（倍精度）
                tr
                    td char
                    td 文字型
                tr
                    td char[]
                    td 文字列（文字の配列）
                tr
                    td bool
                    td 論理型（<span class='lookat'>true</span> / <span class='lookat'>false</span>）
    br

    p.title 変数の宣言 / 初期化
    ul
        li 変数は以下のように<span class='keyword'>宣言</span>する
        highlight-code(lang='cpp').
            int x;
        br

        li <span class='keyword'>初期化</span>：変数宣言時に初期値を設定すること（代入演算子<span class='lookat'>=</span>を用いる）
        li 数学の<span class='lookat'>=</span>（等しい）とは異なり、<span class='marker'>右辺のデータを左辺に代入する</span>という意味
        highlight-code(lang='cpp').
            int y = 100;
        br

        li <span class='lookat'>型</span>の前に<span class='lookat'>const</span>をつけることで<span class='keyword'>定数</span>（変更不可能な変数）を宣言できる。
            | また、定数を宣言するときは初期値を必ず設定する
        li 定数を宣言する場合は、<span class='marker'>大文字で単語の区切りを＿（アンダースコア）</span>を用いる
        highlight-code(lang='cpp').
            const double PI = 3.141592653;
    br

    p.title キャスト
    ul
        li <span class='keyword'>キャスト</span>：明示的に変数の型を変換すること（明示的型変換とも呼ばれる）
        li 明示的型変換は以下のように使われる
        highlight-code(lang='cpp').
            &nbsp;// (型名)式
            &nbsp;double pi = 3.14;
            &nbsp;int num = (int)pi;

        br
        li 変換前のデータより変換後のデータ型のほうが大きければ、代入や式中では暗黙的に変換することも可能
        .frame 暗黙型変換の大小関係　→　
            | <span class='lookat'>double</span> &gt; <span class='lookat'>float</span> &gt; <span class='lookat'>int</span> &gt; <span class='lookat'>char</span>

//-
    br
    v-divider
    .prev-next-btn
        v-btn(v-scroll-to='"body"' :to='{ name: "standard-exp"}' color='primary' flat) << prev. C言語のきほん
        v-btn(v-scroll-to='"body"' :to='{ name: "operate-exp"}' color='primary' flat) next. 演算 >>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VariableType extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#variable-type {}
</style>
