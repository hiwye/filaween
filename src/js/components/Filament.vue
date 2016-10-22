<template>
    <div class="box">
        <article class="media">
            <div class="media-left is-hidden-mobile">
                <figure class="image is-128x128">
                    <img v-bind:src="'./assets/filament-images/'+item.id+'.png'" v-bind:alt="'Image of '+item.brand+' '+item.product">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong class="title">{{item.brand+' '+item.product}}</strong>
                        <span>({{item.material}})</span>
                    </p>
                    <filament-columns :item="item"></filament-columns>
                </div>
                <filament-footer :item="item"></filament-footer>
            </div>
        </article>
    </div>
</template>
<script>
    var FilamentColumns = require('../partials/FilamentColumns.vue');
    var FilamentFooter = require('../partials/FilamentFooter.vue');
    export default {
        props: ['item'],
        components: {FilamentColumns, FilamentFooter}
    }
</script>