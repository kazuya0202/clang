<template lang='pug'>
.standard-explanation
	h1 解説ページ
	h3 fjaoei
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StandardExplanation extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.standard-explanation {}
</style>
