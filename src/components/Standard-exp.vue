<template lang='pug'>
.standard-exp
    h1(style='text-align: center; border-bottom: solid 3px #0277BD; width: 250px; margin: auto') 解説ページ
    br
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline) 　　C言語のきほん　　

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

    v-divider
    .next-btn
        v-btn(:to='{ name: "type-exp"}' color='primary' flat) next. 変数と型 >>


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
        pre
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
    pre
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
    pre
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
@require '~@/components/stylus-pane/exp-main.styl';

// .standard-exp
</style>
