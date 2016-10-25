<template>
    <section class="section">
        <div class="container">
            <div class="content has-text-centered">
                <h1 class="title is-2">
                    Search for filaments or just <a @click="$emit('view','all')">browse</a>.
                </h1>
            </div>
        </div>
        <filament-collection searchable="1" featured="1" :items="filaments"></filament-collection>
    </section>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    export default {
        components: {FilamentCollection},
        props: ['filaments']
    }
</script>