<template lang='pug'>
v-app#app
    v-navigation-drawer(app temporary v-model='drawer')
    v-menu(v-model='menu' :close-on-content-click='false' :nudge-width='250' offset-x)
        template(#activator='{ on: menu }')
            v-btn(color='#1565C0' dark v-on='{ ...menu }' fixed top left fab small)
                v-icon mdi-format-list-bulleted
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

    //- scroll to top
    v-fab-transition
        v-btn(v-scroll-to='"body"' color='pink' dark bottom right fixed fab small outline)
            v-icon mdi-chevron-up

    v-content#content
        router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected drawer = false;
    protected menu = false;
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    // background: transparent;
    background: linear-gradient(165deg, #f2f2f2 20%, #bcd9ff)


::-webkit-scrollbar
    width: 6px;

::-webkit-scrollbar-track
    background: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: inset 0 0 2px #777;

::-webkit-scrollbar-thumb
    background: #aaa;
    border-radius: 10px;
    box-shadow: none;

</style>
