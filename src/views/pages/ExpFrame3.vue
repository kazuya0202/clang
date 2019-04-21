<template lang='pug'>
v-layout.exp-frame3(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        character-type.my-3


        br
        v-divider
        .prev-next-btn
            v-btn(v-scroll-to='"body"' :to='{ name: "exp-frame2" }' color='primary' flat) << prev. Exp-frame2
            v-btn(v-scroll-to='"body"' :to='{ name: "exp-frame4" }' color='primary' flat) next. Exp-frame4 >>

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
