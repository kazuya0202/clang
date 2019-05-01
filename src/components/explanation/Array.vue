<template lang='pug'>
#array
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 配列
    p.title 配列
    ul
        li 同様のデータを扱うとき、データ(要素)をまとめて1つの変数で管理できる
            | <br>&emsp;&emsp;（学生のテスト点など）
        li 配列は<span class='lookat'>[0] ～ [要素数-1]</span>で構成される

        .table-array.scrollable
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
    br

    p.title 配列の宣言 / 配列のアクセス
    ul
        li 配列の使い方は以下の通り
        highlight-code(lang='cpp').
            &nbsp;型名 変数名[ 要素数 ];

            &nbsp;// 例
            &nbsp;int score[3];

        li 上の例のように[3]と宣言すると3個の箱（ [0]～[2] ）が生成される
        br
        li 配列の要素には<span class='keyword'>添え字 (インデックス)</span>でアクセスする
        li [0] ～ [2] 以外の存在しない添え字にアクセスすることはできない

        highlight-code(lang='cpp').
            &nbsp;// 代入
            &nbsp;score[0] = 85;
            &nbsp;score[1] = 68;

            &nbsp;// 入力
            &nbsp;scanf("%d", &score[2]);

            &nbsp;score[3] = 73;   // エラー
            &nbsp;scanf("%d", &score);   // エラー

        br
        li 宣言時に<span class='lookat'>{ }</span>を用いて初期化することもできる
            | <br>&emsp;&emsp;また、初期化するときは要素数を省略しても自動的に要素が生成される
        highlight-code(lang='cpp').
            &nbsp;int score[3] = { 85, 65, 91 };

            &nbsp;// 省略時
            &nbsp;int score[] = { 85, 65, 91 };

        br
        li 配列内すべてを<span class='marker'>同じ値で初期化</span>する場合は以下のように書ける

        highlight-code(lang='cpp').
            int score[100] = { 0 };
    br

    p.title 配列と繰り返し
    ul
        li 配列は添え字が<span class='lookat'> [0] ～ [要素数-1] </span>と連続しているため、
            | 繰り返し文を用いて走査できる
        li 主に全要素に対して処理を行う場合は以下のようにする (whileは省略)
        highlight-code(lang='cpp').
            &nbsp;for (i = 0; i < 要素数; i++) {
            &nbsp;    // 処理   (変数名[i]でアクセス)
            &nbsp;}
    br
    details.px-3.py-1.light-green.lighten-3
        summary 例：配列の要素の合計を求める
        .details-center
            highlight-code(lang='cpp').
                &nbsp;int i;
                &nbsp;int data[] = { 88, 92, 56, 67, 73 };
                &nbsp;int sum = 0;   // 合計

                &nbsp;for (i = 0; i < 5; i++)
                &nbsp;    sum += data[i]   // 加算

                &nbsp;printf("合計 = %d", sum);
            .exec-result
                | 合計 = 387
    br

    p.title 二次元配列
    ul
        li 一次元配列（列）にさらに一次元（行）が加わったもの
        li 行と列であらわされる表をイメージするとわかりやすい（一次元配列も「1 × N」の表と考えられる）
        li <span class='marker'>添え字を2つ</span>つけることで各要素にアクセスする
        br

        li 3×5 の二次元配列は以下のように表せる
        .table-array.scrollable
            .caption.text-xs-center ● data[3][5] の構造
            table(border=1)
                tr
                    th(rowspan=3).bg data
                    th [0][0]
                    th [0][1]
                    th [0][2]
                    th [0][3]
                    th [0][4]
                tr
                    th [1][0]
                    th [1][1]
                    th [1][2]
                    th [1][3]
                    th [1][4]
                tr
                    th [2][0]
                    th [2][1]
                    th [2][2]
                    th [2][3]
                    th [3][4]
    br

    p.title 宣言 / 初期化
    ul
        li 二次元配列は以下のように宣言する
        highlight-code(lang='cpp').
            &nbsp;型名 変数名[ 行の要素数 ][ 列の要素数 ];

            &nbsp;// 例
            &nbsp;int table[3][5];

        br
        li 一次元追加されるたびに一番左に要素を追加していくことでできる
        highlight-code(lang='cpp').
            &nbsp;// 一次元
            &nbsp;int table1[5];   // (1×)5の表

            &nbsp;// 二次元
            &nbsp;int table2[3][5];   // 3×5の表

            &nbsp;// 三次元
            &nbsp;int table[2][3][5];   // 3×5の表 + 奥行き2

        br
        li 初期化は、次元ごとに<span class='lookat'>{ }</span>で区切る
        highlight-code(lang='cpp').
            &nbsp;// 例
            &nbsp;int score[2][3] = { { 53, 42, 82 }, { 64, 83, 76 } };
        br

        li ただし、以下のように行と列の対応がわかりやすいように書く方がよい
        highlight-code(lang='cpp').
            &nbsp;int score[2][3] = {
            &nbsp;    { 53, 42, 82 },
            &nbsp;    { 64, 83, 76 }
            &nbsp;};

        .table-array.scrollable
            .caption.text-xs-center ● score[2][3] の構造
            table(border=1)
                tr
                    th(rowspan=2).bg score
                    td 53
                    td 42
                    td 82
                tr
                    td 64
                    td 83
                    td 76
        br

        li <span class='marker'>先頭の要素数だけ</span>省略できる
        highlight-code(lang='cpp').
            &nbsp;int array[][2] = { { 1, 2 }, { 3, 4 } };

            &nbsp;int array[2][] = { { 1, 2 }, { 3, 4 } };   // エラー
            &nbsp;int array[][] = { { 1, 2 }, { 3, 4 } };   // エラー




</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Array extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#array {}
</style>
