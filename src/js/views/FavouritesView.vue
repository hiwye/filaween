<template>
    <filament-collection searchable="0" filterable="1" v-bind:items="favourites"></filament-collection>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    var ManagesFavourites = require('../mixins/ManagesFavourites.js');
    export default {
        components: {FilamentCollection},
        props: ['filaments'],
        mixins: [ManagesFavourites],
        computed: {
            favourites(){
                var items = [];
                var that = this;

                this.filaments.forEach(function(item) {
                    if(that.isFavourite(item.id)){
                        items.push(item);
                    }
                });

                return items;
            }
        }
    }
</script>