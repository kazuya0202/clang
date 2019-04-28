<template lang='pug'>
#loop
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 繰り返し

    p.title 繰り返し処理
    ul
        li 繰り返し構文には<span class='lookat'>while</span>、<span class='lookat'>for</span>の2つがある
        li 繰り返しは条件式が<span class='lookat'>true</span>の間<span class='lookat'>{ }</span>内の処理を行う <br>
            | &emsp;&emsp;また、<span class='lookat'>{ }</span>内の処理が1文の場合、<span class='lookat'>{ }</span>省略可能
        br
        li 主な使い分けは以下の通り

        .table-general.scrollalbe
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
    details.px-3.py-1.light-green.lighten-3
        summary 繰り返しの考え方
        v-divider
        br
        .caption.text-xs-center ● 10回処理を繰り返すプログラムの考え方
        ul(style='background: #EEEEEE; padding: 1rem').frame
            li.marker ループするための変数<span class='lookat'>i</span>を宣言
            v-divider

            li.marker <span class='lookat'>i</span>に<span class='lookat'>0</span>に初期化する <br>
            | （1から始めても問題ないがプログラムでは0から始めると後々応用しやすい）
            v-divider

            li.marker 繰り返し条件と比較する <br>
            | （このとき<span class='lookat'>i</span>が<span class='lookat'>0～9</span>と順にカウントしていくとちょうど10回になると考えるとよい） <br>
            | <span class='lookat'>i</span>は<span class='lookat'>0～9</span>の値をとる => <span class='lookat'>i < 10</span>または<span class='lookat'>i <= 9</span>
            v-divider

            li.marker 繰り返す処理 <br>
            | ここでは、回数を表示する <br>
            highlight-code(lang='cpp').
                printf("%d回目\n", i + 1);
            v-divider

            li.marker 変数の値を更新する
            | 今回はカウントアップしていくため<span class='lookat'>i</span>をインクリメント <br>
            highlight-code(lang='cpp').
                i++;
            v-divider

            li.marker 2.に戻って繰り返す
            v-divider

            li.marker 条件式が成り立たなくなったら
            | <span class='lookat'>i</span>が<span class='lookat'>10</span>になったとき、<span class='lookat'>i < 10</span>の条件式は<span class='lookat'>false</span>になるためループを終える

        br
        details.px-3.py-1.blue.lighten-3
            summary sample code
            .details-center
                .caption.text-xs-center ● whileとforで同じことをするコード
                highlight-code(lang='cpp').
                    // while
                    &nbsp;int i;    // 宣言
                    &nbsp;i = 0;    // <span class='lookat' style='color: black'>初期化</span>
                    &nbsp;while (i < 10) {  // <span class='lookat' style='color: black'>条件式</span>
                    &nbsp;    printf("%d回目\n", i + 1);    // 処理
                    &nbsp;    i++;  // <span class='lookat' style='color: black'>増減式</span>
                    &nbsp;}

                    &nbsp;// for
                    &nbsp;int i;    // 宣言
                    &nbsp;for (i = 0; i < 10; i++) {    // <span class='lookat' style='color: black'>初期化、条件式、増減式</span>
                    &nbsp;    printf("%d回目\n", i + 1);    // 処理
                    &nbsp;}
                br
                .caption.text-xs-center ● それぞれ以下のような結果が得られる
                .exec-result
                    | 1回目<br>2回目<br>3回目<br>4回目<br>5回目<br>6回目<br>7回目<br>8回目<br>9回目<br>10回目

    br
    p.title while
    ul
        li <span class='lookat'>()</span>内に<span class='keyword'>条件式</span>のみを記述する
        highlight-code(lang='cpp').
            while ( 条件式 ) {
            &nbsp;    // 処理
            &nbsp;}
        li <span class='lookat'>while</span>と似た<span class='lookat'>do while</span>は topics として追加予定
    br

    p.title for
    ul
        li <span class='lookat'>()</span>内に<span class='keyword'>初期化</span>、<span class='keyword'>条件式</span>、<span class='keyword'>増減式</span>を<span class='lookat'>;</span>で区切りながら記述する
        li 初期化、条件式、増減式は省略できる（ただし、<span class='lookat'>;</span>は記述する）
        highlight-code(lang='cpp').
            for ( 初期化; 条件式; 増減式) {
            &nbsp;    // 処理
            &nbsp;}

    p.title 多重ループ（二重ループ）
    ul
        li 簡単に言うと、繰り返しの中でさらに繰り返し文を書くこと
        .caption.text-xs-center 例：九九表
        highlight-code(lang='cpp').
            int i, j;
            &nbsp;for (i = 0; i <= 9; i++) {
            &nbsp;    for (j = 0; j <= 9; j++)
            &nbsp;        printf("%3d", i*j);
            &nbsp;    printf("\n");
            &nbsp;}
        pre.exec-result
            |   1  2  3  4  5  6  7  8  9
            |   2  4  6  8 10 12 14 16 18
            |   3  6  9 12 15 18 21 24 27
            |   4  8 12 16 20 24 28 32 36
            |   5 10 15 20 25 30 35 40 45
            |   6 12 18 24 30 36 42 48 54
            |   7 14 21 28 35 42 49 56 63
            |   8 16 24 32 40 48 56 64 72
            |   9 18 27 36 45 54 63 72 81



//-
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
@require '~@/components/stylus-pane/table.styl';

#loop {}
</style>
