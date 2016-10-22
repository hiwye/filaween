<template>
    <div class="columns">
        <div class="column">
            <strong class="title">{{item.brand+' '+item.product}}</strong>
            <span>({{item.material}})</span>
        </div>
        <div class="column is-one-quarter has-text-right" v-show="item.featured">
            <b class="tag is-warning is-medium">Featured!</b>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>