<template>
    <nav class="level">
        <div class="level-left">
            <p class="level-item">
                <a class="button" v-bind:class="{'is-danger':isFavourite(item.id)}" v-on:click="toggleFavourite(item.id)">
                    <i class="fa fa-heart"></i>
                </a>
            </p>
        </div>
        <div class="level-right">
            <p class="level-item">
                <a class="button is-dark" :href="item.links.video" data-lity>Watch video</a>
                <a class="button is-info" v-show="item.links.purchase" :href="item.links.purchase" target="_blank">Purchase online</a>
            </p>
        </div>
    </nav>
</template>
<script>
    var ManagesFavourites = require('../mixins/ManagesFavourites.js');
    export default {
        props: ['item'],
        mixins: [ManagesFavourites]
    }
</script>