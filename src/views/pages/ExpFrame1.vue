<template lang='pug'>
v-layout.exp-frame1(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        standard.my-3
        v-divider

        variable-type.my-3
        v-divider

        operate.my-3
        v-divider

        input-output.my-3
        v-divider

        br
        v-divider
        .prev-next-btn
            v-btn(v-scroll-to='"body"' :to='{ name: "Home" }' color='primary' flat) << prev. Home
            v-btn(v-scroll-to='"body"' :to='{ name: "exp-frame2" }' color='primary' flat) next. Exp-frame2 >>


</template>

<script lang='ts'>
/*
'@/components/explanation
*/

import { Component, Vue } from 'vue-property-decorator';

import Standard from '@/components/explanation/Standard.vue';
import VariableType from '@/components/explanation/VariableType.vue';
import Operate from '@/components/explanation/Operate.vue';
import InputOutput from '@/components/explanation/InputOutput.vue';

@Component({
    components: {
        Standard, VariableType,
        Operate, InputOutput,
    },
})
export default class ExpFrame1 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.exp-frame1 {}
</style>
