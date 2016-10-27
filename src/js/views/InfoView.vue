<template>
    <div class="container">
        <div class="content">
            <h2 class="title">Introduction</h2>
            <p>
                This site allows you to compare result data of a filament analysis
                series conducted by <a href="http://toms3d.org/">Thomas Sanladerer</a> on his
                <a href="https://www.youtube.com/user/ThomasSanladerer">YouTube channel</a>.<br>

                You may watch his introduction to the series using
                <a href="https://www.youtube.com/watch?v=YcQHbaVeD7I">this link</a>.
            </p>

            <h2 class="title">Credits</h2>
            <p>
                The site is a joint effort by <a href="http://toms3d.org/">Thomas Sanladerer</a> and
                <a href="http://sebastianwalker.org">Sebastian Walker</a>.
            </p>
            <p>
                Thomas Sanladerer &mdash; Filament Testing and Analysis<br>
                Sebastian Walker &mdash; Site Maintenance and Development
            </p>
            <p>
                Logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from
                <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
                    CC 3.0 BY
                </a>
            </p>

            <h2 class="title">Data</h2>
            <p>
                You may access the JSON file this site reads from using <a href="./assets/data.json">this link</a>.
                Thomas has also put together a
                <a href="https://docs.google.com/spreadsheets/d/1j9QazgoocuzHxg6qUXevq3dpAmmT2E87089FX6gRgWU/edit#gid=0">Google Docs</a>
                sheet with the complete data.
            </p>
            <p>
                <i>
                    If you encounter any incorrect data, please shoot Sebastian an email at
                    <a href="mailto:sebastian@sebastianwalker.org">sebastian@sebastianwalker.org</a>.
                </i>
            </p>
            <p>
                There are currently {{filaments.length}} filaments on the site.
                Stay tuned as more are added almost daily!
            </p>

            <h2 class="title">License</h2>
            <p>
                This work is licensed under the terms of the
                <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> license,
                alike the source material. The source data has not been modified from it's original form.
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['filaments']
    }
</script>