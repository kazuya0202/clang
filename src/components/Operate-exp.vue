<template lang='pug'>
v-layout.operate-exp.grey.lighten-4(fill-height column)
    .main-pane.white.elevation-3
        h1(style='text-align: center; border-bottom: solid 3px #0277BD; width: 250px; margin: auto') 解説ページ
        br
        .unit-title
            v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline) 　　演算　　
        p.title 算術演算子
        pre
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
            pre
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
            pre
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
        v-divider
        .prev-next-btn
            v-btn(:to='{ name: "type-exp"}' color='primary' flat) << prev. 変数と型
            v-btn(:to='{ name: "io-exp"}' color='primary' flat) next. 入出力 >>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class OperateExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.operate-exp {}
</style>
