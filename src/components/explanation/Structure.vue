<template lang='pug'>
#structure
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Structure extends Vue {}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';
@require '~@/components/stylus-pane/exp-main.styl';
@require '~@/components/stylus-pane/table.styl';

#structure {}
</style>
