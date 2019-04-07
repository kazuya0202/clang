<template lang='pug'>
.stdio
    .container
        h1 C言語 練習問題集
        h3(style='text-align: right') 編集: ほとここあ
        br
        h2.title 1. 標準出力

    //- 1
    .contents
        h3.question Question {{ counter() }}
        h2.prompt Hello, World!
        h4 {{ desc }}
        details
            summary answer 1
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("Hello, World\n");
                |     return 0;
                | }
        details
            summary answer 2
            code.code
                | {{ includeStr }}
                | int main() {
                |     puts("Hello, World");
                |     return 0;
                | }

    //- separate
    br
    v-divider

    //- 2
    .contents
        h3.question Question {{ counter() }}
        h2.prompt こんにちは<br><br>今日はいい天気ですね
        h4 {{ desc }}<br>（ただし、文章の間は1行あけること）
        details
            summary answer 1
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("こんにちは\n");
                |     printf("\n");
                |     printf("今日はいい天気ですね\n");
                |     return 0;
                | }
        details
            summary answer 2
            code.code
                | {{ includeStr }}
                | int main() {
                |     printf("こんにちは\n\n今日はいい天気ですね\n");
                |     return 0;
                | }

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Stdio extends Vue {
    protected desc: string = 'と表示するプログラムを作成せよ';
    protected includeStr: string = '#include <stdio.h>';
    protected iterator: number = 0;


    protected counter = () => {
        this.iterator++;
        return this.iterator;
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.stdio
    *
        padding: 0.4rem

    .container
        text-align: center

.title
    width: 80%
    margin: auto
    border-radius: 20px
    background: #CE93D8
    font-weight: bold

.contents
    text-align: left
    margin: 5px 10px
    background: #4DB6AC
    border-left: solid 7px orange
    border-right: solid 7px orange

.prompt
    margin: auto
    border-radius: 10px
    background: black
    color: white
    font-size: 1.1rem

.code
    background: #263238
    color: white
    padding: 5px 20px
    font-size: 1.1rem

.question
    font-style: oblique
    color: #FF1744
    // text-decoration: underline
    text-shadow: white

</style>
