<template lang='pug'>
v-layout.exp-frame2(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        condition.my-3
        v-divider

        loop.my-3
        v-divider

        array.my-3

        br
        v-divider
        .prev-next-btn
            v-btn(v-scroll-to='"body"' :to='{ name: "exp-frame1" }' color='primary' flat) << prev. Exp-frame1
            v-btn(v-scroll-to='"body"' :to='{ name: "exp-frame3" }' color='primary' flat) next. Exp-frame3 >>

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Condition from '@/components/explanation/Condition.vue';
import Loop from '@/components/explanation/Loop.vue';
import Array from '@/components/explanation/Array.vue';

@Component({
    components: {
        Condition, Loop,
        Array,
    },
})
export default class ExpFrame2 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.exp-frame2 {}
</style>
