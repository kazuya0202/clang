<template lang='pug'>
v-layout#Home.grey.lighten-4(fill-height column)
    .main-pane.white.elevation-3
        // v-btn(:to='{ name: "standard-exp"}' color='purple') press to [ standard-exp ]

        standard

        br
        v-divider

        standard-exp
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Standard from '@/components/Standard.vue';
import StandardExp from '@/components/StandardExp.vue';

@Component({
    components: {
        Standard, StandardExp,
    },
})
export default class Home extends Vue {}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_view.styl';

html
    scroll-view: true;
    // static-view: true;

#Home
    .main-pane
        min-height: 100%;
        width: 100%; max-width: 600px;
        margin-left: auto; margin-right: auto;
        padding: 3rem 2rem;


</style>
