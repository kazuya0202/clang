<template lang='pug'>
.standard-exp
    h1(style='text-align: center; border-bottom: solid 3px #0277BD; width: 250px; margin: auto') 解説ページ
    br

    p.title #include &lt;stdio.h&gt;
    ul
        li 標準入出力（＝ 表示、入力）をするために必要なもの
        li <span class='lookat'>printf</span>関数や<span class='lookat'>scanf</span>関数などが定義されている
        li <span class='lookat'>stdio</span>＝<span class='lookat'>Standard Input Output</span>の略
    br

    p.title int main(void)
    ul
        li <span class='keyword'>main関数</span>と呼ばれ、プログラム実行時、最初に呼ばれる関数
        br
        li <span class='lookat'>int</span>：返り値の型を表す / 関数の最後に<span class='lookat'>int</span>型の値を返すという意味
        li <span class='lookat'>void</span>：英語で空という意味で引数がないということを表している
            | <br> また、<span class='lookat'>void</span>は省略でき、<span class='lookat'>int main()</span>とも書ける
    br

    p.title { }
    ul
        li <span class='lookat'>{ }</span>で囲まれた部分は<span class='keyword'>ブロック</span class='lookat'>と呼ばれる
        li <span class='lookat'>if</span>や<span class='lookat'>for</span>などの処理が複数行にわたるときに用いられる
    br

    p.title ;
    ul
        li <span class='keyword'>セミコロン</span>と呼ばれる
        li 基本的に処理の終わりにつける（<span class='lookat'>if</span>や<span class='lookat'>for</span>の後にはつけてはいけない）
    br

    p.title コメント
    ul
        li <span class='keyword'>コメント</span>：プログラム内に処理の説明やメモなどを書くことができる
        li コメントはコンパイル時に削除される
        br
        li 1行コメント：<span class='lookat'>//</span>の後がすべてコメントとみなされる（ただし、1行のみ）
        code.code // 変数の宣言<br>int hoge;
        li 複数行コメント：<span class='lookat'>/*</span>と<span class='lookat'>*/</span>で囲まれた部分がコメントとみなされ、複数行書くことができる
        code.code /*<br>　変数の宣言<br>　max: 最大値を記憶する変数<br>*/<br>int max;
    br

    p.title return
    ul
        li 一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味
            | <br> <span class='keyword'>返り値</span>と呼ばれている
        li main関数の型が<span class='lookat'>int</span>であるため、整数型の<span class='lookat'>0</span>が返される
        br
        li main関数では<span class='lookat'>return 0;</span>と書くのが一般的だが、その他の関数を使うときは
            | <span class='lookat'>return false ;</span>や<span class='lookat'>return abcde ;</span>などの<span class='lookat'>bool</span>型、<span class='lookat'>char[ ]</span>型
            | を返すことも可能であるということは頭に入れておくべき
            | （<span class='lookat'>return 0 ;</span>だけが<span class='lookat'>return</span>と固定観念を持ってはダメ）
    br

    p.title 変数
    ul
        li 一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる
        li 変数名の先頭に数字を使うことはできない
    br


    p.title 型
    ul
        li 浮動小数点型はコンピュータの特性上誤差が生じることがある
    tt
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
                td bool
                td 論理型（ <span class='lookat'>true</span> / <span class='lookat'>false</span> ）
    br

    p.title 型とreturn値
    ul
        li 関数の返り値である<span class='lookat'>return</span>は、<span class='lookat'>型</span>によって変わる
        li 主な書き方は以下の通り（ 下の表と組み合わせて ）
        code.code
            | &lt;型&gt; 関数名() {
            |     ...
            |     &lt;return文&gt;
            | }
    br
    tt
        table(border=1)
            tr
                th 型
                th return文
            tr
                td void
                td return;
            tr
                td int
                td return <span class='lookat'>整数</span>;
            tr
                td float
                td return <span class='lookat'>実数</span>;
            tr
                td double
                td return <span class='lookat'>実数</span>;
            tr
                td char
                td return <span class='lookat'>文字</span>;
            tr
                td char[]
                td return <span class='lookat'>文字列</span>;
            tr
                td bool
                td return <span class='lookat'>真偽値</span>;
    br

    p.title 変数の宣言 / 初期化
    ul
        li 変数は以下のように<span class='keyword'>宣言</span>する
        code.code int hoge;
        | <br><br>

        li <span class='keyword'>初期化</span>：変数宣言時に初期値を設定すること（代入演算子を用いる）
        li <span class='lookat'>=</span>：代入演算子
            | <br>数学の<span class='lookat'>=</span>（等しい）とは異なり、右辺のデータを左辺に<span class='lookat'>代入する</span>という意味
        code.code int fuga = 100;
        | <br><br>

        li <span class='lookat'>&lt;型&gt;</span>の前に<span class='lookat'>const</span>をつけることで<span class='keyword'>定数</span>（変更不可能な変数）を宣言できる
            | <br> また、定数を宣言するときは初期値を必ず設定する
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
    br

    p.title 算術演算子
    tt
        table(border=1)
            tr
                th 演算子
                th 意味
            tr
                td +
                td 加算演算子
            tr
                td -
                td 減算演算子
            tr
                td *
                td 乗算演算子（ 数学記号の<span class='lookat'>×</span> ）
            tr
                td /
                td 除算演算子（ 数学記号の<span class='lookat'>÷</span> ）
            tr
                td %
                td 剰余演算子（ 余りを求める ）
    br
    code.code
        | printf("%d\n", 10 % 5);
        | printf("%d\n", 2 + 3 * 5);
    .exec-result
        samp 0<br>17
    br
    li プログラムでも数学と同じように<span class='lookat'>( )</span>で数式を囲むと演算順序が優先される
    code.code
        | printf("%d\n", (2 + 3) * 5);
    .exec-result
        samp 25
    br

    p.title 複合代入演算子
    ul
        li 四則演算(+ %)と代入を同時に行う場合の省略記法
            | <br>（ただし、左辺と右辺に同じ変数がある場合のみ）
        tt
            table(border=1)
                tr
                    th 演算式
                    th 処理
                tr
                    td a += b
                    td a + b して a に代入
                tr
                    td a -= b
                    td a - b して a に代入
                tr
                    td a *= b
                    td a * b して a に代入
                tr
                    td a /= b
                    td a / b して a に代入
        br
        code.code
            | // 従来の四則演算と代入
            | sum = sum + x;
            |
            | // 複合代入
            | sum += x;
    br

    p.title 単項演算子
    ul
        <span class='keyword'>単項演算子</span>： インクリメント（1増やすこと）/ デクリメント（1減らすこと）
        // .frame <code>x++</code> = <code>x += 1</code> / <code>x--</code> = <code>x -= 1</code>
        tt
            table(border=1)
                tr
                    th 演算式
                    th(colspan=2) 処理
                tr
                    td x++
                    td 演算してからxに1加算（ 後置型 ）
                    td x += 1
                tr
                    td ++x
                    td xに1加算してから演算（ 前置型 ）
                    td -
                tr
                    td x--
                    td 演算してからxを1減算（ 後置型 ）
                    td x -= 1
                tr
                    td --x
                    td xを1減算してから演算（ 前置型 ）
                    td -
    br

    p.title printf()
    ul
        li 標準出力関数（読み方は「プリントエフ」）
        li 主な形は<span class='lookat'>printf("XXX\n");</span>
        | この場合はコンソール画面に<span class='prompt'><samp>XXX</samp></span>と出力される
        li <span class='lookat'>\n</span>については次項に記載
    br

    p.title エスケープシーケンス（特殊文字）
    ul
        li |￥と \ は環境によって表示が異なるが同意（Macでは必ず \ ）
        tt
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
        | この場合はコンソールが入力待ち状態になり、入力することができる
        li <span class='lookat'>%d</span>については次項に記載
    br

    p.title 変換指定子
    ul
        li <span class='lookat'>printf</span>や<span class='lookat'>scanf</span>に用いる
        tt
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
        li それぞれ様々なオプションがある（今は書く気ないです。詳しくは「変換指定子 オプション」で検索）
    br

    p.title 条件分岐
    ul
        li <span class='lookat'>if</span>（もしも～なら）を用いる
        li 主な書き方は以下の通り
        code.code
            | if ( 条件式 ) {   // 条件式が<span class='lookat' style='color: black'>true (真)</span>なら処理1を実行する
            |     // 処理1;
            | } else {          // 条件式が<span class='lookat' style='color: black'>false (偽)</span>なら処理2を実行する
            |     // 処理2;
            | }
        li [処理1], [処理2]それぞれの処理が1文なら<span class='lookat'>{ }</span>を省略可能
        li また、<span class='lookat'>else</span>も使わない場合は省略する
    br

    p.title 条件式
    ul
        li 条件式には、<span class='keyword'>比較演算子</span>と<span class='keyword'>論理演算子</span>が使われる
        li 条件式の結果は<span class='lookat'>true (真)</span>、または<span class='lookat'>false (偽)</span>が返される
    br

    p.title 比較演算子
    ul
        | 基本的に数学の記号と意味は同じだが、
        | プログラムの等価演算子は数学の<span class='lookat'>=</span>とは異なるため注意する
        tt
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
    var(style='padding: 0 25%') A = 0 (false), B = 1 (true)とする
    tt
        table(border=1)
            tr
                th 演算子
                th 意味
            tr
                td AND (&&)
                td 論理和 （A && B → 0）
            tr
                td OR (||)
                td 論理積 （A || B → 1）
            tr
                td NOT (!)
                td 論理否定 （!A → 1）
    br

    p.title 比較演算子と論理演算子の組み合わせ
    ul
        li 論理演算子を用いることで複雑な条件式を作ることができる
        code.code
            | // n が0より小さい、または10以上なら
            | if (n < 0 || n >= 10) ...
            |
            | // c がアルファベットの小文字なら
            | if (c >= 'a' && c <= 'z') ...
        | <br><br>
        li アルファベットが比較演算子で判断できるのは、ASCIIコードと呼ばれるもので連続的に管理されているから <br>
            | （ ASCIIコードについては topics として追記予定 ）
    br

    p.title 繰り返し処理
    ul
        li 繰り返し構文には<span class='lookat'>while</span>、<span class='lookat'>for</span>の2つがある
        li 繰り返し条件の式が<span class='lookat'>true</span>の間<span class='lookat'>{ }</span>内の処理を行う <br>
            | また、<span class='lookat'>{ }</span>内の処理が1文の場合、<span class='lookat'>{ }</span>省略可能
        br
        li 主な使い分けは以下の通り
    tt
        table(border=1)
            tr
                th 構文
                th 使い分け
            tr
                td for
                td 繰り返す回数が[n回]などとはっきりと分かっている場合
            tr
                td while
                td 繰り返す回数がはっきりとわからない場合

    br
    details(style='background: #C5E1A5; padding: .1rem .2rem')
        summary 繰り返しの考え方
        v-divider
        details(style='background: #81D4FA; padding: .2rem .5rem')
            summary sample code
            p.lookat(style='width: fit-content; margin: auto; background: #D1C4E9') <span class='lookat'>while</span>と<span class='lookat'>for</span>で同じことをするコード
            code.code(style='width: fit-content')
                | // while
                | int i;    // 宣言
                | i = 0;    // 初期化
                | while (i < 10) {  // <span class='lookat' style='color: black'>条件式</span>
                |     printf("%d回目\n", i + 1);    // 処理
                |     i++;  // 増減式
                | }
                |
                | // for
                | int i;    // 宣言
                | for (i = 0; i < 10; i++) {    // <span class='lookat' style='color: black'>初期化、条件式、増減式</span>
                |     printf("%d回目\n", i + 1);    // 処理
                | }
            | <br><br>
            p.lookat(style='width: fit-content; margin: auto; background: #D1C4E9') それぞれ以下のような結果が得られる
            br
            .exec-result(style='width: 50%; margin: auto')
                | 1回目<br>2回目<br>3回目<br>4回目<br>5回目<br>6回目<br>7回目<br>8回目<br>9回目<br>10回目

            | <br>
        v-divider
        br
        p.lookat(style='width: fit-content; margin: auto') 10回処理を繰り返すプログラムの考え方
        ol(style='background: #FFCCBC;')
            li 変数<span class='lookat'>i</span>を宣言
            v-divider
            li <span class='lookat'>i</span>に<span class='lookat'>0</span>に初期化する <br>
            | （1から始めても問題ないがプログラムでは0から始めると後々応用しやすい）
            v-divider
            li 繰り返し条件と比較する <br>
            | （このとき<span class='lookat'>i</span>が<span class='lookat'>0～9</span>と順にカウントしていくとちょうど10回になると考えるとよい） <br>
            | <span class='lookat'>i</span>は<span class='lookat'>0～9</span>の値をとる => <span class='lookat'>i < 10</span>または<span class='lookat'>i <= 9</span>
            v-divider
            li 繰り返す処理 <br>
            | ここでは、回数を表示する <br>
            code.code(style='width: fit-content')
                | printf("%d回目\n", i + 1);
            v-divider
            li 変数の値を更新する
            | 今回はカウントアップしていくため<span class='lookat'>i</span>をインクリメント <br>
            code.code(style='width: fit-content')
                | i++;
            v-divider
            li 2.に戻って繰り返す
            v-divider
            li 条件式が成り立たなくなったら
            | <span class='lookat'>i</span>が<span class='lookat'>10</span>になったとき、<span class='lookat'>i < 10</span>の条件式は<span class='lookat'>false</span>になるためループを終える
    br

    p.title while
    ul
        li <span class='lookat'>()</span>内に<span class='keyword'>条件式</span>のみを記述する
        code.code
            | while ( 条件式 ) {
            |     // 処理
            | }
        li <span class='lookat'>while</span>と似た<span class='lookat'>do while</span>は topics として追加予定
    br

    p.title for
    ul
        li <span class='lookat'>()</span>内に<span class='keyword'>初期化</span>、<span class='keyword'>条件式</span>、<span class='keyword'>増減式</span>を<span class='lookat'>;</span>で区切りながら記述する
        code.code
            | for ( 初期化; 条件式; 増減式) {
            |     // 処理
            | }
    br




</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StandardExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.standard-exp
    padding: .1rem
    *
        line-height: 1.8

.title
    border-left: solid 7px orange
    padding .5rem
    margin: .2rem 0
    font-weight: bold

    // background: #B9F6CA == rgb(185, 246, 202)
    background: -moz-linear-gradient(top, #B9F6CA 40%, rgba(185, 246, 202, 0));
    background: -webkit-linear-gradient(top, #B9F6CA 40%, rgba(185, 246, 202, 0));
    background: linear-gradient(to bottom, #B9F6CA 40%, rgba(185, 246, 202, 0));

    code
        font-size: 1rem
    li
        margin: .2rem 0


/** ul要素後に改行を入れる */
// ul::after
    // content: '\A'
    // white-space: pre

.prompt
    margin: 0 .5rem
    padding: 0 .5em
    border-radius: 10px
    background: black
    color: white

code
    margin: 0 .15rem

.code
    width: 100%
    background: #263238
    color: white
    padding: 5px 20px
    font-size: 1.1rem

.keyword
    padding: .1rem .5rem
    background: #82B1FF
    border-radius: 20px

.frame
    margin: .2rem 0
    padding: .3rem
    border: solid 2px #FFCDD2
    width: fit-content

.lookat
    background: #F48FB1
    border-radius: 5px
    padding: .15rem .5rem
    margin: 0 .1rem

.exec-result
    width: 100%
    background: #B39DDB
    margin: .5rem 0
    padding: 0 1rem
    border-radius: 10px

.exec-result::before
    content: '実行結果\A'
    white-space: pre
    background: #FFCDD2
    padding: .15rem .5rem
    margin: 1rem

ol > li
    background: -moz-linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%);
    background: -webkit-linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%);
    background: linear-gradient(rgba(255, 255, 102, 0) 50%, #ffff66 60%)
    width: fit-content
    margin: .2rem 0

table
    margin: auto
    border-collapse: collapse
    font-weight: bold
    border: solid 2px black
    th
        padding .3rem 1rem
        color: white
        background: #00ACC1
        border-bottom: solid 1px black
    td
        padding .3rem 1rem
        background: #EEEEEE


td:nth-of-type(1), td:nth-of-type(3)
    text-align: center
    background: #FFD180

</style>
