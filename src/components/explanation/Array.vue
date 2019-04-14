<template lang='pug'>
v-layout.array-exp(fill-height column)
    .main-pane.white.elevation-3
        p.title あぁ＾～心がぴょんぴょんするんじゃぁ＾～
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ArrayExp extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.array-exp {}
</style>
