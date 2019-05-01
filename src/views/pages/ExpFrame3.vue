<template lang='pug'>
v-layout.exp-frame3(fill-height column)
    .main-pane.white.elevation-3
        h1.exp-top 解説ページ
        character-type.my-3

        function.my-3

        br
        v-divider
        .prev-next-btn
            v-btn(:to='{name: "exp-frame2"}' color='primary' flat) << prev. Exp-frame2
            v-btn(:to='{name: "exp-frame4"}' color='primary' flat) next. Exp-frame4 >>

            //- v-btn(@click='scrollTopTo("exp-frame2")' color='primary' flat) << prev. Exp-frame2
            //- v-btn(@click='scrollTopTo("exp-frame4")' color='primary' flat) next. Exp-frame4 >>

//-
    :to='{ name: "exp-frame2" }'
    :to='{ name: "exp-frame4" }'
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import CharacterType from '@/components/explanation/CharacterType.vue';
import Function from '@/components/explanation/Function.vue';

@Component({
    components: {
        CharacterType, Function,
    },
})
export default class ExpFrame3 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';

.exp-frame3 {}
</style>
