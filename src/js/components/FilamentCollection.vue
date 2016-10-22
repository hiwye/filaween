<template>
    <section class="section">
        <div class="container">
            <div class="control has-addons" v-show="searchable == true">
                <input v-model="search" type="text" class="input is-large is-expanded" placeholder="Search" autofocus>
                <button class="button is-large" v-bind:class="{'is-success':show_filters}" v-on:click="toggleFilterBox">
                    <i class="fa" v-bind:class="{'fa-ban':show_filters, 'fa-filter':!show_filters}"></i>
                </button>
            </div>

            <div class="box is-success" v-show="show_filters">
                <div class="columns">
                    <div class="column">
                        <b>Material</b>
                        <p class="control">
                          <span class="select is-fullwidth">
                            <select v-model="filter_material">
                              <option value="">Any</option>
                              <option :value="option" v-for="option in materialOptions">{{option}}</option>
                            </select>
                          </span>
                        </p>
                    </div>
                    <div class="column">
                        <b>Maximum Price</b> [€ per kg]
                        <p class="control">
                            <input type="number" class="input" v-model="filter_price" min="0" max="200" step="5">
                        </p>
                    </div>
                    <div class="column">
                        <b>Minimum Overall Quality</b> [0-20]
                        <p class="control">
                            <input type="number" class="input" v-model="filter_quality" min="0" max="20">
                        </p>
                    </div>
                    <div class="column">
                        <b>Minimum Rated Strength</b> [kg]
                        <p class="control">
                            <input type="number" class="input" v-model="filter_strength" min="0" max="200" step="10">
                        </p>
                    </div>
                </div>
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
        props: ['items','searchable'],
        components: {Filament, CollectionEmpty},
        data () {
            return {
                search: '',
                show_filters: false,
                filter_material: '',
                filter_price: 200,
                filter_quality: 0,
                filter_strength: 0
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
                var that = this;
                searched.forEach(function (item) {
                    if(
                            that.matchingFilter(that.filter_material, item.material) &&
                            that.maximumFilter(that.filter_price, item.price_per_kg) &&
                            that.minimumFilter(that.filter_quality, item.quality.rated) &&
                            that.minimumFilter(that.filter_strength, item.strength.rated)
                    ){
                        filtered.push(item);
                    }
                });

                return filtered;
            },

            materialOptions() {
                var possibilities = [];
                this.items.forEach(function(item){
                    if(possibilities.indexOf(item.material) === -1){
                        possibilities.push(item.material);
                    }
                });
                return possibilities;
            }
        },
        methods: {
            matchingFilter(selected, actual){
                if(selected === '') {
                    return true;
                }
                return selected === actual;
            },

            maximumFilter(selected, actual){
                return selected >= actual;
            },

            minimumFilter(selected, actual){
                return selected <= actual;
            },

            toggleFilterBox(){
                if(this.show_filters){
                    this.show_filters = false;
                    this.resetFilters();
                }else{
                    this.show_filters = true;
                }
            },

            resetFilters(){
                this.filter_material = '';
                this.filter_price = 200;
                this.filter_quality = 0;
                this.filter_strength = 0;
                this.show_filters = false;
            }
        }
    }
</script>