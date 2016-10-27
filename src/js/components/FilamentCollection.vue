<template>
    <div class="container">
        <div class="control has-addons" v-show="searchable == true">
            <input v-model="search"
                   type="text"
                   class="input is-large is-expanded"
                   placeholder="Enter a brand, product, or material"
                   v-focus="true">
            <button
                    class="button is-large"
                    :class="{'is-success':show_filters}"
                    @click="toggleFilterBox"
                    v-show="filterable"
                    :title="show_filters?'Clear filters':'Filter results'">
                <i class="fa" :class="{'fa-ban':show_filters, 'fa-filter':!show_filters}"></i>
            </button>
        </div>

        <div class="box is-success" v-show="show_filters && filterable">
            <div class="columns">
                <div class="column">
                    <b>Sorting</b>
                    <p class="control">
                      <span class="select is-fullwidth">
                        <select v-model="sort_mode">
                          <option value="default">Default</option>
                          <option value="alphabet">Alphabetical [A-Z]</option>
                          <option value="revchron">Chronological [Newest-Oldest]</option>
                        </select>
                      </span>
                    </p>
                </div>
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

        <collection-empty v-show="(browseable && filtered.length == 0) || (!browseable && filtered.length == 0 && search.length != 0)"></collection-empty>
    </div>
</template>
<script>
    var Filament = require('./FilamentSummary.vue');
    var CollectionEmpty = require('../partials/CollectionEmpty.vue');
    import {focus} from 'vue-focus';
    export default {
        props: ['items','searchable', 'filterable', 'browseable', 'featured'],
        components: {Filament, CollectionEmpty},
        directives: {focus},
        data () {
            return {
                search: '',
                show_filters: false,
                filter_material: '',
                filter_price: 200,
                filter_quality: 0,
                filter_strength: 0,
                sort_mode: 'default'
            }
        },
        computed: {
            filtered(){
                var searchable = this.items;
                var searched = [];
                var filtered = [];
                var sorted = [];

                //SEARCH
                if(this.search === "") {
                    if(this.browseable){
                        searched = searchable;
                    }else{
                        searched = [];
                    }
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

                //SORT
                if(this.sort_mode === 'revchron'){
                    //reverse chronological
                    sorted = this.revchronSorter(filtered);
                }else if(this.sort_mode === 'alphabet'){
                    //alphabetical
                    sorted = this.alphabeticalSorter(filtered);
                }else{
                    //default
                    sorted = this.featuredSorter(filtered);
                }

                return sorted;
            },

            materialOptions() {
                var possibilities = [];
                this.items.forEach(function(item){
                    if(possibilities.indexOf(item.material) === -1){
                        possibilities.push(item.material);
                    }
                });
                return possibilities.sort();
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
                this.sort_mode = 'default';
            },

            alphabeticalSorter(items){
                return items.sort(function(a, b){
                    if ( a.id < b.id )
                        return -1;
                    if ( a.id > b.id )
                        return 1;
                    return 0;
                });
            },

            revchronSorter(items){
                return items.reverse();
            },

            featuredSorter(items){
                items = this.alphabeticalSorter(items);

                if(this.search !== '' || this.featured == false)
                    return items;

                var featured = items.filter(function(element, index){
                    if(element.featured){
                        items.splice(index, 1);
                        return true;
                    }else{
                        return false;
                    }
                });

                var regular = items.reverse();

                return featured.concat(regular);
            }
        }
    }
</script>