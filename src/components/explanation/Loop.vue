<template lang='pug'>
v-layout.loop(fill-height column)
    .main-pane.white.elevation3
        h1.exp-top 解説ページ
        br
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline) 　　繰り返し　　

        p.title 繰り返し処理
        ul
            li 繰り返し構文には<span class='lookat'>while</span>、<span class='lookat'>for</span>の2つがある
            li 繰り返し条件の式が<span class='lookat'>true</span>の間<span class='lookat'>{ }</span>内の処理を行う <br>
                | &emsp;&emsp;また、<span class='lookat'>{ }</span>内の処理が1文の場合、<span class='lookat'>{ }</span>省略可能
            br
            li 主な使い分けは以下の通り
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
        v-divider
        .prev-next-btn
            v-btn(v-scroll-to='"body"' :to='{ name: "condition-exp"}' color='primary' flat) << prev. 条件分岐

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loop extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.loop {}
</style>
