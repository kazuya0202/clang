<template lang='pug'>
v-layout.exp-frame3(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        character-type



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import CharacterType from '@/components/explanation/CharacterType.vue';

@Component({
    components: {
        CharacterType,
    },
})
export default class ExpFrame3 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.exp-frame3 {}
</style>
