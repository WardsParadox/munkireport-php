/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
const i18next = require('i18next').default;
const Fetch = require('i18next-fetch-backend').default;
const VueI18Next = require('@panter/vue-i18next').default;
const VueRouter = require('vue-router').default;
const routes = require('./routes').default;

i18next
  .use(Fetch)
  .init({
    debug: true, // mr.debug
    fallbackLng: 'en',
    backend: {
        loadPath: '/locale/get/{{lng}}',
        allowMultiLoading: false,
        parse: function(data) {
            console.log(data.messages);
            return data.fallback_main;
        }
    }
});


const i18n = new VueI18Next(i18next);

const router = new VueRouter({
    routes
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('App', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    i18n,
});