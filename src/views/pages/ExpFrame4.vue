<template lang='pug'>
#exp-frame4(fill-height column)
    .main-pane.white.elevation-3
        structure.my-3


</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Structure from '@/components/explanation/Structure.vue';

@Component({
    components: {
        Structure
    },
})
export default class ExpFrame4 extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

#exp-frame4 {}
</style>
