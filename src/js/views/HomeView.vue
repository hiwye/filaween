<template>
    <div>
        <div class="container">
            <div class="content has-text-centered">
                <h1 class="title is-2">
                    Search for filaments or just <router-link to="/browse">browse</router-link>.
                </h1>
            </div>
        </div>
        <filament-collection searchable="1" filterable="0" featured="1" :items="filaments"></filament-collection>
        <br>
        <div class="container">
            <div class="columns">
                <div class="column is-2 is-offset-3 has-text-centered">
                    <h4 class="title is-4">New to choosing materials?</h4>
                    <p class="content">
                        Check out our free <router-link to="guide" class="has-inherit">filament guide</router-link>.
                    </p>
                </div>
                <div class="column is-2 has-text-centered">
                    <h4 class="title is-4">Explore new filaments</h4>
                    <p class="content">
                        <router-link to="browse" class="has-inherit">Explore</router-link> the vast world of filament materials.
                    </p>
                </div>
                <div class="column is-2 has-text-centered">
                    <h4 class="title is-4">Our testing procedures</h4>
                    <p class="content">
                        Learn more about our <a href="https://www.youtube.com/watch?v=YcQHbaVeD7I" class="has-inherit" data-lity>testing and scoring procedures</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    export default {
        components: {FilamentCollection},
        props: ['filaments']
    }
</script>