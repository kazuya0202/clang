<template lang='pug'>
v-layout.input-output-ques

    .unit-title#io-ques
        v-chip(color='#CE93D8' text-color='#7B1FA2' selected outline).px-4 入出力
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
export default class InputOutputQues extends Vue {
    protected desc: string = 'と表示するプログラムを作成せよ';
    protected includeStr: string = '#include <stdio.h>';
    protected count: number = 0;

    protected counter = () => ++this.count;
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/ques-main.styl';

.input-output-ques {}
</style>
