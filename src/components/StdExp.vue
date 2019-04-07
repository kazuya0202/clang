<template lang='pug'>
.std-exp
    h1(style='text-align: center; border-bottom: solid 3px #0277BD; width: 250px; margin: auto') 解説ページ
    br
    p.title #include &lt;stdio.h&gt;
    ul
        li 標準入出力（＝ 表示、入力）をできるようにするために必要なもの
        li <code>printf</code>関数や<code>scanf</code>関数などが定義されている
        li <code>stdio</code>＝<code>Standard Input Output</code>の略

    br
    p.title int main(void)
    ul
        li <code>main</code>関数と呼ばれ、プログラム実行時に呼ばれる関数
        li <code>int</code>：返り値の型を表す / <code>main</code>関数の最後に<code>int</code>型の値を返すという意味
        li <code>void</code>：英語で空という意味で引数がないということを表している
            | <br> また、<code>void</code>は省略でき、<code>int main()</code>とも書ける

    br
    p.title { }
    ul
        li ブロックと呼ばれる
        li <code>if</code>や<code>for</code>などの処理が複数行にわたるときに用いられる

    br
    p.title ;
    ul
        li セミコロンと呼ばれる
        li 処理の終わりにつける（<code>if</code>や<code>for</code>の後にはつけてはいけない）

    br
    p.title 変数
    ul
        li 一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる
        li 変数名の始めに数字を使うことはできない

    br
    p.title return 0;
    ul
        li 一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味
        li <code>main</code>関数の型が<code>int</code>であるため、整数型の<code>0</code>が返される
        li <code>main</code>関数の型が<code>void</code>である場合は省略可能

    br









</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StdExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.std-exp
    font-size: 1.1rem

.title
    // font-size: 1.1rem
    border-left: solid 5px orange
    background: #B9F6CA
    padding .5rem
    margin: .2rem 0

code
    margin: 0 .15rem

li
    margin: .2rem 0

</style>
