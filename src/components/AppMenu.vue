<template lang='pug'>
.app-menu
    v-menu(v-model='menu' :close-on-content-click='false' :nudge-width='250' offset-x)
    template(#activator='{ on: menu }')
        // slot
        v-btn(v-scroll-to='"body"' color='pink' dark bottom right fixed fab small outline)
            v-icon mdi-chevron-up
    v-list(class='scroll-y' style='max-height: 80vh')
        v-list-tile(:to='{ name: "Home" }' v-scroll-to='"body"'
                    prepend-icon='mdi-home' @click='menu = false')
            v-list-tile-action
                v-icon mdi-home
            v-list-tile-content
                v-list-tile-title.font-weight-black.font-italic Home

        v-divider

        v-list-group(v-for='item in $store.state.comment' :key='item.title'
                    v-model='item.active' :prepend-icon='item.action' no-action)
            template(v-slot:activator)
                v-list-tile(color='green' dark)
                    v-list-tile-content
                        v-list-tile-title.font-weight-black {{ item.title }}ページ

            v-list-tile(v-for='subItem in item.items' :key='subItem.title'
                        :to='{name: subItem.name}' @click='menu = false'
                        v-scroll-to='"body"')
                v-list-tile-action
                    v-icon mdi-rhombus-medium
                v-list-tile-content
                    v-list-tile-title {{ subItem.title }}
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppMenu extends Vue {
    protected menu = false;
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.app-menu {}
</style>
