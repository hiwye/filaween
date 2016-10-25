<template>
    <div>
        <br>
        <a class="button is-fullwidth" :class="{'is-info':isFavourite(item.id)}" @click="toggleFavourite(item.id)">
            <i class="fa fa-star"></i> &nbsp; Star
        </a>
        <br>
        <a class="button is-dark is-fullwidth" :href="item.links.video" data-lity>
            Watch video
        </a>
        <br>
        <a class="button is-info is-fullwidth" :href="item.links.purchase" target="_blank" v-show="item.links.purchase">
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