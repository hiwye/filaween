<template>
    <div class="container">
        <div class="content">
            <h2 class="title">Material Guide</h2>

            <div class="notification">
                <b>New to 3D-Printing in General?</b>
                Learn everything about the topic using Thomas Sanladerer's excellent
                <a href="https://www.youtube.com/watch?v=jpAlrM5OyeQ">beginner videos</a>.
            </div>

            <div class="columns is-multiline">
                <div class="column is-one-quarter" v-for="item in guide">
                    <div class="card is-fullheight">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="'./assets/guide-images/'+item.id+'.png'" :alt="'Image of '+item.title+' filament'">
                            </figure>
                        </div>
                        <div class="card-content">
                            <p class="title is-4">{{item.title}}</p>
                            <p class="subtitle is-6">{{item.claim}}</p>
                            <div class="content">
                                {{item.description}}
                                <br>
                                <small v-show="item.nozzle_temperature">Prints at {{item.nozzle_temperature}} °C</small><br>
                                <small v-show="item.bed_temperature">Bed temp. is {{item.bed_temperature}} °C{{item.bed_required?'':', but is not required'}}</small>
                            </div>
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