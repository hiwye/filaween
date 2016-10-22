// Configuration
const DATA_PATH = './assets/data.json';

// Library Includes
window.Vue = require('../../node_modules/vue/dist/vue.js');
window.VueResource = require('vue-resource');
window.Zepto = require('jquery');
window.Lity = require('lity');

// Component Includes
var AllView = require('./views/AllView.vue');
var FavouritesView = require('./views/FavouritesView.vue');
var InfoView = require('./views/InfoView.vue');
var PageHeader = require('./partials/PageHeader.vue');
var PageNav = require('./partials/PageNav.vue');
var PageFooter = require('./partials/PageFooter.vue');

// Vue Setup
var vm = new Vue({
    el: '#app',
    components: {AllView, FavouritesView, InfoView, PageHeader, PageNav, PageFooter},
    data: {
        view: 'all',
        filaments: []
    },
    methods: {
        fetch() {
            this.$http.get(DATA_PATH).then((data) => {
                this.filaments = data.data;
            });
        },
        changeView(view) {
            this.view = view;
        }
    }
});

vm.fetch();