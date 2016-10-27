<template>
    <div class="box" :class="{featured:item.featured}">
        <article class="media">
            <div class="media-left">
                <figure class="image is-128x128">
                    <a :href="'./assets/filament-images/'+item.id+'.png'" data-lity>
                        <img :src="'./assets/filament-images/'+item.id+'.png'" :alt="'Image of '+item.brand+' '+item.product">
                    </a>
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <div class="columns">
                        <div class="column">
                            <filament-header :item="item"></filament-header>
                            <div class="level">
                                <div class="level-item has-text-centered">
                                    <p class="heading">Retail Price per kg</p>
                                    <p class="title">{{item.price_per_kg||'n/a'}} €</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Overall Quality</p>
                                    <p class="title">{{item.quality.rated}}/20</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Rated Strength</p>
                                    <p class="title">{{item.strength.rated}} kg</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Ease of use</p>
                                    <p class="title">{{item.ease_of_use}}/5</p>
                                </div>
                            </div>
                        </div>
                        <div class="column is-2">
                            <filament-footer :item="item"></filament-footer>
                        </div>
                    </div>
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