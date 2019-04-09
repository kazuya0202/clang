<template lang='pug'>
.standard-exp
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
        li <code>{ }</code>で囲まれた部分はブロックと呼ばれる
        li <code>if</code>や<code>for</code>などの処理が複数行にわたるときに用いられる

    p.title ;
    ul
        li セミコロンと呼ばれる
        li 基本的に処理の終わりにつける（<code>if</code>や<code>for</code>の後にはつけてはいけない）

    p.title return
    ul
        li 一般的に関数の終わりにある処理で、この関数が呼ばれたときに返すという意味
            | <br> <span class='keyword'>返り値</span>と呼ばれている
        li <code>main</code>関数の型が<code>int</code>であるため、整数型の<code>0</code>が返される
        li main関数では<code>return 0;</code>と書くのが一般的だが、その他の関数を使うときは
            | <code>false</code>や<code>abcde</code>などの<code>bool</code>型、<code>char[]</code>型
            | を返すことも可能であるということは頭に入れておくべき
            | （<code>return 0;</code>だけが<code>return</code>と固定観念を持ってはダメ）

    p.title 変数
    ul
        li 一時的にメモリ上に領域が確保され、数値や文字などを記憶しておくことができる
        li 変数名の先頭に数字を使うことはできない

    p.title コメント
    ul
        li プログラム内に処理の説明やメモなどを書くことができる
        li コンパイル時に削除される
        br
        li 1行コメント：<code>//</code>の後がすべてコメントとみなされる（ただし、1行のみ）
        code.code // 変数の宣言<br>int hoge;
        li 複数行コメント：<code>/*</code>と<code>*/</code>で囲まれた部分がコメントとみなされ、複数行書くことができる
        code.code /*<br>　変数の宣言<br>　max: 最大値を記憶する変数<br>*/<br>int max;

    p.title 型 | <span class='type-bg'><code>int</code> / <code>float</code> / <code>double</code> / <code>char</code> / <code>bool</code></span>
    ul
        li.frame <code>int</code>：整数型 <br>
            | <code>float</code>：浮動小数点型（単精度） <br>
            | <code>double</code>：浮動小数点型（倍精度） <br>
            | <code>char</code>：文字型 <br>
            | <code>bool</code>：論理型（<code>true</code> / <code>false</code>)
        br
        li 浮動小数点型はコンピュータの特性上誤差が生じることがある

    p.title 型とreturn値
    ul
        li 関数の返り値である<code>return</code>は、<code>型</code>によって変わる
        li.frame <code>void</code>：<code>return;</code> <br>
            | <code>int</code>：<code>return <span class='type-bg'>整数</span>;</code> <br>
            | <code>float</code>：<code>return <span class='type-bg'>実数</span>;</code> <br>
            | <code>double</code>：<code>return <span class='type-bg'>実数</span>;</code> <br>
            | <code>char</code>：<code>return <span class='type-bg'>文字</span>;</code> <br>
            | <code>char[]</code>：<code>return <span class='type-bg'>文字列</span>;</code> <br>
            | <code>bool</code>：<code>return <span class='type-bg'>真偽値</span>;</code> <br>

    p.title 変数の宣言 / 初期化
    ul
        li <span class='keyword'>宣言</span>：変数は、<code>&lt;型&gt;␣&lt;変数名&gt;;</code>で宣言する
        code.code int hoge;
        | <br><br>

        li <code>=</code>：代入演算子
            | <br>数学の<code>=</code>（等しい）とは異なり、右辺のデータを左辺に代入するという意味
        li <span class='keyword'>初期化</span>：変数宣言時に初期値を設定すること（代入演算子を用いる）
        code.code int fuga = 100;
        | <br><br>

        li <code>&lt;型&gt;</code>の前に<code>const</code>をつけることで<span class='keyword'>定数</span>（変更不可能な変数）を宣言できる
            | <br> また、定数を宣言するときは初期値を必ず設定する
        code.code const float PI = 3.141592653;

    p.title キャスト
    ul
        li <span class='keyword'>キャスト</span>：明示的に変数の型を変換すること（明示的型変換とも呼ばれる）
        li 代入や式中では暗黙的に変換することも可能
        .frame 暗黙型変換の優先順序 → <code>double</code> &gt; <code>float</code> &gt; <code>int</code> &gt; <code>char</code>
        li 明示的型変換は以下のように使われる
            code.code
                | // (型名)式
                | double pi = 3.14;
                | int num = (int)pi;

    p.title 演算子 | <span class='type-bg'><code>+</code> / <code>-</code> / <code>*</code> / <code>/</code> / <code>%</code></span>
    ul
        li.frame <code>+</code>：加算演算子 <br>
            | <code>-</code>：減算演算子 <br>
            | <code>*</code>：乗算演算子（数学記号の<code>×</code>） <br>
            | <code>/</code>：除算演算子（数学記号の<code>÷</code>） <br>
            | <code>%</code>：剰余演算子（余りを求める） <br>
        code.code
            | printf("%d\n", 10 % 5);
            | printf("%d\n", 2 + 3 * 5);
        .exec-result 0<br>17
        br
        li プログラムでも数学と同じように<code>( )</code>で数式を囲むと演算順序が優先される
        code.code
            | printf("%d\n", (2 + 3) * 5);
        .exec-result 25

    p.title 複合代入演算子 | <span class='type-bg'><code>+=</code> / <code>-=</code> / <code>*=</code> / <code>/=</code> / <code>%=</code></span>
    ul
        li 四則演算(+ %)と代入を同時に行う場合の省略記法
            | <br>（ただし、左辺と右辺に同じ変数がある場合のみ）
        li 書き方は以下の通り
        .frame <code>a += b</code> / <code>a -= b</code> / <code>a *= b</code> / <code>a /= b</code> / <code>a %= b</code>
        br
        code.code
            | // 従来の四則演算と代入
            | sum = sum + x;
            |
            | // 複合代入
            | sum += x;

    p.title 単項演算子 | <code>++</code>, <code>--</code>
    ul
        <span class='keyword'>単項演算子</span>： インクリメント（1増やすこと）/ デクリメント（1減らすこと）
        li.frame <code>x++</code> = <code>x = x + 1</code> / <code>x--</code> = <code>x = x - 1</code>
        li.frame <code>x++</code>：演算してからxに1加算　（後置型） <br>
            | <code>++x</code>：xに1加算してから演算　（前置型） <br>
            | <code>x--</code>：演算してからxを1減算　（後置型） <br>
            | <code>--x</code>：xを1減算してから演算　（前置型） <br>

    p.title printf()
    ul
        li 標準出力関数（読み方は「プリントエフ」）
        li 主な形は<code>printf("XXX\n");</code>
        | この場合はコンソール（黒い）画面に<span class='prompt'>XXX</span>と出力される
        li <code>\n</code>については次項に記載

    p.title エスケープシーケンス（特殊文字）
    ul
        |￥と \ は環境によって表示が異なるが同意（Macでは必ず \ ）
        li.frame <code>\n</code>：改行 <br>
            | <code>\0</code>：NULL（数字の「0」と同意）（読み方はナル文字 or ヌル文字） <br>
            | <code>\'</code>：シングルクォーテーション「'」を表示 <br>
            | <code>\"</code>：ダブルクォーテーション「"」を表示 <br>

    p.title scanf()
    ul
        li 標準入力関数（読み方は「スキャンエフ」）
        li 主な形は<code>scanf("%d", &x);</code>
        | この場合はコンソールが入力待ち状態になり、入力することができる
        li <code>%d</code>については次項に記載


    p.title 変換指定子 | <span class='type-bg'><code>%d</code> / <code>%f</code> / <code>%lf</code> / <code>%c</code> / <code>%s</code> / <code>%o</code> / <code>%x</code></span>
    ul
        li <code>printf</code>や<code>scanf</code>に用いる
        li.frame <code>%d</code> = <code>int</code> <br>
            | <code>%f</code> = <code>float</code> <br>
            | <code>%lf</code> = <code>double</code> <br>
            | <code>%c</code> = <code>char</code> <br>
            | <code>%s</code> = <code>char[]</code>：文字列（文字配列） <br>
        li それぞれ様々なオプションがある（詳しくは「変換指定子 オプション」で検索）

    p.title 条件分岐
    ul
        li <code>if</code>（もしも～なら）を用いる
        li 主な書き方は以下の通り
        code.code
            | if ( 条件式 ) {   // 条件式が<code>true</code>(真)なら処理1を実行する
            |     処理1;
            | } else {          // 条件式が<code>false</code>(偽)なら処理2を実行する
            |     処理2;
            | }
        li [処理1], [処理2]それぞれの処理が1文なら<code>{ }</code>を省略可能
        li また、<code>else</code>も使わない場合は省略する

    p.title 条件式
    ul
        li 条件式には、<span class='keyword'>比較演算子</span>と<span class='keyword'>論理演算子</span>が使われる
        li 条件式の結果は<code>true</code>(真)、または<code>false</code>(偽)が返される

    p.title 比較演算子
    ul
        li

    p.title 論理演算子
    ul
        | A = 0 (false), B = 1 (true) とする
        li.frame <code>AND (&&)</code>：論理和 （A && B → 0） <br>
            | <code>OR (||)</code>：論理積 （A || B → 1） <br>
            | <code>NOT (!)</code>：論理否定 （!A → 1） <br>

    // p.title



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

.title
    border-left: solid 5px orange
    background: #B9F6CA
    padding .5rem
    margin: .2rem 0
    font-weight: bold

    code
        font-size: 1rem
    li
        margin: .2rem 0

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

.code
    width: 100%
    background: #263238
    color: white
    padding: 5px 20px
    font-size: 1.1rem

.keyword
    padding: 0 .5rem
    background: linear-gradient(transparent 0%, #82B1FF 0%)
    border-radius: 20px

.frame
    margin: .2rem 0
    padding: .3rem
    border: solid 2px #FFCDD2
    width: fit-content

.type-bg
    background: #CE93D8
    padding: .1rem .5rem

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
</style>
