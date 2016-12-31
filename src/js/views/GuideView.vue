<template>
    <div class="container">
        <div class="content">
            <h2 class="title">Material Guide</h2>

            <div class="notification">
                <b>New to 3D-Printing in General?</b>
                Learn everything about the topic using Thomas Sanladerer's excellent
                <a href="https://www.youtube.com/watch?v=jpAlrM5OyeQ">beginner videos</a>.
            </div>

            <div class="box" v-for="item in guide">
                <div class="media">
                    <figure class="media-left">
                        <p class="image is-128x128">
                            <img :src="'./assets/filament-images/'+item.image+'.png'" :alt="'Image of '+item.title+' filament'">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <h3 class="title is-5">
                                <b>{{item.title}}</b>
                                - {{item.claim}}
                            </h3>
                            <p>
                                {{item.description}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['guide']
    }
</script>