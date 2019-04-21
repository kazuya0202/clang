<template lang='pug'>
#character-type
    .unit-title
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-5.py-3.title.font-weight-bold 文字

    p.title 文字型
    ul
        li 文字通り、文字を扱う型のこと
        li 文字は、<span class='keyword'>アスキー(ASCII)コード</span>で<span class='marker'>数値と文字を関連付けて</span>管理されている

        .caption &emsp;&emsp;文字型の使い方
        code.code
            | char c;
            | char c2 = 'a';

        | <br><br>
        li <span class='lookat'>char</span>型に代入できる値は、
            | <span class='marker'>10進数の数値</span>または<span class='marker'>シングルクォート( " )で囲まれた1文字</span>
        li 文字の表示 / 入力には<span class='lookat'>%c</span>を用いる

        code.code
            | printf("%c\n", 'a');
            | printf("%c = %d\n", 'a', 'a');
            | printf("%c = %d\n", 97, 97);
        .exec-result
            | a <br>
            | a = 97 <br>
            | a = 97 <br>

        li アスキーコードで管理されているため、<span class='lookat'>%d</span>に<span class='lookat'>'a'</span>に渡すと10進数で表示される（同様にその逆も可能）
    br

    details.px-3.py-1.light-green.lighten-3
        summary アスキーコードの表をプロンプトに表示してみよう
        .details-center
            code.code
                | // これまた追記予定
    br

    p.title 大文字 ⇄ 小文字
    ul
        li アスキーコードでは、<span class='lookat'>大文字(A~Z) < 小文字(a~z)</span>である
        li アルファベットはそれぞれ連続しているため<span class='lookat'>小文字－大文字</span>分の数字を増やすことで「大文字 → 小文字」
            | 減らすことで「小文字 → 大文字」に変換できる（ただし、共通の文字 (a:A / z:Z) である必要がある）
        .table-general.scrollable
            table(border=1)
                tr
                    th 変換
                    th(colspan=2) 式
                tr
                    td 大文字(A)→ 小文字(a)
                    td A + ('a' - 'A')
                    td A + 32
                tr
                    td 小文字(a)→ 大文字(A)
                    td a - ('a' - 'A')
                    td a - 32
        br
        li 大文字－小文字は<span class='lookat'>32</span>一定のため↑のようにもかける
    br

    p.title 文字列（文字の配列）
    ul
        li 文字型の配列を用いることで表現する
            | （そのため、厳密な意味では文字列〔String〕ではなく文字の配列）

        li 宣言 / 初期化は以下の通り
        code.code
            | char 変数名[要素数];
            |
            | // 例
            | char str[20];
            | char name[8] = "abcde";
            |
            | scanf("%s", str);
            | scanf("%s", &str);   // ×

        li 宣言時に<span class='marker'>ダブルクォート( " )</span>で囲むと初期化できる
        li 表示 / 入力には、<span class='lookat'>%s</span>を用いる
            | <br>&emsp;&emsp;また、添え字はつけない（つけると1文字になってしまうから）
        li <span class='lookat'>scanf()</span>の時、変数に<span class='lookat'>&</span>はつけない
            | <br>&emsp;&emsp;なぜ必要ないのかは topics として追記予定

        .table-array.scrollable
            table(border=1)
                caption.caption ● nameの構造
                tr
                    th(rowspan=2).bg name
                    th [0]
                    th [1]
                    th [2]
                    th [3]
                    th [4]
                    th [5]
                    th [6]
                    th [7]
                tr
                    td 'a'
                    td 'b'
                    td 'c'
                    td 'd'
                    td 'e'
                    td '\0'
                    td '\0'
                    td '\0'
        br

        li 初期化した場所以外は<span class='lookat'>\0 (NULL)</span>が挿入される
        li 文字の配列の最後は末尾であることを知らせる<span class='lookat'>'\0'</span>が必要
    br

    p.title 文字の配列と繰り返し
    ul
        li 配列と同じように繰り返しを使って、すべての要素に変更を加えることができる
        li ただしint型などとは違い、文字の配列の場合は要素数に余裕を持つことが多いため、要素数-1まで繰り返すと値のない要素('\0')なども変更してしまう
        br
        li そこで文字の配列では末尾の<span class='lookat'>'\0'</span>まで、すなわち<span class='lookat'>'\0'でない間</span>繰り返す

        .caption.text-xs-center 例：すべての文字を大文字にする
        code.code
            | int i;
            | char str[10] = "Abc";
            |
            | '\0'でない間繰り返す
            | for (i = 0; str[i] != '\0'; i++) {
            |     // 小文字なら
            |     if (str[i] >= 'a' && str[i] <= 'z')
            |         str[i] -= 32;
            | }
            | printf("%s\n", str);
        .exec-result
            | ABC
    br



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class CharacterType extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#character-type {}
</style>
