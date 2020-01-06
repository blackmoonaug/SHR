/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.moment = require('moment');

//Modules
require('jszip');
require('pdfmake');
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder-bs4');
require('datatables.net-fixedcolumns-bs4');
require('datatables.net-fixedheader-bs4');
require('datatables.net-responsive-bs4');
require('datatables.net-scroller-bs4');
require('datatables.net-select-bs4');

require('tempusdominus-bootstrap-4');

//Vues
window.Vue = require('vue');
import VueRouter from 'vue-router';

import swal from 'sweetalert2';
import NGCS_f from './utilities/NavGuard';
import GC_ from './utilities/GC_vars';

window.NGCS = NGCS_f;
window.GCDATA = GC_.gc_data;
window.GCMETHODS = GC_.gc_methods;

window.Swal = swal;

const toast = swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 3000
});

window.Toast = toast;

Vue.use(VueRouter);

let routes = [{
    path: '/home',
    component: require('./components/Home.vue').default,
    meta: {
        title: 'Skyline Hotel and Restaurant - Billing | Home'
    }
},
{
    path: '/login',
    meta: {
        title: 'Skyline Hotel and Restaurant - Billing | Login'
    }
},
{
    path: '/billing',
    component: require('./components/Billing.vue').default,
    meta: {
        title: 'Skyline Hotel and Restaurant - Billing  | Charges'
    }
},
{
    path: '/customer',
    component: require('./components/Guest.vue').default,
    meta: {
        title: 'Skyline Hotel and Restaurant - Billing  | Guest Management'
    }
},
{
    path: '/reports',
    component: require('./components/Home.vue').default,
    meta: {
        title: 'Skyline Hotel and Restaurant - Billing  | Reports'
    }
},
{
    path: '/password/reset',
    meta: {
        title: 'BCPSP | Password Reset'
    }
},
{
    path: '*',
    redirect: '/404'
},
]

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = typeof to.meta.title === 'undefined' ? 'Skyline Hotel and Restaurant' : to.meta.title;
    next()
})

$.fn.dataTable.ext.errMode = 'throw';


window.Router = router;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys.map(key => Vue.component(key.split('/').pop.split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('registration', require('./components/AuthRegister.vue').default)
// Vue.component('login', require('./components/AuthLogin.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});