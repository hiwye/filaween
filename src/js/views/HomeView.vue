<template>
    <section class="section">
        <div class="container">
            <div class="content has-text-centered">
                <h1 class="title is-2">
                    Search for filaments or just <router-link to="/browse">browse</router-link>.
                </h1>
            </div>
        </div>
        <filament-collection searchable="1" filterable="0" featured="1" :items="filaments"></filament-collection>
    </section>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    export default {
        components: {FilamentCollection},
        props: ['filaments']
    }
</script>