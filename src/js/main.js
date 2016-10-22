window.Vue = require('../../node_modules/vue/dist/vue.js');
window.VueResource = require('vue-resource');
window.Zepto = require('jquery');
window.Lity = require('lity');

var AllView = require('./components/AllView.vue');

vm = new Vue({
    el: '#app',
    components: {AllView},
    data: {
        view: 'all'
    }
});