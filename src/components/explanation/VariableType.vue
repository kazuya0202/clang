<template lang='pug'>
#variable-type
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 変数と型

    p.title 変数
    ul
        li <span class='marker'>データ値を記憶できる領域（箱）</span>のこと
        li 宣言時の型に応じて記憶できるデータ値は異なる
        li 変数名の先頭に数字を使うことはできない
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

    p.title 型とreturn値
    ul
        li 関数の返り値である<span class='lookat'>return</span>は、<span class='lookat'>型</span>によって変わる
        li 主な書き方は以下の通り（ 下の表と組み合わせて ）
        code.code
            | < 型 > 関数名() {
            |     ...
            |     < return文 >
            | }
        br
        .table-general.scrollable
            table(border=1)
                tr
                    th 型
                    th return文
                    th 例
                tr
                    td void
                    td return;
                    td return;
                tr
                    td int
                    td return <span class='lookat'>整数</span>;
                    td return -1;
                tr
                    td float
                    td return <span class='lookat'>実数</span>;
                    td return 0.1;
                tr
                    td double
                    td return <span class='lookat'>実数</span>;
                    td return 0.1;
                tr
                    td char
                    td return <span class='lookat'>文字</span>;
                    td return 'a';
                tr
                    td char[]
                    td return <span class='lookat'>文字列</span>;
                    td return "xyz";
                tr
                    td bool
                    td return <span class='lookat'>真偽値</span>;
                    td return false;
    br

    p.title 変数の宣言 / 初期化
    ul
        li 変数は以下のように<span class='keyword'>宣言</span>する
        code.code int hoge;
        | <br><br>

        li <span class='keyword'>初期化</span>：変数宣言時に初期値を設定すること（代入演算子を用いる）
        li <span class='lookat'>=</span>：代入演算子
        li 数学の<span class='lookat'>=</span>（等しい）とは異なり、右辺のデータを左辺に<span class='marker'>代入する</span>という意味
        code.code int fuga = 100;
        | <br><br>

        li <span class='lookat'>&lt;型&gt;</span>の前に<span class='lookat'>const</span>をつけることで<span class='keyword'>定数</span>（変更不可能な変数）を宣言できる
            | <br>&emsp;&emsp;また、定数を宣言するときは初期値を必ず設定する
        code.code const float PI = 3.141592653;
    br

    p.title キャスト
    ul
        li <span class='keyword'>キャスト</span>：明示的に変数の型を変換すること（明示的型変換とも呼ばれる）
        li 代入や式中では暗黙的に変換することも可能
        .frame 暗黙型変換の優先順序　→　
            | <span class='lookat'>double</span> &gt; <span class='lookat'>float</span> &gt; <span class='lookat'>int</span> &gt; <span class='lookat'>char</span>
        li 明示的型変換は以下のように使われる
            code.code
                | // (型名)式
                | double pi = 3.14;
                | int num = (int)pi;
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
