<template lang='pug'>
#structure
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 構造体

    p.title 構造体
    ul
        li 複数の変数を一つのまとまりにして扱うことができるもの
        li 自分でデータの型を定義するようなイメージ
        br
    details.px-3.py-1.light-green.lighten-3
        summary 構造体の利点
        .details-center
            .caption.text-xs-center ● 変数だけで管理する場合
            highlight-code(lang='cpp').
                &nbsp;int main() {
                &nbsp;    // aさんのデータ
                &nbsp;    char aName[20];  int aAge;
                &nbsp;    double aHeight;  double aWeight;

                &nbsp;    // bさんのデータ
                &nbsp;    char bName[20];  int bAge;
                &nbsp;    double bHeight;  double bWeight;

                &nbsp;    // cさんのデータ
                &nbsp;    ...
                &nbsp;}

            .caption.text-xs-center ● 構造体で管理する場合
            highlight-code(lang='cpp').
                &nbsp;typedef struct person_data {
                &nbsp;    char name[20];
                &nbsp;    int age;
                &nbsp;    double height;
                &nbsp;    double weight;
                &nbsp;} person;

                &nbsp;int main() {
                &nbsp;    person a;   // aさんのデータ
                &nbsp;    person b;   // bさんのデータ
                &nbsp;    person c;   // cさんのデータ
                &nbsp;}
        ul
            li 変数で管理する場合は、<span class='lookat'>人数 × データ数</span>に対し、
                | 構造体で管理する場合は、<span class='lookat'>人数</span>だけで管理できる
            li データ数に変更があっても<span class=marker>構造体の中だけ</span>変更を加えるだけで<span class='marker'>main関数内</span>に影響はない
    br

    ul
        li 構造体の定義には<span class='lookat'>struct</span>を用いる
        li 構造体はmain関数の外に定義する
        li 関数とは違い、<span class='marker'>中括弧 { } </span>の後に<span class='lookat'>;</span>が必要

        highlight-code(lang='cpp').
            &nbsp;struct 構造体名 {
            &nbsp;    // メンバ変数
            &nbsp;}

            &nbsp;// 例
            &nbsp;struct person_data {
            &nbsp;    char name[20];
            &nbsp;    int age;
            &nbsp;    double height;
            &nbsp;    double weight;
            &nbsp;};
            &nbsp;int main() { ... }
        li ↑の例では<span class='lookat'>struct person_data</span>というデータ型が定義される
            | （<span class='marker'>person_data</span> が型ではないため注意する）
        li <span class='keyword'>メンバ変数</span>とは、<span class='marker'>構造体の中（関数の外）</span>で記述された変数のこと

        br
        li main関数内では以下のように使う
        highlight-code(lang='cpp').
            &nbsp;int main() {
            &nbsp;    struct 構造体名 変数名;

            &nbsp;    // 例
            &nbsp;    struct person_data person1;
            &nbsp;    person_data person2;   // エラー
            &nbsp;}

        br
        li structは主に<span class='lookat'>typedef</span>を使った宣言方法が使われる
            | （struct の付け忘れなどを防ぐためにtypedefを用いた定義方法を使うべき）
        highlight-code(lang='cpp').
            &nbsp;// typedef の例
            &nbsp;typedef int integer;

            &nbsp;integer num;   // num は int型と同じ
        li ↑のようにtypedefを使うと、<span class='marker'>int型</span>を<span class='marker'>integer型</span>として新しく定義できる

        br
        li これを利用して<span class='lookat'>struct person_data</span>を<span class='lookat'>person</span>として型を定義する
        highlight-code(lang='cpp').
            &nbsp;typedef struct 構造体名 {
            &nbsp;    // メンバ変数
            &nbsp;} 型名;

            &nbsp;// 例
            &nbsp;typedef struct person_data {
            &nbsp;    char name[20];
            &nbsp;        ...
            &nbsp;} person;

            &nbsp;int main() {
            &nbsp;    person person1;
            &nbsp;}
    br
    p.title 構造体の初期化 / アクセス
    ul
        li 宣言時だけ、<span class='lookat'>{ }</span>で一括で初期化できる
        li 構造体のメンバ変数は、structで宣言した<span class='lookat'>変数名.メンバ変数名</span>でアクセスする
            | （この<span class='lookat'>.</span>を<span class='marker'>ドット演算子</span>と呼ぶ）
        highlight-code(lang='cpp').
            &nbsp;typedef struct person_data {
            &nbsp;    char name[20];
            &nbsp;    int age;
            &nbsp;} person;

            &nbsp;int main() {
            &nbsp;    person aoba = { "涼風青葉", 18 };
            &nbsp;    person kou;
            &nbsp;    scanf("%s", kou.name);   // 八神コウ
            &nbsp;    scanf("%s", &kou.age);   // 25

            &nbsp;    printf("%s (%d)\n", aoba.name, aoba.age);
            &nbsp;    printf("%s (%d)\n", kou.name, kou.age);
            &nbsp;}
        .exec-result.
            八神コウ ↲
            25 ↲
            涼風青葉 (18)
            八神コウ (25)
        br


</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Structure extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#structure {}
</style>
