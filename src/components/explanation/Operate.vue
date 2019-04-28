<template lang='pug'>
#operate
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 演算

    p.title 算術演算子
    ul
        .table-general.scrollable
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

        highlight-code(lang='cpp').
            printf("%d\n", 10 % 5);
            &nbsp;printf("%d\n", 2 + 3 * 5);
        .exec-result
            samp 0<br>17
        br
        li プログラムでも数学と同じように<span class='lookat'>( )</span>で数式を囲むと演算順序が優先される
        highlight-code(lang='cpp').
            printf("%d\n", (2 + 3) * 5);
        .exec-result
            samp 25
    br

    p.title 複合代入演算子
    ul
        li 算術演算と代入を同時に行う場合の省略記法
            | <br>（ただし、<span class='marker'>左辺と右辺に同じ変数がある場合のみ</span>）
        .table-general.scrollable
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

        highlight-code(lang='cpp').
            // 従来の四則演算と代入
            &nbsp;sum = sum + x;

            &nbsp;// 複合代入
            &nbsp;sum += x;
    br

    p.title 単項演算子
    ul
        <span class='keyword'>単項演算子</span>： インクリメント（1増やすこと）/ デクリメント（1減らすこと）
        .table-general.scrollable
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
//-
    br
    v-divider
    .prev-next-btn
        v-btn(v-scroll-to='"body"' :to='{ name: "type-exp"}' color='primary' flat) << prev. 変数と型
        v-btn(v-scroll-to='"body"' :to='{ name: "io-exp"}' color='primary' flat) next. 入出力 >>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Operate extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#operate {}
</style>
