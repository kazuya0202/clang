<template lang='pug'>
v-layout.standard.grey.lighten-4(fill-height column)
    .main-pane.white.elevation-3
    //- 1
    .contents
        h3.question Question {{ counter() }}
        h2.prompt Hello, World!
        h4 {{ desc }}
        details
            summary answer example 1
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("Hello, World\n");
                |     return 0;
                | }
        details
            summary answer example 2
            code.code
                | {{ includeStr }}
                | int main() {
                |     puts("Hello, World");
                |     return 0;
                | }

    //- 2
    v-divider
    .contents
        h3.question Question {{ counter() }}
        h2.prompt こんにちは<br><br>今日はいい天気ですね
        h4 {{ desc }}<br>（ただし、文章の間は1行あけること）
        details
            summary answer example 1
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("こんにちは\n");
                |     printf("\n");
                |     printf("今日はいい天気ですね\n");
                |     return 0;
                | }
        details
            summary answer example 2
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("こんにちは\n\n今日はいい天気ですね\n");
                |     return 0;
                | }
    //- 3
    v-divider
    .contents
        h3.question Question {{ counter() }}
        h2.prompt 100 + 50 = 150
        h4 {{ desc }}<br>（変数を用いること）
        details
            summary answer example
            code.code
                | {{ includeStr }}
                | int main() {
                |     int x = 100;
                |     int y = 50; <br>
                |     printf("%d + %d = %d\n", x, y, x + y);
                |     return 0;
                | }

    //- 4
    v-divider
    .contents
        h3.question Question {{ counter() }}
        h2.prompt PI = 3.14
        h4 {{ desc }}<br>（変数を用いること. また、3.14の後に0が続いていてもよい）
        details
            summary answer example
            code.code
                | {{ includeStr }}
                | int main() {
                |     float pi = 3.14;
                |     // double pi = 3.14 でもよい <br>
                |     printf("PI = %f\n", pi);
                |     return 0;
                | }

    //- 5
    v-divider
    .contents
        h3.question Question {{ counter() }}
        h2.prompt 整数を入力してください<br>m = 10↲<br>n = 15↲<br><br>m + n = 25
        h4 {{ desc }}<br>（scanf関数を用いてプロンプトから値を入力する）
        details
            summary answer example
            code.code
                | {{ includeStr }}
                | int main() {
                |     int m, n;
                |     printf("整数を入力してください\n"); <br>
                |     scanf("%d", &m);
                |     scanf("%d", &n); <br>
                |     printf("m + n = %d\n", m + n);
                |     return 0;
                | }


</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class VariableTypeQues extends Vue {
    protected desc: string = 'と表示するプログラムを作成せよ';
    protected includeStr: string = '#include <stdio.h>';
    protected count: number = 0;

    protected counter = () => ++this.count;
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

// .standard
//     *
//         padding: 0.5rem



.contents
    text-align: left
    margin: 5px 10px
    background: #4DB6AC
    border-left: solid 7px orange
    border-right: solid 7px orange

.prompt
    margin: 0 .5rem
    border-radius: 10px
    background: black
    color: white
    font-size: 1.1rem

code
    overflow-x: auto

.code
    background: #263238
    color: white
    padding: 5px 20px
    font-size: 1.1rem

.question
    display: flex
    align-items: center
    font-style: oblique
    color: #FF1744

.question::after
    margin-left: 1.5rem
    border-top: solid 1px #FF1744
    content: ''
    flex-grow: 1


div::-webkit-scrollbar{
    width: 6px;
}
div::-webkit-scrollbar-track{
    background: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 2px #777;
}
div::-webkit-scrollbar-thumb{
    background: #aaa;
    border-radius: 10px;
    box-shadow: none;
}

</style>
