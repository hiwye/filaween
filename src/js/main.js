// Configuration
const DATA_PATH = './assets/data.json';

// Library Includes
window.Vue = require('../../node_modules/vue/dist/vue.js');
window.VueResource = require('vue-resource');
window.VueRouter = require('vue-router');
window.Zepto = require('jquery');
window.Lity = require('lity');
window.Fuse = require('fuse.js');

// Component Includes
var HomeView = require('./views/HomeView.vue');
var AllView = require('./views/AllView.vue');
var FavouritesView = require('./views/FavouritesView.vue');
var DetailView = require('./views/DetailView.vue');
var InfoView = require('./views/InfoView.vue');
var PageHeader = require('./partials/PageHeader.vue');
var PageNav = require('./partials/PageNav.vue');
var PageFooter = require('./partials/PageFooter.vue');

var routes = [
    { path: '/home', component: HomeView },
    { path: '/browse', component: AllView },
    { path: '/browse/:id', component: DetailView },
    { path: '/stars', component: FavouritesView },
    { path: '/info', component: InfoView },
    { path: '*', redirect: '/home' }
];
var router = new VueRouter({routes});

// Vue Setup
Vue.use(VueRouter);
var vm = new Vue({
    el: '#app',
    router,
    components: {HomeView, AllView, FavouritesView, InfoView, PageHeader, PageNav, PageFooter},
    data: {
        filaments: []
    },
    methods: {
        fetch() {
            this.$http.get(DATA_PATH).then((data) => {
                this.filaments = data.data;
            });
        }
    }
});

vm.fetch();