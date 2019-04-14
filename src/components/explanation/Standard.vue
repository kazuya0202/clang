<template lang='pug'>
v-layout.standard(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
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
                | <span class='lookat'>return false;</span>や<span class='lookat'>return abcde;</span>などの<span class='lookat'>bool</span>型、<span class='lookat'>char[]</span>型
                | を返すことも可能であるということは頭に入れておくべき
                | （<span class='lookat'>return 0;</span>だけが<span class='lookat'>return</span>と固定観念を持ってはダメ）
        br

        v-divider
        .next-btn
            v-btn(:to='{ name: "type-exp"}' v-scroll-to='"body"' color='primary' flat) next. 変数と型 >>



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Standard extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.standard {}
</style>
