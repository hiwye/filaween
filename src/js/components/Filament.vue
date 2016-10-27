<template>
    <div class="box" :class="{featured:item.featured}">
        <article class="media">
            <div class="media-left">
                <figure class="image is-128x128">
                    <a :href="'./assets/filament-images/'+item.id+'.png'" data-lity>
                        <img :src="'./assets/filament-images/'+item.id+'.png'" :alt="'Image of '+item.brand+' '+item.product">
                    </a>
                </figure>
                <filament-footer :item="item"></filament-footer>
            </div>
            <div class="media-content">
                <div class="content">
                    <filament-header :item="item"></filament-header>
                    <filament-columns :item="item"></filament-columns>
                </div>
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