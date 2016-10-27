<template>
    <div class="control is-grouped is-vertical">
        <a class="button" :class="{'is-info':isFavourite(item.id)}" @click="toggleFavourite(item.id)">
            <i class="fa fa-star"></i> &nbsp; <b>Star</b>
        </a>
        <router-link class="button is-dark" :to="'/browse/'+item.id" active-class="is-hidden">
            <i class="fa fa-search"></i> &nbsp; <b>Details</b>
        </router-link>
        <a class="button is-dark" :href="item.links.video" data-lity>
            <i class="fa fa-play"></i> &nbsp; Watch video
        </a>
        <a class="button is-dark" :href="item.links.purchase" target="_blank" v-show="item.links.purchase">
            Purchase online
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