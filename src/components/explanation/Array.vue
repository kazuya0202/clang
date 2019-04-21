<template lang='pug'>
#array
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 配列
    p.title 配列
    ul
        li 同様のデータを扱うとき、データ(要素)をまとめて1つの変数で管理できる
            | <br>&emsp;&emsp;（学生のテスト点など）
        li 配列は<span class='lookat'>[0] ～ [要素数-1]</span>で構成される

    .table-array.scrollalbe
        table(border=1)
            caption.caption ● 配列の構造
            tr
                th(rowspan=2).bg array
                th [0]
                th [1]
                th [2]
                th [3]
                th [4]
            tr
                td 要素1
                td 要素2
                td 要素3
                td 要素4
                td 要素5

    p.title 配列の宣言 / 配列のアクセス
    ul
        li 配列の使い方は以下の通り
        code.code
            | <型> 変数名[要素数];
            | // 例
            | int score[3];

        li 上の例のように[3]と宣言すると3個の箱（ [0]～[2] ）が生成される
        li 配列の要素には<span class='keyword'>添え字 (インデックス)</span>でアクセスする

        code.code
            | // 代入
            | score[0] = 85;
            | score[1] = 68;
            |
            | // 入力
            | scanf("%d", &score[2]);
            |
            | score[3] = 73;   // エラー
            | scanf("%d", &score);   // エラー
        li [0] ～ [2] 以外の添え字にアクセスすることはできない

        br
        li 宣言時に<span class='lookat'>{ }</span>を用いて初期化することもできる
            | <br>&emsp;&emsp;また、初期化するときは要素数を省略しても自動的に要素が生成される
        code.code
            | int score[3] = { 85, 65, 91 };
            |
            | // 省略時
            | int score[] = { 85, 65, 91 };

        p.title 配列と繰り返し
        ul
            li 配列は添え字が<span class='lookat'> [0] ～ [要素数-1] </span>と連続しているため、
                | 繰り返し文を用いて走査できる
            li 主に全要素に対して処理を行う場合は以下のようにする (whileは省略)
            code.code
                | for (i = 0; i < <span class='lookat' style='color: black'>要素数</span>; i++) {
                |     // 処理   <span class='lookat' style='color: black'>変数名[i] </span>でアクセス
                | }

        details.px-3.py-1.light-green.lighten-3
            summary 例：配列の要素の合計を求める
            .details-center
                code.code
                    | int i;
                    | int data[] = { 88, 92, 56, 67, 73 };
                    | int sum = 0;   // 合計
                    |
                    | for (i = 0; i < 5; i++)
                    |     sum += data[i]
                    |
                    | printf("合計 = %d", sum);
                .exec-result
                    | 合計 = 387



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ArrayExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#array {}
</style>
