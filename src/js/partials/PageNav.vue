<template>
    <section class="section navsection">
        <div class="container">
            <div class="tabs is-centered">
                <ul class="is-left">
                    <li @click="$emit('view',key)" :class="{'is-active':view==key}" v-for="(item, key) in items"><a>{{item}}</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['view'],
        data () {
            return {
                items: {
                    home: "Home",
                    all: "Browse",
                    favourites: "My Stars",
                    info: "Info & Credits"
                }
            }
        }
    }
</script>