<template lang='pug'>
#exp-frame4(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        structure.my-3




        br
        v-divider
        .prev-next-btn
            v-btn(:to='{name: "exp-frame3"}' color='primary' flat) << prev. Exp-frame3

            //- v-btn(@click='scrollTopTo("exp-frame3")' color='primary' flat) << prev. Exp-frame3
            //- v-btn( :to='{ name: "exp-frame2" }' color='primary' flat) next. Exp-frame2 >>

//-
    :to='{ name: "exp-frame3" }'
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Structure from '@/components/explanation/Structure.vue';

@Component({
    components: {
        Structure,
    },
})
export default class ExpFrame4 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

#exp-frame4 {}
</style>
