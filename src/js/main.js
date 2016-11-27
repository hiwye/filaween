// Configuration
const DATA_PATH = './assets/data.json';
const GUIDE_PATH = './assets/guide.json';
const GEO_API_URL = 'https://freegeoip.net/json/';

// Library Includes
window.Vue = require('../../node_modules/vue/dist/vue.js');
window.VueResource = require('vue-resource');
window.VueRouter = require('vue-router');
window.VueLazyload = require('vue-lazyload');
window.Zepto = require('jquery');
window.Lity = require('lity');
window.Fuse = require('fuse.js');
window.Score = require('./score.js');

// Component Includes
var HomeView = require('./views/HomeView.vue');
var AllView = require('./views/AllView.vue');
var FavouritesView = require('./views/FavouritesView.vue');
var DetailView = require('./views/DetailView.vue');
var GuideView = require('./views/GuideView.vue');
var InfoView = require('./views/InfoView.vue');
var PageHeader = require('./partials/PageHeader.vue');
var PageNav = require('./partials/PageNav.vue');
var PageFooter = require('./partials/PageFooter.vue');
var Adsense = require('./partials/Adsense.vue');

var routes = [
    { path: '/home', component: HomeView },
    { path: '/browse', component: AllView },
    { path: '/browse/:id', component: DetailView },
    { path: '/stars', component: FavouritesView },
    { path: '/guide', component: GuideView },
    { path: '/about', component: InfoView },
    { path: '*', redirect: '/home' }
];
var router = new VueRouter({routes});

// Google Analytics
router.afterEach(function (transition) {
    ga('send', {
        hitType: 'pageview',
        page: transition.path
    })
});

// Vue Setup
Vue.use(VueRouter);
Vue.use(VueLazyload, {preLoad: 1.5});
var vm = new Vue({
    el: '#app',
    router,
    components: {HomeView, AllView, FavouritesView, InfoView, PageHeader, PageNav, PageFooter, Adsense},
    data: {
        filaments: [],
        guide: [],
        countryCode: null
    },
    methods: {
        fetch() {
            this.$http.get(DATA_PATH).then((data) => {
                this.filaments = data.data;
            });
            this.$http.get(GUIDE_PATH).then((data) => {
                this.guide = data.data;
            });
            this.$http.jsonp(GEO_API_URL).then((data)=> {
                this.countryCode = data.data.country_code;
            });
        }
    }
});

Vue.nextTick(function() {
    // Adsense
    [].forEach.call(document.querySelectorAll('.adsbygoogle'), function(){
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
});

vm.fetch();