<template lang='pug'>
v-layout.ques-frame1(fill-height column)
    .main-pane.white.elevation-3
        input-output-ques

</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import vueScroll from 'vue-scrollto';

import InputOutputQues from '@/components/question/InputOutput-ques.vue';

@Component({
    components: {
        InputOutputQues,
    },
})
export default class QuesFrame1 extends Vue {

    protected scrollTopTo = (rooter: string) => {
        this.$scrollTo('body');
        this.$router.push({name: rooter})
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.ques-frame1 {}
</style>
