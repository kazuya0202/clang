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
                            v-scroll-to='`${subItem.id}`')
                    v-list-tile-action
                        v-icon mdi-rhombus-medium
                    v-list-tile-content
                        v-list-tile-title {{ subItem.title }}

    //- scroll to top
    v-fab-transition
        section
            v-btn(v-scroll-to='"body"' color='pink' dark bottom right fixed fab small outline)
                v-icon mdi-chevron-up



    //- 左上のでもできるから今はほっとく（あとでやるかも
    //- scroll to each element
    //- v-menu(v-model='menuFab' :close-on-content-click='false' :nudge-width='250')
        template(#activator='{ on: menuFab }')
            v-btn(color='pink' dark v-on='{ ...menuFab }' fixed bottom right fab small outline style='margin-bottom: 50px')
                v-icon mdi-vector-arrange-above
        v-list(class='scroll-y' style='max-height: 80vh')
            v-list-tile(:to='{ name: "Home" }' v-scroll-to='"body"'
                        @click='menuFab = false')
                v-list-tile-action
                    v-icon mdi-home
                v-list-tile-content
                    v-list-tile-title.font-weight-black.font-italic Home
            v-divider

            div(v-if='currentExp() === 0')
                //- 解説ページなら
                v-list-tile(@click='menuFab = false'
                            v-for='subItem in $store.state.comment[0].items'
                            :key='subItem.title' v-scroll-to='`${subItem.id}`')
                    v-list-tile-action
                        v-icon mdi-rhombus-medium
                    v-list-tile-content
                        v-list-tile-title {{ subItem.title }}
            div(v-else-if='currentExp() === 1' )
                //- 問題ページなら
                v-list-tile(@click='menuFab = false'
                            v-for='subItem in $store.state.comment[1].items'
                            :key='subItem.title' v-scroll-to='`${subItem.id}`')
                    v-list-tile-action
                        v-icon mdi-rhombus-medium
                    v-list-tile-content
                        v-list-tile-title {{ subItem.title }}


    v-content#content
        router-view



</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected drawer = false;
    protected menu = false;
    protected menuFab = false;

    protected curExp = false;


    // 今どのページにいるか
    // exp -> 0 / ques -> 1 / Home -> 2
    protected currentExp = () =>
        (location.href.indexOf('exp') !== -1) ? 0
        : (location.href.indexOf('ques') !== -1) ? 1 : 2
}
</script>

<style lang='stylus'>
@require '~@/assets/styles/entry/_app.styl';

#app
    // background: transparent;
    background: linear-gradient(100deg, #f2f2f2 20%, #bcd9ff)

::-webkit-scrollbar
    width: 6px
    height: 4px

::-webkit-scrollbar-track
    background: #fff
    border: none
    border-radius: 10px
    box-shadow: inset 0 0 2px #777

::-webkit-scrollbar-thumb
    background: #aaa
    border-radius: 10px
    box-shadow: none

</style>
