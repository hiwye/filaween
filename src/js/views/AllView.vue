<template>
    <filament-collection searchable="1" featured="1" :items="filaments"></filament-collection>
</template>
<script>
    var FilamentCollection = require('../components/FilamentCollection.vue');
    export default {
        components: {FilamentCollection},
        props: ['filaments']
    }
</script>