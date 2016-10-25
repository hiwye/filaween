<template>
    <section class="section">
        <filament-collection searchable="1" filterable="1" browseable="1" featured="1" :items="filaments"></filament-collection>
    </section>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    export default {
        components: {FilamentCollection},
        props: ['filaments']
    }
</script>