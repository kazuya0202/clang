<template lang='pug'>
v-layout#Home.grey.lighten-4(fill-height column)
    .main-pane.white.elevation-3
        standard

        br
        v-divider

        std-exp
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Standard from '@/components/Standard.vue';
import StdExp from '@/components/StdExp.vue';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
    components: {
        Standard, StdExp, HelloWorld,
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
