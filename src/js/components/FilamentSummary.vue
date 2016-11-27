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
                    <div class="columns is-desktop">
                        <div class="column">
                            <filament-header :item="item"></filament-header>
                            <div class="level">
                                <div class="level-item has-text-centered">
                                    <p class="heading">Retail Price per kg</p>
                                    <p class="title">{{item.price_per_kg||'n/a'}} €</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Overall Quality</p>
                                    <p class="title">{{quality}}/20</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Rated Strength</p>
                                    <p class="title">{{pullStrength}}</p>
                                </div>
                                <div class="level-item has-text-centered">
                                    <p class="heading">Ease of use</p>
                                    <p class="title">{{item.ease_of_use?item.ease_of_use+'/5':'n/a'}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="column is-2-desktop">
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
        components: {FilamentHeader, FilamentColumns, FilamentFooter},
        computed: {
            quality(){
                return Score.quality(this.item);
            },
            pullStrength(){
                return Score.pullStrength(this.item);
            }
        }
    }
</script>