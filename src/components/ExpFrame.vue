<template lang='pug'>
v-layout.exp-frame(fill-height column)
    .main-pane.white.elevation-3
        standard
        variable-type
        operate
        io
        condition
        loop
        array



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
import Condition from '@/components/explanation/Condition.vue';
import Loop from '@/components/explanation/Loop.vue';
import Array from '@/components/explanation/Array.vue';


@Component({
    components: {
        Standard, VariableType,
        Operate, InputOutput,
        Condition, Loop,
        Array,
    },
})
export default class ExpFrame extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.exp-frame {}
</style>
