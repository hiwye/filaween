<template>
    <div class="placement">
        <div v-if="location === 'sidebar_left'">
            <!-- Skyscraper Left -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2111611078102983"
                 data-ad-slot="7250078958"
                 data-ad-format="auto"></ins>
        </div>
        <div v-if="location === 'sidebar_right'">
            <!-- Skyscraper Right -->
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2111611078102983"
                 data-ad-slot="8587211353"
                 data-ad-format="auto"></ins>
        </div>
        <div v-if="location === 'footer'">
            <!-- Banner Footer -->
            <ins class="adsbygoogle"
                 style="display:block;"
                 data-ad-client="ca-pub-2111611078102983"
                 data-ad-slot="6059220557"
                 data-ad-format="auto"></ins>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['location']
    }
</script>