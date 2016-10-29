<template>
    <section class="section navsection">
        <div class="container">
            <div class="tabs is-centered">
                <ul class="is-left">
                    <router-link v-for="(item, key) in items" :to="key" tag="li" active-class="is-active">
                        <a>{{item}}</a>
                    </router-link>
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
                    '/home': "Home",
                    '/browse': "Browse",
                    '/stars': "My Stars",
                    '/guide': "Material Guide",
                    '/info': "About"
                }
            }
        }
    }
</script>