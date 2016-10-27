<template>
    <section class="section">
        <div class="container">
            <div class="control">
                <a @click="$router.go(-1)" class="button">
                    Go back
                </a>
            </div>

            <filament :item="filament" v-if="filament"></filament>
            <collection-empty v-else></collection-empty>
        </div>
    </section>
</template>
<script>
    var Filament = require('../components/Filament.vue');
    var CollectionEmpty = require('../partials/CollectionEmpty.vue');
    export default {
        components: {Filament, CollectionEmpty},
        props: ['filaments'],
        computed: {
            filament() {
                var id = this.$route.params.id;
                var filament = this.filaments.find(function(item){
                    return item.id === id;
                });

                if(typeof filament !== 'undefined'){
                    return filament;
                }
            }
        }
    }
</script>