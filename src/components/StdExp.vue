<template lang='pug'>
.std-exp
    h1(style='text-align: center; border-bottom: solid 3px #0277BD; width: 250px; margin: auto') 解説ページ
    br

    p.title #include &lt;stdio.h&gt;
    ul
        li 標準入出力（＝ 表示、入力）をできるようにするために必要なもの
        li <code>printf</code>関数や<code>scanf</code>関数などが定義されている
        li <code>stdio</code>＝<code>Standard Input Output</code>の略

    p.title int main(void)
    ul
        li <code>main</code>関数と呼ばれ、プログラム実行時に呼ばれる関数
        li <code>int</code>：返り値の型を表す / <code>main</code>関数の最後に<code>int</code>型の値を返すという意味
        li <code>void</code>：英語で空という意味で引数がないということを表している
            | <br> また、<code>void</code>は省略でき、<code>int main()</code>とも書ける

    p.title { }
    ul
        li ブロックと呼ばれる
        li <code>if</code>や<code>for</code>などの処理が複数行にわたるときに用いられる

    p.title ;
    ul
        li セミコロンと呼ばれる
        li 基本的に処理の終わりにつける（<code>if</code>や<code>for</code>の後にはつけてはいけない）

    p.title 変数
    ul
        li 一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる
        li 変数名の先頭に数字を使うことはできない

    p.title return 0;
    ul
        li 一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味
        li <code>main</code>関数の型が<code>int</code>であるため、整数型の<code>0</code>が返される
        li <code>main</code>関数の型が<code>void</code>である場合は省略可能

    p.title 型 | <code>int</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>bool</code>
    ul
        li <code>int</code>：整数型
        li <code>float</code>：浮動小数点型（単精度）
        li <code>double</code>：浮動小数点型（倍精度）
        li <code>char</code>：文字型
        li <code>bool</code>：論理型

    p.title 演算子 | <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>=</code>
    ul
        li <code>+</code>：加算演算子
        li <code>-</code>：減算演算子
        li <code>*</code>：乗算演算子
        li <code>/</code>：除算演算子
        li <code>%</code>：剰余演算子
        li <code>=</code>：代入演算子

    p.title 演算子 その2 | <code>++</code>, <code>--</code>
    ul
        | インクリメント：1増やすこと　　
        | デクリメント：1減らすこと <br><br>
        li <code>x++</code>：処理してからインクリメント
        li <code>++x</code>：インクリメントしてから処理
        li <code>x--</code>：処理してからデクリメント
        li <code>--x</code>：デクリメントしてから処理

    p.title 論理演算子
    ul
        | A = 0, B = 1 とする
        li <code>AND (&&)</code>：論理和 （A && B → 0）
        li <code>OR (||)</code>：論理積 （A || B → 1）
        li <code>NOT (!)</code>：論理否定 （!A → 1）

    p.title printf()
    ul
        li 標準出力関数（読み方は「プリントエフ」）
        li 主な形は<code>printf("XXX\n");</code>
        | この場合はコンソール（黒い）画面に<span class='prompt'>XXX</span>と出力される
        li <code>\n</code>については次の項目に記載

    p.title エスケープシーケンス（特殊文字）
    ul
        |￥と \ は環境によって表示が異なるが同意（Macでは必ず \ ） <br><br>
        li <code>\n</code>：改行
        li <code>\0</code>：NULL（数字の「0」と同意）（読み方はナル文字 or ヌル文字）
        li <code>\'</code>：シングルクォーテーション「'」を表示
        li <code>\"</code>：ダブルクォーテーション「"」を表示


    p.title scanf()
    ul
        li 標準入力関数（読み方は「スキャンエフ」）
        li 主な形は<code>scanf("%d", &x);</code>
        | この場合はコンソールが入力待ち状態になり、入力することができる
        li <code>%d</code>については次の項目で記載


    p.title 変換指定子 | <code>%d</code>, <code>%f</code>, <code>%lf</code>, <code>%c</code>, <code>%s</code>, <code>%o</code>, <code>%x</code>
    ul
        li <code>printf</code>や<code>scanf</code>に用いる
        | <br> よく使われるもの
        li <code>%d</code> = <code>int</code>
        li <code>%f</code> = <code>float</code>
        li <code>%lf</code> = <code>double</code>
        li <code>%c</code> = <code>char</code>
        li <code>%s</code> = <code>char[]</code>：文字列（文字配列）
        br
        li それぞれ様々なオプションがある（詳しくは「変換指定子 オプション」で検索）




</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StdExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

// .std-exp

.title
    border-left: solid 5px orange
    background: #B9F6CA
    padding .5rem
    margin: .2rem 0
    font-weight: bold
    code
        margin: auto
        font-size: 1rem

/** ul要素後に改行を入れる */
ul::after
    content: '\A'
    white-space: pre

.prompt
    margin: 0 .5rem
    padding: 0 .5em
    border-radius: 10px
    background: black
    color: white

code
    margin: 0 .15rem

li
    margin: .2rem 0

</style>
