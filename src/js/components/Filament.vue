<template>
    <div class="box" v-bind:class="{featured:item.featured}">
        <article class="media">
            <div class="media-left is-hidden-mobile">
                <figure class="image is-128x128">
                    <img v-bind:src="'./assets/filament-images/'+item.id+'.png'" v-bind:alt="'Image of '+item.brand+' '+item.product">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <filament-header :item="item"></filament-header>
                    <filament-columns :item="item"></filament-columns>
                </div>
                <filament-footer :item="item"></filament-footer>
            </div>
        </article>
    </div>
</template>
<script>
    var FilamentHeader = require('../partials/FilamentHeader.vue');
    var FilamentColumns = require('../partials/FilamentColumns.vue');
    var FilamentFooter = require('../partials/FilamentFooter.vue');
    export default {
        props: ['item'],
        components: {FilamentHeader, FilamentColumns, FilamentFooter}
    }
</script>