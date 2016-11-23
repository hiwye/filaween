<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <tr>
                    <td>Retail Price per kg</td>
                    <td><b>{{item.price_per_kg?item.price_per_kg+' €':'n/a'}}</b></td>
                </tr>
                <tr>
                    <td>Ease of use</td>
                    <td><b>{{item.ease_of_use?item.ease_of_use+'/5':'n/a'}}</b></td>
                </tr>
                <tr>
                    <td>Temperature stability</td>
                    <td><b>{{item.strength.misc.temperature_stability?item.strength.misc.temperature_stability+'/5':'n/a'}}</b></td>
                </tr>
            </table>

            <table class="table">
                <tr>
                    <td>Nozzle Temperature</td>
                    <td><b>{{item.printer.nozzle_temp}} °C</b></td>
                </tr>
                <tr>
                    <td>
                        Print Bed Temperature
                        <a href="https://www.youtube.com/watch?v=eure74A9HNc" data-lity>
                            <i class="fa fa-question-circle is-gray"></i>
                        </a>
                    </td>
                    <td><b>{{item.printer.bed_temp}} °C</b></td>
                </tr>
                <tr>
                    <td>Print Bed Material</td>
                    <td><b>{{item.printer.bed_material}}</b></td>
                </tr>
                <tr>
                    <td>Cooling Fan</td>
                    <td><b>{{item.printer.fan}} %</b></td>
                </tr>
            </table>
        </div>

        <div class="column">
            <table class="table">
                <tr>
                    <td>3D Benchy Score</td>
                    <td>{{item.quality.threedbenchy}}/5</td>
                </tr>
                <tr>
                    <td>Overhangs</td>
                    <td>{{item.quality.overhangs}}/5</td>
                </tr>
                <tr>
                    <td>Fine Details</td>
                    <td>{{item.quality.details}}/5</td>
                </tr>
                <tr>
                    <td>Bridges</td>
                    <td>{{item.quality.bridges}}/5</td>
                </tr>
                <tr>
                    <td>Warp</td>
                    <td>{{item.quality.warp}}</td>
                </tr>
                <tr class="is-highlighted">
                    <td>Overall Quality</td>
                    <td><b>{{item.quality.rated}}/20</b></td>
                </tr>
            </table>
        </div>


        <div class="column">
            <table class="table">
                <tr>
                    <td>Bend - Layer strength</td>
                    <td>{{item.strength.bend.strength}} kg</td>
                </tr>
                <tr>
                    <td>Bend - Layer adhesion</td>
                    <td>{{item.strength.bend.adhesion}} kg</td>
                </tr>
                <tr>
                    <td>Pull - Layer strength</td>
                    <td>{{item.strength.pull.strength}} kg</td>
                </tr>
                <tr>
                    <td>Pull - Layer adhesion</td>
                    <td>{{item.strength.pull.adhesion}} kg</td>
                </tr>
                <tr v-show="item.strength.misc.bendflex">
                    <td>Bend flex at 1kg load</td>
                    <td><b>{{item.strength.misc.bendflex}} mm</b></td>
                </tr>
                <tr class="is-highlighted">
                    <td>Rated Strength</td>
                    <td><b>{{item.strength.rated}} kg</b></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>