<template lang='pug'>
#function
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 関数

    p.title 関数
    ul
        li 処理をまとめたもの
        li 関数呼び出し時に関数へ引き渡す値のことを<span class='keyword'>引数 (ひきすう)</span>と呼ぶ
        li <span class='lookat'>return</span>が実行されると関数は終了する（returnの後に処理を書いても実行されない）
        br

        .text-xs-center ● 関数を使うメリット
        .frame.
            ★ プログラム内で同じ機能を複数記述する必要がないため、開発効率が高まる <br>
            ★ 必要時にほかのプログラムからも呼び出すことができ再利用性が高い <br>
            ★ 関数の機能でエラーが起きたとき、主にその関数に変更を加えるだけでよいため、運用時の管理・修正が用意になる <br>

        br
        li 関数の型と返り値の型を同じにする必要がある


        highlight-code(lang='cpp').
            &nbsp;型名 関数名(仮引数) {
            &nbsp;    ...
            &nbsp;    return 型名のデータ値;
            &nbsp;}

            &nbsp;int main() {
            &nbsp;    関数名(実引数);
            &nbsp;    return 0;
            &nbsp;}
        .table-general.scrollable
            table(border=1)
                tr
                    th 型名
                    th return文
                    th 例
                tr
                    td void
                    td return;
                    td return;
                tr
                    td int
                    td return <span class='lookat'>整数</span>;
                    td return -1;
                tr
                    td float
                    td(rowspan=2) return <span class='lookat'>実数</span>;
                    td(rowspan=2) return 0.1;
                tr
                    td double
                tr
                    td char
                    td return <span class='lookat'>文字</span>;
                    td return 'a';
                tr
                    td bool
                    td return <span class='lookat'>真偽値</span>;
                    td return false;

        br
        li 関数を呼び出すには<span class='lookat'>関数名(実引数);</span>の形を用いる
        li 実引数が何もなくても<span class='lookat'>()</span>は記述する
        br
        li 呼び出された関数内で、main関数内の変数を使うことはできない
        li 戻り値がある場合は、以下のように書く（このとき、戻り値の型と受け取る側の型を一致させる）

        highlight-code(lang='cpp').
            &nbsp;// 2値の合計を求め、返す関数
            &nbsp;int getSum(int x, int y) {
            &nbsp;    int z = x + y;
            &nbsp;    return z;   // 返す型: int
            &nbsp;    // return x + y; のように式の結果をreturnすることもできる
            &nbsp;}

            &nbsp;int main() {
            &nbsp;    int a = 13, b = 25;

            &nbsp;    // 受け取る型: int
            &nbsp;    int c = getSum(a, b);   // 関数を呼び出して返り値を取得
            &nbsp;    printf("%d\n", c);

            &nbsp;    return 0;
            &nbsp;}

        .exec-result
            | 38

        br
        .text-xs-center ● 仮引数 / 実引数とは
        .frame.
            ★ <span class='keyword'>仮引数 (parameter)</span>: 関数を定義するときに使用される引数のこと <br>
            ★ <span class='keyword'>実引数 (argument)</span> : 関数を呼び出すときに関数に引き渡される引数のこと <br>
            <br>
            ★ C言語では呼び出した関数に引数が引き渡されるとき、その実引数自身ではなく、<span class='marker'>実引数のコピー</span>が引き渡される（つまり、関数側で値を変更しても実引数には影響がないということ） <br>
            ★ 仮引数の型は、<span class='marker'>変数ごと</span>に定める必要がある <br>
            ★ また、実引数と仮引数の<span class='lookat'>型・個数・順序</span>が一致している必要がある <br>

    br
    p.title 関数のプロトタイプ宣言
    ul
        li 関数名や引数の数・データ型など、関数の情報を定義したもの
        li <span class='marker'>main関数以前</span>に関数を定義する場合は必要がないが、
            | <span class='marker'>main関数以後</span>に関数を定義する場合は宣言しなければならない
        highlight-code(lang='cpp').
            &nbsp;/* main関数より前 */
            &nbsp;void funcitonA() { ... }
            &nbsp;int main() {
            &nbsp;    funcitonA();   // OK
            &nbsp;    return 0;
            &nbsp;}

            &nbsp;/* main関数より後 */
            &nbsp;int main() {
            &nbsp;    functionB();   // ???
            &nbsp;    return 0;
            &nbsp;}
            &nbsp;void functionB() { ... }

        br
        li プロトタイプ宣言で使う関数の名前を先に定義しておく（<span class='marker'>引数なども一致させる</span>）
        highlight-code(lang='cpp').
            void showSum(int x, int y);   // プロトタイプ宣言

            &nbsp;int main() {
            &nbsp;    showSum(15, 32);   // OK
            &nbsp;    return 0;
            &nbsp;}

            &nbsp;void showSum(int x, int y) {   // 定義
            &nbsp;    printf("%d", x + y);
            &nbsp;}



    br
    p.title 引数に配列を渡す
    ul
        li 引数に配列を渡す方法は以下の2つ
        ol
            li 配列に渡す
            li ポインタに渡す（ポインタについては後項で記載する）

        highlight-code(lang='cpp').
            &nbsp;// 配列
            &nbsp;int arrayArg(int array[]) { ... }

            &nbsp;// ポインタ
            &nbsp;int ptrArg(int* ptr) { ... }

            &nbsp;int main() {
            &nbsp;    int data = { 50, 40, 20 };
            &nbsp;    arrayArg(data);   // 配列に渡す
            &nbsp;    ptrArg(data);     // ポインタに渡す

            &nbsp;    return 0;
            &nbsp;}



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Function extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#function {}
</style>
