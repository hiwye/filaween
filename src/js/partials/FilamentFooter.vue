<template>
    <div class="control is-grouped is-vertical">
        <a class="button" :class="{'is-info':isFavourite(item.id)}" @click="toggleFavourite(item.id)">
            <i class="fa fa-star"></i> &nbsp; <b>Star</b>
        </a>
        <router-link class="button" :to="'/browse/'+item.id" active-class="is-hidden">
            <i class="fa fa-search"></i> &nbsp; <b>Details</b>
        </router-link>
        <a class="button" :href="item.links.video" data-lity>
            <i class="fa fa-play"></i> &nbsp; <b>Watch video</b>
        </a>
        <a class="button" :href="item.links.purchase" target="_blank" v-show="item.links.purchase">
            <i class="fa fa-shopping-cart"></i> &nbsp; <b>Purchase online</b>
        </a>
    </div>
</template>
<script>
    var ManagesFavourites = require('../mixins/ManagesFavourites.js');
    export default {
        props: ['item'],
        mixins: [ManagesFavourites]
    }
</script>