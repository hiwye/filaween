<template>
    <section class="section">
        <div class="container">
            <div class="control" v-show="searchable == true">
                <input v-model="search" type="text" class="input is-large" placeholder="Search" autofocus>
            </div>

            <filament v-for="item in filtered" :item="item"></filament>

            <collection-empty v-show="filtered.length == 0"></collection-empty>
        </div>
    </section>
</template>
<script>
    var Filament = require('./Filament.vue');
    var CollectionEmpty = require('../partials/CollectionEmpty.vue');
    export default {
        props: ['items','searchable','filterable'],
        components: {Filament, CollectionEmpty},
        data () {
            return {
                search: ''
            }
        },
        computed: {
            filtered(){
                var searchable = this.items;
                var searched = [];
                var filtered = [];

                //SEARCH
                if(this.search === "") {
                    searched = searchable;
                }else {
                    var searchQuery = this.search.toLowerCase();
                    searchable.forEach(function (item) {
                        var matchingString = [item.brand,item.product,item.material].join(' ').toLowerCase();
                        if(matchingString.indexOf(searchQuery) !== -1){
                            searched.push(item);
                        }
                    });
                }

                //FILTER
                // Still work in progress
                filtered = searched;

                return filtered;
            }
        }
    }
</script>